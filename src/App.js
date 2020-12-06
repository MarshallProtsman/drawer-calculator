import "./App.css";
import React from "react";
import Input from "./inputs";
// import Total from "./total";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalced: false,
      hundred: "",
      dollars: {
        fifty: "",
        twenty: "4",
        ten: "",
        five: "",
        one: "",
      },
      value: "",
      ammount: "",
      total: 0,
    };

    this.handleCalc = this.handleCalc.bind(this);
  }

  handleCalc() {
    this.setState((state) => ({
      total: this.state.hundred * 100 + this.state.dollars.twenty * 20,
      isCalced: !state.isCalced,
    }));
    console.log({ ...this.state.dollars });
  }

  render() {
    return (
      <>
        <h1>Drawer Calculator</h1>

        <br></br>
        <Input
        // handleChange={this.handleChange}
        // ammount={this.state.ammount}
        // handleSubmit={this.handleSubmit}
        />
        <button onClick={this.handleCalc}>
          {this.state.isCalced ? this.state.total : "Click for Total"}
        </button>
      </>
    );
  }
}

export default Calculator;
