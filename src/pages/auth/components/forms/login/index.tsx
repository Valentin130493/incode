import React from "react";
import {Logo} from "../../../../../components";
import {Formik} from "formik";
import {Link, TextField} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {loginSchema} from "../validation";
import useAuth from "../../../../../hooks/useAuth";
import {LoginFormInterface} from "../../../../../static";
import {useNavigate} from "react-router";
import {routes} from "../../../../../router/routes";

import "./style.scss";


interface LoginFormProps {
    changeForm: (boolean: boolean) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({changeForm}) => {
    const navigate = useNavigate()
    const {login} = useAuth()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handeClick = () => {
        changeForm(false)
    }
    
    return (
        <div className={"form__wrapper"}>
            <Logo padding={0}/>
            <h1 className={"form__header"}>Sign In</h1>
            <Formik
                initialValues={{username: "", password: "",}}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await login(values)
                    navigate(routes.home)
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} className={"form__form"}>


                        <TextField
                            className={"form__input"}
                            size={"medium"}
                            variant="standard"
                            margin={"normal"}
                            label={"User Name"}
                            type="text"
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                        />
                        <p className={"err"}> {errors.username && touched.username && errors.username}</p>

                        <div className={"password_box"}>
                            <TextField
                                className={"form__input"}
                                size={"medium"}
                                variant="standard"
                                margin={"normal"}
                                label={"Password"}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                            />
                            <button type={"button"}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </button>
                        </div>
                        <p className={"err"}>{errors.password && touched.password && errors.password}</p>


                        <button className={"form__button"} type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            <p className={"form__footer"}>Don’t have account yet? <Link onClick={handeClick} className={"link"}>New
                Account</Link></p>
        </div>
    );
};
