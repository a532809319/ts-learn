class Person{
    constructor(Name:string,Sex:boolean) {
        this._Name = Name;
        this._Sex = Sex;
    }
    static run(person:Person) {
        return "大家好，我是" + person.Name;
    }
    private  _Name: string;
    private  _Sex: boolean;
    Age: string;
    get Sex() {
        return this._Sex;
    }
    set Sex(Sex: boolean) {
        this._Sex = Sex;
    }
    get Name() {
        return this._Name;
    }
    set Name(Name:string) {
        this._Name = Name;
    }

}


class Student extends Person {
    constructor() {
        super("zhangsan", true);
    }
    private _grade: string;
    get Grade() {
        return this._grade
    }
    set Grade(grade: string) {
        this._grade = grade;
    }
}
var hukai = new Person('hukai', true);
alert(hukai.Name);
alert(Person.run(hukai))
var _student = new Student()
alert(Person.run(_student))