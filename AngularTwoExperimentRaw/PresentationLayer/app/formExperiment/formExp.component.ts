import { Component } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
    selector: 'pm-form',
    templateUrl: 'app/formExperiment/formExp.component.html'
})




export class FormExperimentComponent {
    formTitle: string = 'This is panel title';
    formFooter: string = 'this is panel footer';
    hasLanguageError: boolean = false;
    languages = ['English', 'Spanish', 'Bengali', 'Others'];

    model = new Employee('kamrul', 'lina',true,'w2','default');

    private firstLetterToUpperCase(value: string) {
        if (value.length > 0)
            this.model.firstName = value.toUpperCase(); /*value.charAt(0).toUpperCase() + value.slice(1);*/
        else
            this.model.firstName = value;
    }
    private validateLanguage(event: string) {
        if (this.model.language === 'default')
            this.hasLanguageError = true;
        else
            this.hasLanguageError = false; 
    }
}