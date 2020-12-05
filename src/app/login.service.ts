import { Injectable } from '@angular/core';
import { Account } from './types/account';

import LoginConfig from '../../loginconfig.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  create(account: Account) {
    account.password += LoginConfig.pepper;
    

  }
}
