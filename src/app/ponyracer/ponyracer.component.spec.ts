import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyracerComponent } from './ponyracer.component';

describe('PonyracerComponent', () => {
  let component: PonyracerComponent;
  let fixture: ComponentFixture<PonyracerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonyracerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyracerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
