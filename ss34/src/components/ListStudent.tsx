import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../store/actions";

function ListStudent() {
  const students = useSelector((state: any) => state.listStudent);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <table className=" table-auto ml-15 mt-2 mb-2 mr-2">
        <thead>
          <tr className=" border-1 border-b-indigo-500 border-t-white border-r-white border-l-white pb-2">
            <th className=" pr-15">#</th>
            <th className=" pr-20">Ma Sinh Vien</th>
            <th className=" pr-45">Ten Sinh Vien</th>
            <th className="pr-20">Tuoi</th>
            <th className="pr-20">Gioi tinh</th>
            <th className="pb-3">Hanh dong</th>
          </tr>
        </thead>
        <tbody>
          {students.map((member: any, index:number) => (
            <tr className=" border-1 border-b-indigo-500 border-t-white border-r-white border-l-white pb-2">
              <td>{index+1}</td>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.gender}</td>
              <td className="pb-3 pt-3">
                <div>
                  <button className=" p-1 bg-green-400 hover:bg-green-500 rounded-md mr-2">
                    Xem
                  </button>
                  <button className=" p-1 bg-amber-300 hover:bg-amber-400 rounded-md mr-2">
                    Sua
                  </button>
                  <button className=" p-1 bg-red-400 hover:bg-red-500 rounded-md" onClick={() => handleDelete(member.id)}>
                    Xoa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
