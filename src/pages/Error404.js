import "../index.css";
import Headernav from "../components/headernav/Headernav";

function Error404(){
    return(
        <div>
            <Headernav/>
            <div className="error">
                <div className="img-error">
                <img src={require("./1f58c.png")}/>
                </div>
                <div className="error-txt">
                   <h1>ERROR 404</h1>
                   <h2>PAGE NO FOUND</h2>
                </div>
            </div>
        </div>
        
    );
    }
    export default Error404;