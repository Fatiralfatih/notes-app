import { Link, useNavigate } from "react-router-dom"
import RegisterInput from "../Components/RegisterInput"
import { register } from "../utils/network-data"

const RegisterPage = () => {

    const navigate = useNavigate();

    const onRegisterHandler = async (user) => {
        await register(user)
        navigate('/')
    }


    return (
        <section className="register-page">
            <h2>Daftar</h2>
            <RegisterInput onRegisterHandler={onRegisterHandler} />
            <p>Sudah Memilik akun? <Link to="/*">Login</Link></p>
        </section>
    )
}

export default RegisterPage
