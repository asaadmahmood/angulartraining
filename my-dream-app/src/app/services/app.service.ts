import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  name: string;

  constructor(private http: HttpClient) { }

  getCities() {
    return [
      {id: 1, name: 'Karachi'},
      {id: 2, name: 'Islamabad'},
      {id: 3, name: 'Lahore'},
    ]
  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }

  createPost(body) {
    return this.http.post('http://jsonplaceholder.typicode.com/posts', body);
  }
}
