const { model, Schema } = require('mongoose');
const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
        cpassword: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = model('user', userSchema);
