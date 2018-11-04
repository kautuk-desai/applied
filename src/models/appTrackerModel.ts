import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const JobAplicationSchema = new Schema({
	hashId:{
		type: String,
		required: '',
		index: true
	},
	companyName:{
		type: String
	},
	position: {
		type: String
	},
	applicationURL:{
		type: String
	},
	applicationWebsite:{
		type: String
	},
	applicationStatus:{
		type: String,
		default: "Applied"
	},
	created_date:{
		type: Date,
		default: Date.now
	},
	updated_date:{
		type: Date,
		default: Date.now
	},
	is_deleted:{
		type: Boolean,
		default: false
	}
})