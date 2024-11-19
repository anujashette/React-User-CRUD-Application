import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [name, setName] = useState(localStorage.getItem('name'));
    const [age, setAge] = useState(localStorage.getItem('age'));
    const [id, setId] = useState(localStorage.getItem('id'));

    let history = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        if (name === '' && age === '') {
            alert('Invalid Input');
            return;
        }

        let arr = array[id];

        arr.name = name;
        arr.age = age;

        alert('success...');
        
        history('/');
    }

    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-grid gap-2 w-50 align-items-center' style={{ margin: '5rem' }}>
                <Form.Group controlId='BasicFormName' className='mb-3'>
                    <Form.Control
                        value={name}
                        onChange={handleName}
                        type='text'
                        placeholder='Enter Name'
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='BasicFormAge' className='mb-3'>
                    <Form.Control
                        value={age}
                        onChange={handleAge}
                        type='number'
                        placeholder='Enter Age'
                        required>
                    </Form.Control>
                </Form.Group>

                <Button onClick={(e) => handleUpdate(e)} type='submit' variant='primary'>Update</Button>

                <Link className='d-grid gap-2' to='/'>
                    <Button variant='info' size='lg'>Home</Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;