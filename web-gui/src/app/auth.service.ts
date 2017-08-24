import { Injectable } from '@angular/core';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { AWSCognito } from 'aws-cognito-sdk-js';

@Injectable()
export class AuthService {

  private poolData = {
    UserPoolId: '',
    ClientId: ''
  };

  private userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(this.poolData);

  constructor() { }

  login() {

  }
}
