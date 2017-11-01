import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { UserService} from './user.service';
import { User } from './user';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  // let de: DebugElement;
  // let el: HTMLElement;
  let subject: UserService = null;
  let backend: MockBackend = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [ UserService, MockBackend ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([UserService, MockBackend], (userService: UserService, mockBackend: MockBackend) => {
    subject = userService;
    backend = mockBackend;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' should check list user return it is result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .getUsers()
      .subscribe((response) => {
        expect(response.length).toBe(3);
        expect(response[0].name).toEqual('Join');
        done();
      });
  });
});
