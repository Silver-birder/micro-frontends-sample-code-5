const Router = require('./router');

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
});

async function handleRequest(request: Request) {
    const r = new Router();

    r.get('/page1', () => fetch(PAGE1_LAYOUT_URL));

    const resp = await r.route(request);
    return resp
}

declare var PAGE1_LAYOUT_URL: string;
