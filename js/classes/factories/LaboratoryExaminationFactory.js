import BloodParameterMeasurement from '../examinations/BloodParameterMeasurement.js';
import BloodPressureMeasurement from '../examinations/BloodPressureMeasurement.js';

export default class LaboratoryExaminationFactory{

    getExamination(examination){

        if (examination === 'PARAMETER') {
            return new BloodParameterMeasurement();
        }
        if (examination === 'PRESSURE') {
            return new BloodPressureMeasurement();
        }
        return null;
    }
    
}