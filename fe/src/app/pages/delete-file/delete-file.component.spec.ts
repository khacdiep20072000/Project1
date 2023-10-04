import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFileComponent } from './delete-file.component';

describe('DeleteFileComponent', () => {
  let component: DeleteFileComponent;
  let fixture: ComponentFixture<DeleteFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFileComponent]
    });
    fixture = TestBed.createComponent(DeleteFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
