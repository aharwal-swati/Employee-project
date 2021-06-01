import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import{TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  languageCode:string;

  constructor(private translate:TranslateService,private router:Router)
  {
    this.router.navigate(['/student']);
    this.languageCode=localStorage.getItem("language")
    console.log(this.languageCode)
    this.translate.use(this.languageCode);
  }
}
