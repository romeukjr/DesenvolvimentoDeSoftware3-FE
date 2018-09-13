import { Component, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material';
import { Session } from '../../model/entity/Session';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',   
    styleUrls: ['./topo.component.css']
})

export class TopoComponent implements OnInit {
    
    private loginComponent: LoginComponent;
    public titulo: string = 'BrowserBook';

    constructor(private matDialog: MatDialog, private session: Session) { }

    ngOnInit() {
        this.loginComponent = new LoginComponent(this.matDialog, this.session);
    }
}
