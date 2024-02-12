import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello Precieux" })
})

app.listen(2003, () => {
    console.log("Server is running on port 2003")
})