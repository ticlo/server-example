import {Functions, BaseFunction} from '@ticlo/core';

// sort input string and output an array
class SortStringFunction extends BaseFunction {
  run(): any {
    let len = this._data.getLength();
    if (!(len >= 0)) {
      len = 2;
    }
    let arr: any[] = [];
    for (let i = 0; i < len; ++i) {
      let val = this._data.getValue(String(i));
      if (typeof val !== 'string') {
        // invalid input
        this._data.output(undefined);
        return;
      } else {
        arr.push(val);
      }
    }
    arr.sort();
    this._data.output(arr);
  }
}

Functions.add(
  SortStringFunction,
  {
    name: 'sort-string',
    icon: 'fas:sort-alpha-down', // icon from font awesome
    properties: [
      {
        // input 0 1 2 3 .... as string
        name: '',
        type: 'group',
        defaultLen: 2,
        properties: [{name: '', type: 'string', visible: 'high'}]
      },
      {name: 'output', type: 'array', readonly: true}
    ]
  },
  'my' // namespace for the function
);
