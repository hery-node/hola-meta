const { init_router } = require('hola-server');

module.exports = init_router({
    collection: "user",
    creatable: true,
    cloneable: true,
    readable: true,
    updatable: true,
    deleteable: true,
    primary_keys: ["name"],
    ref_label: "name",
    fields: [
        { name: "name", required: true },
        { name: "password", type: "password", required: true },
    ]
});