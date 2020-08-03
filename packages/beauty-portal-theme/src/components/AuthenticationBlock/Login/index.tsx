import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import Form from '../../../components/Form';
import {
  Fieldset,
  InputText,
  InputCheckbox,
} from '../../../components/FormElements';
import { ReactComponent as Bell } from '../../../images/icons/bell.svg';
import useStyles from './styles';
import { Link } from 'gatsby';
import { AuthFormInterface } from '../models';

const Login: FunctionComponent<AuthFormInterface> = ({
  ctaLabel,
  onFormSubmission,
  isFormSubmitted,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isValidEmail, setvalidEmail] = useState(false);
  const [isValidPassword, setvalidPassword] = useState(false);
  const [hasSubmitted, setSubmission] = useState(false);

  const isValidData = () => {
    if (isValidEmail && isValidPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const authData = {
      email: email,
      password: password,
    };
    if (isValidData()) {
      onFormSubmission(authData);
    } else {
      setSubmission(true);
    }
  };

  const handleEmailChange = (event: any) => {
    setvalidEmail(event.target.value.length > 0);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setvalidPassword(event.target.value.length > 0);
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classNames(classes.imageWrapper, classes.container)}>
        {isFormSubmitted ? (
          <div className={classes.thankyou}>
            <Bell />
            <h2>Submitted...</h2>
          </div>
        ) : (
          <Form onsubmit={handleFormSubmit}>
            <Fieldset legend="Personal Information">
              <InputText
                label="Email"
                type="email"
                id="email"
                required={true}
                value={email}
                onChange={handleEmailChange}
                valid={isValidEmail}
                validate={hasSubmitted}
              />
              <InputText
                label="Password"
                type="password"
                id="password"
                required={true}
                value={password}
                onChange={handlePasswordChange}
                valid={isValidPassword}
                validate={hasSubmitted}
              />
              <InputCheckbox
                label="Remember me"
                id="rememberMe"
                name="rememberMe"
                required={true}
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
            </Fieldset>
            <input
              type="submit"
              name="submit"
              value={ctaLabel}
              onClick={handleFormSubmit}
              className={classes.button}
            />
            <div>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            <div>
              Not a member?
              <Link to="/register">Sign up here</Link>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Login;
