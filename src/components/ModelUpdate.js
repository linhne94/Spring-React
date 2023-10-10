import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postUpdateEmployee } from '../services/EmployeeService'
import { toast } from 'react-toastify';

const ModalUpdate = (props) => {
    const { show, handleClose, getEmployee, dataEmployee } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (show) {
            setName(dataEmployee.name);
            setEmail(dataEmployee.email);
            setPhone(dataEmployee.phone);
        }
    }, [dataEmployee])



    const handleUpdate = async () => {
        const id = dataEmployee.id;
        const employee = { id, name, email, phone }
        if (name !== '' && email !== '') {
            let res = await postUpdateEmployee(employee);
            if(res){

                handleClose();
                getEmployee();
                toast.success("Update thanh cong hihi")
            }
            else{
                toast.error("Loi roi cha noi")
            }
        }
    }

    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group mb-2">
                        <input type="text" className="form-control" placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" className="form-control" placeholder="Enter your phonenumber"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModalUpdate;