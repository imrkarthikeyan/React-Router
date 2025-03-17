import { useParams } from "react-router-dom";

function Rollno(){
    let{rno}=useParams();
    return(
        <div className="pg">
            <h4>Roll No : {rno}</h4>
            <h4>College : K.S.R College of Technology</h4>
            <h4>Place : T.Code</h4>
        </div>
    )
}

export default Rollno