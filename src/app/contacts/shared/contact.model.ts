export class Contact {
  constructor(
    public _id: string,
    public company: string,
    public firstName: string,
    public lastName: string,
    public street: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string,
    public email: string
  ) {}
}
