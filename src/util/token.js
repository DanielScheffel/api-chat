const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
    try{
        if(decoded.id === id){
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
});

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id }, key, {expiresIn: 28800});
    }
    return false;
}

module.exports = {
    checktoken,
    setToken
}