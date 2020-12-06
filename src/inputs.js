import React from "react";

class Input extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      hundred: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ hundred: event.target.value });
    console.log(this.state.hundred)
  }

  render() {
    return (
      <form>
        <label>
          $100s:
          <input
            type="text"
            value={this.state.hundred}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default Input;
