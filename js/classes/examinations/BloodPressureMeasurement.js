import LaboratoryExamination from './LaboratoryExamination.js';
import Util from '../../util/util.js';

export default class BloodPressureMeasurement extends LaboratoryExamination{

    constructor(date = '', time = '', examinationTitle = '', highValue = 0, lowValue = 0, pulse = 0) {
        super(date, time);
        this._examinationTitle = examinationTitle;
        this._highValue = highValue;
        this._lowValue = lowValue;
        this._pulse = pulse;
    }

    get examinationTitle(){
        return this._examinationTitle;
    }

    set examinationTitle(examinationTitle){
        this._examinationTitle = examinationTitle;
    }

    get highValue(){
        return this._highValue;
    }

    set highValue(highValue){
        this._highValue = highValue;
    }

    get lowValue(){
        return this._lowValue;
    }

    set lowValue(lowValue){
        this._lowValue = lowValue;
    }

    get pulse(){
        return this._pulse;
    }

    set pulse(pulse){
        this._pulse = pulse;
    }

    examine(){
        this._highValue = Util.getRandomNumber(100, 300);
        this._lowValue = Util.getRandomNumber(50, 120);
        this._pulse = Util.getRandomNumber(60, 120);
    }
    
}