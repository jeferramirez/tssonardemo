import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarUserComponent } from './gestionar-user.component';

describe('GestionarUserComponent', () => {
  let component: GestionarUserComponent;
  let fixture: ComponentFixture<GestionarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
