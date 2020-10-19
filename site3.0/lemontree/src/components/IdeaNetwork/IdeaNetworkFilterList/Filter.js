import React from 'react';

function Filter(props) {
    return (
        <div className="mb-3">
          <span className="mr-3 fixed-width-100">{props.name}:</span>
          { props.options.map((option, index) => {
                return <span className="mr-3" key={index}> {option} </span>
          })}
        </div>
    );
}

export default Filter;

