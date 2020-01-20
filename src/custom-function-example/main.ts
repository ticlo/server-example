import Express from 'express';
import {Root} from '@ticlo/core';
import {FileJobLoader} from '@ticlo/node';
import {connectTiclo, getEditorUrl} from '@ticlo/express';

// import the function
import './async-function';
import './group-input-function';
import './oncall-function';

// save load jobs from the the same folder
Root.instance.setLoader(new FileJobLoader('./src/custom-function-example'));

let app = Express();
connectTiclo(app, '');

app.listen(8014);

console.log(getEditorUrl('ws://127.0.0.1:8014', 'example'));
