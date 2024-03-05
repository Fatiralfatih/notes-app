import { useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";

const useAuthenticate = () => {
    const [initilize, setInitilize] = useState(true);
    const [authUser, setAuthUser] = useState(null)

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken)
        const { data } = await getUserLogged();

        setAuthUser(data)
    }

    useEffect(() => {
        async function logged() {
            const { data } = await getUserLogged()
            setAuthUser(data)
            setInitilize(false)
        }
        logged();
    }, [])

    const onLogout = () => {
        setAuthUser(null);
        putAccessToken('')
    }

    return { initilize, authUser, onLoginSuccess, onLogout }
}

export { useAuthenticate }
