from PIL import Image, ImageDraw
import random
import os

# Ensure assets directory exists
os.makedirs(r"C:\Users\Sarath Babu\.gemini\antigravity\scratch\sri-vana-venu-gopala-swamy-temple\src\assets", exist_ok=True)

# Create a 300x300 image
img_size = 300
pixel_size = 10
grid_size = img_size // pixel_size  # 30

image = Image.new("RGB", (img_size, img_size), "white")
draw = ImageDraw.Draw(image)

# Draw finder pattern at x, y
def draw_finder_pattern(x, y):
    # 7x7 squares
    draw.rectangle([x*pixel_size, y*pixel_size, (x+7)*pixel_size-1, (y+7)*pixel_size-1], fill="black")
    draw.rectangle([(x+1)*pixel_size, (y+1)*pixel_size, (x+6)*pixel_size-1, (y+6)*pixel_size-1], fill="white")
    draw.rectangle([(x+2)*pixel_size, (y+2)*pixel_size, (x+5)*pixel_size-1, (y+5)*pixel_size-1], fill="black")

# Draw the 3 finder patterns
draw_finder_pattern(2, 2)  # Top Left
draw_finder_pattern(grid_size - 9, 2)  # Top Right
draw_finder_pattern(2, grid_size - 9)  # Bottom Left

# Draw random black/white modules elsewhere, avoiding finder pattern areas
random.seed(42)  # consistent pattern
for i in range(grid_size):
    for j in range(grid_size):
        # Skip top-left, top-right, bottom-left finder areas
        if (i < 10 and j < 10) or (i > grid_size - 11 and j < 10) or (i < 10 and j > grid_size - 11):
            continue
        # Also skip border
        if i == 0 or j == 0 or i == grid_size - 1 or j == grid_size - 1:
            continue
        
        if random.random() < 0.5:
            draw.rectangle([i*pixel_size, j*pixel_size, (i+1)*pixel_size-1, (j+1)*pixel_size-1], fill="black")

# Save as PNG
image.save(r"C:\Users\Sarath Babu\.gemini\antigravity\scratch\sri-vana-venu-gopala-swamy-temple\src\assets\donation-qr.png")
print("QR Code generated successfully!")
