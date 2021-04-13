import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleraceComponent } from './singlerace.component';

describe('SingleraceComponent', () => {
  let component: SingleraceComponent;
  let fixture: ComponentFixture<SingleraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
