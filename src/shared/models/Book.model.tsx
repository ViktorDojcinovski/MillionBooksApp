export default interface Book {
  id: string;
  name: string;
  genre: string;
  date: Date;
  author: { firstName: string; lastName: string; gender: string };
}
