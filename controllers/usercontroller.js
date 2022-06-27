const users = require("../MOCK_DATA.json");

module.exports = {
  home: (req, res) => res.send("welcome"),
  Users: (req, res) => {
    res.json({
      status: 200,
      success: true,
      message: "succesful",
      result: users,
    });
  },

  User: (req, res) => {
    const { email } = req.params;
    const user = users.find((user) => user.email === email);
    if (user) {
      return res.status(200).json({
        status: 200,
        success: true,
        message: "succesful",
        result: user,
      });
    } else {
      res.status(404).json({
        status: 404,
        success: false,
        message: "not found",
        result:[],
      });
    }
  },
};

login: (res,req)=>{}
const {password,email} =req.body
const user = data.find(user=> user.email===email)
if( user && user.password ===password){
  return res.json({
    status:200,
    success:true,
    message: "logged In",
    result: user
  })
}
else {
  res.status(404).json({
    status:404,
    success:false,
    message:"email or password is wrong"
    result:[]
  })
}