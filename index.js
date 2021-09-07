import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js'
import dotenv from 'dotenv'
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
dotenv.config()
app.get('/', (req, res) => {
    res.send("hello to memories app")
})
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log("Connected", PORT)))
    .catch(err => { console.error(err); })

app.use('/posts', postRoutes)
// mongoose.set("useFindAndModify", false)
