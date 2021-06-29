/* eslint-disable react/prop-types */
import React from 'react';

import { FirstScreenBackground } from '@components/FirstScreenBackground';
import { LastRegisterInput } from '@components/LastRegisterInput';

export function LastScreenRegister({ navigation }) {
  return (
    <>
      <FirstScreenBackground />
      <LastRegisterInput navigation={navigation} />
    </>
  );
}
