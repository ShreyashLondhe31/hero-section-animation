import re, sys, pathlib

ROOTS = ["app", "components", "public", "out", "README.md", "ASSETS.md"]
EXTS = {".js", ".jsx", ".ts", ".tsx", ".css", ".html", ".md", ".mdx", ".json", ".svg", ".txt"}

CHECKS = {
    "long dash (em or en)": re.compile("[\u2013\u2014]"),
    "emoji": re.compile("[\U0001F300-\U0001FAFF\u2600-\u27BF]"),
    "banned copy or leftovers": re.compile(
        r"TODO_MEASURE|lorem ipsum|seamless|unlock|revolutioniz|cutting-edge|"
        r"game-changing|Create Next App|name=.generator.|Built with|Made with AI",
        re.I),
    "pill button or purple": re.compile(r"rounded-full|purple|violet|indigo|fuchsia", re.I),
    "cursor effect": re.compile(r"cursor-follow|custom-cursor|mousemove", re.I),
}

def files():
    for r in ROOTS:
        p = pathlib.Path(r)
        if p.is_file():
            yield p
        elif p.is_dir():
            for f in p.rglob("*"):
                if f.is_file() and f.suffix.lower() in EXTS:
                    if "_next" in f.parts:
                        continue
                    yield f

scanned, failed = 0, False
for f in files():
    scanned += 1
    for n, line in enumerate(f.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
        for name, rx in CHECKS.items():
            if rx.search(line):
                print(f"FAIL [{name}] {f}:{n}: {line.strip()[:100]}")
                failed = True

if scanned == 0:
    print("FAIL: no files scanned, check the ROOTS list")
    sys.exit(2)
print(f"Scanned {scanned} files")
sys.exit(1 if failed else 0)
