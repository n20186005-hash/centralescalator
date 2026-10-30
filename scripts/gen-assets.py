"""Resize the verified CC0 historical original; supply its downloaded path.
Source: https://commons.wikimedia.org/wiki/File:Inside_the_Central-Mid-Levels_escalators.jpg
Mx. Granger, 2019-06-12. The existing developer tool requires Pillow.
"""
from pathlib import Path
import argparse
from PIL import Image, ImageOps
parser=argparse.ArgumentParser();parser.add_argument('original',type=Path);args=parser.parse_args()
im=ImageOps.exif_transpose(Image.open(args.original)).convert('RGB')
if im.size!=(3120,4160):raise SystemExit('Expected the verified 3120x4160 original; recheck identity before proceeding.')
out=Path(__file__).resolve().parent.parent/'public'/'images'
im.resize((1200,1600)).save(out/'escalator-interior.jpg',quality=84,optimize=True)
im.crop((0,2080,3120,4160)).resize((1600,1067)).save(out/'escalator-hero.jpg',quality=84,optimize=True)
im.crop((0,2200,3120,3838)).resize((1200,630)).save(out/'og-cover.jpg',quality=85,optimize=True)
