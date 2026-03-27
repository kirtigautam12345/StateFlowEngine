const express = require("express");
const router = express.Router();
const WorkflowEngine = require("./workflowEngine");

const engine = new WorkflowEngine();

let task = { state: "Pending" };

router.get("/task", (req, res) => {
  res.json(task);
});

router.post("/transition", (req, res) => {
  const { to } = req.body;

  if (engine.isValidTransition(task.state, to)) {
    task.state = to;
    res.json({ message: "State updated", state: task.state });
  } else {
    res.status(400).json({ message: "Invalid transition" });
  }
});

module.exports = router;
