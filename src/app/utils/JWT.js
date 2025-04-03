import jwt from 'jsonwebtoken';
import { jwt_secret } from '@/env_bdas';

const JWT_SECRET = jwt_secret; // Ensure this is set in your environment variables

// Function to generate a JWT token
export const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' }); // Set expiration as needed
};

// Function to verify a JWT token
export const verifyToken = (token) => {
    try {
        return {checked: true, data: jwt.verify(token, JWT_SECRET)};
    } catch (error) {
        return null; // Return null or handle the error as needed
    }
};

// Function to decode a JWT token without verification
export const decodeToken = (token) => {
    return jwt.decode(token);
};