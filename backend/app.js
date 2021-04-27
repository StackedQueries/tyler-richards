if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const session = require('express-session');
const express = require('express');
const path = require('path');
const ExpressError = require('./utils/ExpressError');
const mongoSanitize = require('express-mongo-sanitize');
const mongoose = require('mongoose');
const { json } = require('express');
const postRoutes = require('./routes/postRoutes')
const quoteRoutes = require('./routes/quoteRoutes')
const cors = require('cors');
const catchAsync = require('./utils/catchAsync');
const app = express();
const MongoStore = require('connect-mongo');
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')

var allowedOrigins = ['http://localhost:3000',
    'http://localhost:5000',
    'http://192.168.1.111:5000',
    'http://192.168.1.111:3000',
    'https://zenquotes.io/'];

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

/* app.use(cors({
    origin: function (origin, callback) {    // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true); if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        } return callback(null, true);
    }
})); */
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    extended: true
}));
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/tyler-richards';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
app.use(mongoSanitize({
    replaceWith: '_'
}))
app.use(session({
    secret: 'fraggle-rock',
    store: new MongoStore({ mongoUrl: dbUrl }),
    //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false, //required
    cookie: {
        httpOnly: false,
        secure: false,
    },
}))


app.use('/posts', postRoutes);
app.use('/quotes', quoteRoutes);
app.use('/users', userRoutes);

app.get('/test', (req, res) => {
    console.log(req.body);      // your JSON
    res.send(req.body);
})

app.get('/', (req, res) => {
    res.send({ message: "Server is running" });

})

app.all('*', (req, res, next) => {
    next(new ExpressError('Request not valid', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'something went wrong';
    res.status(statusCode).send(err);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`
    );
})