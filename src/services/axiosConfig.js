import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzgyNWViOTAzMjdiODAwNTQyMTVmZGViNTE5MjVhMCIsInN1YiI' +
            '6IjVmZmVmZmZmMGZmMTVhMDAzZDVhZWE3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BpOaS3vXVJcQAzcOxv' +
            'MAlzEfM-bgNgR4EvHmIA7Uhto'
    }
});