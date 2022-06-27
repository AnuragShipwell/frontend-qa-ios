const config = {
  verbose: true,
};


module.exports = config;


// Or async function
module.exports = async () => {
  return {
    verbose: true,
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testTimeout: 300000000
  };
};