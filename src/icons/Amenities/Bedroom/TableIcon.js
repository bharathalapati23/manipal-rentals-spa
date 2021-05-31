import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';

const TableIcon = (props) => {
    return (
        <SvgIcon  {...props}>
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#e5e5e5" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M35.67 23.43L59.5 23.43V10.85L35.67 10.85V23.43Z" stroke="#e5e5e5" stroke-width="3" stroke-miterlimit="10" />
                    <path d="M64.0797 10.84H-0.0703125" stroke="#e5e5e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.5 10.84V53.16" stroke="#e5e5e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M59.5 10.84V53.16" stroke="#e5e5e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35.67 10.84H4.5V17.82H35.67V10.84Z" stroke="#e5e5e5" stroke-width="3" stroke-miterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    )
}

export default TableIcon
