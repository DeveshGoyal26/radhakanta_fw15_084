import React from 'react'
import data from "./Data.json";

const Rest = () => {   
  return (
    
    <>
    
     <h1>Restaurant Details</h1>
                    <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(4,20%)",gap:"50px",margin:"auto",justifyContent:"space-evenly",backgroundColor: '#ab8c3a'}}>
                        
                        {console.log(data)}
                        {data.map((item)=>(
                            
                            <div className="card" style={{gap:"20px",border:"2px solid black",borderRadius:'10px',backgroundColor:'grey'}}>
                                <h2>{item.discount} OFF</h2>
                               
                                <img src={item.imgURL} alt="" style={{width:"200px"}} />
                            <p style={{fontSize:"20px"}}>{item.mrp}</p>
                            <p style={{fontSize:"20px"}}>{item.ratings}</p>
                            <p style={{fontSize:"20px"}}>{item.total_votes}</p>
                            <h6 style={{fontSize:"18px"}}>{item.title}</h6>
                       
                            
                           
                          
                            </div>
                        ))}
                         
                    </div>
    </>
  )
}

export default Rest;