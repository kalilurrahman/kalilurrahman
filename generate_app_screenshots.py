import time
from playwright.sync_api import sync_playwright
from PIL import Image

APPS = [
    {
        "name": "kr-prompts-app",
        "url": "https://krpromptsapp.lovable.app/"
    },
    {
        "name": "tech-curator-guide",
        "url": "https://kr-tech-curator-guide.lovable.app/"
    },
    {
        "name": "pocket-news",
        "url": "https://kr-pocket-news.lovable.app/"
    },
    {
        "name": "islamic-duas",
        "url": "https://kr-islamic-duas.lovable.app/"
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
            page.goto(app["url"])
            page.wait_for_load_state("networkidle")
            time.sleep(3) # Wait for animations

            desktop_path = f"{OUTPUT_DIR}{app['name']}_desktop.png"
            page.screenshot(path=desktop_path)
            print(f"Saved {desktop_path}")
            page.close()

            # Mobile Screenshot
            mobile_context = browser.new_context(
                viewport={"width": 375, "height": 812},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
            )
            page = mobile_context.new_page()
            page.goto(app["url"])
            page.wait_for_load_state("networkidle")
            time.sleep(3)

            mobile_path = f"{OUTPUT_DIR}{app['name']}_mobile.png"
            page.screenshot(path=mobile_path)
            print(f"Saved {mobile_path}")
            mobile_context.close()

            # Create Collage
            create_collage(app['name'], desktop_path, mobile_path)

        browser.close()

def create_collage(app_name, desktop_path, mobile_path):
    print(f"Creating collage for {app_name}...")
    try:
        desktop_img = Image.open(desktop_path)
        mobile_img = Image.open(mobile_path)

        # Resize desktop to a reasonable width for the card (e.g., 800px wide)
        target_width = 800
        aspect_ratio = desktop_img.height / desktop_img.width
        target_height = int(target_width * aspect_ratio)
        desktop_img = desktop_img.resize((target_width, target_height), Image.Resampling.LANCZOS)

        # Resize mobile image (keep aspect ratio, maybe 200px wide)
        mobile_target_width = 200
        mobile_aspect_ratio = mobile_img.height / mobile_img.width
        mobile_target_height = int(mobile_target_width * mobile_aspect_ratio)
        mobile_img = mobile_img.resize((mobile_target_width, mobile_target_height), Image.Resampling.LANCZOS)

        # Create a new image with a nice background color or just the desktop image
        # Let's overlay mobile on bottom right of desktop

        # Position mobile image
        # 20px padding from bottom right
        x_offset = desktop_img.width - mobile_img.width - 40
        y_offset = desktop_img.height - mobile_img.height - 40

        # Add a simple border/shadow to mobile image (optional, mimicking with a larger black rect behind)
        border_size = 4

        # Paste mobile image onto desktop image
        # Create a draw context? No, just paste.

        # Draw border (simple rectangle behind)
        # We can't draw directly on desktop_img if we want a border easily without Draw object
        # Alternatively, create a new image for mobile with border
        mobile_with_border = Image.new('RGB', (mobile_img.width + 2*border_size, mobile_img.height + 2*border_size), (0, 0, 0))
        mobile_with_border.paste(mobile_img, (border_size, border_size))

        desktop_img.paste(mobile_with_border, (x_offset - border_size, y_offset - border_size))

        final_path = f"{OUTPUT_DIR}{app_name}_collage.png"
        desktop_img.save(final_path)
        print(f"Saved collage to {final_path}")

    except Exception as e:
        print(f"Error creating collage: {e}")

if __name__ == "__main__":
    generate_screenshots()
