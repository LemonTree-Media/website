import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

import IdeaNetworkContext from '../../contexts/IdeaNetworkContext';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount(){
      axios.get("http://localhost:3000/ideas").then(res => {
          console.log(res);
          this.setState({
            data: res.data
          });
      });
    }
    //TODO:
    //when user clicks a "Filter" button, this function will be triggered
    //how do you pass down 
    //{type: Video Type.options, industry.options, style.options, budget.options}
    //to the backend API?  (search about axios API)
  queryFilter(options){
    axios.get("http://localhost:3000/ideas?type="options[0]"&industry="options[1]"&style="options[2]"&budget="options[3]"")
    .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
    });
  }
    //TODO
    //Context API to pass the filtered videos to IdeaNetworkVideoList

  render() {
    return (
    <IdeaNetworkContext.Consumer> 
      <div className="mb-3 mr-3 w-20 d-inline-block">
        <span className="mr-3 fixed-width-100">{this.props.name}:</span>
            {({name, setName}) => (
                <Select
                  value={this.state.options}
                  onChange={(options) => {
                    this.setState({ options });
                  }, setName}
                  options={this.props.options}
                  isMulti
               />
            )}
      </div>
      </IdeaNetworkContext.Consumer> 
    );
  }
}


export default Filter;
