import {AxiosInstance} from "../congif"
import {
    API_BASE_URL,
    API_LOGIN,
    API_LOGOUT,
    API_REGISTER,
    LoginFormInterface,
    RegisterFromInterface,
    token
} from "../static"
import {useAppDispatch} from "../store/hooks"
import {setAuth, setUser} from "../store/slices/userSlice"
import axios from "axios";


export default function useAuth() {
    const dispatch = useAppDispatch()
    const login = async (values:LoginFormInterface) => {
        try {
            const res = await axios.post(`${API_BASE_URL}${API_LOGIN}`, {...values})
            dispatch(setAuth(res.data))
            localStorage.setItem(token, JSON.stringify(res.data))

        } catch (err: any) {
            alert(err?.response.data.message)
        }
    }
    const register = async (data: RegisterFromInterface) => {
        try {
            const res = await axios.post(`${API_REGISTER}`, data)
            dispatch(setUser(res.data))
            localStorage.setItem(token, JSON.stringify(res.data))

        } catch (err: any) {
            alert(err?.response.data.message)
        }
    }
    const logOut = async () => {
        try {
            await AxiosInstance.get(`${API_LOGOUT}`)
            localStorage.clear()

        } catch (err: any) {
            alert(err?.response.data.message)
        }
    }

    return {login, logOut, register}
}