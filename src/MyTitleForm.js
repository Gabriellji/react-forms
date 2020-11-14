import React, { Component } from "react";

class MyTitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Awesome Title" };
    this.handlerEvent = this.handlerEvent.bind(this);
  }

  handlerEvent(event) {
    let myValue = event.target.value;
    let symb = "*";
    if (!myValue.includes(symb)) {
      this.setState({ title: myValue });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <label htmlFor="title">Title :</label>
        <input
          onChange={this.handlerEvent}
          value={this.state.title}
          id="title"
          type="text"
        />
      </div>
    );
  }
}

export default MyTitleForm;
