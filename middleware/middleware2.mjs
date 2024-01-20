const customMiddleware2 = (req, res, next) => {
    console.log('Custom Middleware 2');
    next();
  };
  
  export default customMiddleware2;
  