import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodesiniestroComponent } from './registrodesiniestro.component';

describe('RegistrodesiniestroComponent', () => {
  let component: RegistrodesiniestroComponent;
  let fixture: ComponentFixture<RegistrodesiniestroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrodesiniestroComponent]
    });
    fixture = TestBed.createComponent(RegistrodesiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
