import { RequestOptions, Headers } from '@angular/http';

const createDefaultHeaders = function() {
  console.log("localStore token: ");
  console.log(localStorage.getItem('token'));
  return new RequestOptions({
    headers : new Headers({ 'Authorization': '' + localStorage.getItem('token') })
  });
};

export const REQUEST_OPTIONS_DEFAULT: Function = createDefaultHeaders;
