import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navLinkStyleConfig: object = {
    'height': '40px',
    'font-size': '16px',
    'font-weight"': '400',
    'color': '#fff',
    'text-decoration': 'none',
    'vertical-align': 'middle',
    'display': 'inline-block',
    'margin': '5px 0px;',
    'font-family': 'Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;'
  }
}
