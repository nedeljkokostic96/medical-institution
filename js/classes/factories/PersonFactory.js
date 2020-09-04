import Doctor from '../persons/Doctor.js';
import Patient from '../persons/Patient.js';

export default class PersonFactory {
    
    getPerson(personType){
        if (personType === 'DOCTOR') {
            return new Doctor();
        }
        if (personType === 'PATIENT') {
            return new Patient();
        }
        return null;
    }

}