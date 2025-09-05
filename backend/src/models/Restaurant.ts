import mongoose, { Document, Schema } from 'mongoose';

export interface IRestaurant extends Document {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  deliveryTime: string;
  priceRange: string;
  discount?: string;
  freeDelivery: boolean;
  fastDelivery: boolean;
  deals: boolean;
  isNewRestaurant: boolean;
  category: 'daily-deals' | 'new' | 'discount' | 'all';
  createdAt: Date;
  updatedAt: Date;
}

const RestaurantSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewCount: {
    type: Number,
    required: true,
    min: 0
  },
  cuisine: {
    type: String,
    required: true,
    trim: true
  },
  deliveryTime: {
    type: String,
    required: true
  },
  priceRange: {
    type: String,
    required: true,
    enum: ['$', '$$', '$$$', '$$$$']
  },
  discount: {
    type: String,
    trim: true
  },
  freeDelivery: {
    type: Boolean,
    required: true,
    default: false
  },
  fastDelivery: {
    type: Boolean,
    required: true,
    default: false
  },
  deals: {
    type: Boolean,
    required: true,
    default: false
  },
  isNewRestaurant: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['daily-deals', 'new', 'discount', 'all'],
    default: 'all'
  }
}, {
  timestamps: true
});

export default mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);