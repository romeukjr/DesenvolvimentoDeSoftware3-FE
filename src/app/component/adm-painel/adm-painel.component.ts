import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-painel',
  templateUrl: './adm-painel.component.html',
  styleUrls: ['./adm-painel.component.css']
})
export class AdmPainelComponent implements OnInit {
  private Router: Router;
  private activeTab;
  @ViewChild('tabs') public Tabs: ElementRef;
  
  constructor(private router: Router) { 
    this.Router = router;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.initializeTabSelection();
  }

  private initializeTabSelection() {
    let tabs = this.Tabs.nativeElement.getElementsByTagName("li");

    for (let i = 0; i < tabs.length; i++) {
      let a = tabs[i].firstElementChild;

      if (a.getAttribute('routerlink') === this.Router.url) {
        a.classList.add('active');
      }
    }
  }

  tabClick(event: any) {
    // const target = event.target || event.srcElement || event.currentTarget;
    // let lis = this.Tabs.nativeElement.getElementsByTagName("li");

    // for (let i = 0; i < lis.length; i++) {
    //   let a = lis[i].firstElementChild;

    //   if (a.classList.contains('active')) {
    //     if (a === target) {
    //       return;
    //     }

    //     a.classList.remove('active');
    //     break;
    //   }
    // }

    // target.classList.add('active');
  }

}
