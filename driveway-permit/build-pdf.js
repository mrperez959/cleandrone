const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const sheets = [
    { html: 'sheet1-site-plan.html',    pdf: 'Sheet1-SitePlan-Rev1.pdf' },
    { html: 'sheet2-notes-legend.html', pdf: 'Sheet2-NotesLegend-Rev1.pdf' },
  ];

  const dir = __dirname;

  for (const s of sheets) {
    const fileUrl = 'file://' + path.join(dir, s.html);
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: path.join(dir, s.pdf),
      format: 'Letter',
      landscape: true,
      printBackground: true,
      margin: { top: '0.35in', right: '0.35in', bottom: '0.35in', left: '0.35in' },
      preferCSSPageSize: true,
    });
    console.log('Wrote', s.pdf);
  }

  // Also generate combined PDF
  const combinedPath = path.join(dir, 'DrivewayPermit-Rev1-Combined.pdf');
  // Use pdf-lib via dynamic require if available; otherwise leave separate.
  try {
    const { PDFDocument } = require(path.join(dir, '..', 'node_modules', 'pdf-lib'));
    const merged = await PDFDocument.create();
    for (const s of sheets) {
      const bytes = fs.readFileSync(path.join(dir, s.pdf));
      const src = await PDFDocument.load(bytes);
      const pages = await merged.copyPages(src, src.getPageIndices());
      pages.forEach(p => merged.addPage(p));
    }
    fs.writeFileSync(combinedPath, await merged.save());
    console.log('Wrote combined:', combinedPath);
  } catch (e) {
    console.log('(pdf-lib not present — skipping combined PDF)');
  }

  await browser.close();
})();
