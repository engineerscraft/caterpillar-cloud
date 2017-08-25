import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as AWSCognito from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private userPool = new AWSCognito.CognitoUserPool(environment.poolData);

  private authenticationData = {
    Username: 'adminuser',
    Password: 'AdminUser1*',
  };

  private newPasswordRequired = {
    isPasswordRequired: false
  };

  private authenticationDetails = new
    AWSCognito.AuthenticationDetails(this.authenticationData);

  private userData = {
    Username: 'adminuser',
    Pool: this.userPool
  };

  private response = {
    succesfulAuthentication: false,
    newPasswordRequired: false
  };

  private cognitoUser;

  constructor() { }

  login(router: Router) {
    this.cognitoUser = new AWSCognito.CognitoUser(this.userData);
    this.cognitoUser.authenticateUser(this.authenticationDetails, {
      onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
        /*Use the idToken for Logins Map when Federating User Pools with Cognito
        Identity or when passing through an Authorization Header to an API Gateway Authorizer*/
        console.log('idToken + ' + result);
        this.response.succesfulAuthentication = true;
        return this.response;
      },
      onFailure: function (err) {
        console.log(err);
        return this.response;
      },
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        this.newPasswordRequired.isPasswordRequired = true;
        this.newPasswordRequired['userAttributes'] = userAttributes;
        this.newPasswordRequired['requiredAttributes'] = requiredAttributes;
        console.log(userAttributes);
        console.log(requiredAttributes);
        router.navigate(['profileCreation']);
      }
    });
  }

  saveAttributes(newPassword, attributesData) {
    this.cognitoUser.completeNewPasswordChallenge(newPassword, attributesData, this);
  }
}
