import time
from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "src/assets/screenshots/"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def take_scroll_screenshots(page, base_name):
    # Scroll slowly to bottom to trigger animations/lazy loading
    last_height = page.evaluate("document.body.scrollHeight")
    while True:
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(1.5)
        new_height = page.evaluate("document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

    # Scroll back to top
    page.evaluate("window.scrollTo(0, 0)")
    time.sleep(1)

    total_height = page.evaluate("document.body.scrollHeight")
    viewport_height = page.evaluate("window.innerHeight")

    num_parts = (total_height // viewport_height)
    if total_height % viewport_height > 0:
        num_parts += 1

    num_parts = min(num_parts, 10)

    screenshots = []
    for i in range(num_parts):
        page.evaluate(f"window.scrollTo(0, {i * viewport_height})")
        time.sleep(1) # wait for animations/lazy load
        path = f"{OUTPUT_DIR}{base_name}-part-{i+1}.png"
        page.screenshot(path=path)
        print(f"Saved {path}")
        screenshots.append(path)

    return screenshots

def generate():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        print("Processing Home page...")
        page.goto("https://kalilurrahman.lovable.app/")
        page.wait_for_load_state("networkidle")
        time.sleep(3)
        home_screenshots = take_scroll_screenshots(page, "portfolio-home")

        print("Processing Library page...")
        page.goto("https://kalilurrahman.lovable.app/library")
        page.wait_for_load_state("networkidle")
        time.sleep(3)
        library_screenshots = take_scroll_screenshots(page, "portfolio-library")

        # Find other links
        links = page.evaluate("""() => {
            const anchors = Array.from(document.querySelectorAll('a'));
            return anchors.map(a => a.href).filter(href => href.startsWith('https://kalilurrahman.lovable.app/'));
        }""")
        unique_links = list(set(links))

        # Normalize links
        normalized = []
        for l in unique_links:
            # remove trailing slash
            l = l.rstrip('/')
            if l not in ["https://kalilurrahman.lovable.app", "https://kalilurrahman.lovable.app/library"]:
                normalized.append(l)

        other_links = list(set(normalized))
        print("Other links:", other_links)

        for link in other_links:
            print(f"Processing {link}...")
            page.goto(link)
            page.wait_for_load_state("networkidle")
            time.sleep(3)
            name = link.split('/')[-1]
            take_scroll_screenshots(page, f"portfolio-{name}")

        browser.close()

if __name__ == "__main__":
    generate()
