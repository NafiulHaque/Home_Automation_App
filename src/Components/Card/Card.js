import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "./Card.css";

const Card = props => {
    const [isChecked, setIsChecked] = useState(props.level);
    const handleOnChange = e => {
        // e.preventDefault();
        setIsChecked(!isChecked);
        console.log(isChecked, props.level, props.id);
        const sw = {
            name: props.name,
            level: (isChecked ? false : true),
            fawesome: props.fawesome,
            id: props.id
        }
        console.log(sw);
        axios.put(`https://home-automation-app-5a3d0-default-rtdb.asia-southeast1.firebasedatabase.app/sw/${props.id}/.json`, sw)
            .then(res => console.log(res.data))

    };
    return (

        <div className="box">
            <div className="icon">
                <i className={props.fawesome} aria-hidden="true"></i>
                <div className="form-check form-switch sw">
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            value="1"
                            checked={isChecked}
                            onChange={handleOnChange}
                        // label="Check this switch"h
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