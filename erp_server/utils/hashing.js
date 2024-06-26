const bcrypt = require("bcrypt");

const passwordHashing = (password) => {
    console.log("password from hasing file: ", password);
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;

};
const passwordCompare = (password, hashedPassword) => {
    let check = bcrypt.compare(password, hashedPassword);
    return check;
};

module.exports = {
    passwordHashing,
    passwordCompare,
}