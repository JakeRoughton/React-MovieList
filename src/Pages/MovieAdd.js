import { useState } from "react";

const MovieAdd = (props) =>{
    const {handleAddMovie} = props;
    const [title, setTitle] = useState("")
    const [actors, setActors] = useState("")
    const [director, setDirector] = useState("")

    return (
        <div>
            <h1>
                Movie Add Page
            </h1>

            <label>Title:</label>
            <input type="text" onChange={(e)=>
                    setTitle(e.target.value)
            }/>
            <label>Actors:</label>
            <input type="text" onChange={(e)=>
                    setActors(e.target.value)
            }/>
            <label>Director:</label>
            <input type="text" onChange={(e)=>
                    setDirector(e.target.value)
            }/>
            <br/>
            <button onClick={()=>{
                    handleAddMovie(title,actors,director)
            }}>AddMovie</button>
        </div>
    )
}

export default MovieAdd