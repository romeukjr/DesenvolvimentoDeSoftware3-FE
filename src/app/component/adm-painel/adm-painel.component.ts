import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-painel',
  templateUrl: './adm-painel.component.html',
  styleUrls: ['./adm-painel.component.css']
})
export class AdmPainelComponent implements OnInit {
  private Router: Router;

  constructor(private router: Router) { 
    this.Router = router;
  }

  ngOnInit() {
  }

  tabClick(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    let element = document.getElementById(target.attributes.id) as HTMLAnchorElement;

    element.classList.add('active');
  }

}
