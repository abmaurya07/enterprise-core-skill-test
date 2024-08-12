import {lazy} from 'react';

const componentMap = {
  RegistrationForm: {
    v1: lazy(() => import('./RegistrationFormV1')),
    v2: lazy(() => import('./RegistrationFormV2'))
  },
  UserProfile: {
    v1: lazy(() => import('./UserProfileV1')),
  },
  LoginForm: {
    v1: lazy(() => import('./LoginFormV1')),
    v2: lazy(() => import('./LoginFormV2'))
  },
  SharedComponent:{
    v1: lazy(() => import('./SharedComponent'))
  }
};


export default componentMap;
