
import StudentItem from './StudentItem';

function StudentList()  {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <StudentItem/>
    </div>
  );
};

export default StudentList;
