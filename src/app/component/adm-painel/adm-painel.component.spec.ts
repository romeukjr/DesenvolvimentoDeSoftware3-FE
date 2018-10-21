import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPainelComponent } from './adm-painel.component';

describe('AdmPainelComponent', () => {
  let component: AdmPainelComponent;
  let fixture: ComponentFixture<AdmPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
