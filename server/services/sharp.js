const sharp = require('sharp');

module.exports.createSharpImage = (imgSrc) => {
  // const sharpImg = sharp
  // return sharp(imgSrc).resize(600, 600).max().png().toBuffer((err, data, info) => {
  // 
  // });
  
  /**
   * No image meta data from base64 image
   */
  
  // https://stackoverflow.com/questions/43592146/how-do-i-convert-a-base64-string-formatted-image-to-the-datatype-sharp-image-dow
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
  
  return new Promise((resolve, reject) => {
    const sharpImage = sharp(imgSrc);
    console.log(sharpImage.resize(600, 600));
    sharpImage.resize(600, 600).max().png().toBuffer((err, data, info) => {
      // console.log('*** ERR', err);
      if(err) {
        reject(err);
      }
      // console.log('*** DATA', data);
      // console.log('*** INFO', info);
      resolve(data, info);
    });
  }).catch((err) => {
    console.log('SHARP ERROR', err);
  });
}