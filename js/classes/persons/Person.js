
export default class Person{
    
    constructor(firstName = '', lastName = ''){
        if (this.constructor === Person){
            throw new TypeError('Can not construct object from class Person!');
        }
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName = ''){
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName = ''){
        this._lastName = lastName;
    }

    checkIfCreated(){
        return this._firstName + ' ' + this._lastName;
    }
}