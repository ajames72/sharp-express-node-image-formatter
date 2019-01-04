const sharp = require('sharp');
const path = require('path');

module.exports.createSharpImage = (imgSrc) => {
  return new Promise((resolve, reject) => {
    const outFileName = 'server/public/images/output/out' + '-' + Date.now() + path.extname(imgSrc.path);
    const sharpImage = sharp(imgSrc.path);
    sharpImage.resize({ width: 300 })
    .toFile(outFileName)
    .then((data) => {
      console.log('*** DATA', data);
      resolve({
        data: data,
        info: outFileName
      });
    })
    .catch((err) => {
      console.log('** RESIZE ERROR', err);
    });
  }).catch((err) => {
    console.log('SHARP ERROR', err);
  });
}