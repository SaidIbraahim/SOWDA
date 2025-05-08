import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeImage = async (inputPath, outputPath, options = {}) => {
  const {
    width = 1200,
    quality = 80,
    format = 'webp'
  } = options;

  try {
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFormat(format, { quality })
      .toFile(outputPath);

    console.log(`Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

const processDirectory = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      await optimizeImage(filePath, outputPath);
    }
  }
};

// Optimize images in the public directory
const publicDir = path.join(__dirname, '../public');
processDirectory(publicDir)
  .then(() => console.log('Image optimization complete'))
  .catch(console.error); 