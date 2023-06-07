const { register_type } = require('hola-server');
const { is_integer } = require('hola-server').number;

const user_status_type = {
    name: "user_status",
    convert: function (value) {
        const int_value = parseInt(value);
        return is_integer(value) && int_value >= 0 ? { value: int_value } : { err: 'user_status convert error for value:' + value };
    }
}

const role_type = {
    name: "role",
    convert: function (value) {
        return { value: value ? (value + "").trim() : "" };
    }
}

const register_types = () => {
    register_type(user_status_type);
    register_type(role_type);
};

module.exports = { register_types }
