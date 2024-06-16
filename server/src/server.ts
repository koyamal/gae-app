import express from 'express';
import { Firestore } from '@google-cloud/firestore';
import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';
import path from 'path';
import nocache from 'nocache';
import { v4 as uuidv4 } from 'uuid';

import User from './types/User';

const app = express();

// app.use(express.json());
app.use(nocache());

// This middleware is available in Express v4.16.0 onwards
app.use(express.urlencoded({extended: true, limit: '10mb'}));
app.use(express.json({limit: '10mb' }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static('../public'));
console.log(path.join("__dirname: ", __dirname));
console.log(path.join(__dirname, '../public'));
app.use('/public', express.static(path.join(__dirname, '../public')));

dotenv.config();
const projectId = process.env.GCP_PROJECT;
const gcpOptions = {
  projectId,
  ...(process.argv[2] === 'local' && { keyFilename: process.env.FIRESTORE_PRIVATE_KEY_FILE}),
};

const firestore = new Firestore(gcpOptions);
const storage = new Storage({keyFilename: process.env.STORAGE_PRIVATE_KEY_FILE});

app.get('/', async (req, res) => {
  res.send('hello');
})

app.get('/firestore/get', async (req, res) => {
  const ref = await firestore.collection("test").get();
  const output = [];
  for (const doc of ref.docs) {
    const data = doc.data();
    const userData: User = {
      name: data.name,
      age: data.age,
      docId: doc.id,
      ...(data?.detailInfo && {
        detailInfo: {
          imageUrl: data.detailInfo?.imageUrl || '',
          country: data.detailInfo?.country || '',
          job: data.detailInfo?.job || '',
          gender: data.detailInfo?.gender || '',
          email: data.detailInfo?.email || '',
        }
      })
    }
    output.push(userData);
  }
  res.send(output);
});

app.get('/get/userinfo/:docId', async (req, res) => {
  const docId = req.params.docId;
  const ref = await firestore.collection("test").doc(docId).get();
  const data = ref.data();
  const userData: User = {
    name: data?.name,
    age: data?.age,
    docId: ref.id,
    ...(data?.detailInfo && {
      detailInfo: {
        imageUrl: data.detailInfo?.imageUrl || '',
        country: data.detailInfo?.country || '',
        job: data.detailInfo?.job || '',
        gender: data.detailInfo?.gender || '',
        email: data.detailInfo?.email || '',
      }
    })
  }
  res.send(userData);
});

app.post('/add/user', async (req, res) => {
  const userInfo: User = req.body;
  const imageUrl = userInfo.detailInfo? await uploadImageToGSC(userInfo.detailInfo.imageUrl) : '';
  const ref = await firestore.collection("test").doc();
  await ref.set({
    name: userInfo.name,
    age: Number(userInfo.age),
    ...(userInfo.detailInfo && {
      detailInfo: {
          imageUrl: imageUrl,
          country: userInfo.detailInfo.country,
          job: userInfo.detailInfo.job,
          gender: userInfo.detailInfo.gender,
          email: userInfo.detailInfo.email,
        }
      })
  });
  console.log(userInfo);
  res.send({msg: 'done'});
});

const uploadImageToGSC = async (image64: string) => {
  const bucketName: string = process.env.BUCKET_NAME || '';
  const fileName = uuidv4() + '.jpg';
  const fileGCS = storage.bucket(bucketName).file(fileName);
  const fileOptions = {
    public: true,
    resumable: false,
    metadata: { contentType: 'image/jpg' },
    validation: false
  }
  const base64EncodedString = image64.replace(/^data:\w+\/\w+;base64,/, '');
  const fileBuffer = Buffer.from(base64EncodedString, 'base64');
  await fileGCS.save(fileBuffer, fileOptions);
  const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
  return publicUrl;
}

app.post('/upload/image', async (req, res) => {
  const imageFile = req.body.image64;
  console.log('called /upload/image');
  console.log(imageFile);
  const bucketName: string = process.env.BUCKET_NAME || '';
  const fileName = uuidv4() + '.jpg';
  const fileGCS = storage.bucket(bucketName).file(fileName);
  const fileOptions = {
    public: true,
    resumable: false,
    metadata: { contentType: 'image/jpg' },
    validation: false
  }
  const base64EncodedString = imageFile.replace(/^data:\w+\/\w+;base64,/, '');
  const fileBuffer = Buffer.from(base64EncodedString, 'base64');
  await fileGCS.save(fileBuffer, fileOptions);
  const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`
  res.send({msg: publicUrl});
})

app.get('/delete/user/:docId',async (req, res) => {
  const docId = req.params.docId;
  const result = await firestore.collection("test").doc(docId).delete();
  console.log(result);
  res.send({msg: 'done'});
})

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', async (req, res) => {
  const ref = await firestore.collection("test").doc();
  await ref.set({
    name: req.body.name,
    age: Number(req.body.age),
  });
  console.log({
    name: req.body.name,
    age: req.body.age,
  });
  res.send('Thanks for your message!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
