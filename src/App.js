import React from "react";
import Accordion from './components/Accordion';
import Search from './components/Search'

const items = [
    {
        title: 'what is react?',
        content: 'react is a front end js framework'
    },
    {
        title: 'why use react?',
        content: 'react is a favorite js library among engineers'
    },
    {
        title: 'how do you use react?',
        content: 'you use react by creating components'
    },

];

export default () => {
    return (
        <div>
            <Search />
        </div>
    )
};