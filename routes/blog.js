const express = require('express');
const router = express.Router();

// Import Controller 

const {dummyLink} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/PostController");

// Mapping Create

router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);


// Export Controller
module.exports = router;