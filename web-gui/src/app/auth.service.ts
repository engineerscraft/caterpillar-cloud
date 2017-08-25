import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as AWSCognito from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  private userPool = new AWSCognito.CognitoUserPool(environment.poolData);

  constructor() { }

  login(credentials: Object, successCallback, errorCallback, newPasswordCallback) {

    let authenticationData = {
      Username: credentials['username'],
      Password: credentials['password']
    };

    let userData = {
      Username: credentials['username'],
      Pool: this.userPool
    };

    userData.Username = credentials['username'];
    let cognitoUser = new AWSCognito.CognitoUser(userData);
    let authenticationDetails = new AWSCognito.AuthenticationDetails(authenticationData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        successCallback(result);
      },
      onFailure: function (err) {
        errorCallback(err.message);
      },
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        newPasswordCallback(userAttributes, requiredAttributes);
      }
    });
  }

  /*saveAttributes(newPassword, attributesData) {
    this.cognitoUser.completeNewPasswordChallenge(newPassword, attributesData, this);
  }*/
}
