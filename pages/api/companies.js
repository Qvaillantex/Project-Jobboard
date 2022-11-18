const db_config = require('../../config/db_config');
const {encrypt,decrypt} = require('../../lib/cryptage')
const mysql = require('mysql');

export default function handler(req, res) {
  const db = mysql.createConnection(db_config)
  if(req.method == "GET"){
    if(req.url == "/api/companies"){
      db.query("SELECT * FROM Companies",(err,result)=>{    
        res.status(200).json(result)
      })
      db.end()
    }
    switch(req.query.param){
      case 'ids':
        db.query("SELECT id_company FROM Companies",(err,result)=>{    
          res.status(200).json(result)
        })
        db.end()
      break;
      case 'id':
        db.query("SELECT * FROM Companies WHERE id_company = "+req.query.id,(err,result)=>{    
          res.status(200).json(result)
        })
      break;
      case 'jobs':
        db.query("SELECT * FROM Job",(err,result)=>{    
          res.status(200).json(result)
        })
        db.end()
      break;
      case 'offers':
        
        db.query(`SELECT Job_offers.title as title_offer,description,active,id_job_offer,id_job,Job.title as title_job,salary,type,schedule,starting_date, Job.company_id FROM Job_offers 
            INNER JOIN Job ON Job_offers.job_id = Job.id_job 
            INNER JOIN Contract_type ON Job.contract_type_id = Contract_type.id;`,
            (err,result)=>{
            if(err == null)
                res.status(200).json(result)
            else    
                res.status(406).json({rep:'La requête n \'a pas pu aboutir, pour la cause suivante: ' + err.sqlMessage})
        })
        db.end()
      break;
      case 'offersHome':
        
        db.query(`SELECT Job_offers.title as title_offer,description,active,id_job_offer,id_job,Job.title as title_job,salary,type,schedule,starting_date, Job.company_id FROM Job_offers 
            INNER JOIN Job ON Job_offers.job_id = Job.id_job 
            INNER JOIN Contract_type ON Job.contract_type_id = Contract_type.id
            WHERE active = 1`,
            (err,result)=>{
            if(err == null)
                res.status(200).json(result)
            else    
                res.status(406).json({rep:'La requête n \'a pas pu aboutir, pour la cause suivante: ' + err.sqlMessage})
        })
        db.end()
      break;
      default:
      break;
    }
  }else if(req.method == "POST"){
    let query;
    let body;
    let data;
    let params;
    switch (req.query.param) {
      case 'inscription':
        body = JSON.parse(req.body)
        query = "INSERT INTO Companies (name,place,city,mail,password,about) VALUES (?,?,?,?,?,?);";
        db.query(query,[body.name,body.place,body.city,encrypt(body.email),encrypt(body.password),body.about],(err,result)=>{
            if(err == null)
                res.status(200).json({rep:'requête réussie'})
            else
                res.status(406).json({rep:'La requête n \'a pas pu aboutir, pour la cause suivante: ' + err.sqlMessage})
        })
        db.end()
      break;
      case 'connexion':
        query = "SELECT * FROM Companies ;";
                body = JSON.parse(req.body)
                db.query(query,[encrypt(req.body.mail),encrypt(req.body.password)],(err,result)=>{
                    if(err == null && result.length != 0){
                        
                        result.map(company=>{
                          if(decrypt(company.mail) == body.mail && decrypt(company.password) == body.password){
                            data = {
                                ref1: company.id_company,
                                ref2: company.role.toString(),
                                mail: decrypt(company.mail),
                                phone: company.phone,
                                name: company.name,
                                about: company.about,
                                city: company.city,
                                place: company.Place,
                                status: 0
                            }
                          }
                        })
                        if(data.ref1 == undefined)
                            res.status(405).json({message:'Aucune correspondance n\'a été trouvée: '})

                        res.status(200).json(data)
                    }else{
                      res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
                    }
                })
                db.end()
        break;
        case 'update':
          body  = JSON.parse(req.body)
          query = "UPDATE  Companies SET name = ? , Place = ?, mail = ? , city = ? , about = ?, website = ?";
          params = [body.name,body.place,encrypt(body.email),body.city,body.about,body.web]
          if(body.password != "") {
              query += ', password = ?';
              params.push(encrypt(body.password))
          }
          query += " WHERE id_company = ?;"
          params.push(body.ref1)
          db.query(query,params,(err,result)=>{
              if(err == null && result.length != 0){
                  console.log(body)
                  res.status(200).json({rep:"finito"});
              }else if(result.length == 0){
                  res.status(200).json({rep:'Aucune données trouvées'});
              }
              else{
                  console.log(err)
                  res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
              }
              
          })
          db.end()
      break;
      case 'updateJO':
        body  = JSON.parse(req.body)
        query = "UPDATE  Job_offers SET title = ? , description = ?";
        params = [body.title_offer,body.description]
        if(body.active != undefined){ 
          query += ", active = ?";
          params.push(body.active)
        }
        query += " WHERE id_job_offer = ?";
        params.push(body.id_job_offer)
        db.query(query,params,(err,result)=>{
            if(err == null && result.length != 0){
                res.status(200).json({rep:"finito"});
            }else if(result.length == 0){
                res.status(200).json({rep:'Aucune données trouvées'});
            }
            else{
                console.log(err)
                res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
            }
            
        })
        db.end()
      break;
      case 'addJO':
        body  = JSON.parse(req.body)
        query = "INSERT INTO Job_offers (title,description,company_id,job_id) VALUES(?,?,?,?);";
        params = [body.title_offer,body.description,body.company_id,body.job_id]
        db.query(query,params,(err,result)=>{
          console.log(err)
            if(err == null && result.length != 0){
                res.status(200).json({rep:"finito"});
            }else if(result.length == 0){
                res.status(200).json({rep:'Aucune données trouvées'});
            }
            else{
                console.log(err)
                res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
            }
            
        })
        db.end()
      break;
      case 'companyId':
        query = "SELECT * FROM Companies WHERE id_company = ?;";
        body  = JSON.parse(req.body)
        db.query(query,[body.ref1],(err,result)=>{
            if(err == null){
              console.log(err)
                result = result[0]
                data = {
                    ref1: result.id_company,
                    ref2: result.role,
                    mail: decrypt(result.mail),
                    place: result.Place,
                    name: result.name,
                    about: result.about,
                    city: result.city,
                    web: result.website != null ? result.phone: "",
                    status: 0
                }
                res.status(200).json(data);
            }else{
                console.log(err)
                res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
            } 
            res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
        })
        db.end()
    break;
    case 'applications':
      query = `SELECT * FROM Job_offers
        INNER JOIN Job_application ON Job_offers.id_job_offer = Job_application.job_offer_id
        INNER JOIN Users ON Job_application.user_id = Users.id_user
        WHERE Job_offers.company_id = ?;`;
      body  = JSON.parse(req.body)
      db.query(query,[body.ref1],(err,result)=>{
          if(err == null){
              res.status(200).json(result);
          }else{
              console.log(err)
              res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
          }   
      })
      db.end()
  break;
    case 'companyOffers':
        query = `SELECT Job_offers.title as title_offer,description,active,id_job_offer,Job.title as title_job, Job.company_id  FROM Job_offers 
        INNER JOIN Job ON Job_offers.job_id = Job.id_job WHERE Job_offers.company_id = ?;`;
        body  = JSON.parse(req.body)
        db.query(query,[body.ref1],(err,result)=>{
            if(err == null){
              
              db.query("SELECT id_job,title FROM Job WHERE company_id = ?;",[body.ref1],(err2,result2)=>{
                res.status(200).json({offers:result,job:result2});
                db.end()
              })
            }else{
                console.log(err)
                res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
            }   
        })
        
    break;
    case 'publish':
        query = "UPDATE  Job_offers SET active = ? WHERE id_job_offer = ?;";
        body  = JSON.parse(req.body)
        db.query(query,[body.active,body.id_job_offer],(err,result)=>{
          if(err == null && result.length != 0){
                  
            res.status(200).json({rep:"finito"});
          }else if(result.length == 0){
              res.status(200).json({rep:'Aucune données trouvées'});
          }
          else{
              console.log(err)
              res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
          }
        })
        db.end()
    break;
    case 'setApplication':
      query = "UPDATE  Job_application SET status = ? WHERE user_id = ? AND job_offer_id = ?;";
      body  = JSON.parse(req.body)
      db.query(query,[body.status,body.user_id, body.id_job_offer],(err,result)=>{
        console.log(err)
        if(err == null && result.length != 0){
                
          res.status(200).json({rep:"finito"});
        }else if(result.length == 0){
            res.status(200).json({rep:'Aucune données trouvées'});
        }
        else{
            console.log(err)
            res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
        }
      })
      db.end()
  break;
    case 'deleteCompany':
      query = "DELETE FROM Companies WHERE id_company = ?;";
      body  = JSON.parse(req.body)
      db.query(query,[body.ref1],(err,result)=>{
        console.log(err)  
        if(err == null && result.length != 0){  
          res.status(200).json({rep:"finito"});
        }else if(result.length == 0){
            res.status(200).json({rep:'Aucune données trouvées'});
        }
        else{
            console.log(err)
            res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
        }
      })
      db.end()
  break;
    case 'deleteJO':
        query = "DELETE FROM Job_offers WHERE id_job_offer = ?;";
        body  = JSON.parse(req.body)
        db.query(query,[body.id_job_offer],(err,result)=>{
          if(err == null && result.length != 0){     
            res.status(200).json({rep:"finito"});
          }else if(result.length == 0){
              res.status(200).json({rep:'Aucune données trouvées'});
          }
          else{
              console.log(err)
              res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
          }
        })
        db.end()
    break;
      default:
        break;
    }
  }
   
}
