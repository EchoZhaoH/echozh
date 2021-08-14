import React from 'react';
import { Entry } from '@components/entry';
import { useDark } from './hooks';

function App() {
  useDark()
  return (
    <Entry />
  );
}

export default App
