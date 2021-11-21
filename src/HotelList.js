import React, { useState, useEffect } from 'react';
var axios = require("axios").default;

function HotelList(props) {
  
    const [apiResponse, setApiResponse] = useState([])

    var options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
          destinationId: '1506246',
          pageNumber: '1',
          pageSize: '25',
          checkIn: '2020-01-08',
          checkOut: '2020-01-15',
          adults1: '1',
          sortOrder: 'PRICE',
          locale: 'en_US',
          currency: 'USD'
        },
        headers: {
          'x-rapidapi-host': 'hotels4.p.rapidapi.com',
          'x-rapidapi-key': 'fc1f1ff2d3mshe2267e55a9681dfp1c29e0jsnfc471925dd78'
        }
      };
    
    useEffect(() => {
      axios.request(options).then(function (response) {
          setApiResponse(response.data.data.body.searchResults.results);
          console.log(response.data.data.body.searchResults.results);
      }).catch(function (error) {
          console.error(error);
      });
    }, []);

    return (
        <div>
          <ul>
            {apiResponse.map(item => (
                <li key={item.id}>
                    Name:
                       <span>{item.name}</span>
                    Stars: 
                       <span>{item.starRating}</span>
                </li>   
            ))}
            </ul>
        </div>
    );
}

export default HotelList;