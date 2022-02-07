const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

const signup = (email, password) => {
    // Generate random set of characters
    const salt = randomBytes(16).toString("hex");
    // Use scrypt to hash it
    const hashedPassword = scryptSync(password, salt, 64).toString("hex");
    // Store salt in the database
    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);
    return user
};

const login = (email, password) => {
    const user = users.find(x => x.email === email);

    const [ salt, key ] = user.password.split(":");
    const hashedBuffer = scryptSync(password, salt, 64);

    // Prevent timing attacks
    const keyBuffer = buffer.from(key, "hex");
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return "Login success!"
    } else {
        return "Login failed!"
    }
};