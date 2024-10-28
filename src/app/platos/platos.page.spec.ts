import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatosPage } from './platos.page';

describe('PlatosPage', () => {
  let component: PlatosPage;
  let fixture: ComponentFixture<PlatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
