import * as React from "react";
import UserInterface from "./UserInterface";

export default class UserComponent extends React.Component<UserInterface, {}> {
    constructor(props: UserInterface){
        super(props);
    }
  render() {
    var bar = this.props;
    return (
      <div>
        <h1>User Component</h1>
        Hello, {bar.name}
        <br/>
        you are {bar.age} years old
        <br/>
        you live at {bar.address}
        <br/>
        you were born: {bar.dob.toDateString()}
      </div>
    );
  }
}
