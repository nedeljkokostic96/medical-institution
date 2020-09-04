export default class LaboratoryExamination{

    constructor(date = '', time = ''){
        this._date = date;
        this._time = time;
    }

    get date(){
        return this._date;
    }

    set date(date){
        this._date = date;
    }

    get time(){
        return this._time;
    }

    set time(time){
        this._time = time;
    }

}