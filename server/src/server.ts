import express from 'express';
import { Firestore } from '@google-cloud/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nocache from 'nocache';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.use(nocache());

// This middleware is available in Express v4.16.0 onwards
app.use(express.urlencoded({extended: true}));

// app.engine('html', ejs.renderFile);
// app.set('view engine', 'ejs');

app.use(express.static(__dirname + '../public'));
app.use(express.static('../public'));
// app.use('/', express.static(__dirname + '/public'));
console.log("__dirname: ", __dirname);
app.use('/public', express.static(__dirname + '../public'));

dotenv.config();
const projectId = process.env.GCP_PROJECT;
const gcpOptions = {
  projectId,
  ...(process.argv[2] === 'local' && { keyFilename: process.env.FIRESTORE_PRIVATE_KEY_FILE}),
};

const firestore = new Firestore(gcpOptions);

app.get('/', async (req, res) => {
  res.send('hello');
})

app.get('/firestore/get', async (req, res) => {
  const ref = await firestore.collection("test").get();
  const output = [];
  for (const doc of ref.docs) {
    const data = doc.data();
    const userData = {
      name: data.name,
      age: data.age,
      docId: doc.id
    }
    output.push(userData);
  }
  res.send(output);
});

app.get('/get/userinfo/:docId', async (req, res) => {
  const docId = req.params.docId;
  const ref = await firestore.collection("test").doc(docId).get();
  const data = ref.data();
  const userData = {
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
