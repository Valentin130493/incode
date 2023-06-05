import * as Yup from "yup";

export const registrationSchema = Yup.object({
    username: Yup.string()
        .min(5, "Enter valid user name").max(40)
        .required("Required"),
    password: Yup.string()
        .min(6, "This password is too short. It must contain at least 8 characters")
        .matches(/[a-zA-Z]/, "This password is entirely numeric")
        .required("Required"),
    password2: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Required"),
    fullname: Yup.string()
        .min(5, "Enter valid user name").max(40)
        .required("Required"),
});