import React from "react";

const Fact = ({content}) => {
    return (<div className="trivia_box">
        <div className="trivia_box_text">Did you know?</div>
        <div className="trivia_box_content">{content}</div>
    </div>);
}

export default Fact