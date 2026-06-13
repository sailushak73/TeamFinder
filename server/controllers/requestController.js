const Request = require("../models/Request");

const createRequest = async (req, res) => {
  try {

    if (req.body.sender === req.body.receiver) {
    return res.status(400).json({
    message: "Cannot send request to yourself",
    });
   }
    const request = await Request.create(req.body);

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find();

    res.json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateRequestStatus = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        returnDocument: "after" 
      }
    );

    res.json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyRequests = async (req, res) => {
  try {

    const requests = await Request.find({
      receiver: req.params.receiver,
    });

    res.json(requests);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createRequest,
  getRequests,
  getMyRequests,
  updateRequestStatus,
};