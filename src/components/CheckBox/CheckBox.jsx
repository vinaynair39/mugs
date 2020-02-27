import React from 'react';
import { Checkbox } from 'antd';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const CheckBox = ({name}) => {
    return (
        <>
            <Checkbox onChange={onChange}>{name}</Checkbox>
        </>
    );
}

export default CheckBox;