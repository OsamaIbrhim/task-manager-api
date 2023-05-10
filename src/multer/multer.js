const multer = require('multer')

const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, callback) {
        // if(!file.originalname.endsWith('.pdf'))
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return callback( new Error('Upload an image') )
        }
        callback(undefined , true)
    }
})

module.exports = upload