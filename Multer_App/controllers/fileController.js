
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const limits = {
    fileSize: 5 * 1024 * 1024 
};
//const upload = multer({ storage: storage, limits: limits }).single('file');


//const uploadFile = (req, res) => {
    // upload(req, res, (err) => {
    //     if (err instanceof multer.MulterError) {
            
    //         return res.status(400).json({ error: err.message });
    //     } else if (err) {
            
    //         return res.status(500).json({ error: err.message });
    //     }
    //     res.status(201).json({ message: 'File uploaded successfully' });
    // });
const upload = multer({ storage: storage, limits: limits }).any(); // Handle any type of request containing files

const uploadFile = (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: err.message });
        } else if (err) {

            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Files uploaded successfully' });
    });
};


module.exports = { uploadFile };
