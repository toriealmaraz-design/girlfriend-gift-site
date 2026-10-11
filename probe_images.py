from PIL import Image
import os

files = [
    "assets/Images/WhatsApp Image 2026-10-01 at 21.16.52.jpeg",
    "assets/Images/WhatsApp Image 2026-10-01 at 21.16.52 (1).jpeg",
    "assets/Images/WhatsApp Image 2026-10-01 at 21.16.52 (2).jpeg",
    "assets/Images/WhatsApp Image 2026-10-01 at 21.16.52 (3).jpeg",
    "assets/Images/WhatsApp Image 2026-10-08 at 13.59.22.jpeg",
    "assets/Images/WhatsApp Image 2026-10-10 at 10.54.21.jpeg",
]
for rel in files:
    p = os.path.join(os.getcwd(), rel)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{os.path.basename(p):60s} {im.size[0]:>5} x {im.size[1]:<5} mode={im.mode}")
    else:
        print(f"NOT FOUND: {p}")
