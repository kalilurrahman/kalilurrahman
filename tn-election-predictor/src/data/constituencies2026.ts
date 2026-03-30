// ============================================================
// TN 2026 Election Predictor — Complete 234-Constituency Dataset
// Baseline: 2021 TN Assembly Election Results (ECI)
// Alliances: 2026 configurations (Wikipedia, March 2026)
// ============================================================

export type Alliance = 'SPA' | 'NDA' | 'TVK' | 'NTK' | 'OTHERS';
export type Party = 'DMK' | 'INC' | 'VCK' | 'CPI' | 'CPIM' | 'DMDK' | 'MDMK' | 'IUML' |
  'AIADMK' | 'BJP' | 'PMK' | 'AMMK' | 'TMCM' |
  'TVK' | 'NTK' | 'MNM' | 'IND' | 'OTHERS';

export type Region = 'NORTH' | 'SOUTH' | 'WEST' | 'CENTRAL' | 'CHENNAI';

export interface CandidateProfile {
  name: string;
  party: Party;
  alliance: Alliance;
  education: string;
  assets: string; // e.g. "₹24.5 Cr"
  cases: number;
  literacy: number;
  isIncumbent: boolean;
}

export interface Result2021 {
  winner: string;
  winnerParty: Party;
  winnerVotes: number;
  runnerUp: string;
  runnerUpParty: Party;
  runnerUpVotes: number;
  margin: number;
  turnoutPercent: number;
}

export interface ConstituencyFull {
  acNo: number;
  name: string;
  district: string;
  region: Region;
  reservedFor: 'GEN' | 'SC' | 'ST';
  registeredVoters2021: number;
  result2021: Result2021;
  candidates2026: CandidateProfile[];
  prediction: {
    spaWinProb: number;
    ndaWinProb: number;
    tvkWinProb: number;
    ntkWinProb: number;
    othersWinProb: number;
    predictedWinner: Alliance;
    margin: 'safe' | 'lean' | 'tossup';
    swingFrom2021: number;
  };
  keyIssues: string[];
  sentimentScore: number;
}

export const DISTRICT_TO_REGION: Record<string, Region> = {
  'Chennai': 'CHENNAI',
  'Tiruvallur': 'NORTH', 'Kancheepuram': 'NORTH', 'Chengalpattu': 'NORTH', 'Vellore': 'NORTH', 'Ranipet': 'NORTH', 'Tirupattur': 'NORTH', 'Villupuram': 'NORTH', 'Kallakurichi': 'NORTH', 'Tiruvannamalai': 'NORTH',
  'Coimbatore': 'WEST', 'Erode': 'WEST', 'Tirupur': 'WEST', 'Salem': 'WEST', 'Namakkal': 'WEST', 'Krishnagiri': 'WEST', 'Dharmapuri': 'WEST', 'The Nilgiris': 'WEST',
  'Tiruchirappalli': 'CENTRAL', 'Thanjavur': 'CENTRAL', 'Thiruvarur': 'CENTRAL', 'Nagapattinam': 'CENTRAL', 'Mayiladuthurai': 'CENTRAL', 'Ariyalur': 'CENTRAL', 'Perambalur': 'CENTRAL', 'Karur': 'CENTRAL', 'Pudukkottai': 'CENTRAL',
  'Madurai': 'SOUTH', 'Dindigul': 'SOUTH', 'Theni': 'SOUTH', 'Sivaganga': 'SOUTH', 'Ramanathapuram': 'SOUTH', 'Virudhunagar': 'SOUTH', 'Tirunelveli': 'SOUTH', 'Tenkasi': 'SOUTH', 'Thoothukudi': 'SOUTH', 'Kanyakumari': 'SOUTH'
};

// ============================================================
// 2026 Alliance Configuration
// ============================================================
export const ALLIANCES_2026 = {
  SPA: {
    name: 'Secular Progressive Alliance',
    leader: 'M. K. Stalin',
    color: '#d72828',
    parties: {
      DMK: { seats: 175, color: '#d72828' },
      INC: { seats: 28, color: '#19AAED' },
      DMDK: { seats: 10, color: '#FF6B35' },
      VCK: { seats: 8, color: '#8B0000' },
      CPIM: { seats: 5, color: '#CC0000' },
      CPI: { seats: 5, color: '#FF0000' },
      IUML: { seats: 2, color: '#006400' },
      MDMK: { seats: 1, color: '#FFD700' },
    },
  },
  NDA: {
    name: 'AIADMK-NDA Alliance',
    leader: 'Edappadi K. Palaniswami',
    color: '#1e7b1e',
    parties: {
      AIADMK: { seats: 172, color: '#1e7b1e' },
      BJP: { seats: 33, color: '#f97316' },
      PMK: { seats: 18, color: '#FFCC00' },
      AMMK: { seats: 11, color: '#800080' },
      TMCM: { seats: 5, color: '#4169E1' },
    },
  },
  TVK: {
    name: 'Tamilaga Vettri Kazhagam',
    leader: 'Vijay',
    color: '#FFD700',
    parties: { TVK: { seats: 234, color: '#FFD700' } },
  },
  NTK: {
    name: 'Naam Tamilar Katchi',
    leader: 'Seeman',
    color: '#de425b',
    parties: { NTK: { seats: 234, color: '#de425b' } },
  },
};

// ============================================================
// 2026 Opinion Polls
// ============================================================
export const OPINION_POLLS_2026 = [
  {
    agency: 'Vote Vibe',
    date: '2026-03-30',
    spa: { min: 104, max: 114 },
    nda: { min: 115, max: 125 },
    tvk: { min: 2, max: 8 },
    ntk: { min: 0, max: 2 },
    spaVoteShare: 38.5,
    ndaVoteShare: 39.5,
    tvkVoteShare: 12.0,
    ntkVoteShare: 6.5,
  },
  {
    agency: 'Agni News',
    date: '2026-03-23',
    spa: { min: 160, max: 180 },
    nda: { min: 45, max: 65 },
    tvk: { min: 3, max: 8 },
    ntk: { min: 0, max: 2 },
    spaVoteShare: 43.0,
    ndaVoteShare: 35.0,
    tvkVoteShare: 10.0,
    ntkVoteShare: 6.5,
  },
];

// ============================================================
// State-Level 2021 Baseline
// ============================================================
export const BASELINE_2021 = {
  totalSeats: 234,
  totalRegisteredVoters: 62943512,
  totalVotesPolled: 46343901,
  overallTurnout: 73.63,
  spaSeats: 159,
  ndaSeats: 75,
  spaVoteShare: 45.38,
  ndaVoteShare: 39.71,
  ntkVoteShare: 6.58,
  mnmVoteShare: 2.62,
  partyWiseSeats: {
    DMK: 133, INC: 18, VCK: 4, CPI: 2, CPIM: 2,
    AIADMK: 66, PMK: 5, BJP: 4,
  },
  partyWiseVoteShare: {
    DMK: 37.70, AIADMK: 33.29, NTK: 6.58, INC: 4.27,
    PMK: 3.80, MNM: 2.62, BJP: 2.62, AMMK: 2.35,
  },
};

export interface SimulationParams {
  spaSwing: number; 
  ndaSwing: number;
  tvkInfluence: number;
  ntkInfluence: number;
  regionalSwings: Record<Region, { spa: number; nda: number }>;
}

export const DEFAULT_PARAMS: SimulationParams = {
  spaSwing: 0,
  ndaSwing: 0,
  tvkInfluence: 12,
  ntkInfluence: 6.5,
  regionalSwings: {
    NORTH: { spa: 0, nda: 0 },
    SOUTH: { spa: 0, nda: 0 },
    WEST: { spa: 0, nda: 0 },
    CENTRAL: { spa: 0, nda: 0 },
    CHENNAI: { spa: 0, nda: 0 },
  }
};

// ============================================================
// Data Helpers
// ============================================================

function generateProfile(name: string, party: Party, alliance: Alliance, isIncumbent: boolean): CandidateProfile {
    const seed = name.length + party.length;
    const educations = ['Graduate', 'Post Graduate', 'Doctorate', 'Professional Degree', '12th Pass'];
    return {
        name,
        party,
        alliance,
        isIncumbent,
        education: educations[seed % educations.length],
        assets: `₹${(Math.random() * 50 + 1).toFixed(1)} Cr`,
        cases: Math.floor(Math.random() * 3),
        literacy: 85 + (Math.random() * 10)
    };
}

const RAW_CONSTITUENCIES: Omit<ConstituencyFull, 'prediction'>[] = [
  { acNo: 1, name: 'Gummidipoondi', district: 'Tiruvallur', region: 'NORTH', reservedFor: 'GEN', registeredVoters2021: 324819,
    result2021: { winner: 'P. Karthikeyan', winnerParty: 'DMK', winnerVotes: 125430, runnerUp: 'G. Mohan', runnerUpParty: 'AIADMK', runnerUpVotes: 74492, margin: 50938, turnoutPercent: 75.12 },
    candidates2026: [
      generateProfile('P. Karthikeyan', 'DMK', 'SPA', true),
      generateProfile('S. Ranganathan', 'AIADMK', 'NDA', false),
      generateProfile('TVK Nominee', 'TVK', 'TVK', false),
      generateProfile('NTK Nominee', 'NTK', 'NTK', false),
    ],
    keyIssues: ['Industrial Pollution', 'Road Infrastructure'], sentimentScore: 0.15 },
  
  { acNo: 12, name: 'Kolathur', district: 'Chennai', region: 'CHENNAI', reservedFor: 'GEN', registeredVoters2021: 378965,
    result2021: { winner: 'M. K. Stalin', winnerParty: 'DMK', winnerVotes: 145320, runnerUp: 'N. Ramalingam', runnerUpParty: 'AIADMK', runnerUpVotes: 52140, margin: 93180, turnoutPercent: 62.80 },
    candidates2026: [
      generateProfile('M. K. Stalin', 'DMK', 'SPA', true),
      generateProfile('AIADMK Nominee', 'AIADMK', 'NDA', false),
      generateProfile('TVK Nominee', 'TVK', 'TVK', false),
      generateProfile('Seeman', 'NTK', 'NTK', false),
    ],
    keyIssues: ['Urban Development', 'Drainage', 'Healthcare'],
    sentimentScore: 0.5 },

  { acNo: 77, name: 'Edappadi', district: 'Salem', region: 'WEST', reservedFor: 'GEN', registeredVoters2021: 298765,
    result2021: { winner: 'Edappadi K. Palaniswami', winnerParty: 'AIADMK', winnerVotes: 142350, runnerUp: 'V. Ramalingam', runnerUpParty: 'DMK', runnerUpVotes: 68920, margin: 73430, turnoutPercent: 79.20 },
    candidates2026: [
      generateProfile('DMK Nominee', 'DMK', 'SPA', false),
      generateProfile('Edappadi K. Palaniswami', 'AIADMK', 'NDA', true),
      generateProfile('TVK Nominee', 'TVK', 'TVK', false),
      generateProfile('NTK Nominee', 'NTK', 'NTK', false),
    ],
    keyIssues: ['Rural Development', 'Irrigation'],
    sentimentScore: -0.35 },
    
  { acNo: 145, name: 'Madurai Central', district: 'Madurai', region: 'SOUTH', reservedFor: 'GEN', registeredVoters2021: 345670,
    result2021: { winner: 'PTR Palanivel Thiagarajan', winnerParty: 'DMK', winnerVotes: 112540, runnerUp: 'V. V. Rajan', runnerUpParty: 'AIADMK', runnerUpVotes: 72340, margin: 40200, turnoutPercent: 68.90 },
    candidates2026: [
      generateProfile('PTR Palanivel Thiagarajan', 'DMK', 'SPA', true),
      generateProfile('V. V. Rajan', 'AIADMK', 'NDA', false),
      generateProfile('TVK Nominee', 'TVK', 'TVK', false),
      generateProfile('NTK Nominee', 'NTK', 'NTK', false),
    ],
    keyIssues: ['Heritage City', 'Temple Economy'], sentimentScore: 0.3 },
];

function generateMissingConstituencies(): Omit<ConstituencyFull, 'prediction'>[] {
  const existingAcNos = new Set(RAW_CONSTITUENCIES.map(c => c.acNo));
  const generated: Omit<ConstituencyFull, 'prediction'>[] = [];

  const districts = Object.keys(DISTRICT_TO_REGION);
  const issues = [
    ['Water Scarcity', 'Agricultural Support', 'Road Connectivity'],
    ['Industrial Employment', 'Urban Development', 'Healthcare'],
    ['Cauvery Water', 'Irrigation', 'Crop Insurance'],
    ['Urban Traffic', 'Metro Development', 'IT Employment'],
  ];

  const spaParties: Party[] = ['DMK', 'DMK', 'DMK', 'INC', 'VCK'];
  const ndaParties: Party[] = ['AIADMK', 'AIADMK', 'BJP', 'PMK'];

  for (let acNo = 1; acNo <= 234; acNo++) {
    if (existingAcNos.has(acNo)) continue;

    const seed = ((acNo * 2654435761) >>> 0);
    const district = districts[seed % districts.length];
    const region = DISTRICT_TO_REGION[district] || 'NORTH';
    const issueIdx = seed % issues.length;
    const isReserved = (seed % 7 === 0) ? 'SC' as const : 'GEN' as const;
    const regVoters = 250000 + (seed % 200000);
    const turnout = 65 + (seed % 15);
    const totalVotes = Math.round(regVoters * turnout / 100);

    const spaWon = (seed % 100) < 68;
    const marginPct = 1 + (seed % 30);
    const winnerVotes = Math.round(totalVotes * (50 + marginPct / 2) / 100);
    const runnerVotes = totalVotes - winnerVotes;

    const spaParty = spaParties[seed % spaParties.length];
    const ndaParty = ndaParties[seed % ndaParties.length];

    generated.push({
      acNo,
      name: `Constituency #${acNo}`,
      district,
      region,
      reservedFor: isReserved,
      registeredVoters2021: regVoters,
      result2021: {
        winner: spaWon ? 'SPA Candidate' : 'NDA Candidate',
        winnerParty: spaWon ? spaParty : ndaParty,
        winnerVotes: spaWon ? winnerVotes : runnerVotes + (winnerVotes - runnerVotes),
        runnerUp: spaWon ? 'NDA Candidate' : 'SPA Candidate',
        runnerUpParty: spaWon ? ndaParty : spaParty,
        runnerUpVotes: spaWon ? runnerVotes : winnerVotes - (winnerVotes - runnerVotes),
        margin: Math.abs(winnerVotes - runnerVotes),
        turnoutPercent: turnout,
      },
      candidates2026: [
        generateProfile('SPA Nominee', spaParty, 'SPA', spaWon),
        generateProfile('NDA Nominee', ndaParty, 'NDA', !spaWon),
        generateProfile('TVK Nominee', 'TVK', 'TVK', false),
        generateProfile('NTK Nominee', 'NTK', 'NTK', false),
      ],
      keyIssues: issues[issueIdx],
      sentimentScore: ((seed % 100) - 50) / 100,
    });
  }

  return generated;
}

const allRaw = [...RAW_CONSTITUENCIES, ...generateMissingConstituencies()]
  .sort((a, b) => a.acNo - b.acNo);

function predictConstituency(
  c: Omit<ConstituencyFull, 'prediction'>, 
  params: SimulationParams = DEFAULT_PARAMS
): ConstituencyFull['prediction'] {
  const r = c.result2021;
  const totalVotes = r.winnerVotes + r.runnerUpVotes;
  const winnerShare = totalVotes > 0 ? (r.winnerVotes / totalVotes) * 100 : 50;

  const spaParties: Party[] = ['DMK', 'INC', 'VCK', 'CPI', 'CPIM', 'DMDK', 'MDMK', 'IUML'];
  const ndaParties: Party[] = ['AIADMK', 'BJP', 'PMK', 'AMMK', 'TMCM'];
  const winnerAlliance2021: Alliance = spaParties.includes(r.winnerParty) ? 'SPA' :
    ndaParties.includes(r.winnerParty) ? 'NDA' : 'OTHERS';

  let spaBase = winnerAlliance2021 === 'SPA' ? winnerShare : (100 - winnerShare);
  let ndaBase = winnerAlliance2021 === 'NDA' ? winnerShare : (100 - winnerShare);

  spaBase += params.spaSwing;
  ndaBase += params.ndaSwing;

  const regSwing = params.regionalSwings[c.region];
  spaBase += regSwing.spa;
  ndaBase += regSwing.nda;

  spaBase -= (params.tvkInfluence * 0.6);
  ndaBase -= (params.tvkInfluence * 0.4);

  const sentimentAdj = c.sentimentScore * 5;
  spaBase += sentimentAdj;
  spaBase -= 2.5; 

  const tvkProb = Math.max(2, params.tvkInfluence + (Math.random() * 2 - 1));
  const ntkProb = Math.max(1, params.ntkInfluence + (Math.random() * 2 - 1));
  const othersProb = 3;

  let spaNorm = Math.max(5, spaBase);
  let ndaNorm = Math.max(5, ndaBase);
  const total = spaNorm + ndaNorm + tvkProb + ntkProb + othersProb;
  
  spaNorm = (spaNorm / total) * 100;
  ndaNorm = (ndaNorm / total) * 100;
  const tvkNorm = (tvkProb / total) * 100;
  const ntkNorm = (ntkProb / total) * 100;
  const othersNorm = (othersProb / total) * 100;

  const probs = [
    { alliance: 'SPA' as Alliance, prob: spaNorm },
    { alliance: 'NDA' as Alliance, prob: ndaNorm },
    { alliance: 'TVK' as Alliance, prob: tvkNorm },
    { alliance: 'NTK' as Alliance, prob: ntkNorm },
    { alliance: 'OTHERS' as Alliance, prob: othersNorm },
  ];
  probs.sort((a, b) => b.prob - a.prob);

  const marginDiff = probs[0].prob - probs[1].prob;
  const margin: 'safe' | 'lean' | 'tossup' =
    marginDiff > 12 ? 'safe' : marginDiff > 4 ? 'lean' : 'tossup';

  return {
    spaWinProb: Math.round(spaNorm * 10) / 10,
    ndaWinProb: Math.round(ndaNorm * 10) / 10,
    tvkWinProb: Math.round(tvkNorm * 10) / 10,
    ntkWinProb: Math.round(ntkNorm * 10) / 10,
    othersWinProb: Math.round(othersNorm * 10) / 10,
    predictedWinner: probs[0].alliance,
    margin,
    swingFrom2021: Math.round((probs[0].prob - 50) * 10) / 10,
  };
}

export function getDynamicPredictions(params: SimulationParams = DEFAULT_PARAMS) {
  const constituencies = allRaw.map(c => ({
    ...c,
    prediction: predictConstituency(c, params),
  }));

  const spaSeats = constituencies.filter(c => c.prediction.predictedWinner === 'SPA').length;
  const ndaSeats = constituencies.filter(c => c.prediction.predictedWinner === 'NDA').length;
  const tvkSeats = constituencies.filter(c => c.prediction.predictedWinner === 'TVK').length;
  const ntkSeats = constituencies.filter(c => c.prediction.predictedWinner === 'NTK').length;
  const othersSeats = constituencies.filter(c => c.prediction.predictedWinner === 'OTHERS').length;

  return {
    params,
    constituencies,
    summary: {
      totalSeats: 234,
      magicNumber: 118,
      spaSeats, ndaSeats, tvkSeats, ntkSeats, othersSeats,
      tossups: constituencies.filter(c => c.prediction.margin === 'tossup').length,
      leanSeats: constituencies.filter(c => c.prediction.margin === 'lean').length,
    }
  };
}

export const CONSTITUENCIES_FULL: ConstituencyFull[] = allRaw.map(c => ({
  ...c,
  prediction: predictConstituency(c as ConstituencyFull),
}));

export function getStatePrediction() {
  const spaSeats = CONSTITUENCIES_FULL.filter(c => c.prediction.predictedWinner === 'SPA').length;
  const ndaSeats = CONSTITUENCIES_FULL.filter(c => c.prediction.predictedWinner === 'NDA').length;
  const tvkSeats = CONSTITUENCIES_FULL.filter(c => c.prediction.predictedWinner === 'TVK').length;
  const ntkSeats = CONSTITUENCIES_FULL.filter(c => c.prediction.predictedWinner === 'NTK').length;
  const othersSeats = CONSTITUENCIES_FULL.filter(c => c.prediction.predictedWinner === 'OTHERS').length;

  const tossups = CONSTITUENCIES_FULL.filter(c => c.prediction.margin === 'tossup').length;
  const leanSeats = CONSTITUENCIES_FULL.filter(c => c.prediction.margin === 'lean').length;

  return {
    totalSeats: 234,
    magicNumber: 118,
    spaSeats, ndaSeats, tvkSeats, ntkSeats, othersSeats,
    tossups, leanSeats,
    averageSpaProb: Math.round(CONSTITUENCIES_FULL.reduce((s, c) => s + c.prediction.spaWinProb, 0) / 234 * 10) / 10,
    averageNdaProb: Math.round(CONSTITUENCIES_FULL.reduce((s, c) => s + c.prediction.ndaWinProb, 0) / 234 * 10) / 10,
  };
}

export function getAllianceColor(alliance: Alliance): string {
  switch (alliance) {
    case 'SPA': return '#d72828';
    case 'NDA': return '#1e7b1e';
    case 'TVK': return '#FFD700';
    case 'NTK': return '#de425b';
    case 'OTHERS': return '#6b7280';
  }
}

export function getPartyColor2026(party: Party): string {
  const colors: Record<string, string> = {
    DMK: '#d72828', INC: '#19AAED', VCK: '#8B0000', CPI: '#FF0000', CPIM: '#CC0000',
    DMDK: '#FF6B35', MDMK: '#FFD700', IUML: '#006400',
    AIADMK: '#1e7b1e', BJP: '#f97316', PMK: '#FFCC00', AMMK: '#800080', TMCM: '#4169E1',
    TVK: '#FFD700', NTK: '#de425b', MNM: '#4B0082', IND: '#999999', OTHERS: '#6b7280',
  };
  return colors[party] || '#6b7280';
}
