import loginFields from "../loginFields";
import signUpFields from "../signUpFields";
import useLoginForm from "../../hooks/useLoginForm"
import useSignup from "../../hooks/useSignup"

const AUTH_VIEWS = {
  LOGIN: {
    title: "Welcome Back",
    btnLabel: "Login",
    fields: loginFields,
    footerText: "Don't have an account?",
    footerAction: "Sign Up",
    toggleView: "OPEN_SIGNUP",
    onSubmit: (data) => useLoginForm(data)
  },
  SIGNUP: {
    title: "Create Account",
    btnLabel: "Sign Up",
    fields: signUpFields,
    footerText: "Already have an account?",
    footerAction: "Login",
    toggleView: "OPEN_LOGIN",
    onSubmit: (data) => useSignup(data)
  },
};

export default AUTH_VIEWS;
