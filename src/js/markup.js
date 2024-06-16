export function createMarkup(movies) {
  return movies
    .map(
      movie =>
        `<div class="movie-card card">
            <p class="movie-name name"><span class="info-accent">Name:</span> ${movie.title}</span>
            <p class="movie-year year"><span class="info-accent">Year:</span> ${movie.year}</p>
        </div>`
    )
    .join('');
}
