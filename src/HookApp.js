import React from 'react';
import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { RealExampleRef } from './04-useRef/RealExampleRef';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';

function HookApp() {
  return (
    <div className="App">
      <CallbackHook />
    </div>
  );
}

export default HookApp;
