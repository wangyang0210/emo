module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard-with-typescript',
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json']
    },
    plugins: ['vue'],
    ignorePatterns: ['node_modules/**', 'dist/**', 'release/**', 'public/**', 'docs/**'],
    rules: {}
}
