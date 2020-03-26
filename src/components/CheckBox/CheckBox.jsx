import React from 'react';
import { Checkbox } from 'antd';

const CheckBox = ({name, onChange}) => {
    return (
        <>
            <Checkbox onChange={onChange}>{name}</Checkbox>
        </>
    );
}

export default CheckBox;