
const path = require('path');
const multer = require('multer');
const maxSize = 5 * 1024 * 1024;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = file.mimetype.split("/")[0];
        let destinationFolder = '';
        console.log(file);
        if (ext === "image") {
            destinationFolder = 'images';
        }
        else if (ext === "video") {
            destinationFolder = 'videos';
        }
        else if (ext === "application") {
            if (file.mimetype === 'application/pdf') {
                destinationFolder = 'pdfs';
            }
            
            else {
                destinationFolder = 'others';
            }
        }
        else {
            destinationFolder = 'others';
        }
        cb(null, path.join('uploads/', destinationFolder));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/') ||
        file.mimetype.startsWith('video/') ||
        file.mimetype.startsWith('application/pdf')
        ) {
        cb(null, true)
    } else {
        req.fileValidationError = "File type is not supported."
        return cb(new Error('File type not supported'));
    }
};

const uploadFile = multer({ storage: storage, 
                            limit: { fileSize: maxSize } ,
                            fileFilter:fileFilter
                        }).array('File', 5);

const fileUpload = (req, res, next) => {
    uploadFile(req, res, (err) => {
        if (err) {
            return res.status(400).json({
                status: false,
                message: req.fileValidationError
            });
        }
        else {
            next();
        }
    })
}

module.exports = fileUpload;