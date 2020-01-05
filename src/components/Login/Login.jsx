import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLength30, minLength2, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
     return  (
         <form onSubmit={props.handleSubmit}>
              <div>
                   <Field
                       component={Input}
                       placeholder={"Email"}
                       name={"email"}
                       validate={[required, maxLength30, minLength2]}
                   />
              </div>
              <div>
                   <Field
                       component={Input}
                       placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       validate={[required, maxLength30, minLength2]}
                   />
              </div>
              <div>
                   <Field component={'input'} name={"rememberMe"} type={"checkbox"}/> Remember Me
              </div>
              <div>
                   <button>Login</button>
              </div>
         </form>
     )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
       return <Redirect to={"/profile"} />
    }
    return  <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);