const sharp = require('../services/sharp');

module.exports.root = (req, res) => {
  console.log('req.body', req.body);
  console.log('req.file', req.file);
  console.log('req.data', req.data);
  console.log('req.headers', req.headers);
    
  sharp.createSharpImage(req.file).then((data) => {
    console.log('FC INFO', data);
      res.status(200).json({'response': `nodemon success ${data.info}`});      
  })
  .catch((err) => {
    console.log('FC ERR', err);
      res.status(500).json({'response': 'nodemon error'});
  });
}