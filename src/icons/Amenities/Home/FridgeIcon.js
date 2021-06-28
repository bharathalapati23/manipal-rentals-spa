import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

let FridgeIcon = (props) => (
    <SvgIcon {...props}>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9996 0.51H14C14.8288 0.51 15.5 1.17103 15.5 2V18C15.5 18.8239 14.8239 19.5 14 19.5H2C1.17614 19.5 0.5 18.8239 0.5 18V2C0.5 1.16783 1.17441 0.500101 1.99981 0.5C1.99987 0.5 1.99994 0.5 2 0.5L13.9996 0.51ZM14 18.5H14.5V18V8.98V8.48H14H2H1.5V8.98V18V18.5H2H14ZM14 7.5H14.5V7V2V1.5H14H2H1.5V2V7V7.5H2H14ZM4.5 3.5H5.5V5.5H4.5V3.5ZM4.5 10.5H5.5V14.5H4.5V10.5Z" stroke="#e0e0e0" strokeOpacity="0.8" />
        </svg>
    </SvgIcon>
);
FridgeIcon.displayName = 'ActionHome';
FridgeIcon.muiName = 'SvgIcon';

export default FridgeIcon;