import { Injectable } from '@angular/core';
import { User} from './user.model'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();


  constructor(private firebase :AngularFireDatabase) { }

  getData(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }
 //MODULDEN(Userdan user objesi türettik)
  //push metodu ile veri ekledik
  insertUser(user : User)
  {
    this.userList.push({
      name: user.name,
      surname: user.surname,
      adress: user.adress,
      phone_number: user.phone_number
    });
  }

//bir key verdik ve altındaki bilgileri güncelle dedik
updateUser(user : User){
  this.userList.update(user.$key,
    {
      name: user.name,
      surname: user.surname,
      adress: user.adress,
      phone_number: user.phone_number
    });
}
deleteUser($key:string){
  this.userList.remove($key);
}
}
