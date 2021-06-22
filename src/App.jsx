/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { getDataObject } from '@services/AsyncStorage';
import { UserDataProvider } from './contexts/UserDataContext';
import { Routes } from './Routes';

const App = () => {
  const [userData, setUserData] = useState({});
  const [initialRoute, setInitialRoute] = useState('');
  const [finishedLoading, setFinishedLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataObject('@userData');
        console.log(data);
        if (data) {
          setInitialRoute('Home');
          setUserData(data);
          setFinishedLoading(true);
        } else {
          setInitialRoute('FirstScreen');
          setFinishedLoading(true);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <UserDataProvider>
      {finishedLoading ? (
        <Routes initialRouteName={initialRoute} userData={userData} />
      ) : null}
    </UserDataProvider>
  );
};

export default registerRootComponent(App);
