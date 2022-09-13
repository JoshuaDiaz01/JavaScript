import { useParams } from "react-router-dom";

export const EditJoke = (props) => {
    //url route param matching : id
    const {id} = useParams();
    return <h2>Edit Joke id# {id}</h2>
};

export default EditJoke;