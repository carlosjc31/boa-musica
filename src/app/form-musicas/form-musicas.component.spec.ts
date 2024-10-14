import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMusicasComponent } from './form-musicas.component';

describe('FormMusicasComponent', () => {
  let component: FormMusicasComponent;
  let fixture: ComponentFixture<FormMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMusicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
