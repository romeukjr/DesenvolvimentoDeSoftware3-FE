import { Component, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { Session } from '../../model/entity/Session';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',   
    styleUrls: ['./topo.component.css']
})

export class TopoComponent implements OnInit {
    
    private userMenuComponent: UserMenuComponent;
    public titulo: string = 'BrowserBook';

    constructor(private matDialog: MatDialog, private session: Session) { }

    ngOnInit() {
        this.userMenuComponent = new UserMenuComponent(this.matDialog, this.session);
    }
}
