const sharp = require('sharp');
const path = require('path');

module.exports.createSharpImage = (imgSrc) => {
    console.log('#### imgSrc', imgSrc);
  return new Promise((resolve, reject) => {
    try {
      const bufferedImage = sharp(imgSrc)
          .rotate(180)
          .resize({
              width: 200,
              height: 300,
            fit: 'contain'
            // withoutEnlargement: true
          })
          .png()
          .toBuffer();
      resolve(bufferedImage);
    } catch (err) {
      reject(`*** SHARP ERROR ${err}`);
    }

  });
}
