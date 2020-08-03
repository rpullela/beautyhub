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

const Register: FunctionComponent<AuthFormInterface> = ({
  ctaLabel,
  onFormSubmission,
  isFormSubmitted,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLegalAgeConfirmed, setLegalAgeConfirmed] = useState(false);
  const [isBrandOptinChecked, setBrandOptinChecked] = useState(true);
  const [isCorporateOptinChecked, setCorporateOptinChecked] = useState(true);
  const [isValidEmail, setvalidEmail] = useState(false);
  const [isValidFirstName, setvalidFirstName] = useState(false);
  const [isValidLastName, setvalidLastName] = useState(false);
  const [isValidPassword, setvalidPassword] = useState(false);
  const [isValidConfirmPassword, setvalidConfirmPassword] = useState(false);
  const [hasSubmitted, setSubmission] = useState(false);

  const isValidData = () => {
    if (
      isValidEmail &&
      isValidFirstName &&
      isValidLastName &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const subscriptionData = {
      authData: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        legalAgeConfirmation: isLegalAgeConfirmed,
      },
      optIn: {
        corporate: isBrandOptinChecked,
        brand: isCorporateOptinChecked,
      },
    };
    if (isValidData()) {
      onFormSubmission(subscriptionData);
    } else {
      setSubmission(true);
    }
  };

  const handleEmailChange = (event: any) => {
    setvalidEmail(event.target.value.length > 0);
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event: any) => {
    setvalidFirstName(event.target.value.length > 0);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setvalidLastName(event.target.value.length > 0);
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setvalidPassword(event.target.value.length > 0);
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setvalidConfirmPassword(
      event.target.value.length > 0 && event.target.value === password
    );
    setConfirmPassword(event.target.value);
  };

  const handleLegalAgeConfirmation = () => {
    setLegalAgeConfirmed(!isLegalAgeConfirmed);
  };

  const handleBrandOptin = () => {
    setBrandOptinChecked(!isBrandOptinChecked);
  };

  const handleCorporateOptin = () => {
    setCorporateOptinChecked(!isCorporateOptinChecked);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classNames(classes.imageWrapper, classes.container)}>
        {isFormSubmitted ? (
          <div className={classes.thankyou}>
            <Bell />
            <h2>Thankyou for signing up!</h2>
            <p>
              You will be the first to know about articles, products, tutorials,
              helpful tips &amp; contests. You will get updates that are most
              important to you.
            </p>
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
                label="First Name"
                type="text"
                id="givenName"
                required={true}
                value={firstName}
                onChange={handleFirstNameChange}
                valid={isValidFirstName}
                validate={hasSubmitted}
              />
              <InputText
                label="Last Name"
                type="text"
                id="familyName"
                required={true}
                value={lastName}
                onChange={handleLastNameChange}
                valid={isValidLastName}
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
              <InputText
                label="Confirm Password"
                type="password"
                id="confirm-password"
                required={true}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                valid={isValidConfirmPassword}
                validate={hasSubmitted}
              />
            </Fieldset>
            <Fieldset legend="Select Optins">
              <InputCheckbox
                label="Yes - I confirm that I am over 16 years old."
                id="legalAgeConfirmation"
                name="legalAgeConfirmation"
                required={true}
                checked={isLegalAgeConfirmed}
                onChange={handleLegalAgeConfirmation}
              />
              <InputCheckbox
                label="Yes - I want to receive information from SimpleArticle on
                    new products and services via email."
                id="optInBrand"
                name="optIn.brand"
                required={true}
                checked={isBrandOptinChecked}
                onChange={handleBrandOptin}
              />
              <InputCheckbox
                label="Yes - Share my data with other Unilever brands to receive
                    the latest news on other Unilever products and services via
                    email."
                id="optInCorporate"
                name="optIn.corporate"
                required={true}
                checked={isCorporateOptinChecked}
                onChange={handleCorporateOptin}
              />
            </Fieldset>
            <div>
              <p>
                Please read our{' '}
                <a href="" target="_blank" rel="noopener noreferrer">
                  PRIVACY
                </a>{' '}
                and{' '}
                <a href="" target="_blank" rel="noopener noreferrer">
                  COOKIE
                </a>{' '}
                notices to understand how we use your personal data. By clicking
                the below button you agree to our{' '}
                <a href="" target="_blank" rel="noopener noreferrer">
                  TERMS AND CONDITIONS
                </a>
                .
              </p>
            </div>
            <input
              type="submit"
              name="submit"
              value={ctaLabel}
              onClick={handleFormSubmit}
              className={classes.button}
            />
            <div>
              Already a member?
              <Link to="/login">Login here</Link>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Register;
