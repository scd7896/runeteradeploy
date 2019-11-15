import React from 'react'
import CostIcon from  '../atomic/CostIcon'
const CostFilter = () =>{
    const costs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    return(
        <div style = {{alignSelf : "flex-start"
            ,marginTop : "30px", marginBottom : "50px"}}>
            <p>코스트</p>
            <div style = {{display : 'flex', width : "100%",justifyContent : "space-between",
            flexWrap : "wrap", alignSelf : "flex-start"}}> 
                
                {costs.map((el,i)=>{
                    return(<CostIcon cost = {el} key = {i}/>)
                })}
            </div>
        </div>
    )
}
export default CostFilter;