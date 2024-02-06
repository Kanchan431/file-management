const fs = require('fs').promises; // Import fs with promises API for async/await
const path = require('path');
const db = require('../config/db');
const crypto = require('crypto');
const multer = require('multer');
const { generateResponse } = require('../utility/response')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads'));
    },
    filename: function (req, file, cb) {
        const encryptedFileName = crypto.randomBytes(16).toString('hex') + path.extname(file.originalname);
        cb(null, encryptedFileName);
    }
});

const upload = multer({ storage: storage });

const uploadFile = upload.single('file');

const handleUpload = async (req, res) => {
    try {
        if (!req.file) {
            return generateResponse(res, 'No file uploaded', 400);
        }

        const { originalname, filename } = req.file;

        await db.promise().query('INSERT INTO files (name, encrypted_name) VALUES (?, ?)', [originalname, filename]);

        return generateResponse(res, 'File uploaded successfully', 200, data = {}, true)

    } catch (error) {
        console.error("error", error);
        return generateResponse(res, 'Internal server error', 500)

    }
};

const listFiles = async (req, res) => {
    try {
        const [files] = await db.promise().query('SELECT * FROM files');
        return generateResponse(res, 'Files List', 200, data = files, true)

    } catch (error) {
        console.error(error);
        return generateResponse(res, 'Internal server error', 500)
    }
};

const deleteFile = async (req, res) => {
    const fileId = req.params.id;

    try {
        const [[file]] = await db.promise().query(`SELECT * FROM files WHERE id = ?`, [fileId]);

        if (!file) {
            return generateResponse(res, 'File not found', 404)
        }

        const filePath = path.join(__dirname, '..', 'uploads', file.encrypted_name);

        await fs.unlink(filePath);

        await db.promise().query('DELETE FROM files WHERE id = ?', [fileId]);

        return generateResponse(res, 'File deleted successfully', 200, data = {}, true)
    } catch (error) {
        console.error(error);
        return generateResponse(res, 'Internal server error', 500)
    }
};

module.exports = { uploadFile, handleUpload, listFiles, deleteFile, generateResponse };
