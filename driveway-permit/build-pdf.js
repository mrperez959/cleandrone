const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const dir = __dirname;

  const sheets = [
    { html: 'sheet1-site-plan.html',    pdf: 'Sheet1-SitePlan-Rev1.pdf' },
    { html: 'sheet2-notes-legend.html', pdf: 'Sheet2-NotesLegend-Rev1.pdf' },
    { html: 'sheet1-drawing-only.html', pdf: 'Sheet1-DrawingOnly.pdf' },
  ];

  for (const s of sheets) {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    const fileUrl = 'file://' + path.join(dir, s.html);
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: path.join(dir, s.pdf),
      format: 'Letter',
      landscape: true,
      printBackground: true,
      margin: s.html === 'sheet1-drawing-only.html'
        ? { top: '0', right: '0', bottom: '0', left: '0' }
        : { top: '0.35in', right: '0.35in', bottom: '0.35in', left: '0.35in' },
      preferCSSPageSize: true,
    });
    console.log('Wrote', s.pdf);
    await ctx.close();
  }

  // High-DPI PNG of the drawing-only — render the SVG directly to fill the viewport.
  const ctx = await browser.newContext({ viewport: { width: 2200, height: 1560 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const svgFile = 'file://' + path.join(dir, 'sheet1-drawing-only.svg');
  await page.goto(svgFile, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: path.join(dir, 'Sheet1-DrawingOnly.png'),
    fullPage: false,
    omitBackground: false,
  });
  console.log('Wrote Sheet1-DrawingOnly.png (2200x1560)');
  await ctx.close();

  // Combined PDF (Sheet 1 + Sheet 2)
  try {
    const { PDFDocument } = require(path.join(dir, '..', 'node_modules', 'pdf-lib'));
    const merged = await PDFDocument.create();
    for (const name of ['Sheet1-SitePlan-Rev1.pdf', 'Sheet2-NotesLegend-Rev1.pdf']) {
      const bytes = fs.readFileSync(path.join(dir, name));
      const src = await PDFDocument.load(bytes);
      const pages = await merged.copyPages(src, src.getPageIndices());
      pages.forEach(p => merged.addPage(p));
    }
    fs.writeFileSync(path.join(dir, 'DrivewayPermit-Rev1-Combined.pdf'), await merged.save());
    console.log('Wrote DrivewayPermit-Rev1-Combined.pdf');
  } catch (e) {
    console.log('(pdf-lib not present — skipping combined PDF):', e.message);
  }

  await browser.close();
})();
