const express = require("express");

const router = express.Router();

const {
  sendMessage,
  getConversation,
} = require("../controllers/messageController");

router.post("/", sendMessage);

router.get(
  "/:user1/:user2",
  getConversation
);

module.exports = router;