import React, {useState, useEffect} from 'react';
import {FilmsList, LoadingIndicator, PaginationWrapper} from "../../components";
import {moviesService, genresService} from "../../services";
import {useHistory} from "react-router-dom";
import {toast} from 'react-toastify';
import {mergeMoviesWithTheirGenres} from "../../utils";

export const Home = () => {
    const history = useHistory();
    const [moviesData, setMoviesData] = useState(null);
    const [genresList, setGenresList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = (params) => {
        try {
            return moviesService.getMovies(params)
        } catch (e) {
            console.error(e)
        }
    };

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres();
            return genres
        } catch (e) {
            console.error(e)
        }
    }

    const fetchMoviesData = async () => {
        const request =  [fetchMovies(), fetchGenres()];

        try {
            setIsLoading(true);

            const [{results, ...rest}, genres] = await Promise.all(request);

            setMoviesData({movies: mergeMoviesWithTheirGenres(results, genres), ...rest});
            setGenresList(genres)
        } catch (e) {
            console.error(e);
            toast.error('Something was wrong :(')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMoviesData()
    }, []);


    const onFilmClick = (film) => history.push(`/movie/${film.id}`)

    const clickHandler = async (page) => {
        const {results, ...rest} = await fetchMovies({page});

        setMoviesData({
            movies: mergeMoviesWithTheirGenres(results, genresList),
            ...rest
        })
    }

    return (
        <>
            {isLoading || isLoading === null ? <LoadingIndicator/> : (
                <PaginationWrapper
                    currentPage={moviesData.page}
                    totalPages={moviesData.total_pages}
                    onFirstClick={clickHandler}
                    onPrevClick={clickHandler}
                    onNextClick={clickHandler}
                    onLastClick={clickHandler}
                >
                    <FilmsList onFilmClick={onFilmClick} films={moviesData.movies}/>
                </PaginationWrapper>
            )}
        </>
    )
}
// export const Home = () => {
//     const history = useHistory();
//     const [moviesList, setMoviesList] = useState([]);
//     const [genresList, setGenresList] = useState([]);
//     const [movieData, setMovieData] = useState(null);
//     const [isLoading, setIsLoading] = useState(null);
//
//     const fetchMovies = async (params) => {
//         try {
//             const {page, results, total_pages, total_results} = await moviesService.getMovies(params);
//             setMovieData({page, total_pages});
//             return results
//         } catch (e) {
//             console.error(e)
//         }
//     };
//
//     const fetchGenres = async () => {
//         try {
//             const {genres} = await genresService.getGenres();
//             return genres
//         } catch (e) {
//             console.error(e)
//         }
//     }
//
//     const fetchMoviesData = async (movieParams) => {
//         const request = genresList.length ? [fetchMovies(movieParams)] : [fetchMovies(movieParams), fetchGenres()];
//
//         try {
//             setIsLoading(true);
//
//             const [movies, genres = genresList] = await Promise.all(request);
//             const mergeMoviesWithTheirGenres = movies.map(movie => {
//                 const {genre_ids} = movie;
//
//                 const movie_genres_list = genre_ids.map(id => genres.find(el => el.id === id));
//
//                 return {
//                     ...movie,
//                     movie_genres_list
//                 }
//             });
//
//             setMoviesList(mergeMoviesWithTheirGenres);
//             setGenresList(genres)
//         } catch (e) {
//             console.error(e);
//             toast.error('Something was wrong :(')
//         } finally {
//             setIsLoading(false);
//         }
//     }
//
//     useEffect(() => {
//         fetchMoviesData()
//     }, []);
//
//
//     const onFilmClick = (film) => history.push(`/movie/${film.id}`)
//
//     const clickHandler = (page) => fetchMoviesData({page});
//
//     return (
//         <>
//             {isLoading || isLoading === null ? <LoadingIndicator/> : (
//                 <PaginationWrapper
//                     currentPage={movieData.page}
//                     totalPages={movieData.total_pages}
//                     onFirstClick={clickHandler}
//                     onPrevClick={clickHandler}
//                     onNextClick={clickHandler}
//                     onLastClick={clickHandler}
//                 >
//                     <FilmsList onFilmClick={onFilmClick} films={moviesList}/>
//                 </PaginationWrapper>
//             )}
//         </>
//     )
// }