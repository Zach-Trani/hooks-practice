import React, { useState } from "react";

// only Accrodion will know which question is expanded: activeIndex

// helper method outside the body of the function component helps with organization.
const Accordion = ({ items }) => {
    // array destructuring
    // [piece-of-state, function-to-change-this-piece-of-state] = useState(initial-value-for-this-piece-of-state)
    const [activeIndex, setActiveIndex] = useState(null);
    // setter function updates state & causes component to rerender
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        return (
            // semantic ui places an extra border when we use a div here, therefore Rect.Fragment is used.
            <React.Fragment key={item.title}>
                <div
                    className="title active"
                    // console log here and receive the item index.
                    // wrapping with an arrow function invokes a function when onClick is clicked, otherwise it runs on the browser loading.
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>
};

export default Accordion;