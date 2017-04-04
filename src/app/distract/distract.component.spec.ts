/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DistractComponent } from './distract.component';

describe('DistractComponent', () => {
  let component: DistractComponent;
  let fixture: ComponentFixture<DistractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
