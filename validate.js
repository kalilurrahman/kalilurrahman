import fs from 'fs';
import https from 'https';
import path from 'path';

const dir = './src/data/cancer-book';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let ids = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  
  // Extract youtubeId
  let match;
  const ytRegex = /youtubeId:\s*['"]([^'"]+)['"]/g;
  while ((match = ytRegex.exec(content)) !== null) {
    if (match[1] === 'string') continue; // skip the interface definition
    ids.push({ type: 'youtube', id: match[1], file: f });
  }

  // Extract vimeoId
  const vimRegex = /vimeoId:\s*['"]([^'"]+)['"]/g;
  while ((match = vimRegex.exec(content)) !== null) {
    if (match[1] === 'string') continue;
    ids.push({ type: 'vimeo', id: match[1], file: f });
  }
}

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(500));
  });
}

async function start() {
  console.log('Checking ' + ids.length + ' videos...');
  let hasInvalid = false;
  for (const item of ids) {
    let url = '';
    if (item.type === 'youtube') {
      url = 'https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=' + item.id;
    } else {
      url = 'https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + item.id;
    }
    const status = await checkUrl(url);
    if (status !== 200) {
      console.log('INVALID [' + status + ']: ' + item.type + ' ' + item.id + ' in ' + item.file);
      hasInvalid = true;
    } else {
      // console.log('VALID [' + status + ']: ' + item.type + ' ' + item.id);
    }
  }
  if (!hasInvalid) {
     console.log('ALL VIDEOS ARE VALID!');
  }
  console.log('Done checking.');
}

start();
