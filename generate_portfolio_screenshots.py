import time
from playwright.sync_api import sync_playwright

APPS = [
    {
        "name": "portfolio-home",
        "url": "https://kalilurrahman.lovable.app"
    },
    {
        "name": "portfolio-library",
        "url": "https://kalilurrahman.lovable.app/library"
    }
]

OUTPUT_DIR = "src/assets/screenshots/"

def generate_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for app in APPS:
            print(f"Processing {app['name']}...")

            # Desktop Screenshot
            page = browser.new_page(viewport={"width": 1920, "height": 1080})

            try:
                # wait until network is mostly quiet, timeout after 20 seconds
                page.goto(app["url"], wait_until="networkidle", timeout=20000)
                # Additional wait for animations
                time.sleep(4)

                # Verify if we actually loaded a page and it's not a 404
                if "404" not in page.title():
                    desktop_path = f"{OUTPUT_DIR}{app['name']}_desktop.png"
                    # Capture full page
                    page.screenshot(path=desktop_path, full_page=True)
                    print(f"Saved {desktop_path}")
                else:
                    print(f"Page {app['url']} returned 404 or not found, skipping.")
                    page.close()
                    continue

            except Exception as e:
                print(f"Error loading {app['url']}: {e}")
                page.close()
                continue

            page.close()

            # Mobile Screenshot
            mobile_context = browser.new_context(
                viewport={"width": 375, "height": 812},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
            )
            page = mobile_context.new_page()
            try:
                page.goto(app["url"], wait_until="networkidle", timeout=20000)
                time.sleep(4)

                mobile_path = f"{OUTPUT_DIR}{app['name']}_mobile.png"
                page.screenshot(path=mobile_path, full_page=True)
                print(f"Saved {mobile_path}")
            except Exception as e:
                print(f"Error loading mobile {app['url']}: {e}")

            mobile_context.close()

        browser.close()

if __name__ == "__main__":
    generate_screenshots()
