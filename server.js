//Import modules
const express = require('express');
const app = express();
const db = require('./models');
const port = process.env.PORT || 3000;


//App initialization
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Importing scripts from routes
const Contact_req = require('./routes/contact_requests');


//Define roots for all routes
app.use('/contact-requests', Contact_req);


//Syncing database and start listening to PORT
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`listening on: http://localhost:${port}`);
    });
});


