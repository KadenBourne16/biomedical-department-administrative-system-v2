import bcrypt from 'bcrypt';

export default async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const resultHash = await bcrypt.hash(password, salt);
    return resultHash;
}
