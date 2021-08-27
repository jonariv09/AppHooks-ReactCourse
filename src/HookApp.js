import React from 'react';
import { CounterApp } from './01-useState/CounterApp';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

function HookApp() {
  return (
    <div className="App">
      <FormWithCustomHook />
    </div>
  );
}

export default HookApp;
