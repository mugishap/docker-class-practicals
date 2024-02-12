import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello Precieux" })
})

app.listen(4002, () => {
    console.log("Server is running on port 4002")
})