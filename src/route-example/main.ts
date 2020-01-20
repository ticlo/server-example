import Express from 'express';
import {Root} from '@ticlo/core';
import {connectTiclo, routeTiclo, getEditorUrl} from '@ticlo/express';
import {FileJobLoader} from '@ticlo/node';

// save load jobs from the same folder
Root.instance.setLoader(new FileJobLoader('./src/route-example'));

let app = Express();
connectTiclo(app, '');
routeTiclo(app, '/ticlo');

app.listen(8011);

console.log(getEditorUrl('ws://127.0.0.1:8011', 'static-route'));
