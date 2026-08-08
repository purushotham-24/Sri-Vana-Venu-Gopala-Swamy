from PIL import Image
import os

brain_dir = r"C:\Users\Sarath Babu\.gemini\antigravity\brain\ec78c494-bc93-4211-b968-312260efd5fd"
assets_dir = r"C:\Users\Sarath Babu\.gemini\antigravity\scratch\sri-vana-venu-gopala-swamy-temple\src\assets"

os.makedirs(assets_dir, exist_ok=True)

# Define crops to remove phone status bar (top ~75px) and overlay info (bottom ~145px)
# Image dimensions are 458x1024
crop_top = 75
crop_bottom = 875

def process_and_crop(src_filename, dest_filename):
    src_path = os.path.join(brain_dir, src_filename)
    dest_path = os.path.join(assets_dir, dest_filename)
    
    if not os.path.exists(src_path):
        print(f"Source file {src_filename} not found!")
        return
        
    img = Image.open(src_path)
    width, height = img.size
    
    # Define box: (left, upper, right, lower)
    # We want full width, and height between crop_top and crop_bottom
    box = (0, crop_top, width, crop_bottom)
    cropped_img = img.crop(box)
    
    # Save as JPEG
    cropped_img.convert("RGB").save(dest_path, "JPEG", quality=90)
    print(f"Processed: {src_filename} -> {dest_filename}")

# Map of raw screenshot filenames to target assets
# 1. Deity close up
process_and_crop("media__1786164924880.jpg", "deity.jpg")
process_and_crop("media__1786164924880.jpg", "temple-4.jpg")

# 2. Lord Hanuman statue
process_and_crop("media__1786164947168.png", "temple-3.jpg")

# 3. Deity wide view with lamps
process_and_crop("media__1786164958623.png", "temple-2.jpg")

# 4. Stairs leading to temple
process_and_crop("media__1786164965202.png", "temple-hero.jpg")
process_and_crop("media__1786164965202.png", "temple-1.jpg")

print("All images cropped and saved successfully!")
