import puppeteer from 'puppeteer'
import { execSync } from 'child_process'

const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('http://localhost:5173/resume/?phone=6787994097&email=thomasttvo@gmail.com', { waitUntil: 'networkidle0' })

const bodyHeight = await page.evaluate(() => document.body.scrollHeight)

await page.pdf({
  path: 'resume-raw.pdf',
  width: '800px',
  height: `${bodyHeight + 80}px`,
  printBackground: true,
  tagged: false,
  margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
})
await browser.close()

// Convert text to vector outlines to prevent macOS address detection
execSync('/opt/homebrew/bin/gs -o resume.pdf -dNoOutputFonts -sDEVICE=pdfwrite -dNOPAUSE -dQUIET -dBATCH resume-raw.pdf')
execSync('rm resume-raw.pdf')
console.log('Saved to resume.pdf')
