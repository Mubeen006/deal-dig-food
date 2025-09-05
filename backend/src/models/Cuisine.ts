import mongoose, { Document, Schema } from 'mongoose';

export interface ICuisine extends Document {
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const CuisineSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model<ICuisine>('Cuisine', CuisineSchema);