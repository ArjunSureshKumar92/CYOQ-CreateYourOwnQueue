import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-create-queue',
    template: `
    <div>
        <app-navbar></app-navbar>
    </div>
    <form [formGroup]="angForm" (ngSubmit)="onSubmit()" action="http://localhost:3000/admin/{{adminId}}/queue/create" method="POST" #form>
        <button (click)="close()" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="form-group">
            <label for="name">Queue name</label>
            <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
        </div>
        <div class="form-group">
            <label for="name">Description</label>
            <input type="text" class="form-control" formControlName="description" id="description" name="description" />
        </div>
        <div class="form-group row justify-content-center">
            <div class="col-xs">
                <label for="startTime">Start time</label><br>
                <input type="time" formControlName="startTime" name="time" id="time" />
            </div>
            <div class="col-xs offset-md-3">
                <label for="closeTime">Closing time</label><br>
                <input type="time" formControlName="closeTime" name="time" id="time" />
            </div>
        </div>

        <label>Moderators</label>
        <div formArrayName="moderator" *ngFor="let mod of moderators; let i = index">
            <input type="checkbox" [formControlName]="i" name="moderator" value="{{moderators[i].moderatorId}}" (change)="onChangeCategory($event, mod)" /> {{moderators[i].name}}
        </div>

        <div hidden>
            <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        </div>
        <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Create Queue" />
    </form> `


})
export class CreateQueueComponent implements OnInit {
    startTime: Date = new Date();
    closeTime: Date = new Date();
    companyId: String = '';
    adminId: String = '';
    angForm: FormGroup;
    moderators: any;
    selectedModerators: string[] = [];

    constructor(private location: Location, private fb: FormBuilder, private qs: QueueService) {
        this.startTime.setHours(9, 0, 0, 0);
        this.closeTime.setHours(17, 0, 0, 0);
        this.companyId = this.qs.companyId;
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getModerators();
    }

    ngOnInit() { }

    close() {
        this.location.back();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            startTime: ['', Validators.required],
            closeTime: ['', Validators.required]
        });
        this.angForm.get('startTime').setValue('09:00');
        this.angForm.get('closeTime').setValue('17:00');
    }

    getModerators() {
        this.qs.getModerators().subscribe(
            res => {
                this.moderators = res['response'];
                this.setValues();
            },
            err => { console.log(err); },
            () => { console.log('Retrieved moderators'); }
        );
    }

    setValues() {
        this.angForm.addControl('moderator', new FormArray(this.moderators.map(mod => new FormControl(false))));
    }


    onSubmit() {
        var arrayControl = this.angForm.get('moderator') as FormArray;
        for (let i = 0; i < arrayControl.controls.length; i++) {
            console.log(arrayControl.controls[i].value);
            if (arrayControl.controls[i].value === true) {
                console.log("added");
                this.selectedModerators.push(this.moderators[i].moderatorId);
            }
        }
        console.log(this.selectedModerators);
        const data = {
            'name': this.angForm.get('name').value,
            'description': this.angForm.get('description').value,
            'time': [this.angForm.get('startTime').value, this.angForm.get('closeTime').value,],
            'moderator': this.selectedModerators,
            'companyId': this.companyId
        }
        this.qs.createQueue(data).subscribe(
            res => {
                this.location.back();
                console.log('Queue created.');
            },
            err => { console.log(err); }
        )
    }

    onChangeCategory(event, mod: any) { // Use appropriate model type instead of any

    }
}
