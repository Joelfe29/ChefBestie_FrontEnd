import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesToApproveComponent } from './recipes-to-approve.component';

describe('RecipesToApproveComponent', () => {
  let component: RecipesToApproveComponent;
  let fixture: ComponentFixture<RecipesToApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesToApproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipesToApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
