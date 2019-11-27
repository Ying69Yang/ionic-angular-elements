import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiElementoComponent } from './mi-elemento.component';

describe('MiElementoComponent', () => {
  let component: MiElementoComponent;
  let fixture: ComponentFixture<MiElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
