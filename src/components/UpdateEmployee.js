import { useEffect, useState } from "react";
import { get, put } from "./APIManager";

function UpdateEmployee() {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        salary: "",
        location: "",
        departmentno: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("Unauthorized! Please login.");
            return;
        }

        get("/api/Employee/4")
            .then(data => {
                setEmployee(data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(previousState => ({
            ...previousState, [name]: value
        }));
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        put(`/api/Employee/${employee.id}`, employee)
            .then(updatedEmployee => {
                console.log("Employee updated Successfully", updatedEmployee);
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <h2 className="text-center">Update Employee</h2>
            <form onSubmit={handleInputChange}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        className="form-control"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="form-control"
                        value={employee.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update Employee</button>
            </form>
        </div>
    );
}

export default UpdateEmployee;
