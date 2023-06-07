import { register_type } from 'hola-web';

const no_value = (value) => {
    if (value === undefined || value === null) {
        return true
    }
    if (typeof value == 'undefined') {
        return true;
    }
    if (typeof value === 'string' && value.trim().length === 0) {
        return true;
    }
    return false;
};

const user_status_type = {
    name: "user_status",
    input_type: "autocomplete",

    items: (vue) => {
        const status = [];
        status.push({ value: 0, text: vue.$t("type.user_status_new") });
        status.push({ value: 1, text: vue.$t("type.user_status_valid") });
        status.push({ value: 2, text: vue.$t("type.user_status_invalid") });
        return status;
    },

    format: (value, vue) => {
        if (no_value(value)) {
            return "";
        }
        switch (value) {
            case 0:
                return vue.$t("type.user_status_new");
            case 1:
                return vue.$t("type.user_status_valid");
            case 2:
                return vue.$t("type.user_status_invalid");
            default:
                return "";
        }
    }
}

const role_type = {
    name: "role",
    input_type: "autocomplete",

    items: (vue) => {
        const status = [];
        status.push({ value: "admin", text: vue.$t("type.role_admin") });
        status.push({ value: "user", text: vue.$t("type.role_user") });
        status.push({ value: "vip", text: vue.$t("type.role_vip") });
        status.push({ value: "vvip", text: vue.$t("type.role_vvip") });
        return status;
    },

    format: (value, vue) => {
        if (no_value(value)) {
            return "";
        }
        switch (value) {
            case "admin":
                return vue.$t("type.role_admin");
            case "user":
                return vue.$t("type.role_user");
            case "vip":
                return vue.$t("type.role_vip");
            case "vvip":
                return vue.$t("type.role_vvip");
            default:
                return "";
        }
    }
}

const register_types = () => {
    register_type(user_status_type);
    register_type(role_type);
};

const extract_number = (value) => {
    const num = value.match(/[+\-0-9\\.]+/g);
    if (num) {
        const values = num.map(Number);
        return values.length == 1 ? values[0] : 0;
    } else {
        return 0;
    }
}

export { register_types, extract_number }
