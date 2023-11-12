import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void { }

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe( data => {
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }
}