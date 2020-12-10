var express = require('express');
var router = express.Router();
var request = require('request');

const url = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ed9aeed6915893540672706939818b0c&gallery_id=72157647915728815&format=json&nojsoncallback=1'


/* GET users listing. */
router.get('/', function(req, res, next) {
    request({
        url: url,
        json: true
    }, function(error, response, body){
        return res.status(200).json({data: body})
    })
  
});

router.get('/search/:tag', function(req, res, next) {
    const tag = req.params.tag
    request({
        url: `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed9aeed6915893540672706939818b0c&tags=${tag}&format=json&nojsoncallback=1`
        ,
        json: true
    }, function(error, response, body){
        return res.status(200).json({data: body})
    })
  
});

module.exports = router;
