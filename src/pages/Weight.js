import React from "react";
import FormSend from "../component/Weight/FormSend";
import Chart from "../component/Weight/Chart";

function Weight() {
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="main">
                    <FormSend />
                    <Chart />
                </div>
            </div>
        </div>
    );
}

export default Weight;
