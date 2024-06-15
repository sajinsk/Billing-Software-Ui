import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCollapseComponent } from './sidebar-collapse.component';

describe('SidebarCollapseComponent', () => {
  let component: SidebarCollapseComponent;
  let fixture: ComponentFixture<SidebarCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
