const { init_express_server, init_settings, gen_i18n, Entity, get_entity_meta, get_type } = require('hola-server');
const { register_types } = require('./core/type');
const { settings, dev_mode } = require('./setting');

init_settings(settings);
register_types();

init_express_server(__dirname, "service_port", async () => {
    dev_mode && gen_i18n(__dirname + "/../web/src/locales/zh.json", true);

    const user_entity = new Entity(get_entity_meta("user"));
    const pwd_type = get_type("password");
    const pwd = pwd_type.convert("intel@123")["value"];
    const users = [
        { name: "admin", password: pwd, role: "admin", status: 1 },
    ];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        await user_entity.update({ name: user.name }, user);
    }

    console.log("stock_gpt server is successfully started");
});
