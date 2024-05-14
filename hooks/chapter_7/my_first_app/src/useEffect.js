import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios


function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                console.log(res.data.items);
                setData(res.data.items)
            });

    }, [searchTerm])
    return (
        <div>
            {isLoading &&
                <h4>Getting data...</h4>
            }
        </div>
    );
}