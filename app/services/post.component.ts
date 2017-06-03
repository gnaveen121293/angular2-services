import {Component} from '@angular/core';

import {PostService} from './post.service';
@Component({

	selector : 'posts',
	template : `

	<div class = "container">
	<h1>My Blog Post</h1>
	<br>
	<div class ="container" style="width:300px">
	<label>Title:</label>
	<input class="form-control" type="text" [(ngModel)]="title"/><br>
	<label>Body:</label>
	<input type="text" class="form-control" [(ngModel)]="body"/><br>
	<input  type="button" class="btn btn-primary" (click)="addNewPost()" value="post"/>
	</div>
	<br>
	<div class="container">
	<ul  *ngFor ="let post of posts">
	<li><b>{{post.title}}</b></li>
	<li>{{post.body}}</li>
	</ul>
	</div> 
	</div>  `
})

export class PostComponent
{
	private posts : any[];
	private title : string;
	private body : string;
private newPost : any;

	constructor(private _postService : PostService){
 this._postService.getPosts().subscribe(response => {
 	this.posts=response
 });

	}
	// addNewPost(){

	// 	this.newPost ={
	// 				title : this.title,
	// 				body: this.body
	// 					}
	// 	console.log(this.newPost);
		// this._postService.addPost(this.newPost)
	}

