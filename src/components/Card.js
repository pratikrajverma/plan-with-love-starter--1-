import { useState } from "react";

function Card({id,name,info,image,price,removeTour})
{
    
    const[readVariable,setreadvar] = useState(false); //humlog ek variable bana kr usme false dal rahe he jo ki 
                                                    // false hone pe readmore show kare ga 
                                                    // and true hone pr showless show karega
    
    const discription = readVariable ? info : `${info.substring(0,200)}....`

    const readmoreHandler = ()=>{
        setreadvar(!readVariable);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="discription">
                    {discription}
                    <span className="read-more" onClick={readmoreHandler}> {readVariable ? 'showless' : 'read more'}</span>

                </div>
            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>Not interested</button>
        </div>
    );
}

export default Card