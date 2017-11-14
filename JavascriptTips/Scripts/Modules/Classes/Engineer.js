//@ts-check

import { Person } from "./Person";

/**
* An Engineer
* @param {string} name - The engineer's name
* @param {number} age - The engineer's age
* @param {string} field - The engineer's field
*/
class Engineer extends Person {

    constructor(name, age, field) {
        super(name, age);
        this.field = field;
    }

    /**
     * Return the engineer's name and field
     * @returns {string}
     */
    introduceYourself() {
        return `Hi, my name is ${this.name} and I'm a ${this.field} Engineer`;
    }

    /**
     * Easy peasy lemon squeezy!!! Let me just grab my HP50G.
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    add(x, y) {
        console.log(x+y);
    }
}

export { Engineer };