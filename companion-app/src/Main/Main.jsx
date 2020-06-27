import React, {useState} from 'react';
import {Cascader} from 'antd';

export function Main() {
    const options = [
        {
            value: "true",
            label: "Yes"
        },
        {
            value: "false",
            label: "No"
        },
        {
            value: "none",
            label: "Oof", 
            disabled: true
        }
    ];
    const [option, setOption] = useState("none");
    return ( 
        <div>
            <p>Hi</p>
            <p>Option is: {option}</p>
            <Cascader options={options} onChange={setOption} />
        </div>
    );
}
