'use strict';

const form = document.getElementById('searchForm');
const queryInput = document.getElementById('query');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const searchValue = queryInput.value.trim();
    if (searchValue === '') return;

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchValue)}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("Search results:", result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});