import { Link } from "react-router-dom"
import LoginInput from "../Components/LoginInput"
import { login } from "../utils/network-data"
import { func } from "prop-types"

const LoginPage = ({ loginSuccess }) => {

    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password })
        if (!error) {
            loginSuccess(data)
        }
    }

    return (
        <section className="login-page">
            <h2>Masuks</h2>
            <LoginInput login={onLogin} />
            <p>Belum punya akun? <Link to='/register'>Register</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: func,
}

export default LoginPage
