import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link, TextField} from "@mui/material";
import {Formik} from "formik";
import React from "react";
import {Logo} from "../../../../../components";
import useAuth from "../../../../../hooks/useAuth";
import {RegisterFromInterface} from "../../../../../static";
import {registrationSchema} from "../validation";


interface RegisterFormProps {
    changeForm: (boolean: boolean) => void;
}

type FormTypes = {
    username: string,
    password: string,
    password2: string,
    fullname: string
}

export const RegisterForm: React.FC<RegisterFormProps> = ({changeForm}) => {
    const {register} = useAuth()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handeClick = () => {
        changeForm(true)
    }
    const handleSubmit = async (values: FormTypes, {setSubmitting}: any) => {
        const data: RegisterFromInterface = {
            displayName: values.fullname,
            username: values.username,
            password: values.password
        }
        await register(data)
        setSubmitting(false);
        changeForm(true)
    }
    return (
        <div className={"form__wrapper"}>
            <Logo padding={0}/>
            <h1 className={"form__header"}>Sign Up</h1>
            <Formik
                initialValues={{fullname: '', username: "", password: "", password2: ''}}
                validationSchema={registrationSchema}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit} className={"form__form"}>

                        <TextField
                            className={"form__input"}
                            size={"medium"}
                            variant="standard"
                            margin={"normal"}
                            label={"Full Name"}
                            type="text"
                            name="fullname"
                            onChange={handleChange}
                            value={values.fullname}
                        />
                        <p className={"err"}>{errors.fullname && touched.fullname && errors.fullname}</p>

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

                        <div className={"password_box"}>
                            <TextField
                                className={"form__input"}
                                size={"medium"}
                                variant="standard"
                                margin={"normal"}
                                label={"Confirm Password "}
                                type={showPassword ? 'text' : 'password'}
                                name="password2"
                                onChange={handleChange}
                                value={values.password2}
                            />
                            <button type={"button"}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </button>
                        </div>
                        <p className={"err"}>{errors.password2 && touched.password2 && errors.password2}</p>
                        <button className={"form__button"} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            <p className={"form__footer"}>I have an account. <Link onClick={handeClick} className={"link"}>Go to Sign
                in</Link></p>
        </div>);
};
