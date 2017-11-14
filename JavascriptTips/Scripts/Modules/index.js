//@ts-check
import { Person } from './Classes/Person';
import { Engineer } from './Classes/Engineer';

(function () {
    console.log("----------Person----------")
    let person = new Person("John", 24);
    person.introduceYourself();
    person.add(5, 7);
    console.log("--------------------------")

    console.log("---------Engineer---------")
    let engineer = new Engineer("Robert", 48, "Computer");
    engineer.introduceYourself();
    engineer.add(5, 7);
    console.log("--------------------------")
})();