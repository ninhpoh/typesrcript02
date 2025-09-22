export const addStudent = (student: Student): Action => ({
  type: "ADD_STUDENT",
  payload: student,
});

export const deleteStudent = (id: string): Action => ({
  type: "DELETE_STUDENT",
  payload: id,
});