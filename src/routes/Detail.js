import { useState,useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = useCallback(
        async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovie(json.data.movie);
            setLoading(false);
        }, [id])
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div>
            <h1>{loading ? "Loading..." : "Detail"}</h1>
        </div>
    );
}

export default Detail;