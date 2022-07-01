import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

/*
  FOr some reason it is not working and I can not figure out why. I will look into this
  later


*/
@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  authError(){
    this.snackBar.open('You must be logged in', 'OK',{duration:5000});

    const openSnackRef = this.snackBar._openedSnackBarRef
      return openSnackRef?.onAction()
      .pipe(
      tap(_=>this.router.navigate(['/login']))
      ).subscribe();

}
}
