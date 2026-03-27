class WorkflowEngine {
  constructor() {
    this.states = ["Pending", "Approved", "Rejected"];
    this.transitions = {
      Pending: ["Approved", "Rejected"],
      Approved: [],
      Rejected: [],
    };
  }

  isValidTransition(from, to) {
    return this.transitions[from].includes(to);
  }
}

module.exports = WorkflowEngine;
