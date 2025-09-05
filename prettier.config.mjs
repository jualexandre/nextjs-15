/** @type {import('prettier').Config} */
const config = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    vueIndentScriptAndStyle: false,
    tailwindConfig: './tailwind.config.ts',
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
