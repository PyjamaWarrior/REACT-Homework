import React from 'react';
import styles from "./FilmsItem.module.css";

export const FilmsItem = (film) => {
    const {movie_genres_list, title, overview, poster_path, release_date, vote_average, vote_count} = film;

    const imgBuilder = (poster_path, size = 500) => `https://image.tmdb.org/t/p/w${size}${poster_path}`
    
    return (
        <div className={styles.filmsItem} >
            <div style={
                {
                    height: 450,
                    width: '100%',
                    backgroundImage: `url(${imgBuilder(poster_path)})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }>
                {/*<img src={`https://image.tmdb.org/t/p/w200${poster_path}`}*/}
                {/*     alt={`whoops :( there must be poster of ${original_title}`}/>*/}
            </div>
            <div>
                <h2>{title}</h2>
                <h4>
                    {movie_genres_list.map(({id, name}, index) =>
                            <span key={id}>{name} {index < movie_genres_list.length - 1 && '-'} </span>
                    )}
                </h4>
                <span>Rating: {vote_average} (total votes: {vote_count})</span>
                <p>{overview}</p>
                <span>Release date: {release_date}</span>
            </div>
        </div>
    )
}