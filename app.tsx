import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './src/FirstComponent';
import UserComponent from './src/UserComponent';
ReactDOM.render(
<div>
<h1>Test 123</h1>
<FirstComponent/>
<UserComponent name="Kevin" age={70} address="nice try" dob={new Date()}/>
</div>,
  document.getElementById("root")
);