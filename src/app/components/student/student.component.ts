import { Component, OnInit } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(languageCode)
  {
    console.log(languageCode,"english");
    if(languageCode=="en")
    {
      this.translate.use(languageCode);
    }
    else
    {
      this.translate.use(languageCode);
    }
    localStorage.setItem('language',languageCode);
    var changesdvalue=this.translate.instant('Firstname');
    console.log("changesdvalue",changesdvalue);
  }

}
