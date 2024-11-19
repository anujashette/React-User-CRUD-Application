import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniId = ids.slice(0, 8);

        let a = name;
        let b = age;

        if (a === '' && b === '') {
            alert('Invalid Input');
            return;
        }

        array.push({ id: uniId, name: a, age: b });
        alert('success...');

        history('/');
    }

    return (
        <div className='d-flex justify-content-center'>
            <Form className='d-grid gap-2 w-50' style={{ margin: '5rem' }}>
                <Form.Group controlId='BasicFormName' className='mb-3'>
                    <Form.Control
                        onChange={handleName}
                        type='text'
                        placeholder='Enter Name'
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='BasicFormAge' className='mb-3'>
                    <Form.Control
                        onChange={handleAge}
                        type='number'
                        placeholder='Enter Age'
                        required>
                    </Form.Control>
                </Form.Group>

                <Button onClick={(e) => handleSubmit(e)} type='submit' variant='primary'>Submit</Button>

                <Link className='d-grid gap-2' to='/'>
                    <Button variant='info' size='lg'>Home</Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;