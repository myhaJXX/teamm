export interface IPost {
  id: string;
  body: string;
  author: string;
  members: string[];
  max: number | undefined;
}
