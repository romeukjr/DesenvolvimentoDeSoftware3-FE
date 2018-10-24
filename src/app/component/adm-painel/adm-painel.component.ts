import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-painel',
  templateUrl: './adm-painel.component.html',
  styleUrls: ['./adm-painel.component.css']
})
export class AdmPainelComponent implements OnInit {
  private Router: Router;
  private activeTab;
  @ViewChild('tabs') public Tabs: HTMLUListElement;
  
  constructor(private router: Router) { 
    this.Router = router;
  }

  ngOnInit() {
  }

  tabClick(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    let element = document.getElementById(target.attributes.id) as HTMLAnchorElement;
    let tabs = this.Tabs.getElementsByTagName("li");

    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i].firstElementChild;

      if (tab.classList.contains('active')) {
        if (tab.id == element.id) {
          return;
        }

        tab.classList.remove('active');
        element.classList.add('active');

        break;
      }
    }
  }

}
