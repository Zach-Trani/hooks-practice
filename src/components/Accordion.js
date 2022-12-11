import React, { useState } from "react";

// only Accordion will know which question is expanded: activeIndex

// helper method outside the body of the function component helps with organization.
const Accordion = ({ items }) => {
    // array destructuring
    // [piece-of-state, function-to-change-this-piece-of-state] = useState(initial-value-for-this-piece-of-state) <-- standard across the state hook
    // could be a counter: const [counter, setCounter] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);
    // setter function updates state & causes component to rerender
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            // semantic ui places an extra border when we use a div here, therefore React.Fragment is used.
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    // console log here and receive the item index.
                    // wrapping with an arrow function invokes a function when onClick is clicked, otherwise it runs on the browser loading.
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;