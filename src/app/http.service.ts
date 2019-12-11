import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Bookmark {
  imageId: string;
  userId: string;
}

export interface Tag {
  phrase: string;
}

export interface PostBody {
  creatorId: string;
  imageURL: string;
  title: string;
  description: string;
  tags: Tag[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getImageById(ID: string) {
    // return this.http.get('http://localhost:8080/image/getByCreator/{id}?id=' + ID);
    
    return this.http.get('http://localhost:8080/image/getByTitle/{title}?title=' + ID);

    //image mock
    // return this.http.get('http://www.mocky.io/v2/5de1a17732000056638094b5');
  }

  getUserById(ID: string) {
    return this.http.get('http://localhost:8080/user/get/{id}?id=' + ID);
    
    // user mock
    //return this.http.get('http://www.mocky.io/v2/5ddf5cd33100005f733ae6ca');
  }

  getAll(){
    //GetAllMock
    //return this.http.get('http://www.mocky.io/v2/5def8eb42f0000dc5a8e0b74');
    return this.http.get('http://localhost:8080/user/getAllimages');
  }

  postImage(postBody) {
    return this.http.post('http://localhost:8080/image/addIm/', postBody);  
    // return this.http.get('http://localhost:8080/image/addIm/{creatorId}{imageUrl}{title}{descInput}{tags}?creatorId=' + creatorId + "&imageUrl=" + imageUrl + "&title=" + title + "&descInput=" + descInput
    // + "&tags=" + tags);
  }

  setCreatorId(id: string, email: string){
    return this.http.get('http://localhost:8080/user/addCreatedId/{id}{email}?id=' + id + "&email=" + email);
  }

  bookmark(bookmark: Bookmark) {
    // return this.http.post<any>('http:/localhost:8080/user/addBookmarkedId/', bookmark, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // });
    return this.http.get('http://localhost:8080/user/addBookmarkedId/{id}{email}?id=' + bookmark.imageId + "&email=" + bookmark.userId);
  }

  unbookmark(bookmark: Bookmark) {
    return this.http.get('http://localhost:8080/user/removeBookmarkedId/{id}{email}?id=' + bookmark.imageId + "&email=" + bookmark.userId);
    // return this.http.post<any>('http://localhost:8080/user/removeBookmarkedId/', bookmark, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // });
  }

  getDailyRankings(){
    //return this.http.get('http://localhost:8080/images/dailyrankings');
    
    //DR mock
    //return this.http.get('http://www.mocky.io/v2/5de2120c3200003976809547');

    // test
    return this.http.get('http://localhost:8080/user/getAllimages');
  }

  getPopularRankings(){
    //return this.http.get('http://localhost:8080/images/popularrankings');
    
    //PR mock
    return this.http.get('http://www.mocky.io/v2/5de2120c3200003976809547');    
  }  

  getRecommended(ID: string){
    //return this.http.get('http://localhost:8080/images/recommended/' + ID);
  
    //recommended mock
    return this.http.get('http://www.mocky.io/v2/5de361503000005200e9c9ac');    
  }

}