import { useParams } from "react-router-dom";

export const OneJoke = (props) => {
    //get :id part from url parameter data
    const {id} = useParams();
    return <h2>Joke - id: {id} </h2>;
}

export default OneJoke;