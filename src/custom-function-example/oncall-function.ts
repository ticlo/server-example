import {Functions, BaseFunction} from '@ticlo/core';
import Moment from 'moment';

// sort input string and output an array
class GetTimeFunction extends BaseFunction {
  run(): any {
    this._data.output(Moment());
  }
}

Functions.add(
  GetTimeFunction,
  {
    name: 'get-time',
    icon: 'fas:clock', // icon from font awesome
    mode: 'onCall', // by default run function only when #call is triggered
    properties: [{name: 'output', type: 'date', readonly: true}]
  },
  'my' // namespace for the function
);
