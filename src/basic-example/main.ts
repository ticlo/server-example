import Express from 'express';
import {Root} from '@ticlo/core';
import {FileJobLoader} from '@ticlo/node';
import {connectTiclo, getEditorUrl} from '@ticlo/express';

// save load jobs from the the same folder
Root.instance.setLoader(new FileJobLoader('./src/basic-example'));

let app = Express();
connectTiclo(app, '');

app.listen(8010);

console.log(getEditorUrl('ws://127.0.0.1:8010', 'example'));
