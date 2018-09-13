import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { TopoComponent } from './component/topo/topo.component';
import { PainelComponent } from './component/painel/painel.component';
import { PostComponent } from './component/post/post.component';
import { LoginComponent } from './component/login/login.component';
import { LoginDialogComponent } from './component/login-dialog/login-dialog.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostDialogComponent } from './component/post-dialog/post-dialog.component';
import { AboutComponent } from './component/about/about.component';
import { FeaturesComponent } from './component/features/features.component';
import { Session } from './model/entity/Session';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { CommentComponent } from './component/comment/comment.component';
import { CreateCommentComponent } from './component/create-comment/create-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    PostComponent,
    LoginComponent,
    LoginDialogComponent,
    PostListComponent,
    PostDialogComponent,
    AboutComponent,
    FeaturesComponent,
    CommentListComponent,
    CommentComponent,
    CreateCommentComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [ 
    Session,
    AppComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    LoginDialogComponent,
    PainelComponent,
    PostDialogComponent
  ]
})
export class AppModule { }