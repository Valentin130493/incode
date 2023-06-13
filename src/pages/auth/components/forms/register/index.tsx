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
    userName: string,
    password: string,
    confirmPassword: string,
    fullName: string
}

export const RegisterForm: React.FC<RegisterFormProps> = ({changeForm}) => {
    const {register} = useAuth()
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(prevState => !prevState)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handeClick = () => {
        changeForm(true)
    }
    const handleSubmit = async (values: FormTypes, {setSubmitting}: any) => {
        const data: RegisterFromInterface = {
            displayName: values.fullName,
            username: values.userName,
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
                initialValues={{fullName: '', userName: "", password: "", confirmPassword: ''}}
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
                            name="fullName"
                            onChange={handleChange}
                            value={values.fullName}
                        />
                        <p className={"err"}>{errors.fullName && touched.fullName && errors.fullName}</p>

                        <TextField
                            className={"form__input"}
                            size={"medium"}
                            variant="standard"
                            margin={"normal"}
                            label={"User Name"}
                            type="text"
                            name="userName"
                            onChange={handleChange}
                            value={values.userName}
                        />
                        <p className={"err"}> {errors.userName && touched.userName && errors.userName}</p>

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
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                onChange={handleChange}
                                value={values.confirmPassword}
                            />
                            <button type={"button"}
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}>
                                {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                            </button>
                        </div>
                        <p className={"err"}>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>
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
