var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(Name, Sex) {
        this._Name = Name;
        this._Sex = Sex;
    }
    Person.run = function (person) {
        return "大家好，我是" + person.Name;
    };
    Object.defineProperty(Person.prototype, "Sex", {
        get: function () {
            return this._Sex;
        },
        set: function (Sex) {
            this._Sex = Sex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (Name) {
            this._Name = Name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this, "zhangsan", true);
    }
    Object.defineProperty(Student.prototype, "Grade", {
        get: function () {
            return this._grade;
        },
        set: function (grade) {
            this._grade = grade;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Person));
var hukai = new Person('hukai', true);
alert(hukai.Name);
alert(Person.run(hukai));
var _student = new Student();
alert(Person.run(_student));
