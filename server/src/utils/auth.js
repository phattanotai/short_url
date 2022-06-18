const jwt = require("jsonwebtoken");

exports.getUserId = (request) => {
  const token = request.headers.Authorization;
  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  }
  return null;
};
