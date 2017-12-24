import { RequestOptions, Headers } from '@angular/http';

const defaults: RequestOptions =
  new RequestOptions({
    headers : new Headers({ 'Authorization': '' + localStorage.getItem('token') })
  });

export const REQUEST_OPTIONS_DEFAULT: RequestOptions = defaults;
