/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelpMoanaComponent } from './help-moana.component';

describe('HelpMoanaComponent', () => {
  let component: HelpMoanaComponent;
  let fixture: ComponentFixture<HelpMoanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpMoanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpMoanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
