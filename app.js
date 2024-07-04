require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride=require('method-override')
const app = express();



const connectDB = require("./server/db/connect");
const session=require('express-session')
const passport=require('passport')
const MongoStore=require('connect-mongo')


const notes = require("./server/routes/index");
const dashboard = require("./server/routes/dashboard");
const auth=require('./server/routes/auth')

const port = process.env.PORT || 5000;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl:process.env.MONGO_URI
    }),
    // cookie:{maxAge:new Date (Date.now() + (3600000))}

  })
);

app.use(passport.initialize())
app.use(passport.session())



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"))

// Static files
app.use(express.static("public"));

// Templating engines
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");



// Routes

app.use("/", notes);
app.use("/", dashboard);
app.use("/", auth);

// Handle 404
app.get("*", function (req, res) {
  // res.status(404).send('404 Page Not Found')
  res.status(400).render("404");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server is listening at Port ${port} ....`);
    });
  } catch (error) {
    console.log(error);
  }
};


start()
