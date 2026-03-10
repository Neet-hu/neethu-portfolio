import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techskills } from './techskills';

describe('Techskills', () => {
  let component: Techskills;
  let fixture: ComponentFixture<Techskills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techskills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techskills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
