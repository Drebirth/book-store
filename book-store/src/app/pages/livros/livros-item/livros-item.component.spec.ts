import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosItemComponent } from './livros-item.component';

describe('LivrosItemComponent', () => {
  let component: LivrosItemComponent;
  let fixture: ComponentFixture<LivrosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
