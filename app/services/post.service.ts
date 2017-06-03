import {Injectable} from '@angular/core';
import {Http} from  '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/operator/map';



interface Post{
	_id : number,
	title : string,
	body : string
}
@Injectable()

export class PostService{

	
	private posts :any[];
	private apiUrl : string;
	private postData : any;

	constructor(private _http : Http){
		this.apiUrl="https://jsonplaceholder.typicode.com/posts"
		// this.posts=[
		// {
		// 	title : 'Hello Bengalore',
		// 	body : 'I am wishing good morning to everybody!!!'
		// },
		// {
		// 	title : 'Latest updates ',
		// 	body : 'why you need the latest updates ?'
		// },
		// {
		// 	title : 'who is a john gaklt?',
		// 	body : 'john galt is a  good technologer!!!'
		// },
		// {
		// 	title: ' iam from home',
		// 	body : 'I am done for a day  and gouung home'
		// }




		// ]
	}

	 getPosts() : Observable<Post[]> {
	 	 return this._http
	 	.get(this.apiUrl)
	 	.map((response) => {
	 		return response.json()
	 	});
	 	
	// 	return this.posts;
	}
	// addPost(newPost:any){

	// 	this.posts.push(newPost);
	// }
}

