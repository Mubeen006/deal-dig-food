import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

const connectTestDB = async (): Promise<void> => {
  try {
    // Start in-memory MongoDB instance
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    const conn = await mongoose.connect(mongoUri);
    
    console.log(`Test MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to test MongoDB:', error);
    process.exit(1);
  }
};

const disconnectTestDB = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
    if (mongoServer) {
      await mongoServer.stop();
    }
  } catch (error) {
    console.error('Error disconnecting from test MongoDB:', error);
  }
};

export { connectTestDB, disconnectTestDB };
export default connectTestDB;