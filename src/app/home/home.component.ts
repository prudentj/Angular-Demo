import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  clicked = false;
  title = `Angular ${VERSION.full} is wonderful`

  handleClick() {
    this.clicked = true
  }


}
