import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChallengeComponent } from './get-challenge.component';

describe('GetChallengeComponent', () => {
  let component: GetChallengeComponent;
  let fixture: ComponentFixture<GetChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
