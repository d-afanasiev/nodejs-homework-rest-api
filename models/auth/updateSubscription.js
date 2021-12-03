const { User } = require("../../db/authModel");

const updateSubscription = async (id, subscription) => {
  const update = await User.findOneAndUpdate(
    { _id: id },
    { subscription },
    { new: true }
  );
  return update;
};

module.exports = updateSubscription;
