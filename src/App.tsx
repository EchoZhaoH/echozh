import React from 'react';
import { Entry } from '@components/entry';
import { RouterProps } from 'react-router-dom';
import { useDark } from './hooks';

function App(props: RouterProps) {
  useDark()
  return (
    <Entry {...props} />
  );
}

export default App
