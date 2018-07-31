import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService:UserService ,private tostr:ToastrService) { }

  ngOnInit() {
    this.userService.getData();
    this.resetForm();
  }


  onSubmit(userForm:NgForm){
    if(userForm.value.$key==null)
    this.userService.insertUser(userForm.value);
    else
    this.userService.updateUser(userForm.value);
    this.resetForm(userForm);
    this.tostr.success('Submitted Succcessfully');

  }

   resetForm(userForm?: NgForm) {
    if (userForm != null) 
    userForm.reset();
    this.userService.selectedUser = {
      $key: null,
      name: '',
      surname: '',
      adress: '',
      phone_number:0,
    }
  }

}
