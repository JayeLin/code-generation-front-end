module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "babel-eslint",
  'plugins': [
    '@typescript-eslint',
    'react',
    "react-native",
    "jsx-a11y",
  ],
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:react/recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public'
    }],
    '@typescript-eslint/explicit-function-return-type': [
      // 'warn',
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/camelcase': ['off', {
      properties: 'always'
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': true,
    }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/require-default-prop': 0,
    'vue/attributes-order': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/no-invalid-v-if': 'error',
    'vue/jsx-uses-vars': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 不检测语句末尾的分号
    'semi': ['off', 'always'],
    // 强制缩进为2个空格
    'indent': 'off',
    // 关闭函数名称跟括号之间的空格检测
    'space-before-function-paren': 0,
    // 忽略大括号内的空格
    'object-curly-spacing': 0,
    'no-unused-vars': [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }]
  },
  "globals": {
    "Menu": true
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)'
    ],
    env: {
      mocha: true,
      "amd": true,
      "es5": true,
      "browser": true,
      "node": false
    }
  }]
}
