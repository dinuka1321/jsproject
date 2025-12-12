'use strict';

const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchValue = document.querySelector('#query').value.trim();
  if (searchValue === '') return;

  resultsDiv.innerHTML = '';

  const url = `https://api.tvmaze.com/search/shows?q=${searchValue}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(tvShow => {
      const show = tvShow.show;
      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.textContent = show.name;

      const link = document.createElement('a');
      link.href = show.url;
      link.target = "_blank";
      link.textContent = "More details";

      const img = document.createElement('img');
      img.src = show.image
        ? show.image.medium
        : 'https://placehold.co/210x295?text=Not%20Found';
      img.alt = show.name;

      const summary = document.createElement('div');
      summary.innerHTML = show.summary || "No summary available.";

      article.appendChild(h2);
      article.appendChild(link);
      article.appendChild(img);
      article.appendChild(summary);

      resultsDiv.appendChild(article);
    });

  } catch (error) {
    console.error("Error:", error);
  }
});