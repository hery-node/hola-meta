const dev_mode = true;

const settings = {
    encrypt: {
        key: "my_key"
    },
    mongo: {
        url: 'mongodb://127.0.0.1/demo',
        pool: 10
    },
    log: {
        col_log: 'log',
        log_level: 0,
        save_db: dev_mode == false,
    },

    roles: [
        { name: "admin", root: true },
        { name: "user" },
        { name: "vip" },
    ],

    server: {
        service_port: 8088,
        client_web_url: ['http://localhost:8080'],
        keep_session: true,
        check_user: true,
        exclude_urls: ["/"],
        session: {
            cookie_max_age: 1000 * 60 * 60 * 24 * 256 * 10,// ten years
            secret: 'my_secret'
        },
        threshold: {
            max_download_size: 5000,
            body_limit: '10mb'
        },
        routes: ['router']
    }
};

module.exports = { settings, dev_mode };
