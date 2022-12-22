const { init_express_server, init_settings, gen_i18n } = require('hola-server');
const { settings, dev_mode } = require('./setting');

init_settings(settings);

init_express_server(__dirname, "service_port", async () => {
    dev_mode && gen_i18n(__dirname + "/../web/src/locales/en.json", true);
    console.log("hola-meta server is successfully started");
});
