import * as React from 'react'
import Button from '../button';
import "./modal.css"


export default function BasicModal({ open, setOpen, children }) {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='fade'>
            <Button onClick={handleClose}>Fechar Modal</Button>
            {children}
        </div>
    );
}

