'use strict';

const form = document.getElementById('searchForm');
const queryInput = document.getElementById('query');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = queryInput.value.trim();
    if (query === "") return;

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("=== Search Results ===");
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});