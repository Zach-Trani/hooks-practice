import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

// useEffect can be configured in 3 different ways:
// 1. Component rendered for the first time only. []
// 2. Component rendered for the first time and whenever it rerenders. nothing
// 3. Component rendered for the first time and (whenever it rerenders and some piece of data has changed). [data]

const Search = () => {
    // new piece of state
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });


            setResults(data.query.search);
        };

        search();
    }, [term]); // second argument here

    // build a list out of the search results
    const renderedResults = results.map((result) => {
        return (
           <div key={result.pageid} className='item'>
               <div className='content'>
                   <div className='header'>
                       {result.title}
                   </div>
                   <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
               </div>
           </div>
        );
    });

return (
    <div>
        <div className='ui form'>
            <div className='field'>
                <label>Enter Search Term</label>
                <input
                    // props
                    value={term}
                    // value for the setTerm
                    onChange={(event) => setTerm(event.target.value)}
                    className='input' />
            </div>
        </div>
        <div className='ui celled list'>
            {renderedResults}
        </div>
    </div>
);
};

export default Search;