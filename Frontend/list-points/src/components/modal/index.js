import * as React from 'react'
import Button from '../button';
import "./modal.css"


export default function BasicModal({ setOpen, children }) {

    const handleClose = () => setOpen(false);

    return (
        <div className='fade'>
            <div className='btn-close'>
                <Button onClick={handleClose}>X</Button>
            </div>
            {children}

        </div>
    );
}

