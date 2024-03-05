import { func } from "prop-types";
import { useState } from "react"

const LoginInput = ({ login }) => {

    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault()

        login({
            email: input.email,
            password: input.password,
        })

    }

    return (
        <form className="input-login"
            onSubmit={handleSubmit}
        >
            <label id="email">Email</label>
            <input
                type="email"
                placeholder="Masukkan Email..."
                required
                value={input.email}
                onChange={(e) => setInput((prevState) => ({ ...prevState, email: e.target.value }))}
            />
            <label id="password">Password</label>
            <input
                type="password"
                placeholder="Masukkan password..."
                required
                value={input.password}
                onChange={(e) => setInput((prevState) => ({ ...prevState, password: e.target.value }))}
            />
            <button>Masuk</button>
        </form>

    )
}

LoginInput.propTypes = {
    login: func,
}

export default LoginInput
