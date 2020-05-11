import React, {useState} from 'react';

export default function SearchHotels({handleSearch}) {
    const [query, setQuery] = useState({ text: "" });

    function handleChange(event){
        setQuery({ text: event.target.value});
    }

    return (
        <div>
            <form onSubmit={event => handleSearch(event, query.text)}>
                <input type="text" placeholder="Search for hotels here…" onChange={event => handleChange(event)} />
            <input type="submit" value="search" />
            </form>
        </div>
    );
}
