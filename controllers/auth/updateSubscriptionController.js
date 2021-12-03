const { updateSubscription } = require("../../models/auth");

const updateSubscriptionController = async (req, res, next) => {
  const id = req.params.contactId;
  const { subscription } = req.body;
  const update = await updateSubscription(id, subscription);
  return res.json({ update });
};

module.exports = updateSubscriptionController;
