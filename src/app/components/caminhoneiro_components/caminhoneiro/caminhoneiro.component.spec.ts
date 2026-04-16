import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoneiroComponent } from './caminhoneiro.component';

describe('CaminhoneiroComponent', () => {
  let component: CaminhoneiroComponent;
  let fixture: ComponentFixture<CaminhoneiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaminhoneiroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaminhoneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
