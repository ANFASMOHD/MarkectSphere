// middlewares/RoleMiddleware.js

const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Check if user's role is included in allowed roles
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied: insufficient permissions" });
    }
    next(); // user has the correct role, allow access
  };
};

module.exports = authorizeRoles;
