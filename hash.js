const { createHash } = require("crypto");

// Create a string Hash

const hash = (input) => {
    // sha256 means Secure Hash Algorithm 2
    // Returns 256-bit Digest
    return createHash("sha256").update(input).digest('base64');
};

// Compare two hashed passwords
let password = "hehe-Password!"
const has1 = hash(password);
console.log(has1);