//Import modules
const express = require('express');
const app = express();
const db = require('./models');
const port = process.env.PORT || 3000;


//App initialization
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Importing scripts from routes
const Contact_request = require('./routes/contact_requests');
const user =  require('./routes/users');
const auth = require('./routes/auth');
const review = require('./routes/reviews');
const tutoring_class = require('./routes/tutoring-classes');

//Define roots for all routes
app.use('/contact-requests', Contact_request);
app.use('/users', user);
app.use('/auth', auth);
app.use('/reviews', review);
app.use('/tutoring-classes', tutoring_class);

//Syncing database and start listening to PORT
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`listening on: http://localhost:${port}`);
    });
});


