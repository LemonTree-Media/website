import React from 'react';

function HomepageTestimonial(props) {
    let LEFT, RIGHT;
    props.videoPosition === "right" ? RIGHT = true : LEFT = true;
    
    return (
        <div className="mx-medium mb-5">
          <div className="row">
            { LEFT &&
              <div className="col">
                {props.children}
              </div>
            }
            <div className="col">
              <div className="d-flex flex-row">
                <img src={props.image} alt={props.name} className="mr-2" />
                <div>
                  <div className="h4">{props.name} | {props.company}</div>
                  <div className="h5 mb-4">{props.title}</div>
                </div>
              </div>
              <div>
                {props.text}
              </div>
            </div>
            { RIGHT &&
              <div className="col">
                {props.children}
              </div>
            }
          </div>
        </div>
    );
}

export default HomepageTestimonial;
