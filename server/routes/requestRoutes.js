const express = require("express");

const router = express.Router();

const {
  createRequest,
  getRequests,
  getMyRequests,
  updateRequestStatus,
} = require("../controllers/requestController");

router.post("/", createRequest);

router.get("/", getRequests);

router.put("/:id", updateRequestStatus);

router.get(
  "/receiver/:receiver",
  getMyRequests
);

module.exports = router;