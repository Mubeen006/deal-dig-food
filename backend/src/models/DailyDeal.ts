import mongoose, { Document, Schema } from 'mongoose';

export interface IDailyDeal extends Document {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

const DailyDealSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model<IDailyDeal>('DailyDeal', DailyDealSchema);