import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Song must have title'],
  },
  url: {
    type: String,
    required: [true, 'Song must have url'],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  }
})

export default new mongoose.model('Song', songSchema);
