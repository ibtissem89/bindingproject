import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Output="";
  name="ibtissem";
  title = 'angularBindingProject';
  description="ibtissem "
  setoutput(inputtext:any)
  {
    this.Output=inputtext.value;
  }
  changetitle(text:any)
  {
this.title=text.value;
  }
}
