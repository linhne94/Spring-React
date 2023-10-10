import Table from 'react-bootstrap/Table';
import { fetchEmployee } from '../services/EmployeeService';
import { useEffect, useState } from 'react'
import ModalAddNew from './ModalAddNew';
import ModalUpdate from './ModelUpdate';

const TableListEmployee = (props) => {

    const [showModalAddNew, setshowModelAddNew] = useState(false);
    const [showModalUpdate, setshowModelUpdate] = useState(false);

    const [dataEmployee, setDataEmployee] = useState({});

    const handleClose = () => {
        setshowModelAddNew(false);
        setshowModelUpdate(false);
    }

    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {
        getEmployee();

    }, []);

    const getEmployee = async () => {
        let res = await fetchEmployee();

        if (res) {
            setListEmployee(res)
        }
        // console.log(">>> check res: ", res)

    }

    const handleEditEmployee = (employee) => {
        // console.log(employee);
        setshowModelUpdate(true);
        setDataEmployee(employee);

    }

    // console.log(">>> check list: ", listEmployee)

    return (<>
        <div className='container'>
            <div className='my-3 d-flex justify-content-between'>
                <span><h1>List Employee</h1></span>
                <button type="button" 
                    className="btn btn-success"
                    onClick={() => {setshowModelAddNew(true)}}
                    >Add new employee</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listEmployee && listEmployee.length > 0 &&

                        listEmployee.map((item, index) => {
                            return (
                                <tr key={`employees-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary mx-2" onClick={() => {handleEditEmployee(item)}}>Edit</button>
                                        <button type="button" className="btn btn-danger mx-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            <ModalAddNew
                show={showModalAddNew}
                handleClose={handleClose}
                getEmployee={getEmployee}
            />
            <ModalUpdate
                show={showModalUpdate}
                handleClose={handleClose}
                getEmployee={getEmployee}
                dataEmployee={dataEmployee}
            />
        </div>
    </>)
}

export default TableListEmployee;