import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;
const BG = "#0d1f0f";
const GOLD = "#c9a84c";
const CREAM = "#f7f1e8";

const logoPath = path.join(root, "public/logo/spinebar-logo.png");
const outputPath = path.join(root, "public/og-image.png");

const logoBuffer = await sharp(logoPath)
  .resize({ width: 340, height: 300, fit: "inside" })
  .png()
  .toBuffer();

const { width: logoWidth, height: logoHeight } = await sharp(logoBuffer).metadata();

const logoLeft = Math.floor((WIDTH - logoWidth) / 2);
const logoTop = 96;

const textBlockTop = logoTop + logoHeight + 48;

const svg = Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${BG}"/>
  <text
    x="${WIDTH / 2}"
    y="${textBlockTop + 36}"
    text-anchor="middle"
    fill="${GOLD}"
    font-family="Georgia, 'Times New Roman', 'Cormorant Garamond', serif"
    font-size="30"
    letter-spacing="10"
  >TOLUCA LAKE · LOS ANGELES</text>
  <text
    x="${WIDTH / 2}"
    y="${textBlockTop + 88}"
    text-anchor="middle"
    fill="${CREAM}"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="34"
    letter-spacing="2"
  >spinebar.com</text>
</svg>`);

await sharp(svg)
  .composite([{ input: logoBuffer, top: logoTop, left: logoLeft }])
  .png()
  .toFile(outputPath);

console.log(`Generated ${outputPath} (${WIDTH}x${HEIGHT})`);
