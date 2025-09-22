const initStudent = [
    {
        id: "SV001",
        name: 'Tran An Ninh',
        age: 19,
        gender: "Nam",
        birth: '26/08/2006',
        birthplace: 'Hung Yen',
        address: 'Bat Trang'
    },
    {
        id: "SV002",
        name: 'Nguyen Thi Mai',
        age: 20,
        gender: "Nữ",
        birth: '15/03/2005',
        birthplace: 'Ha Noi',
        address: 'Dong Da'
    },
    {
        id: "SV003",
        name: 'Le Van Minh',
        age: 21,
        gender: "Nam",
        birth: '02/11/2004',
        birthplace: 'Hai Phong',
        address: 'Lach Tray'
    },
    {
        id: "SV004",
        name: 'Pham Quynh Anh',
        age: 18,
        gender: "Nữ",
        birth: '09/07/2007',
        birthplace: 'Da Nang',
        address: 'Hai Chau'
    },
    {
        id: "SV005",
        name: 'Hoang Gia Bao',
        age: 22,
        gender: "Nam",
        birth: '30/01/2003',
        birthplace: 'Can Tho',
        address: 'Ninh Kieu'
    }
];

export type Student = {
  id: string;
  name: string;
  age: number;
  gender: string;
  birth: string;
  birthplace: string;
  address: string;
};

type Action = [
    { type: "ADD_STUDENT"; payload?: Student }
  | { type: "DELETE_STUDENT"; payload?: string }
]

export const studentReducer = (state: Student[] = initStudent, action: Action): Student[] => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "DELETE_STUDENT":
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

