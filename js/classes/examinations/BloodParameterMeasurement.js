import LaboratoryExamination from './LaboratoryExamination.js';
import Util from '../../util/util.js';

export default class BloodParameterMeasurement extends LaboratoryExamination {

    constructor(date = '', time = '', examinationTitle = '', value = 0, lastMealTime = '') {
        super(date, time);
        this._examinationTitle = examinationTitle;
        this._value = value;
        this._lastMealTime = lastMealTime;
    }

    get examinationTitle() {
        return this._examinationTitle;
    }

    set examinationTitle(examinationTitle) {
        this._examinationTitle = examinationTitle;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get lastMealTime() {
        return this._lastMealTime;
    }

    set lastMealTime(lastMealTime) {
        this._lastMealTime = lastMealTime;
    }
    
    examine(){
        this._value = Util.getRandomNumber(1, 30);
        this._lastMealTime = Util.getRandomTime();
    }

}