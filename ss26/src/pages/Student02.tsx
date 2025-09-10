import { useParams } from "react-router-dom";

function Student02() {
    const { name } = useParams<{ name: string }>();
    return ( 
        <>
            <p>name = {name}</p>
        </>
     );
}

export default Student02;