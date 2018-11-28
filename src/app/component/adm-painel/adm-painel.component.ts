import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AdmUsersComponent } from '../adm-users/adm-users.component';
import { MatDialog } from '@angular/material';
import { Session } from '../../model/entity/Session';
import { AdmPostsComponent } from '../adm-posts/adm-posts.component';
import { AdmCommentsComponent } from '../adm-comments/adm-comments.component';

@Component({
  selector: 'app-adm-painel',
  templateUrl: './adm-painel.component.html',
  styleUrls: ['./adm-painel.component.css']
})
export class AdmPainelComponent implements OnInit {
  private admUsersComponent: AdmUsersComponent;
  private admPostsComponent: AdmPostsComponent;
  private admCommentsComponent: AdmCommentsComponent;
  private Router: Router;
  private activeTab;
  @ViewChild('tabs') public Tabs: ElementRef;
  
  constructor(private matDialog: MatDialog, private session: Session, private router: Router) { 
    this.Router = router;
  }

  ngOnInit() {
    this.admUsersComponent = new AdmUsersComponent(this.matDialog, this.session, this.router);
    this.admPostsComponent = new AdmPostsComponent(this.matDialog, this.session, this.router);
    this.admCommentsComponent = new AdmCommentsComponent(this.matDialog, this.session);
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

}
