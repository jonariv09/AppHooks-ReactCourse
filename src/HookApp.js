import React from 'react';
import { CounterApp } from './01-useState/CounterApp';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

function HookApp() {
  return (
    <div className="App">
      <MultipleCustomHooks />
    </div>
  );
}

export default HookApp;
