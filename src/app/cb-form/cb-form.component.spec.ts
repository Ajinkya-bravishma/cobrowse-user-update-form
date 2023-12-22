import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbFormComponent } from './cb-form.component';

describe('CbFormComponent', () => {
  let component: CbFormComponent;
  let fixture: ComponentFixture<CbFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbFormComponent]
    });
    fixture = TestBed.createComponent(CbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
