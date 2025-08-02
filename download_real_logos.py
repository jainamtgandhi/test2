import requests
from PIL import Image, ImageDraw, ImageFont
import io
import os

# Define the logos with reliable URLs from various sources
logos = [
    ("notion", "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"),
    ("ga4", "https://developers.google.com/static/analytics/images/analytics-logo.png"),
    ("hubspot", "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Full-Color-Logo@2x.png"),
    ("office", "https://upload.wikimedia.org/wikipedia/commons/9/95/Office_365_app.png"),
    ("semrush", "https://cdn.semrush.com/static/images/logo/semrush-logo.svg"),
    ("hootsuite", "https://hootsuite.com/images/logo/hootsuite-logo.svg"),
    ("optimizely", "https://www.optimizely.com/static/img/logo.svg"),
    ("figma", "https://www.figma.com/figma-logo.svg"),
    ("clickup", "https://clickup.com/images/logo.svg"),
    ("mixpanel", "https://mixpanel.com/images/logo.svg")
]

# Alternative URLs for fallback
fallback_urls = {
    "ga4": "https://www.google.com/analytics/images/analytics-logo.png",
    "hubspot": "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Full-Color-Logo@2x.png",
    "office": "https://upload.wikimedia.org/wikipedia/commons/9/95/Office_365_app.png",
    "semrush": "https://cdn.semrush.com/static/images/logo/semrush-logo.svg",
    "hootsuite": "https://hootsuite.com/images/logo/hootsuite-logo.svg",
    "optimizely": "https://www.optimizely.com/static/img/logo.svg",
    "figma": "https://www.figma.com/figma-logo.svg",
    "clickup": "https://clickup.com/images/logo.svg",
    "mixpanel": "https://mixpanel.com/images/logo.svg"
}

# Create directory if it doesn't exist
os.makedirs("assets/gui/start-menu/vanity-apps", exist_ok=True)

# Set headers to avoid 403 errors
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
}

def download_logo(name, url):
    try:
        print(f"Downloading {name} logo from {url}...")
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        
        # Open the image
        img = Image.open(io.BytesIO(response.content))
        
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        
        # Resize to 64x64
        img = img.resize((64, 64), Image.Resampling.LANCZOS)
        
        # Save as WebP
        img.save(f"assets/gui/start-menu/vanity-apps/{name}.webp", "WEBP")
        print(f"✅ Successfully created {name}.webp")
        return True
        
    except Exception as e:
        print(f"❌ Error downloading {name}: {e}")
        return False

# Try multiple sources for each logo
for name, url in logos:
    success = download_logo(name, url)
    
    if not success and name in fallback_urls:
        print(f"Trying fallback URL for {name}...")
        success = download_logo(name, fallback_urls[name])
    
    if not success:
        print(f"⚠️ Could not download {name} logo, creating placeholder...")
        # Create a placeholder with brand color
        brand_colors = {
            "notion": "#000000",
            "ga4": "#4285F4", 
            "hubspot": "#FF7A59",
            "office": "#D83B01",
            "semrush": "#FF642F",
            "hootsuite": "#1DA1F2",
            "optimizely": "#FF6B35",
            "figma": "#F24E1E",
            "clickup": "#7B68EE",
            "mixpanel": "#4A90E2"
        }
        
        color = brand_colors.get(name, "#CCCCCC")
        img = Image.new('RGB', (64, 64), color)
        draw = ImageDraw.Draw(img)
        
        try:
            font = ImageFont.truetype("arial.ttf", 16)
        except:
            font = ImageFont.load_default()
        
        text = name.upper()[:3] if len(name) > 3 else name.upper()
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (64 - text_width) // 2
        y = (64 - text_height) // 2
        
        draw.text((x, y), text, fill="white", font=font)
        img.save(f"assets/gui/start-menu/vanity-apps/{name}.webp", "WEBP")
        print(f"📝 Created placeholder {name}.webp")

print("\n🎉 Logo download process completed!") 