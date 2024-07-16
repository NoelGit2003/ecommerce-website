import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MobileOffcanvas.css';

const MobileOffcanvas = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const contentWithProps = React.cloneElement(props.content, { handleClose });

    return (
        <section>
            <Button className="btn btn-secondary mobile-filter-button" onClick={handleShow}>
                {props.button}
            </Button>
            <Offcanvas show={show} onHide={handleClose} responsive="lg" placement="end" style={{backgroundColor: `${props.backcolor}`, color: `${props.textcolor}`}}>
                <Offcanvas.Header closeButton className='mb-0 pb-2'>
                    <Offcanvas.Title>{props.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='ps-0 pe-0 pt-0'>
                    {contentWithProps}
                </Offcanvas.Body>
            </Offcanvas>
        </section>
    )
}

export default MobileOffcanvas;
