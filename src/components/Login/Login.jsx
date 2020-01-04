import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLength30, minLength2, required} from "../../utils/validators/validators";

const LoginForm = (props) => {
     return  (
         <form onSubmit={props.handleSubmit}>
              <div>
                   <Field
                       component={Input}
                       placeholder={"Login"}
                       name={"login"}
                       validate={[required, maxLength30, minLength2]}
                   />
              </div>
              <div>
                   <Field
                       component={Input}
                       placeholder={"Password"}
                       name={"password"}
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
        console.log(formData);
    }
     return  <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
     </div>

}

export default Login;