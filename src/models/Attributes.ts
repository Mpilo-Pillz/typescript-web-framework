import { UserProps } from "./User";
export class Attributes<Type> {
  constructor(private data: Type) {}

  get<KeyOfObject extends keyof Type>(key: KeyOfObject): Type[KeyOfObject] {
    return this.data[key];
  }

  set(update: Type): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: "Mpillz",
});

const name = attrs.get("name");
const age = attrs.get("age");
const id = attrs.get("id");

/*
in the above we are using constraints to limit the type <K> can be. we limit it to the below
* if key is name then type is string
* if key is age then type is number
* if key is id then type is number

* this saves us from saying | string | number saving us from type guard (type of blah === string) and type assertion ( const pillz as string)
*/
