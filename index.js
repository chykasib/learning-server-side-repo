const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000;
app.use(cors())

const courses = require('./data/Courses.json');
const coursesDetails = require('./data/CoursesDetails.json');


app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = coursesDetails.find(course => course.id == id)
    res.send(course)

})

app.get('/CoursesDetails', (req, res) => {
    res.send(coursesDetails)
})

app.get('/CoursesDetails/:id', (req, res) => {
    const id = req.params.id;
    const details = coursesDetails.find(details => details.id == id);
    res.send(details)
})
app.get('/', (req, res) => {
    res.send('hello courses...')
})
app.listen(port, () => {
    console.log(`cse courses coming soon!! ${port}`)
})