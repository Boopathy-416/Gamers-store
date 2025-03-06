import { useState } from "react";

const AuthForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password }); // No captcha
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Login</button>
        </form>
    );
};
