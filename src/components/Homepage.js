import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Homepage() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("Unauthorized! Please login.");
            navigate("/Login")
        }
    }, [navigate]);

    const handleGetEmployees = (e) => {
        e.preventDefault();
         navigate("/getemployees");
    }

    const handleUpdateEmployees = (e) => {
        e.preventDefault();
         navigate("/update-employee");
    }

    return (
        <div className="mt-5 text-center">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="submit" onClick={handleGetEmployees}>Get Employees</button>
                        <button class="btn btn-outline-success ml-3" type="submit" onClick={handleUpdateEmployees}>Update Employees</button>
                    </form>
                </div>
            </nav>
            <h2>Welcome to React World!</h2>
            <p>
                React is a JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it efficient and powerful.
            </p>
            <ul className="list-group">
                <li className="list-group-item">Reusable Components</li>
                <li className="list-group-item">Virtual DOM for Performance</li>
                <li className="list-group-item">Great Ecosystem</li>
            </ul>

        </div>
    );
}

export default Homepage;