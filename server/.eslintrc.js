module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 8,
    },
    rules: {
        "indent": ["error", 4],
        "no-underscore-dangle": true
    },
};
