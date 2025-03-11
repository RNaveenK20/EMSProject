import React, { useState } from "react";
import { post } from "./APIManager";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/api/Login", {username, location})
        .then(token => {
            localStorage.setItem("token", token); // Store JWT token
            console.log("Login Successful!");
            onLogin(true); // Navigate to Homepage
        })
        .catch(err => {
            console.log(err.message);
        });
    };

    return (
        <div className="card mt-4 p-4 col px-md-5 h-100 d-flex align-items-center justify-content-center">
            <h3 className="text-center">Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        className="form-control"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;