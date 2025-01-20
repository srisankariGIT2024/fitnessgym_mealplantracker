import mongoose from 'mongoose';

const GetStartedFormDataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true,
        unique: true
    },
    mobilenum: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Number,
        default: 0
    },
    updatedOn: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Number,
        default: 0
    },
    deletedOn: {
        type: Date,
        default: null
    },
    deletedlog: {
        type: String,
        default: ''
    },
    resubmitOn: {
        type: Date,
        default: null
    },
    resubmitCount: {
        type: Number,
        default: 0
    }
});

const User_BasicDetails = mongoose.model('user_details_landing_screen', GetStartedFormDataSchema);

// Export as default to use with ES modules
export default User_BasicDetails;
