import {lazy} from 'react';

const componentMap = {
  RegistrationForm: {
    v1: lazy(() => import('./RegistrationForm/RegistrationFormV1')),
    v2: lazy(() => import('./RegistrationForm/RegistrationFormV2'))
  },
  UserProfile: {
    v1: lazy(() => import('./UserProfile/UserProfileV1')),
  },
  LoginForm: {
    v1: lazy(() => import('./LoginForm/LoginFormV1')),
    v2: lazy(() => import('./LoginForm/LoginFormV2'))
  },
  SharedComponent:{
    v1: lazy(() => import('./SharedComponent/SharedComponent'))
  },
  AnotherComponent: {
    v1: lazy(() => import('./AnotherComponent/AnotherComponent'))
  }
};


export default componentMap;
