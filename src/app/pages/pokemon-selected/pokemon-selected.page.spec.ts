import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonSelectedPage } from './pokemon-selected.page';

describe('PokemonSelectedPage', () => {
  let component: PokemonSelectedPage;
  let fixture: ComponentFixture<PokemonSelectedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSelectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
