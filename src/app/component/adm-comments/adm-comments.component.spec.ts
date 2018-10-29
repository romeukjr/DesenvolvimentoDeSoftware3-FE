import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCommentsComponent } from './adm-comments.component';

describe('AdmCommentsComponent', () => {
  let component: AdmCommentsComponent;
  let fixture: ComponentFixture<AdmCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
