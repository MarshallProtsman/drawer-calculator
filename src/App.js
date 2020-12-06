import "./App.css";
import React from "react";
import Input from "./inputs";
// import Total from "./total";


// const Denominations = [100, 50, 20, 10, 5, 1, .5, .25, .1, .05, .01];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalced: false,
      dollars: {
        hundred: "",
        fifty: "",
        twenty: "4",
        ten: "",
        five: "",
        one: "",
      },
      ammount: "",
      total: 0,
    };

    this.handleCalc = this.handleCalc.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCalc() {
    this.setState((state) => ({
      total: this.state.ammount * 100 + this.state.dollars.twenty * 20,
      isCalced: !state.isCalced,
    }));
    console.log({ ...this.state });
  }

  handleChange(event) {
    this.setState({ ammount: event.target.value });
  }

  render() {
    return (
      <>
        <h1>Drawer Calculator</h1>

        <br></br>

        <Input handleChange={this.handleChange} ammount={this.state.ammount} />
        {/* {Denominations.forEach(element => {
        })} */}
        <button onClick={this.handleCalc}>
          {this.state.isCalced ? this.state.total : "Click for Total"}
        </button>
      </>
    );
  }
}

export default Calculator;
