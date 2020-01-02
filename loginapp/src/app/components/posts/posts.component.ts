import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  newPost: Post;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: Post[]) => {
      this.posts = res;
    });
  }

  submitPost(form) {

    if(!this.posts) {
      this.getPosts();
    }

    this.newPost = {
      userId: form.value.userId,
      title: form.value.title,
      body: form.value.body,
    }

    this.postsService.createPost(this.newPost).subscribe((res: Post) => {
      this.posts.unshift(res);
      form.reset();
    });
  }

}
