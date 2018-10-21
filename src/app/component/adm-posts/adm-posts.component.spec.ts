import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPostsComponent } from './adm-posts.component';

describe('AdmPostsComponent', () => {
  let component: AdmPostsComponent;
  let fixture: ComponentFixture<AdmPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
