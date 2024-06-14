import {Storage} from "@google-cloud/storage";

const storage = new Storage({
  keyFilename: process.env.REACT_APP_Storage_PRIVATE_KEY_FILE
});

const bucketName = 'testmar202406142003';

export default async function createBucket() {
  // Creates the new bucket
  await storage.createBucket('testmar202406142003');
  console.log(`Bucket created.`);
}

// createBucket().catch(console.error);