"""Chep script dich tu repo module sang tools/ (chi nguoi quan ly dung; dong nghiep khong can).

    python tools/sync_from_module.py            # chep tu bunpo-analyzer/scripts/translation, in file da doi
    python tools/sync_from_module.py --check    # chi bao lech, khong chep (ma thoat 1 neu lech)

Ban goc nam o repo bunpo-analyzer-module (scripts/translation/). Sua o do, chay lenh nay, roi commit tools/.
"""

from __future__ import annotations

import argparse
import filecmp
import shutil
import sys
from pathlib import Path

FILES = ("tm.py", "brief.py", "check.py", "qa.py", "merge.py", "common.py")
HERE = Path(__file__).resolve().parent
SRC = HERE.parent / "bunpo-analyzer" / "scripts" / "translation"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    a = ap.parse_args()
    if not SRC.is_dir():
        print(f"Khong thay {SRC} (can clone bunpo-analyzer-module vao Model bunpo/bunpo-analyzer)")
        return 1
    diff = [f for f in FILES if not (HERE / f).exists() or not filecmp.cmp(SRC / f, HERE / f, shallow=False)]
    if not diff:
        print("tools/ khop voi ban goc")
        return 0
    if a.check:
        print("Lech: " + ", ".join(diff))
        return 1
    for f in diff:
        shutil.copyfile(SRC / f, HERE / f)
    print("Da chep: " + ", ".join(diff) + " -> commit thu muc tools/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
