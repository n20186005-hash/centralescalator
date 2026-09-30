"""生成 OG 封面图并压缩 Wikimedia 实拍照。

用法：python scripts/gen-assets.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "public" / "images"

INk = (17, 23, 25)
SIGNAL = (239, 63, 47)
CREAM = (244, 240, 230)


def load_font(candidates, size):
    for path in candidates:
        p = Path(path)
        if p.exists():
            try:
                return ImageFont.truetype(str(p), size)
            except Exception:
                continue
    return ImageFont.load_default()


def build_og():
    hero = Image.open(IMG / "escalator-hero.jpg").convert("RGB")
    hero = hero.copy()
    hero.thumbnail((760, 760))
    w, h = 1200, 630
    canvas = Image.new("RGB", (w, h), INk)
    # 右侧照片：淡入到深色底
    photo = Image.new("RGB", (620, h), INk)
    pw, ph = hero.size
    photo.paste(hero, (620 - pw, (h - ph) // 2))
    mask = Image.linear_gradient("L").rotate(90, expand=True).resize((620, h))
    canvas.paste(photo, (w - 620, 0), mask.point(lambda v: max(0, 190 - v * 0)))
    draw = ImageDraw.Draw(canvas)

    title_font = load_font(
        ["C:/Windows/Fonts/msjhbd.ttc", "C:/Windows/Fonts/msjh.ttc"], 76
    )
    body_font = load_font(
        ["C:/Windows/Fonts/msjh.ttc", "C:/Windows/Fonts/msyh.ttc"], 30
    )
    mono_font = load_font(["C:/Windows/Fonts/msjh.ttc"], 22)

    draw.rectangle([48, 92, 96, 140], fill=SIGNAL)
    draw.text((48, 190), "中環半山扶手電梯", font=title_font, fill=CREAM)
    draw.text((48, 290), "Central–Mid-Levels Escalators", font=body_font, fill=(200, 208, 207))

    lines = [
        "06:00–10:00 下行（往中環）",
        "10:20–24:00 上行（往半山）",
        "全長逾 800 米 · 免費乘搭 · Google Maps 4.1 / 10,512",
    ]
    y = 366
    for line in lines:
        draw.text((48, y), line, font=mono_font, fill=CREAM)
        y += 44

    draw.text((48, h - 78), "centralescalator.com", font=mono_font, fill=SIGNAL)
    out = IMG / "og-cover.jpg"
    canvas.save(out, "JPEG", quality=85, optimize=True, progressive=True)
    print("wrote", out, out.stat().st_size)


def compress():
    targets = {
        "escalator-hero.jpg": (1600, 74),
        "escalator-interior.jpg": (1200, 74),
    }
    for name, (max_width, quality) in targets.items():
        path = IMG / name
        im = Image.open(path).convert("RGB")
        if im.width > max_width:
            im = im.resize((max_width, round(im.height * max_width / im.width)))
        im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
        print("compressed", name, path.stat().st_size)


if __name__ == "__main__":
    compress()
    build_og()
