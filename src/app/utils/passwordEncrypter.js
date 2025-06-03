import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const salt = 10;
    const resultHash = await bcrypt.hash(password, salt);
    return resultHash;
}

async function comparePassword(enteredPassword, storedHashedPassword) {
    try {
        const result = await bcrypt.compare(enteredPassword, storedHashedPassword);
        return result; // This will return true or false based on the comparison
    } catch (error) {
        console.error("HashCompare Error: ", error);
        return false; // Return false in case of an error
    }
}

// Exporting an object with the functions as default
const passwordUtils = {
    hashPassword,
    comparePassword
};

export default passwordUtils;