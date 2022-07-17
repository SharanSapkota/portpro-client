
const loginSuccess = async () => {
   return fetch("http://localhost:4000/auth/login/success", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
        
};

module.exports = { loginSuccess }