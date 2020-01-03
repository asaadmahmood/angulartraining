import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mystore';

  // ngOnInit() {
  //   this.db.list('names').snapshotChanges()
  //   .subscribe((res) => {
  //     this.names = res;
  //     res.map(item => {
  //       console.log(item.payload.val(), item.key);
  //     });
  //   });
  // }

  // createName() {
  //   this.db.list('names').push('Asaad');
  // }

  constructor(private db: AngularFireDatabase) {
  }
}
