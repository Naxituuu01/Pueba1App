import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesayunosPage } from './desayunos.page';

describe('DesayunosPage', () => {
  let component: DesayunosPage;
  let fixture: ComponentFixture<DesayunosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesayunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
