const crypto = require('crypto');

function deriveKey(password, salt, iterations = 100000) {
    return crypto.pbkdf2Sync(password, salt, iterations, 32, 'sha256');
}

function encryptData(data, password) {
    const salt = crypto.randomBytes(16);
    const key = deriveKey(password, salt);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    const json = JSON.stringify(data);
    const encrypted = Buffer.concat([
        cipher.update(json, 'utf8'),
        cipher.final()
    ]);

    return Buffer.concat([salt, iv, encrypted]).toString('hex');
}

function decryptData(encryptedHex, password) {
    const b = Buffer.from(encryptedHex, 'hex');
    const salt = b.subarray(0, 16);
    const iv = b.subarray(16, 32);
    const payload = b.subarray(32);
    const key = deriveKey(password, salt);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const decrypted = Buffer.concat([
        decipher.update(payload),
        decipher.final()
    ]);
    return JSON.parse(decrypted.toString('utf8'));
}

module.exports = { encryptData, decryptData };