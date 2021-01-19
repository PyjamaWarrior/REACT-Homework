import React from 'react';

export const mergeMoviesWithTheirGenres = (movies, genres) => {
    return  movies.map(movie => {
        const {genre_ids} = movie;

        const movie_genres_list = genre_ids.map(id => genres.find(el => el.id === id));

        return {
            ...movie,
            movie_genres_list
        }
    });
}