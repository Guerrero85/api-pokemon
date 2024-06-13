type Pokemon = {
    name: string;
  };

export default interface ResultDTO<T> {
    items: T[];
}