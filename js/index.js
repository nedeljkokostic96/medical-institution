import PersonFactory from './classes/factories/PersonFactory.js';

const personFactory = new PersonFactory();

const doctor = personFactory.getPerson('DOCTOR');
doctor.firstName = 'Milan';
doctor.lastName = 'Milanovic';
doctor.specialty = 'Surgeon';
console.log(doctor.checkIfCreated());
console.log(doctor);
console.log('---------------------------------------------------------------------------------------------------');

const patient = personFactory.getPerson('PATIENT');
patient.firstName = 'Dragan';
patient.lastName = 'Draganic';
patient.jmbg = '12321321321332';
patient.healthRecordNumber = '213/17';
console.log(patient.checkIfCreated());
console.log(patient);
console.log('------------------------------------------------------------------------------------------------------------------------------');

patient.chooseDoctor(doctor);
console.log(patient);
console.log('-------------------------------------------------------------------------------------------------------------------------------------------');

doctor.scheduleExamination(patient, "PARAMETER", 'Mjerenje nivoa secera u krvi');
console.log('-------------------------------------------------------------------------------------------------------------------------------------------');

doctor.scheduleExamination(patient, "PRESSURE", 'Mjerenje krvnog pritiska');
console.log('-------------------------------------------------------------------------------------------------------------------------------------------');

console.log('Pacijent sa zakazanim rezultatima!');
console.log(patient);
console.log('------------------------------------------------------------------------------------------------------------------------------');


patient.makeExamination();
console.log('------------------------------------------------------------------------------------------------------------------------------');

patient.makeExamination();
console.log('------------------------------------------------------------------------------------------------------------------------------');

