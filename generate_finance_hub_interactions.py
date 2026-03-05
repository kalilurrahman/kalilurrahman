import time
from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "kr-finance-prompt-hub-readme/screenshots/"

def generate_interaction_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        print("Taking library search screenshot...")
        page.goto("https://kr-finance-prompt-hub.lovable.app/library")
        page.wait_for_load_state("networkidle")
        time.sleep(3)

        # Click search and type something
        page.fill('input[placeholder="Search prompts, firms, strategies..."]', "Valuation")
        time.sleep(2)
        page.screenshot(path=f"{OUTPUT_DIR}library_search.png")
        print("Saved library_search.png")

        # Open full prompt modal
        print("Taking full prompt modal screenshot...")
        # Since text="VIEW FULL" wasn't working, let's just click the first "VIEW FULL" link or button
        page.click('text="VIEW FULL →"', strict=False, timeout=5000)
        time.sleep(2)
        page.screenshot(path=f"{OUTPUT_DIR}library_full_prompt.png")
        print("Saved library_full_prompt.png")

        browser.close()

if __name__ == "__main__":
    generate_interaction_screenshots()
