const sharp = require('../services/sharp');

module.exports.root = (req, res) => {
  console.log('req.body', req.body);
  console.log('req.files', req.files);
  console.log('req.data', req.data);
  // Not Working
  // Maybe the headers from the post need setting on the client?
  console.log('req.headers', req.headers);
  const img = sharp.createSharpImage(req.body.image);
  // console.log('req.body', req.body);
    // res.status(200).json({'response': 'nodemon success'});
    
    sharp.createSharpImage(req.body.image).then((img, info) => {
      console.log('FC INFO', info);
        res.status(200).json({'response': `nodemon success ${info}`});      
    })
    .catch((err) => {
      console.log('FC ERR', err);
        res.status(500).json({'response': 'nodemon error'});
    });
}