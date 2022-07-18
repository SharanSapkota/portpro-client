const { headers, SERVERAPI } = require("../Helper/HeaderHelper");

const loginSuccess = async () => {
   return fetch(`${SERVERAPI}`, {
    method: "GET",
    credentials: "include",
    headers
  })
        
};

module.exports = { loginSuccess }