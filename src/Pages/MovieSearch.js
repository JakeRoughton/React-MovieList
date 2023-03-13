import { useOutletContext, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom";

    const MovieSearch = () => {

        //Access router context and params passed
        const [movieListingPage] = useOutletContext();
        const navigate = useParams();

        //get movie search from GET parameter passed
        return(
            <div>
                <h1>Movie Search Page</h1>
                <select onChange={(e)=>{
                    navigate('/pages/MovieSearch/:filmTitle')
                }}>
                    <option></option>
                    {movieListingPage.map((movieListing)=>{
                        return <option value ={movieListing.title}> </option>
                    })}
                </select>

                <Outlet context={[movieListingPage]}/>
        </div>
    )
}

export default MovieSearch