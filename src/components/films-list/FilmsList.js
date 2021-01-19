import React from 'react';
import {FilmsItem} from "../films-item/FilmsItem";
import styles from "./FilmsList.module.css";

export const FilmsList = ({films, onFilmClick}) => {
    return (
        <div className={styles.filmsList}>
            {
                films.map(film =>
                    <div className={styles.filmsItem__wrapper} onClick={() => onFilmClick(film)} key={film.id}>
                        <FilmsItem {...film}/>
                    </div>
                )
            }
        </div>
    )
}