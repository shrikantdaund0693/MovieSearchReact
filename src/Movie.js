function Movie(props){
    return(
        <div className="container">
            <div className="row inner">
                <div className="col-xs-12 col-lg-4 col-md-6 movie-banner">
                    <img
                        src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+props.movie.poster_path}
                        alt={props.movie.title}
                        className="img img-responsive movie-img"
                    />
                </div>
                <div className="col-xs-12 col-lg-8 col-md-6 movie-info">
                    <h2 className="movie-name">{props.movie.title}</h2>
                    <p className="heading-name">Release Date: {props.movie.release_date}</p>
                    <p className="heading-name">Rating: {props.movie.vote_average}</p>
                    <p>{props.movie.overview}</p>
                </div>

            </div>
        </div>
    )
}

export default Movie