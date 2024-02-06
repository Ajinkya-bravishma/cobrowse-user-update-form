import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceRegComponent } from './cource-reg.component';

describe('CourceRegComponent', () => {
  let component: CourceRegComponent;
  let fixture: ComponentFixture<CourceRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourceRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
