import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Input() mainTitle;
  @Output() listUpdateEvent = new EventEmitter();

  newStudentId = '';
  newStudentName = '';
  newStudentBatch = '';
  email = 'asaad@google.com'
  newStudent = {
    id: this.newStudentId,
    name: this.newStudentName,
    batch: this.newStudentBatch,
    pass: null,
    fail: null,
  };

  students = [
    { id: 'am02266', name: 'Asaad Mahmood', batch: '2020', pass: null, fail: null },
    { id: 'bm02382', name: 'Babar Mustafa', batch: '2022', pass: null, fail: null },
    { id: 'kp39712', name: 'Kashif Parvez', batch: '2021', pass: null, fail: null },
  ];

  passStudent(student) {
    student.pass = true;
    student.fail = false;
  }

  failStudent(student) {
    student.pass = false;
    student.fail = true;
  }

  removeStudent(student) {
    var studentIndex = this.students.indexOf(student);
    this.students.splice(studentIndex, 1);
  }

  submitForm(form) {
    console.log(form);
    this.newStudent = {
      id: form.controls.newStudentId.value,
      name: form.controls.newStudentName.value,
      batch: form.controls.newStudentBatch.value,
      pass: null,
      fail: null,
    };
    this.students.push(this.newStudent);
    form.reset();
  }

  enterPressed() {
    this.listUpdateEvent.emit(this.email);
    this.email = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
