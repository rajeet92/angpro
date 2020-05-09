import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../post';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts: Post[];
  selectedPost: Post = {
    id: null,
    type: null,
    author: null,
    title: null,
    detail: null,
    postdate: null,
    view: null,
  };

  constructor(private apiService: ApiService) {
    this.apiService.readPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit() {}

  selectPost(post: Post) {
    this.selectedPost = post;
  }

  activatediv(id) {
    for (let i = 1; i <= 4; i++) {
      let eleid = 'tab' + i;
      console.log('rajeet id:' + eleid);
      document.getElementById(eleid).classList.add('hide');
      document.getElementById(eleid).classList.remove('show');
    }

    let eleid2 = 'tab' + id;
    document.getElementById(eleid2).classList.add('show');
  }
}
