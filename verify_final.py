from playwright.sync_api import sync_playwright
import time

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        # Navigate to the site
        print("Navigating to http://localhost:8080/")
        page.goto("http://localhost:8080/")
        page.wait_for_load_state("networkidle")
        time.sleep(2)

        # Screenshot Dark Mode (Default)
        print("Taking Dark Mode screenshot...")
        page.screenshot(path="verify_dark_mode.png", full_page=True)

        # Find Theme Toggle
        print("Toggling to Light Mode...")
        # Theme toggle is a button with an icon. Let's find it.
        # It's inside a DropdownMenu.
        theme_toggle_btn = page.locator("button:has(span:text('Toggle theme'))").first
        if theme_toggle_btn.count() > 0:
            theme_toggle_btn.click()
            time.sleep(0.5)
            # Click "Light" option
            page.get_by_role("menuitem", name="Light").click()
            time.sleep(1) # Wait for theme change

            print("Taking Light Mode screenshot...")
            page.screenshot(path="verify_light_mode.png", full_page=True)
        else:
            print("Theme toggle button not found!")

        # Verify Scroll To Top
        print("Verifying Scroll To Top...")
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(1)
        # Check for scroll to top button (ArrowUp icon)
        scroll_up_btn = page.locator("button[aria-label='Scroll to top']")
        if scroll_up_btn.is_visible():
            print("Scroll to top button visible.")
            scroll_up_btn.click()
            time.sleep(1)
            scroll_y = page.evaluate("window.scrollY")
            if scroll_y < 100:
                print("Successfully scrolled to top.")
            else:
                print(f"Failed to scroll to top. ScrollY: {scroll_y}")
        else:
            print("Scroll to top button not visible.")

        browser.close()

if __name__ == "__main__":
    verify_site()
