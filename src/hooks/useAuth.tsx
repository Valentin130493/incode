import {AxiosInstance} from "../congif"
import {API_LOGIN, API_LOGOUT, API_REGISTER, LoginFormInterface, RegisterFromInterface, token} from "../static"
import {useAppDispatch} from "../store/hooks"
import {setAuth, setUser} from "../store/slices/userSlice"


export default function useAuth() {
    const dispatch = useAppDispatch()
    const login = async (values: LoginFormInterface) => {
        try {
            const res = await AxiosInstance.post(`${API_LOGIN}`, values)
            dispatch(setAuth(res))
            localStorage.setItem(token, JSON.stringify(res))

        } catch (err: any) {
            alert(err?.response.data.message)
        }
    }
    const register = async (data: RegisterFromInterface) => {
        try {
            const res = await AxiosInstance.post(`${API_REGISTER}`, data)
            dispatch(setUser(res))
            localStorage.setItem(token, JSON.stringify(res))

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