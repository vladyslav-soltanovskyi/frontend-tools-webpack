module.exports = {
    "extends": "eslint-config-airbnb-base",
    "env": {
        "es6": true,
        "browser": true
    },
    "globals": {
        "document": true
    },
    "rules": {
        "import/prefer-default-export": 0,
        "import/no-cycle": 0
    }
};