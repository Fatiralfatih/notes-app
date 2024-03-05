import { func } from "prop-types";
import { useState } from "react"

const RegisterInput = ({ onRegisterHandler }) => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleNameChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            name: e.target.value
        }))
    }

    const handleEmailChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            email: e.target.value
        }))
    }

    const handlePasswordChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            password: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegisterHandler({
            name: input.name,
            email: input.email,
            password: input.password,
        })
    }

    return (
        <input
            className="input-register"
            onSubmit={handleSubmit}
        >
            <label id="name">name</label>
            <input
                type="text"
                name="name"
                value={input.name}
                placeholder="Masukkan name..."
                required
                onChange={handleNameChange}
            />
            <label id="email">email</label>
            <input
                type="email"
                name="email"
                placeholder="Masukkan email..."
                required
                value={input.email}
                onChange={handleEmailChange}
            />
            <label id="password">password</label>
            <input
                type="password"
                name="password"
                placeholder="Masukkan password..."
                required
                autoComplete="current-password"
                value={input.password}
                onChange={handlePasswordChange}
            />
            <button type="submit">Daftar</button>
        </input>
    )
}

RegisterInput.propTypes = {
    onRegisterHandler: func
}

export default RegisterInput
