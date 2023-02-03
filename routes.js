const User = require("./models/User");
const Data = require("./models/Data");
const router = require("express").Router();

//Create a user
router.post("/post", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
});

//Finding a user by name
router.get("/users/:name", async (req, res) => {
  try {
      const savedData = await User.find({name : req.params.name});
      res.status(200).json(savedData[0]);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Getting all select options
router.get("/options", async (req, res) => {
  try {
      const savedData = await Data.find({});
      res.status(200).json(savedData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Updating a user
router.put("/user/:id", async (req, res) => {
  try {
      const savedData = await User.findByIdAndUpdate(req.params.id, req.body, { 'new': true} );
      res.status(200).json(savedData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;