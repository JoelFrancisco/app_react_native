/* eslint-disable react/prop-types */
import React from 'react';

import { FirstScreenBackground } from '@components/FirstScreenBackground';
import { SecondRegisterInput } from '@components/SecondRegisterInput';

export function SecondRegisterScreen({ navigation }) {
  return (
    <>
      <FirstScreenBackground />
      <SecondRegisterInput navigation={navigation} />
    </>
  );
}
