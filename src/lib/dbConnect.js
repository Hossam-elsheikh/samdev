import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(async(mongoose) => {
        console.log('database connected');
        const collection = mongoose.connection.collection('projects');
        try {
          await collection.dropIndex('type_1'); // Replace 'type_1' with the actual index name if different
          console.log('Index type_1 dropped successfully');
        } catch (err) {
          if (err.codeName === 'IndexNotFound') {
            console.log('Index type_1 not found, skipping drop');
          } else {
            console.error('Error dropping index:', err);
          }
        }
        return mongoose;
      })
      .catch((err) => console.log(err));
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
