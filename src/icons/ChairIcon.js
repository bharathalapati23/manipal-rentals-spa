import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

let ChairIcon = (props) => (
    <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
                <path d="M17,10c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v3c0,1.1,0.9,2,2,2h1v2H7c-1.1,0-2,0.9-2,2v7h2v-3h10v3h2v-7 c0-1.1-0.9-2-2-2h-1v-2H17z M7,8V5h10v3H7z M17,16H7v-2h10V16z M14,12h-4v-2h4V12z" />
            </g>
        </svg>
    </SvgIcon>
);
ChairIcon.displayName = 'ActionHome';
ChairIcon.muiName = 'SvgIcon';

export default ChairIcon;