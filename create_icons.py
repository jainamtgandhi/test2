from PIL import Image, ImageDraw, ImageFont
import os

# Define the icons to create
icons = [
    ("notion", "#000000", "N"),
    ("ga4", "#4285F4", "GA4"),
    ("hubspot", "#FF7A59", "HS"),
    ("office", "#D83B01", "MS"),
    ("semrush", "#FF642F", "SEM"),
    ("hootsuite", "#1DA1F2", "HS"),
    ("optimizely", "#FF6B35", "O"),
    ("figma", "#F24E1E", "F"),
    ("clickup", "#7B68EE", "CU"),
    ("mixpanel", "#4A90E2", "MP")
]

# Create directory if it doesn't exist
os.makedirs("assets/gui/start-menu/vanity-apps", exist_ok=True)

for name, color, text in icons:
    # Create a 64x64 image
    img = Image.new('RGB', (64, 64), color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a font, fallback to default if not available
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except:
        font = ImageFont.load_default()
    
    # Calculate text position to center it
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (64 - text_width) // 2
    y = (64 - text_height) // 2
    
    # Draw the text
    draw.text((x, y), text, fill="white", font=font)
    
    # Save as WebP
    img.save(f"assets/gui/start-menu/vanity-apps/{name}.webp", "WEBP")
    print(f"Created {name}.webp")

print("All icons created successfully!") 