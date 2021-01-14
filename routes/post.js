const express = require("express");
const postController = require("../controllers/post");
const router = express.Router();

router.get("/", postController.getPost);
router.post("/post", postController.createPost);
module.exports = router;

//MONGO_URI='mongodb+srv://dbNodeApi:admin@123@myblucluster.rkyyc.mongodb.net/test'
