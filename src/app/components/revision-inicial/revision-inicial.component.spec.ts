import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionInicialComponent } from './revision-inicial.component';

describe('RevisionInicialComponent', () => {
  let component: RevisionInicialComponent;
  let fixture: ComponentFixture<RevisionInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
