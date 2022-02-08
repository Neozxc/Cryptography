const { createHmac } = require("crypto");

const key = "super-secret-key!";
const message = "BooHoo 👻";

const hmac = createHmac("sha256", key).update(message).digest("hex");
console.log(hmac);

const key2 = "other-test-password";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");
console.log(hmac2);