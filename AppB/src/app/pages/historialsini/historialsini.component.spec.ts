import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialsiniComponent } from './historialsini.component';

describe('HistorialsiniComponent', () => {
  let component: HistorialsiniComponent;
  let fixture: ComponentFixture<HistorialsiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialsiniComponent]
    });
    fixture = TestBed.createComponent(HistorialsiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
