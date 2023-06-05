import * as Yup from "yup";

export const loginSchema = Yup.object({
    username: Yup.string()
        .min(5, "Enter valid user name").max(40)
        .required("Required"),
    password: Yup.string().min(6).required("Required"),
});