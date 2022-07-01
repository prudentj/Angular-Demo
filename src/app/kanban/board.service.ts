import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
// //import firebase from 'firebase/compat';
// import { getFirestore } from '@angular/fire/firestore';
import {switchMap, map} from 'rxjs/operators';
import {Board, Task} from './board.model';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})

export class boardService {

  constructor(private afAuth:AngularFireAuth, private db: AngularFirestore) {}
  
  //Create a new board for current user

  async createBoard(data:Board){
    const user = await this.afAuth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user?.uid,
      tasks: [{description:'Example Task', label:'yellow'}]
    })
  }
  //Deletes the board
  deleteBoard(boardId:string){
    return this.db.collection('boards').doc(boardId).delete();
  }

  //Update tasks on board
  updateTasks(boardId:string,tasks:Task[]){
    return this.db.collection('boards').doc(boardId).update({tasks})
  }

  //Remove a specific task from the board
  removeTask(boardId:string, task:Task){
    //this.db.firestore.
    return this.db.collection('boards').doc(boardId).update({tasks:firebase.firestore.FieldValue.arrayRemove(task)})
  }

  //Get all Boards
  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Board>('boards', ref =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      }),
      );
    }
  // getUserBoards(){
  //   return this.afAuth.authState.pipe(
  //     switchMap((user) => {
  //       if(user){
  //         return this.db.collection<Board>('boards', (ref:any) => {
  //           ref.where('uid', '==', user.uid).orderBy('priority')
  //         }).valueChanges({idField:'id'});

  //       }else{
  //         return []
  //       }
  //     })
  //   )
  //  }
  // Run a batch write to change the priority of the boards
  sortBoards(boards:Board[]){
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('boards').doc(b.id));
    refs.forEach((ref,idx)=>batch.update(ref,{priority:idx}));
    batch.commit()
  }
}
