import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = path.resolve(process.cwd(), "..", "marketing_screenshots");
const outputRoot = path.resolve(process.cwd(), "public", "screens", "phone-mockups");

const sources = [
  ["all_feature_screens/01-today-dashboard.png", "today-dashboard.png"],
  ["all_feature_screens/02-add-product-form-start.png", "add-product-form-start.png"],
  ["all_feature_screens/03-add-product-form-details.png", "add-product-form-details.png"],
  ["all_feature_screens/04-routine-dashboard.png", "routine-dashboard.png"],
  ["all_feature_screens/05-ai-guides-history.png", "ai-guides-history.png"],
  ["all_feature_screens/06-routine-list-evening-morning.png", "routine-list-evening-morning.png"],
  ["all_feature_screens/07-routine-list-morning-expanded.png", "routine-list-morning-expanded.png"],
  ["all_feature_screens/08-settings-preferences.png", "settings-preferences.png"],
  ["all_feature_screens/09-account-subscription-reminders.png", "account-subscription-reminders.png"],
  ["all_feature_screens/10-go-pro-value.png", "go-pro-value.png"],
  ["all_feature_screens/11-plan-selection.png", "plan-selection.png"],
  ["all_feature_screens/12-subscription-faq.png", "subscription-faq.png"],
  ["all_feature_screens/13-camera-scan.png", "camera-scan.png"],
  ["all_feature_screens/14-ai-routine-generating.png", "ai-routine-generating.png"],
  ["all_feature_screens/15-ai-review-safety-reasoning.png", "ai-review-safety-reasoning.png"],
  ["all_feature_screens/16-ai-review-routine-steps.png", "ai-review-routine-steps.png"],
  ["all_feature_screens/17-profile-personalization.png", "profile-personalization.png"],
  ["all_feature_screens/18-adherence-overview.png", "adherence-overview.png"],
  ["all_feature_screens/19-adherence-explainer.png", "adherence-explainer.png"],
  ["report_views/01-reports-list.png", "reports-list.png"],
  ["report_views/02-report-overview.png", "report-overview.png"],
  ["report_views/03-report-verdict.png", "report-verdict.png"],
  ["report_views/04-score-reasoning.png", "score-reasoning.png"],
  ["report_views/05-claims-fact-check.png", "claims-fact-check.png"],
  ["report_views/06-profile-fit-directions.png", "profile-fit-directions.png"]
];

function luma(data, index) {
  return (data[index] * 0.2126) + (data[index + 1] * 0.7152) + (data[index + 2] * 0.0722);
}

function isEdgeCanvas(data, index) {
  const r = data[index];
  const g = data[index + 1];
  const b = data[index + 2];
  const a = data[index + 3];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return a > 0 && luma(data, index) > 138 && max - min < 54;
}

function floodTransparentCanvas(data, width, height) {
  const seen = new Uint8Array(width * height);
  const queue = [];

  const enqueue = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const offset = y * width + x;
    if (seen[offset]) return;
    const index = offset * 4;
    if (!isEdgeCanvas(data, index)) return;
    seen[offset] = 1;
    queue.push(offset);
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const offset = queue[cursor];
    const x = offset % width;
    const y = Math.floor(offset / width);
    const index = offset * 4;
    data[index + 3] = 0;
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }
}

function alphaBounds(data, width, height) {
  let left = width;
  let top = height;
  let right = -1;
  let bottom = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (data[(y * width + x) * 4 + 3] > 8) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }
  return {
    left: Math.max(0, left - 2),
    top: Math.max(0, top - 2),
    width: Math.min(width, right + 3) - Math.max(0, left - 2),
    height: Math.min(height, bottom + 3) - Math.max(0, top - 2)
  };
}

async function createMockup(source, destination) {
  const input = path.resolve(sourceRoot, source);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  floodTransparentCanvas(data, info.width, info.height);
  const bounds = alphaBounds(data, info.width, info.height);

  const { data: cropped, info: croppedInfo } = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .extract(bounds)
    .raw()
    .toBuffer({ resolveWithObject: true });

  await sharp(cropped, {
    raw: {
      width: croppedInfo.width,
      height: croppedInfo.height,
      channels: 4
    }
  })
    .resize({ height: 1900, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(path.resolve(outputRoot, destination));
}

await fs.mkdir(outputRoot, { recursive: true });

for (const [source, destination] of sources) {
  await createMockup(source, destination);
}

console.log(`Created ${sources.length} standalone phone mockups in ${outputRoot}`);
