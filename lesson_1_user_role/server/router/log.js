const { wrap_http } = require('hola-server').err;
const { SUCCESS } = require('hola-server').code;
const { init_router, Entity } = require('hola-server');

module.exports = init_router({
    collection: "log",
    readable: true,
    deleteable: true,
    primary_keys: ["time"],
    roles: ["admin:drs"],
    fields: [
        { name: "time", type: "string" },
        { name: "category", type: "string" },
        { name: "level", type: "log_level" },
        { name: "path", type: "string", search: false },
        { name: "msg", type: "string" }
    ],

    route: (router, meta) => {
        const entity = new Entity(meta);

        router.post('/clear', wrap_http(async function (req, res) {
            const query = {};
            await entity.delete(query);
            res.json({ code: SUCCESS });
        }));
    }
});