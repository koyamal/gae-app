import express from 'express';
import { Firestore } from '@google-cloud/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

dotenv.config();
const projectId = process.env.GCP_PROJECT;
const gcpOptions = {
  projectId,
  ...(process.argv[2] === 'local' && { keyFilename: process.env.FIRESTORE_PRIVATE_KEY_FILE}),
};

const firestore = new Firestore(gcpOptions);

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/firestore/get', async (req, res) => {
  const ref = await firestore.collection("test").get();
  const output = [];
  for (const doc of ref.docs) {
    const data = doc.data();
    output.push(data);
  }
  res.send(output);
});

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
