import React from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let history = useNavigate();

    function setId(id, name, age) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
    }
    const handleDelete = (id) => {
        array.splice(id, 1);
        history("/");
    }

    return (
        <div>
            <h1>User Management</h1>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="thread-dark">
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {array.map((item, index) => {
                        return (<tr key={index}>
                            {/* <td>{item.id}</td> */}
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <Link to="/edit">
                                    <Button variant="info" className="me-2" size="sm" onClick={() => setId(item.id, item.name, item.age)}>Update</Button>
                                </Link>
                                
                                <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                            </td>
                        </tr>)
                    })
                    }
                </tbody>
            </Table>

            <div className="d-grid gap-2 mt-4">
                <Link to="/create">
                    <Button variant="success" size="lg">
                        Create New User
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;