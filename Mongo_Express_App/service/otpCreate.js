const otpGenerator = require('otp-generator');
const otpSave = new Map();

const generatOtp = async (email) => {
    const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, upperCase: false, specialChars: false });
    const time = Date.now();
    const validity = 4 * 60 * 1000; 
    const expiryTime = time + validity;
    otpSave.set(otp, { email, expiryTime });
    return otp;
}

const getUser = (otp) => {
    const storedData = otpSave.get(otp);
    if (!storedData) {
        return null;
    }
    if (Date.now() > storedData.expiryTime) {
        otpSave.delete(otp);
        return null;
    }
    return storedData.email;
}



module.exports = { generatOtp, getUser };

