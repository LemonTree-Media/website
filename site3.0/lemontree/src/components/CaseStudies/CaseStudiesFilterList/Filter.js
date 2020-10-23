import React, {useState} from 'react';
import Select from 'react-select';

let options = [];

function Filter(props) {
    for (let i = 0; i < props.options.length; i++) {
        options.push({value: props.options[i], label: props.options[i]});
    }

    const [selectedOption, setSelectedOption] = useState(null);
    
    return (
        <div className="mb-3 mr-3 w-20 d-inline-block">
          <span className="mr-3 fixed-width-100">{props.name}:</span>
          <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
          />
        </div>
    );
}

export default Filter;

