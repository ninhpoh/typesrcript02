const initialState = [
  {
    id: 1,
    name: 'Pizza',
    price: 10,
    quantity: 20,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uVXlHUxZXUD59QHMLuLxetwntHZEkAdIsxJQcLLegPq0wAgqMbcgf-rRgDJ0UaCaEBU&usqp=CAU',
  },
  {
    id: 2,
    name: 'Bread',
    price: 5,
    quantity: 15,
    image: 'https://cdn-i2.congthuong.vn/stores/news_dataimages/2024/032024/16/09/top-1-mon-sandwich-ngon-nhat-the-gioi-goi-ten-banh-my-viet-nam1710498007-182420240316092132.jpg?rt=20240316092204',
  },
  {
    id: 3,
    name: 'Hamburger',
    price: 8,
    quantity: 10,
    image: 'https://junger.vn/medias/jungerb/images/t76e-hero.jpg',
  },
  {
    id: 4,
    name: 'Cake',
    price: 12,
    quantity: 5,
    image: 'https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg',
  },
];

export const productReducer = (state = initialState, action: any) => {
  return state;
};