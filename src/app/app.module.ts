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

import { Session } from './model/entity/Session';

import { AppComponent } from './app.component';
import { TopoComponent } from './component/topo/topo.component';
import { PainelComponent } from './component/painel/painel.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostDialogComponent } from './component/post-dialog/post-dialog.component';
import { PostComponent } from './component/post/post.component';
import { LoginDialogComponent } from './component/login-dialog/login-dialog.component';
import { LoginComponent } from './component/login/login.component';
import { FeaturesComponent } from './component/features/features.component';
import { CommentCreateComponent } from './component/comment-create/comment-create.component';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { CommentComponent } from './component/comment/comment.component';
import { AboutComponent } from './component/about/about.component';
import { SignupComponent } from './component/signup/signup.component';
import { SignupDialogComponent } from './component/signup-dialog/signup-dialog.component';
import { AdmPainelComponent } from './component/adm-painel/adm-painel.component';
import { AdmUsersComponent } from './component/adm-users/adm-users.component';
import { AdmPostsComponent } from './component/adm-posts/adm-posts.component';
import { AdmCommentsComponent } from './component/adm-comments/adm-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    PostListComponent,
    PostDialogComponent,
    PostComponent,
    LoginDialogComponent,
    LoginComponent,
    FeaturesComponent,
    CommentCreateComponent,
    CommentListComponent,
    CommentComponent,
    AboutComponent,
    SignupComponent,
    SignupDialogComponent,
    AdmPainelComponent,
    AdmUsersComponent,
    AdmPostsComponent,
    AdmCommentsComponent
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
    SignupComponent,
    SignupDialogComponent,
    PainelComponent,
    PostDialogComponent
  ]
})
export class AppModule { }
