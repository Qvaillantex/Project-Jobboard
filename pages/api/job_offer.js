const db_config = require('../../config/db_config');
const mysql = require('mysql');
export default function handler(req, res) {
  const db = mysql.createConnection(db_config)
  if(req.method == "GET"){
    if(req.url == "/api/job_offer"){
      db.query("SELECT * FROM Job_offers",(err,result)=>{    
        res.status(200).json(result)
      })
    }else if(req.query.param == "ids"){
      db.query("SELECT company_id FROM Job_offers",(err,result)=>{    
        res.status(200).json(result)
      })
    }else if(req.query.param == "id"){
      db.query("SELECT * FROM Job_offers WHERE company_id = "+req.query.id,(err,result)=>{    
        res.status(200).json(result)
      })
    }


  }
   
}
