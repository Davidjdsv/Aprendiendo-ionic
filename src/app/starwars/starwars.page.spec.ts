import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarwarsPage } from './starwars.page';

describe('StarwarsPage', () => {
  let component: StarwarsPage;
  let fixture: ComponentFixture<StarwarsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
