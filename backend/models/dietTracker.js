import mongoose from 'mongoose';

const dietTrackerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true,
    },
    consumedAt: {
        type: Date,
        required: true,
        index: true
    },
    time: {
        type: String,  // Store only the time (e.g., "08:30 AM")
        required: true,
    },
    foodItems: [
        {
            foodItem: { type: mongoose.Schema.Types.ObjectId, ref: 'list_of_foods' },
            consumedSize: {
                type: Number,
                required: true,
            },
            consumedSizeUnit: {
                type: String,
                required: true,
            }
        },
    ],
    image: {
        type: String,  // URL or path to the image (optional)
        default: null,
    },
    status: {
        type: Number,
        default: 1,  // Default to 1 if not provided
    },
    deleted: {
        type: Number,
        default: 0,  // Default to 0 if not provided
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    updatedOn: {
        type: Date,
        default: Date.now,
    },
});

const dietTracker = mongoose.model('diet-trackers', dietTrackerSchema);

export default dietTracker;
