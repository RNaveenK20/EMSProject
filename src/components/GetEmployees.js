import { useEffect, useState } from "react";
import { get } from "./APIManager";

function GetEmployees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("Unauthorized! Please login.");
            return;
        }
        get("/api/Employee").then(data => {
            if(Array.isArray(data)) {
                console.log(data);
                setEmployees(data);
            } else {
                console.log("Expected an array of employees");
            }
        })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Employees</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Location</th>
                        <th>Department NO</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.sal}</td>
                            <td>{employee.location}</td>
                            <td>{employee.deptNum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetEmployees;