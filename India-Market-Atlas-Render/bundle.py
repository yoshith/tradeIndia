"""Create a portable single-file version from the Render-ready static site."""
from pathlib import Path

root = Path(__file__).resolve().parent
html = (root / 'dist/index.html').read_text(encoding='utf-8')
css = (root / 'dist/styles.css').read_text(encoding='utf-8')
data = (root / 'dist/data.js').read_text(encoding='utf-8').replace('</script', '<\\/script')
app = (root / 'dist/app.js').read_text(encoding='utf-8').replace('</script', '<\\/script')
html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>' + css + '</style>')
html = html.replace('<script src="data.js" defer></script><script src="app.js" defer></script>', '')
html = html.replace('</body>', '<script>' + data + '</script><script>' + app + '</script></body>')
(root / 'India-Market-Atlas.html').write_text(html, encoding='utf-8')
print('Created India-Market-Atlas.html')
