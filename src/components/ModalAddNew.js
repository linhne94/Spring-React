import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateEmployee, fetchEmployee } from '../services/EmployeeService'
import { toast } from 'react-toastify';

const ModalAddNew = (props) => {
    const { show, handleClose, getEmployee } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");



    const handleAddEmployee = async () => {
        const employee = { name, email, phone }
        if (name !== '' && email !== null && phone !== null) {
            let res = await postCreateEmployee(employee);
            if (res && res.id) {
                setEmail('');
                setName('');
                setPhone('');
                fetchEmployee();
                handleClose();
                toast.success("Ban da tao thanh cmn cong");
                getEmployee();


            } else {
                toast.error("Loi cmnr ban oi!")
            }
        }

        // console.log(">> check res: ", res)
        // console.log("Name: " + name + "email: " + email + "phone:" +phone);
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
                <Button variant="primary" onClick={handleAddEmployee}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModalAddNew;