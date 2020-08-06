export class Todo {
  constructor(
    public text: string,
    public id?: number,
    public completado?: boolean
  ) {
    this.id = Math.random();
    this.completado = false;
  }
}
