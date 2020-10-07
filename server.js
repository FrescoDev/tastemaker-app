// import my express module and initialise a variable called express which is the lib that I'm importing.
const express = require("express");
const helmet = require("helmet");

// run the express function which gives ur our app (http server)
const app = express();

// configuration, i.e. my server's port where it will listen to traffic on port 300.
const port = process.env.PORT || 3000;

app.use(helmet());

const requestHandler = async (req, res) => {
  // try and respond with hi world and if that fails, log out the error and respond with a error message
  try {
    res.send("😇 hi world");
  } catch (e) {
    console.error(e);
    res.status(500).send("Failed to process request");
  }
};

app.get("/", requestHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
