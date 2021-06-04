import React from 'react'
import MovieComponent from './MovieComponent'

class MovieSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            moviesList:[],
            searchFor:"",
            isLoading:false
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchMovies = this.searchMovies.bind(this)
    }
    searchMovies(e){
        e.preventDefault()
        this.setState({isLoading:true})
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1f280a6dab0fca85753c1abfbcac1281&language=en-US&query=${this.state.searchFor}&page=1&include_adult=false`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({moviesList:data.results,isLoading:false})
        })
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({[name]:[value]})
    }
    render(){
        return(
            <div className="container out">
                <h1 className=" text-center mb-2 p-1">Movie Search Using React</h1>
                <div className="form-div">
                    <form onSubmit={this.searchMovies}>
                        <span>Movie Name</span>
                        <input 
                            type="text" 
                            name="searchFor" 
                            placeholder="i.e. Shutter Island"
                            onChange = {this.handleChange}
                            required
                        />
                        <button>Search</button>
                    </form>
                    <div className="container">
                    {
                        this.state.isLoading
                        ?<div className="loading">
                            <img 
                                src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" 
                                alt="Loading"
                                className="img img-responsive img-center " 
                            />
                        </div>
                        :this.state.moviesList.length>0?<MovieComponent data={this.state.moviesList}/>:""
                    }
                    </div>

                </div>
            </div>
        )
    }
}
export default MovieSearch