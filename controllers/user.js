const User = require("../models/user");

//add a user
exports.addUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (err) {
    res.json({ message: err });
  }
};

//find specific user
exports.specificuser = async (req, res) => {
  if (Object.keys(req.query).length === 0) res.json({});
  else {
    try {
      const oneUser = await User.findOne(req.query);
      console.log(req.query); // after ? in the url
      console.log(req.params); //after the routes before?
      res.json(oneUser);
    } catch (err) {
      res.json({ message: err });
    }
  }
};

//delete a specific user
exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId });
    res.json({ message: "User is deleted" });
  } catch (err) {
    res.json({ message: err });
  }
};

//update a user
exports.updateUser = async (req, res) => {
  try {
    const update = await User.updateOne(
      { _id: req.params.userId },
      { $set: { description: req.body.description } }
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
};
