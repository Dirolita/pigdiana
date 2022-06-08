import "./lienzos.css"
import ModalLienzos from "./modalLienzos";

function Cardlienzos(props){
  
return(
    <div>
    <div className="cardlienzo" >
    <img src={props.p2}/>
    <h4>{props.p3}</h4>
    <p>{props.p4}</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
  VER
</button>
</div>
<div>
<ModalLienzos
      pm1={`id${props.p1}`}
        pm2={props.p2}
        pm3={props.p3}
        pm4={props.p4}
        pm5={props.p5}
        pm6={props.p6}
        pm7={props.p7}

/>
</div>
</div>  

);
}
export default Cardlienzos;