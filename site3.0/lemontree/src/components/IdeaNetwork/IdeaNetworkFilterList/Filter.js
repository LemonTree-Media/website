/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

// import IdeaNetworkContext from "../../contexts/IdeaNetworkContext";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/ideas").then((res) => {
      console.log(res);
      this.setState({
        data: res.data
      });
    });
  }
  //TODO:

  //@UPDATE took this function to context

  //when user clicks a "Filter" button, this function will be triggered
  //how do you pass down
  //{type: Video Type.options, industry.options, style.options, budget.options}
  //to the backend API?  (search about axios API)
  // queryFilter(options) {
  //   axios.get("http://localhost:3000/ideas?").then((res) => {
  //     console.log(res);
  //     this.setState({
  //       data: res.data,
  //     });
  //   });
  // }
  //

  //TODO:
  //Context API to pass the filtered videos to IdeaNetworkVideoList

  render() {
    return (
      // <IdeaNetworkContext.Consumer>
      <div className="mb-3 mr-3 w-20 d-inline-block">
        <span className="mr-3 fixed-width-100">{this.props.name}:</span>
        {/* {({ name, setName }) => ( */}
        <Select
          value={this.state.options}
          onChange={(options) => {
            this.setState({ options });
          }}
          options={this.props.options}
          isMulti
          onChange={(options) => {
            this.setState({ options });
            this.props.handleChange(options);
          }}
        />
      </div>
      // </IdeaNetworkContext.Consumer>
    );
  }
}

export default Filter;
