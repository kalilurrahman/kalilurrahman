import time
from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "kr-finance-prompt-hub-readme/screenshots/"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def generate_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Desktop
        print("Taking desktop screenshots...")
        desktop_page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # Home page
        desktop_page.goto("https://kr-finance-prompt-hub.lovable.app/")
        desktop_page.wait_for_load_state("networkidle")
        time.sleep(3) # Wait for animations
        desktop_page.screenshot(path=f"{OUTPUT_DIR}home_desktop.png")
        print("Saved home_desktop.png")

        # Library page
        desktop_page.goto("https://kr-finance-prompt-hub.lovable.app/library")
        desktop_page.wait_for_load_state("networkidle")
        time.sleep(3)
        desktop_page.screenshot(path=f"{OUTPUT_DIR}library_desktop.png")
        print("Saved library_desktop.png")

        # Mobile
        print("Taking mobile screenshots...")
        mobile_context = browser.new_context(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        )
        mobile_page = mobile_context.new_page()

        # Home page mobile
        mobile_page.goto("https://kr-finance-prompt-hub.lovable.app/")
        mobile_page.wait_for_load_state("networkidle")
        time.sleep(3)
        mobile_page.screenshot(path=f"{OUTPUT_DIR}home_mobile.png")
        print("Saved home_mobile.png")

        # Library page mobile
        mobile_page.goto("https://kr-finance-prompt-hub.lovable.app/library")
        mobile_page.wait_for_load_state("networkidle")
        time.sleep(3)
        mobile_page.screenshot(path=f"{OUTPUT_DIR}library_mobile.png")
        print("Saved library_mobile.png")

        browser.close()

if __name__ == "__main__":
    generate_screenshots()
