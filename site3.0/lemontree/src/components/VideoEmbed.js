import React from 'react';


function VideoEmbed(props) {
    return (
        <iframe src={props.videoLink} width="480" height="270" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>

    );
}

export default VideoEmbed;
