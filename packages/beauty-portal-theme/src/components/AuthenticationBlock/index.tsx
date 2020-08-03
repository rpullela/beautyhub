import React, { FunctionComponent, useState } from 'react';
import { AuthenticationBlockInterface } from './models';
import Login from './Login';
import Register from './Register';

const componentMap = {
  login: Login,
  register: Register,
  default: null,
};

const AuthenticationBlock: FunctionComponent<AuthenticationBlockInterface> = ({
  type,
  ctaLabel,
}) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  console.log('PROPS: ', { type, ctaLabel });
  const onFormSubmission = (e: any) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    //TODO: handle submission for different types of authentication services
  };

  const getComponentKey = (componentTypeName: string) => {
    if (componentTypeName.indexOf('login') >= 0) return 'login';
    if (componentTypeName.indexOf('register') >= 0) return 'register';

    return 'default';
  };

  const componentTypeName = type ? type.name.toLowerCase() : '';
  const componentKey = getComponentKey(componentTypeName);
  const Component = componentMap[componentKey];

  return Component ? (
    <section>
      <Component {...{ ctaLabel, onFormSubmission, isFormSubmitted }} />
    </section>
  ) : null;
};

export default AuthenticationBlock;
