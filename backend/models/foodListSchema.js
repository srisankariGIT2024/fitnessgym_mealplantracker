import mongoose from 'mongoose';

const ListFoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
    unique: true,
  },
  portionSize: {
    type: Number,
    required: true,
  },
  portionSizeUnit: {
    type: String,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  proteins: {
    type: Number,
    required: true,
  },
  fats: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
    default: 1
  }, // Default to 1 if not provided
  deleted:
  {
    type: Number,
    required: true,
    default: 0
  }, // Default to 0 if not provide
  createdOn: {
    type: Date,
    default: Date.now
  },
  updatedOn: {
    type: Date,
    default: Date.now
  }
});

const ListFood = mongoose.model('list_of_foods', ListFoodSchema);

export default ListFood;
