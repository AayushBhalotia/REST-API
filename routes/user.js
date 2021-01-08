const express = require("express");
const router = express.Router();

//different types of operations 
const {
  addUser,
  getAllUsers,
  specificuser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.post("/add", addUser);
router.get("/", getAllUsers);
router.get("/finduser", specificuser);
router.delete("/:userId", deleteUser);
router.patch("/:userId", updateUser);

module.exports = router;
