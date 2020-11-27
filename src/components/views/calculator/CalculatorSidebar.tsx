import React from "react";
import Sidebar from "../../common/Sidebar";

const CalculatorSidebar: React.FC = () => {
    return (
        <Sidebar>
            <button>Clear History</button>
            <button>Clear Input</button>
            <button>Clear Memory</button>
            <button>Clear All</button>
            {/*<button disabled={true} style={{marginTop:"auto"}}>New Document</button>
            <button disabled={true}>Save Document</button>
            <button disabled={true}>Load Document</button>*/}
        </Sidebar>
    );
}

export default CalculatorSidebar;