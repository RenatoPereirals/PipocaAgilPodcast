import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthFakeService {}
