import Person from './Person.js';
import LabaratoryExaminationFactory from '../factories/LaboratoryExaminationFactory.js';
import Util from '../../util/util.js';

export default class Doctor extends Person{

    constructor(firstName = '', lastName = '', specialty = ''){
        super(firstName, lastName);
        this._specialty = specialty;
        this._patients = [];
    }

    get specialty(){
        return this._specialty;
    }

    set specialty(specialty = ''){
        this._specialty = specialty;
    }

    get patients(){
        return this._patients;
    }

    checkIfCreated(){
        //Util.logContent(`[${Util.currentDateString()} ${Util.currentTimeString()}] Kreiran doktor "${super.checkIfCreated()}"`);
        return 'Doktor ' + super.checkIfCreated() + " kreiran!";
    }

    addPatient(patient){
        this._patients.push(patient);
    }

    scheduleExamination(patient, examinationType, examinationTitle){
        const examFactory = new LabaratoryExaminationFactory();
        let examination = examFactory.getExamination(examinationType);
        examination.examinationTitle = examinationTitle;
        examination.date = Util.getRandomDate();
        examination.time = Util.getRandomTime();
        patient.scheduleExamination(examination);
    }

}