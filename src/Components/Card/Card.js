import React from 'react';
import { Form } from 'react-bootstrap';
import "./Card.css";

const Card = props => {
    return (

        <div className="box">
            <div className="icon">
                <i className={props.fawesome} aria-hidden="true"></i>
                <div className="form-check form-switch sw">
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        // label="Check this switch"
                        />
                    </Form>
                </div>
            </div>

            <div className="text">

                <span>{props.name}</span>
            </div>
        </div>


    )
}

export default Card;