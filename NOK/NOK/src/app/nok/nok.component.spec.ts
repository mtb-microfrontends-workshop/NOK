import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NokComponent } from './nok.component';

describe('NokComponent', () => {
  let component: NokComponent;
  let fixture: ComponentFixture<NokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
