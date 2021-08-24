import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtcompComponent } from './avtcomp.component';

describe('AvtcompComponent', () => {
  let component: AvtcompComponent;
  let fixture: ComponentFixture<AvtcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvtcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvtcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
