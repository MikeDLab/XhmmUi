import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XhmmComponent } from './xhmm.component';

describe('XhmmComponent', () => {
  let component: XhmmComponent;
  let fixture: ComponentFixture<XhmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XhmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XhmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
