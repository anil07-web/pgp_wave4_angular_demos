import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ContactService } from 'src/app/services/contact.service';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: ContactService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [HttpClientModule, AppRoutingModule]
    })
      .compileComponents();
    service = TestBed.inject(ContactService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tokenExists should return value', () => {
    spyOn(service, 'tokenExists').and.returnValue(true);
    expect(component.checkToken()).toBeFalsy();
    expect(service.tokenExists).toHaveBeenCalled();
  });

  it('contact should not be null', () => {
    expect(component.contacts).not.toBeNull();
  });
});
