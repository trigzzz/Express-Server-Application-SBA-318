const customMiddleware1 = (req, res, next) => {
    console.log('Custom Middleware 1');
    next();
  };
  
  export default customMiddleware1;
  