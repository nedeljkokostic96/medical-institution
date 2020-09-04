import Person from './Person.js';
import BloodPressureMesurement from '../examinations/BloodPressureMeasurement.js';

export default class Patient extends Person{

    constructor(firstName = '', lastName = '', jmbg = '', healthRecordNumber = '', doctor = ''){
        super(firstName, lastName);
        this._jmbg = jmbg;
        this._healthRecordNumber = healthRecordNumber;
        this._doctor = doctor;
        this._scheduledExaminations = [];
    }

    get jmbg(){
        return this._jmbg;
    }

    set jmbg(jmbg){
        this._jmbg = jmbg;
    }

    get healthRecordNumber(){
        return this._healthRecordNumber;
    }

    set healthRecordNumber(healthRecordNumber){
        this._healthRecordNumber = healthRecordNumber;
    }

    get doctor(){
        return this._doctor;
    }

    set doctor(doctor){
        this._doctor = doctor;
    }

    checkIfCreated(){
        return 'Pacijent ' + super.checkIfCreated() + ' kreiran!';
    }

    chooseDoctor(doctor){
        this._doctor = doctor.firstName + ' ' + doctor.lastName;
        doctor.addPatient(this);
        console.log('Pacijent ' + this._firstName + ' ' + this._lastName + ' je odabrao doktora: ' + this._doctor);
    }

    scheduleExamination(examination){
        this._scheduledExaminations.push(examination);
        console.log('Doktor koji je zakazao: ' + this._doctor + '\n' + examination.examinationTitle + ' uspijesno zakazan za pacijenta: ' + this._firstName + ' ' + this._lastName + ' \nDatum: ' + examination.date + ' \nVrijeme: ' + examination.time + "h");
        console.log(examination);
    }

    makeExamination(){
        let examination = this._scheduledExaminations.shift();
        examination.examine();
        console.log('Pacijent ' + this._firstName + ' ' + this._lastName + ' je obavio pregled: ' + examination.examinationTitle + '\n');
        console.log('Rezultati:');
        if (examination instanceof BloodPressureMesurement) {
            console.log(`Niski: ${examination.lowValue}\nVisoki: ${examination.highValue}\nPuls: ${examination.pulse}`);
        } else {
            console.log(`Vrijednost: ${examination.value}\nVrijeme zadnjeg obroka: ${examination.lastMealTime}h`);
        }
    }

}