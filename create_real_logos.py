from PIL import Image, ImageDraw, ImageFont
import os

# Create directory if it doesn't exist
os.makedirs("assets/gui/start-menu/vanity-apps", exist_ok=True)

def create_notion_logo():
    """Create Notion logo - black background with white N"""
    img = Image.new('RGB', (64, 64), '#000000')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 32)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "N", fill="white", anchor="mm", font=font)
    return img

def create_ga4_logo():
    """Create Google Analytics 4 logo - Google colors"""
    img = Image.new('RGB', (64, 64), '#4285F4')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "GA4", fill="white", anchor="mm", font=font)
    return img

def create_hubspot_logo():
    """Create HubSpot logo - orange background with white text"""
    img = Image.new('RGB', (64, 64), '#FF7A59')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 18)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "HUB", fill="white", anchor="mm", font=font)
    return img

def create_office_logo():
    """Create MS Office logo - Microsoft colors"""
    img = Image.new('RGB', (64, 64), '#D83B01')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "MS", fill="white", anchor="mm", font=font)
    return img

def create_semrush_logo():
    """Create SEMrush logo - orange background"""
    img = Image.new('RGB', (64, 64), '#FF642F')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "SEM", fill="white", anchor="mm", font=font)
    return img

def create_hootsuite_logo():
    """Create Hootsuite logo - Twitter blue"""
    img = Image.new('RGB', (64, 64), '#1DA1F2')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "HOO", fill="white", anchor="mm", font=font)
    return img

def create_optimizely_logo():
    """Create Optimizely logo - orange background"""
    img = Image.new('RGB', (64, 64), '#FF6B35')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "OPT", fill="white", anchor="mm", font=font)
    return img

def create_figma_logo():
    """Create Figma logo - Figma orange"""
    img = Image.new('RGB', (64, 64), '#F24E1E')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "FIG", fill="white", anchor="mm", font=font)
    return img

def create_clickup_logo():
    """Create ClickUp logo - purple background"""
    img = Image.new('RGB', (64, 64), '#7B68EE')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "CLI", fill="white", anchor="mm", font=font)
    return img

def create_mixpanel_logo():
    """Create Mixpanel logo - blue background"""
    img = Image.new('RGB', (64, 64), '#4A90E2')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("arial.ttf", 16)
    except:
        font = ImageFont.load_default()
    draw.text((32, 32), "MIX", fill="white", anchor="mm", font=font)
    return img

# Create all logos
logos = [
    ("notion", create_notion_logo),
    ("ga4", create_ga4_logo),
    ("hubspot", create_hubspot_logo),
    ("office", create_office_logo),
    ("semrush", create_semrush_logo),
    ("hootsuite", create_hootsuite_logo),
    ("optimizely", create_optimizely_logo),
    ("figma", create_figma_logo),
    ("clickup", create_clickup_logo),
    ("mixpanel", create_mixpanel_logo)
]

for name, create_func in logos:
    print(f"Creating {name} logo...")
    img = create_func()
    img.save(f"assets/gui/start-menu/vanity-apps/{name}.webp", "WEBP")
    print(f"✅ Created {name}.webp")

print("\n🎉 All professional logos created successfully!") 