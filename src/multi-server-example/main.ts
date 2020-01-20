import Express from 'express';
import {Root} from '@ticlo/core';
import {connectTiclo, routeTiclo, getEditorUrl} from '@ticlo/express';
import {FileJobLoader} from '@ticlo/node';

// save load jobs from the same folder
Root.instance.setLoader(new FileJobLoader('./src/multi-server-example'));

let app = Express();
connectTiclo(app, '');
routeTiclo(app, '/ticlo1', 'server1');
routeTiclo(app, '/ticlo2', 'server2'); // same host, different path
app.listen(8012);

let bpp = Express();
routeTiclo(bpp, '/ticlo3', 'server3'); // different host; not used for Editor
bpp.listen(8013);

console.log(getEditorUrl('ws://127.0.0.1:8012', 'example'));
