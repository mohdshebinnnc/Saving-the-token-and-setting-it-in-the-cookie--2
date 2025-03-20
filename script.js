const jwt=require("jsonwebtoken")



const encrypt = (payload, secret) => {
  // your code here and return token
  try {
    const token=jwt.sign(payload,secret,{expiresIn:"1h"})
    return token
  } catch (error) {
    throw new Error('Error generating token: ' + error.message);
  }

};

const verifyToken=(token,secret)=>{
  try {
    const decoded=jwt.verify(token,secret)
    return decoded
  } catch (error) {
    return { valid: false, expired: error.name === 'TokenExpiredError' };
  }
}

module.exports = {encrypt,verifyToken};
