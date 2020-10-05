import React from 'react';

function HomepageTestimonial(props) {
    let LEFT, RIGHT;
    props.videoPosition === "right" ? RIGHT = true : LEFT = true;
    
    return (
        <div className="mx-medium mb-5">
          <div className="row">
            { LEFT &&
              <div>
                <div className="col">
                  {props.children}
                </div>
                <div className="spacer"> </div>
              </div>
            }
            <div className="col">
              <div className="d-flex flex-row">
                <img src={props.image} alt={props.name} className="profile mr-3" />
                <div>
                  <div className="h4">{props.name} | {props.company}</div>
                  <div className="h5 mb-4">{props.title}</div>
                </div>
              </div>
              <div className="text-left">
                <p><em>{props.text}</em></p>
              </div>
            </div>
            { RIGHT &&
              <div>
                <div className="spacer"> </div>
                <div className="col">
                  {props.children}
                </div>
              </div>
            }
          </div>
        </div>
    );
}

export default HomepageTestimonial;
