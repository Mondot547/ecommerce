const Users = require('../models/userModel.js');

const userController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const user = await Users.findOne({ email })

            if (user) return res.status(400).json({ msg: 'this email already exist !' });

            if (password.length < 6) return res.status(400).json({ msg: 'password should be atleast 6 characters longs' });

            return res.json({ msg: 'register successfully !' })

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = userController;