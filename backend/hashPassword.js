import bcrypt from 'bcryptjs';

const password = 'Ram@2025';  // Password to hash

bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Error hashing password:', err);
    } else {
        console.log('Hashed Password:', hashedPassword);
    }
});
