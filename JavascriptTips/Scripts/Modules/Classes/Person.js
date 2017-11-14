//@ts-check

export class Person {
    /**
     * A Person
     * @param {string} name
     * @param {number} age
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Return the person's name
     * @returns {string}
     */    
    introduceYourself() {
        return `Hi, my name is ${this.name}`;
    }

    /**
     * Return chit chat talk
     * @returns {string}
     */
    talk() {
        return"Hey beauty!!!";
    }

    /**
     * Do you really think that I know math???
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    add(x, y) {
        return Math.floor(Math.random() * 50);
    }
}