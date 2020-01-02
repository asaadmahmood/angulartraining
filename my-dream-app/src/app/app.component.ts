import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { Post } from './interface/posts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  randomUsers: any;
  lastItem = '';
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  cities;
  posts: Post[];

  constructor(private appService: AppService) {
    this.cities = appService.getCities();
    appService.name = 'Asaad';
    appService.getPosts()
    this.appService.getPosts()
    .subscribe((res: Post[]) => {
      this.posts = res;
    }, err => {
      console.log('This is an error.');
    });
  }

  myPost: Post = {
    userId: 3,
    title: 'title',
    body: 'my body',
  }

  submitPost() {
    this.appService.createPost(this.myPost).subscribe((res: Post) => {
      this.posts.unshift(res);
    });
  }


  updateEvent(value) {
    this.lastItem = value;
  }
}

