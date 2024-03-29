const express = require('express');
const router = express.Router();

// Import Controller 

const {likePost,unlikePost} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/PostController");

// Mapping Create

router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);


// Export Controller
module.exports = router;