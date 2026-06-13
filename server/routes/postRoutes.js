const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getUserPosts,
  getPostById,
} = require("../controllers/postController");

router.post("/", createPost);
router.get("/", getPosts);
router.get("/user/:createdBy", getUserPosts);
router.get("/:id", getPostById);

module.exports = router;