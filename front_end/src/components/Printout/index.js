import Manifest from "../manifest"
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { useRef } from "react";


const Printout = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <div>
            <center>
                <button onClick={handlePrint} className="btn btn-dark" style={{marginBottom: "5px"}}>Print to PDF</button>
            </center>
            <Manifest ref={ componentRef } />
            
        </div>
    )
}
export default Printout;