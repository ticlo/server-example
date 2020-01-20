import {Functions, BaseFunction} from '@ticlo/core';

// sort input string and output an array
class SortStringFunction extends BaseFunction {
  run(): any {
    let delay = this._data.getValue('delay');
    if (delay > 0) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this._data.output(delay);
          resolve();
        }, delay * 1000);
      });
    }
  }
}

Functions.add(
  SortStringFunction,
  {
    name: 'delay',
    icon: 'fas:bomb', // icon from font awesome
    properties: [
      {name: 'delay', type: 'number'},
      {name: 'output', type: 'number', readonly: true}
    ]
  },
  'my' // namespace for the function
);
