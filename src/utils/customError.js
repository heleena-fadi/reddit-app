class CustomizeError extends Error {
    constructor(statusCode, msg) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.status = statusCode;
      this.message = msg;
    }
  }
  
  module.exports = CustomizeError;