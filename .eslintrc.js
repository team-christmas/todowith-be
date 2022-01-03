module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // 사용하지 않는 변수 에러에서 경고로 변경
    'no-undef': 'warn',
    'no-unused-vars': 'warn',

    // { fnc: () => {} } 시 경고 표시,
    // { fnc() {} } 형태 권장
    'object-shorthand': 'warn',

    // 한 줄당 최대 글자 수
    'max-len': ['warn', { code: 100, ignoreComments: true }],

    // if 문 {} 생략 가능
    curly: 'off',

    // 객체 속성 따옴표 쓰지 않게
    'quote-props': ['error', 'as-needed'],

    // trailing comma 해제
    'comma-dangle': 'off'
  }
};
