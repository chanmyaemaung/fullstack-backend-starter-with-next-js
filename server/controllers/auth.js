const { hashPassword } = require('../utils/auth')

// import from the model schema
const User = require('../models/User')

const register = async (req, res) => {
	try {
		// this one is coming from the client
		const { username, email, password } = req.body

		// validation
		if (!username) return res.status(400).json({ msg: 'Username is required' })
		if (!email) return res.status(400).json({ msg: 'Email is required' })
		if (!password || password.length < 6) {
			return res
				.status(400)
				.json({ msg: 'Password is required and must be 6 characters or less' })
		}

		// user exists
		let userExists = await User.findOne({ email }).exec()
		if (userExists) return res.status(400).json({ msg: 'Email already exists' })

		// hash password
		const hashedPassword = await hashPassword(password)

		// register
		const user = new User({
			username,
			email,
			password: hashedPassword,
		})

		await user.save()

		console.log('Saved User: ', user)

		return res.json({ ok: true })
	} catch (error) {
		console.log(error)
		return res.status(400).send('Error: ' + error.message)
	}
}

module.exports = {
	register,
}
