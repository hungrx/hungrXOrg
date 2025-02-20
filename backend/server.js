const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoutes = require('./routes/userRoutes')
dotenv.config();
const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }).then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`🚀 Server running on http://localhost:${PORT}`))