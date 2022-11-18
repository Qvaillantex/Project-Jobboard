import React, { useState } from 'react';

const Modal_admin = ({inputs, buttons, data,id,title}) => {
    const [display, setdisplay] = useState(true);
    inputs.map(input=>{
        const [state, setstate] = useState(input.value);
    })

    return (
        <div className="modal" id={`modal-${id}`} style={{display:(display ? 'none' : 'block')}}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <label  className="col-form-label">{title}</label>
                
                <button type="button"  onClick={()=>{
                    document.querySelector(`#modal-${id}`).style.display = 'none'
                }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="title2">
                    
                
                </div>
                <div className="content">
                  {inputs.map(input=>{
                    if(input.type == 'checkbox'){
                        return <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={input.value} />
                                    <label className="form-check-label">
                                        {input.label}
                                    </label>
                                </div>
                    }else if(input.type == 'select-job'){
                        return <div > 
                                    <label className="form-check-label">
                                            {input.label}
                                        </label>
                                    <div class="input-group mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                         {
                                            
                                           (data.jobs != "") ? data.jobs.map(job=>{return <option value={job.id_job}> {job.title}</option>}) :
                                           <option> Les données n'ont pas été chargées</option>
                                            
                                          
                                        }
                                        
                                    </select>                               
                                    </div>
                        </div>
                    }else if(input.type == 'select-company'){
                        return <div > 
                                    <label className="form-check-label">
                                            {input.label}
                                        </label>
                                    <div class="input-group mb-3">
                                    <select className="form-select" aria-label="Default select example">
                                         {
                                            
                                            (data.companies != "") ? data.companies.map(company=>{return <option value={company.id_company}> {company.name}</option>})  :
                                            <option> Les données n'ont pas été chargées</option>
                                            
                                          
                                        }
                                        
                                    </select>                               
                                    </div>
                        </div>
                    }else if(input.type != 'textarea'){
                        return <div>               
                                    <label for="basic-url" class="form-label">{input.label}</label>
                                    <div class="input-group mb-3">
                                        {/* <span class="input-group-text" id="basic-addon3">{input.label}</span> */}
                                        <input type={input.type} defaultValue={input.value}  class="form-control" />
                                    </div>
                                </div>
                    }else{                 
                        return  <div class="form-floating">
                                    <textarea class="form-control" defaultValue={input.value} ></textarea>
                                    <label for="floatingTextarea">{input.label}</label>
                                </div>
                                
                    }
                    

                  })}
                </div>
            </div>
            <div className="modal-footer">
                {buttons.map(button=>
                    <button type="button" 
                        onClick={(e)=>{
                            document.querySelector(`#modal-${id}`).style.display = 'none'
                            let arr = e.target.parentNode.previousElementSibling.querySelectorAll('.form-control, input,select')
                            button.action(arr)}} 
                        className={button.className}
                    >
                        {button.value}
                    </button>
                    )}
            </div>
            </div>
        </div>
    </div>
    );
};

export default Modal_admin;