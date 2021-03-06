/* eslint-disable react/prop-types */
import React from 'react';

import { FirstScreenBackground } from '@components/FirstScreenBackground';
import { FirstRegisterInput } from '@components/FirstRegisterInput';

export function FirstScreenRegister({ navigation }) {
  return (
    <>
      <FirstScreenBackground />
      <FirstRegisterInput navigation={navigation} />
    </>
  );
}
