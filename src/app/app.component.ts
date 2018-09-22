import { Component, OnInit, ApplicationModule } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Http } from '@angular/http';
import { TopoComponent } from './component/topo/topo.component';
import { PainelComponent } from './component/painel/painel.component';
import { Session } from './model/entity/Session';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private topoComponent: TopoComponent;
  private painelComponent: PainelComponent;
  private session: Session;

  constructor(private http: Http, public matDialog: MatDialog) { }

  ngOnInit() {
    this.session = new Session(this.http);

    this.topoComponent = new TopoComponent(this.matDialog, this.session);
    this.painelComponent = new PainelComponent(this.matDialog, this.session);
  }
}
