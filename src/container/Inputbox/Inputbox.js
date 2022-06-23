import React from 'react';
import { FormfeedStyle, InputBoxStyle } from './Inputboxstyle';

function Inputbox({children,errors=false, errorMessages= '', ...rest}) {
    return (
        <>
        <InputBoxStyle {...rest}>
            {children}
        </InputBoxStyle >
        
        <FormfeedStyle error={errors}>
         {errorMessages}
        </FormfeedStyle>
    </>
    );
}


export default Inputbox;
