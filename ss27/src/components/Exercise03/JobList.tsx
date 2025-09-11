export interface IJobDetail {
  id: number;
  title: string;
  description: string;
}

export const JobList: IJobDetail[] = [
  {
    id: 1,
    title: "Đi chợ",
    description: "Mua rau củ quả, thịt cá để nấu ăn",
  },
  {
    id: 2,
    title: "Học bài",
    description: "Học bài môn Toán và môn Văn",
  },
  {
    id: 3,
    title: "Rửa chén",
    description: "Rửa chén bát sau khi ăn",
  },
  {
    id: 4,
    title: "Đánh răng",
    description: "Đánh răng buổi sáng và buổi tối",
  },
];