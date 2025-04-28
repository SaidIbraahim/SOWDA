/**
 * Image optimization script
 * Run with: node scripts/optimizeImages.js
 * 
 * Requirements:
 * npm install sharp glob
 */
const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const config = {
  inputDir: path.join(__dirname, '../src/assets/images'),
  quality: 80, // Default JPEG quality
  sizes: {
    thumbnails: 400,
    medium: 800,
    large: 1200
  },
  formats: ['webp', 'avif'] // Generate additional formats for modern browsers
};

async function optimizeImages() {
  try {
    console.log('🔍 Finding images...');
    
    // Get all image files
    const imageFiles = glob.sync(path.join(config.inputDir, '*.{jpg,jpeg,png,gif}'));
    
    if (imageFiles.length === 0) {
      console.log('❌ No images found');
      return;
    }
    
    console.log(`Found ${imageFiles.length} images to optimize`);
    
    // Process each image
    for (const imagePath of imageFiles) {
      const filename = path.basename(imagePath);
      const ext = path.extname(filename).toLowerCase();
      const name = path.basename(filename, ext);
      
      console.log(`⚙️ Processing: ${filename}`);
      
      // Load image
      let image = sharp(imagePath);
      
      // Get metadata
      const metadata = await image.metadata();
      
      // Original optimization - reduce quality without resizing
      await image
        .jpeg({ quality: config.quality, mozjpeg: true })
        .toFile(path.join(config.inputDir, `${name}.optimized${ext}`));
      
      console.log(`  ✅ Created optimized version`);
      
      // Generate WebP and AVIF versions (better compression, modern browsers)
      for (const format of config.formats) {
        await image[format]({ quality: config.quality })
          .toFile(path.join(config.inputDir, `${name}.${format}`));
        console.log(`  ✅ Created ${format} version`);
      }
    }
    
    console.log('\n🎉 Image optimization complete!');
    console.log('\nNow update your imports to use the .webp or .avif versions for better performance');
    console.log('\nExample:');
    console.log(`  import myImage from './myImage.webp'`);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

// Run the optimization
optimizeImages(); 