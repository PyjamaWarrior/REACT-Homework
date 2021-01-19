import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {LoadingIndicator} from "../../components";
import {toast} from 'react-toastify';
import styles from "./MovieDetails.module.css";

export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {id} = useParams();

    const fetchFilmDetails = async () => {
        try {
            setIsLoading(true);

            const data = await moviesService.getMovieDetailsById(id);
            setFilmDetails(data)
        } catch (e) {
            console.error(e)
            toast.error('Something was wrong :(')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchFilmDetails();
    }, []);

    if (isLoading || !filmDetails || isLoading === null) {
        return <LoadingIndicator/>
    }

    return (
        <div className={styles.filmDetails}>
            <img src={`https://image.tmdb.org/t/p/w400${filmDetails.poster_path}`} alt="here must be poster"/>
            <h1>{filmDetails.title}</h1>
            <h2>Original title: {filmDetails.original_title}</h2>
            <h3>{filmDetails.genres.map((value, index) =>
                <span key={value.id}>{value.name} {index < filmDetails.genres.length - 1 && '- '}</span>
            )}</h3>
            {!!filmDetails.homepage && <span>Website: <a href={filmDetails.homepage}>{filmDetails.homepage}</a></span>}
            <p>{filmDetails.overview}</p>
            <p>Rating: {filmDetails.vote_average} (total votes: {filmDetails.vote_count})</p>
            <span>Release date: {filmDetails.release_date}</span>
        </div>
    )
}