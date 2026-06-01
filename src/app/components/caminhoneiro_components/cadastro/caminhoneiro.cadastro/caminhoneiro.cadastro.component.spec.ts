import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminhoneiroCadastroComponent } from './caminhoneiro.cadastro.component';

describe('CaminhoneiroCadastroComponent', () => {
  let component: CaminhoneiroCadastroComponent;
  let fixture: ComponentFixture<CaminhoneiroCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaminhoneiroCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaminhoneiroCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
