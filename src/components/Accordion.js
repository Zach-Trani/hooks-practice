import React from "react";

// only Accrodion will know which question is expanded: activeIndex

// helper method outside the body of the function component helps with organization.
const Accordion = ({ items }) => {
    const onTitleClick = (index) => {
        console.log('title clicked', index);
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
    </div>
};

export default Accordion;