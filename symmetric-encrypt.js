// IV stands for Initialization vector
const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

// Cipher

const message = "i like donuts";
const key = randomBytes(32);
const iv = randomBytes(16);

// Advanced encryption standard (aes)
const cipher = createCipheriv("aes256", key, iv);
// Encrypt
const encryptedMessage = cipher.update(message, "utf-8", "hex")
                         + cipher.final("utf-8");

// Decrypt
const decipher = createDecipheriv("aes-256", key, iv);
const decryptedMessage = decipher.update(encryptedMessage, "hex", "utf-8")
                         + decipher.final("utf-8");


