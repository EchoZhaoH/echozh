import React from 'react';
import { Entry } from '@components/entry';
import { useDark } from './hooks/useDark';

function App() {
  useDark()
  return (
    <Entry />
  );
}

export default App
