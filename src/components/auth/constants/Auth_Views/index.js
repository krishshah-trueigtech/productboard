import loginFields from "../loginFields";
import signUpFields from "../signUpFields";

const AUTH_VIEWS = {
  LOGIN: {
    title: "Welcome Back",
    btnLabel: "Login",
    fields: loginFields,
    footerText: "Don't have an account?",
    footerAction: "Sign Up",
    toggleView: "OPEN_SIGNUP",
  },
  SIGNUP: {
    title: "Create Account",
    btnLabel: "Sign Up",
    fields: signUpFields,
    footerText: "Already have an account?",
    footerAction: "Login",
    toggleView: "OPEN_LOGIN",
  },
};

export default AUTH_VIEWS;
