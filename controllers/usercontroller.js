const users = require("../MOCK_DATA.json");
const mssql = require('mssql')
const sqlConfig =require('../config/config')
const {user} =require('../config/config')
const poolPromise =require('../config/poolPromise')


module.exports = {
  home: (req, res) => res.send("welcome"),
  
  Users: async(req, res) => {
    let pool = await poolPromise()
    pool.query(`select * FROM Users`).then(result=>{
      console.log(result.recordset)
      res.json({
        status: 200,
        success: true,
        message: "succesful",
        result: result.recordset
    })
   
    })
  },

  User:async (req, res) => {
    const { email } = req.params;
    let pool =await poolPromise();
    pool.query(`SELECT * FROM Users WHERE Email ='${email}'`)
    .then((results)=>{
      console.log(results.recordset);
      results ? 
      res.status(200).json({
        status: 200,
        success: true,
        message: "success",
        result:results.recordset
      })
      : res.status(404).json({
        status: 404,
        success: false,
        message: "not found",
        result:{}
      });
    })
     
    },
  

login: async (req,res)=>{
const {Password,email} =req.body
let pool = await poolPromise();
pool.query(`SELECT * FROM Users WHERE Email ='${email}'`)
.then((results)=>{
  // console.log(results.recordset);
  if (results.recordset.length > 0) {
  if (results.recordset[0].Passwords === Password){
  return res.json({
    status:200,
    success:true,
    message: "logged In",
    result:results.recordset
  });
}else{
  res.status(404).json({
    status:404,
    success:false,
    message:"email or password is wrong",
    result:{}
  });
}
}
})

},
create: async (req,res)=>{
  let {id,first_name,last_name, email,gender,Password}=req.body
  let pool= await poolPromise()
  pool.query(`insert into Users VALUES
           (
            '${id}','${first_name}','${last_name}','${email}','${Password}'
            )`).then(result=>{
              if(result.rowsAffected){
                res.send("Added Successfully")
              }
            })
}


}