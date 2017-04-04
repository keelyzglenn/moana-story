/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StayIslandComponent } from './stay-island.component';

describe('StayIslandComponent', () => {
  let component: StayIslandComponent;
  let fixture: ComponentFixture<StayIslandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayIslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
