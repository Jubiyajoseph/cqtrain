import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDepartmentComponent } from './search-department.component';

describe('SearchDepartmentComponent', () => {
  let component: SearchDepartmentComponent;
  let fixture: ComponentFixture<SearchDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDepartmentComponent]
    });
    fixture = TestBed.createComponent(SearchDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
