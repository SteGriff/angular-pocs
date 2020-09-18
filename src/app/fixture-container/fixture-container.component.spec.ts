import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureContainerComponent } from './fixture-container.component';

describe('FixtureContainerComponent', () => {
  let component: FixtureContainerComponent;
  let fixture: ComponentFixture<FixtureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
