const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin() {
    try {
        let user = await User.findOne({ email: 'prajapatiekta77@gmail.com' });
        if(user) {
            console.log('user updated successfully....');
        } else {
            user = new User();
            user.firstName = 'Ekta';
            user.lastName = 'prajapati';
            user.mobileNo = '8076900522';
            user.email = "prajapatiekta77@gmail.com";
            let password = bcrypt.hashSync('123456', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("user created successfully....");
        }

    } catch (err) {
        console.log(err)

    }
}
module.exports = createAdmin