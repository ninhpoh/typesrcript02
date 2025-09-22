import Left from "./Left";
import StudentForm from "./Right";

function Student() {
    return ( 
        <div className="flex justify-around pt-10">
            <Left/>
            <StudentForm/>
        </div>
     );
}

export default Student;