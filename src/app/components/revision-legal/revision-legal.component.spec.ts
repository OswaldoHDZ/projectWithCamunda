import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionLegalComponent } from './revision-legal.component';

describe('RevisionLegalComponent', () => {
  let component: RevisionLegalComponent;
  let fixture: ComponentFixture<RevisionLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
