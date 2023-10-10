import axios from "./axios";

const fetchEmployee = () => {
    return axios.get("/employees");
}

const postCreateEmployee = (employee) => {
    return axios.post("/employees", employee);
}

const postUpdateEmployee = (employee) => {
    return axios.post("/employees", employee);
}

export { fetchEmployee, postCreateEmployee, postUpdateEmployee };