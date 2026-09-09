import os
import subprocess
import markdown
import pypdf

def generate_pdf():
    md_path = "AI_PROMPTS_HISTORY.md"
    html_path = "AI_PROMPTS_HISTORY.html"
    pdf_path = "AI_PROMPTS_HISTORY.pdf"

    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    html_body = markdown.markdown(md_text)

    styled_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AI Tools & Prompt History</title>
<style>
  @page {{
    size: A4;
    margin: 8mm 14mm 8mm 14mm;
  }}
  * {{
    box-sizing: border-box;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color: #0f172a;
    line-height: 1.35;
    font-size: 13.5px;
    background: #ffffff;
    margin: 0;
    padding: 0;
  }}
  h1 {{
    color: #0f172a;
    font-size: 20px;
    margin: 0 0 5px 0;
    padding-bottom: 3px;
    border-bottom: 2px solid #0284c7;
    letter-spacing: -0.01em;
  }}
  p {{
    margin: 0 0 3px 0;
  }}
  a, a:visited {{
    color: #1a73e8 !important;
    text-decoration: underline !important;
    font-weight: 600;
  }}
  hr {{
    border: none;
    border-top: 1px solid #cbd5e1;
    margin: 6px 0 7px 0;
  }}
  h3 {{
    color: #0369a1;
    font-size: 14px;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }}
  ol {{
    margin: 0;
    padding-left: 20px;
  }}
  li {{
    margin-bottom: 5px;
    color: #0f172a;
  }}
  li strong {{
    color: #0369a1;
    font-size: 14px;
  }}
  li p {{
    margin: 1px 0 0 0;
    color: #334155;
    font-style: italic;
    font-size: 13.2px;
    line-height: 1.32;
  }}
</style>
</head>
<body>
{html_body}
</body>
</html>"""

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(styled_html)

    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={os.path.abspath(pdf_path)}",
        os.path.abspath(html_path)
    ]

    subprocess.run(cmd, capture_output=True, text=True)

    if os.path.exists(pdf_path):
        reader = pypdf.PdfReader(pdf_path)
        pages = len(reader.pages)
        size = os.path.getsize(pdf_path)
        print(f"SUCCESS: Generated {pdf_path} ({size:,} bytes, {pages} page(s))")

if __name__ == "__main__":
    generate_pdf()
