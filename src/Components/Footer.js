import React from "react";
import './css/Footer.css'

class Footer extends React.Component{
    render() {
        return (
            <div className="clearfix footer fixed-bottom bg-dark">
                <div className="float-left">
                    <div className="text-white">
                        coso
                    </div>
                </div>
                <div className="float-right">
                    <div className="text-white">
                        algo
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;