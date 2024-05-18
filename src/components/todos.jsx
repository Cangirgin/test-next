import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { FaRegTrashCan } from "react-icons/fa6";
import './todo.scss'

const Todos = ({ todo, index, handleDelete }) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        // Sayfa yüklendiğinde LocaleStorage'dan veriyi al
        const savedCheckedState = localStorage.getItem(`todo-${todo}`);
        if (savedCheckedState !== null) {
            setIsChecked(JSON.parse(savedCheckedState));
        }
    }, [todo]);

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
        // LocaleStorage'a kaydet
        localStorage.setItem(`todo-${todo}`, JSON.stringify(checked));
    };
    return (
        <Card className={`h-100 w-100 pt-3 ${isChecked ? 'checked-style' : ''}`}>
            <Card.Body>
                {todo.toUpperCase()}
            </Card.Body>
            <Card.Footer className='d-flex align-items-center justify-content-around' >

                <Form.Check
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <Button variant='none' onClick={() => handleDelete(index)} > <FaRegTrashCan /> </Button>

            </Card.Footer>
        </Card>
    )
}

export default Todos
