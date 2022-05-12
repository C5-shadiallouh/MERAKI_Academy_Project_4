const authorization = (trueOrFalse) => {
    return (req, res, next) => {
      if (req.token.isAdmin == trueOrFalse) {
        return res.status(403).json({
          success: false,
          message: `Unauthorized`,
        });
      }
      next();
    };
  };
  
  module.exports = {authorization};