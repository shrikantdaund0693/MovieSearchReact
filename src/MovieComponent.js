import Movie from "./Movie"

function MovieComponent(props){
    const movieList = props.data.map(item => <Movie key={item.id} movie={item}/>)
    return(
        <div>
            {movieList}
        </div>
    )
}

export default MovieComponent