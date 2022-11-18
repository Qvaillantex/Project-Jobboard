import { user } from '../../config/db_config';

const db_config = require('../../config/db_config');
const mysql = require('mysql');

const {encrypt,decrypt} = require('../../lib/cryptage')

export default function handler(req, res) {
    const db = mysql.createConnection(db_config)
    if(req.method == "GET"){
        switch (req.query.param) {
            case "users":
                db.query("SELECT * FROM Users;",(err,result)=>{    
                    
                    if(!err)
                        res.status(200).json(result)
                    else
                        res.status(406).json({message:"Echec de la requête: " + err.message})
                  })
                db.end()
            break;
            default:
                break;
        }
    }
    if(req.method == "POST"){
        
        let query;
        let body;
        let data = {};
        switch(req.query.param){
            case 'inscription':
                query = "INSERT INTO Users (mail,password) VALUES (?,?);";
                db.query(query,[encrypt(req.body.email),encrypt(req.body.password)],(err,result)=>{
                    if(err == null)
                        res.status(200).json({rep:'requête réussie'})
                    else
                        res.status(406).json({rep:'La requête n \'a pas pu aboutir: ' +err.sqlMessage})
                })
            break;
            case 'connexion':
                
                query = "SELECT * FROM Users ;";
                body = JSON.parse(req.body)
                data = {}
                db.query(query,[encrypt(req.body.mail),encrypt(req.body.password)],(err,result)=>{
                    if(err == null){
                        // result = result[0]
                        result.map(user=>{
                            // console.log(user)
                            if(decrypt(user.mail) == body.mail && decrypt(user.password) == body.password){
                                
                                data = {
                                    ref1: user.id_user,
                                    ref2: user.role,
                                    mail: decrypt(user.mail),
                                    phone: user.phone,
                                    name: user.firstname,
                                    lastname: user.lastname,
                                    city: user.country,
                                    status: 1
                                }
                            }
                        })
                        if(data.ref1 == undefined)
                            res.status(405).json({message:'Aucune correspondance n\'a été trouvée: '})

                        res.status(200).json(data)
                    }else{
                        // console.log(err)
                        res.status(406).json({message:'La requête n \'a pas pu aboutir: '+ err})
                    }
                })
                db.end()
               
            break;
            case 'update':
                body  = JSON.parse(req.body)
                console.log(body)
                query = "UPDATE  Users SET firstname = ? , lastname = ?, mail = ? ,phone = ? , country = ?";
                let params = [body.firstname,body.lastname,encrypt(body.email),body.phone,body.city]
                if(body.password != "") {
                    query += ', password = ?';
                    params.push(encrypt(body.password))
                }
                 query += " WHERE id_user = ?;"
                 params.push(body.ref1)
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
            case 'userId':
                query = "SELECT * FROM Users WHERE id_user = ?;";
                body  = JSON.parse(req.body)
                db.query(query,[body.ref1],(err,result)=>{
                    if(err == null){
                        result = result[0]
                        data = {
                            ref1: result.id_user,
                            ref2: result.role,
                            mail: decrypt(result.mail),
                            phone: result.phone != null ? result.phone: "",
                            name: result.firstname != null ? result.firstname: "",
                            lastname: result.lastname != null ? result.lastname: "",
                            city: result.country != null ? result.country: "",
                            status: 1
                        }

                        res.status(200).json(data);
                    }else{
                        console.log(err)
                        res.status(406).json({rep:'La requête n \'a pas pu aboutir: '+ err})
                    }   
                })
                db.end()
            break;
            case 'apply':
                query = "INSERT INTO Job_application (user_id,job_offer_id) VALUES (?,?);";
                db.query(query,[req.body.user_id,req.body.job_offer_id],(err,result)=>{
                    if(err == null)
                        res.status(200).json({rep:'requête réussie'})
                    else
                        res.status(406).json({rep:'La requête n \'a pas pu aboutir: ' +err.sqlMessage})
                })
            break;
            case 'applynouser':
                let user_id;
                query = "INSERT INTO Users (mail,password,lastname,firstname,phone) VALUES (?,?,?,?,?);";
                db.query(query,[encrypt(req.body.email),encrypt(req.body.password),req.body.lastname,req.body.firstname,req.body.phone],async (err,result)=>{
                    // console.log(result.insertId);
                    
                    if(err == null) {              

                        query = "INSERT INTO Job_application (user_id,job_offer_id) VALUES (?,?);";
                        db.query(query,[result.insertId,req.body.job_offer_id],(err2,result2)=>{
                            if(err2 == null)
                                res.status(200).json({rep:'requête réussie'})
                            else
                                res.status(406).json({rep:'La requête n \'a pas pu aboutir: ' +err2.sqlMessage})
                        })

                    } else
                        res.status(406).json({rep:'La requête n \'a pas pu aboutir: ' +err.sqlMessage})
                })
                console.log(user_id);

            break;
            case 'applications':
                query = `SELECT * FROM Job_application 
                INNER JOIN Job_offers ON Job_application.job_offer_id = Job_offers.id_job_offer
                INNER JOIN Job ON Job_offers.job_id = Job.id_job
                INNER JOIN Companies ON Job.company_id = Companies.id_company
                WHERE user_id = 3;`;
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
            case 'deleteUser':
                query = "DELETE FROM Users WHERE id_user = ?;";
                body  = JSON.parse(req.body)
                console.log(body)
                db.query(query,[body.ref1],(err,result)=>{
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
                res.status(300).json({rep:'mauvaise requête'})
        }
    }
}
