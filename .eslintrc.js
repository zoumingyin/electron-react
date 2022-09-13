/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/**
 * Common files for eslint
 * @see https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
 */

module.exports = {
  // root: true,
  env: {
    es6: true,
    node: true,
    // Browser: true,
    jest: true,
    jasmine: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    // warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: [
    // '@typescript-eslint',
    'eslint-comments',
    'json-format',
    // 'promise',
    'react',
    'react-hooks',
    'simple-import-sort',
    'import',
    // "node",
    // 'unicorn',
    'unused-imports',
  ],
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      // Regex for Component Factory to use
      createClass: 'createReactClass',
      // default to "createReactClass"
      // Pragma to use, default to "React"
      pragma: 'React',
      // React version. "detect" automatically picks the version you have installed.
      version: 'detect',
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      // Flow version
      flowVersion: '0.53',
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`.
      // If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
    'json/sort-package-json': 'standard',
    'json/ignore-files': ['**/package-lock.json'],
    'json/json-with-comments-files': [
      // '**/tsconfig.json',
      // '**/tsconfig.build.json',
      '**/**/api-extractor.json',
      '**/tsconfig.lint.json',
      '.vscode/**',
    ],
  },
  // * @see https://docs.w3cub.com/eslint/rules/
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // * disable all import, it is too slow and not useful.
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    // Disallow duplicate module imports
    'no-duplicate-imports': ['error'],
    'unused-imports/no-unused-imports-ts': 2,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario.
    /*
     * Best practices.
     */
    // enforce getter and setter pairs in objects and classes
    'accessor-pairs': ['error'],
    // Enforce `return` statements in callbacks of array methods
    // rxJs will cause this is unimplementable.
    'array-callback-return': 'off',
    // Enforce the use of variables within the scope they are defined
    'block-scoped-var': ['error'],
    // Enforce that class methods utilize `this`
    'class-methods-use-this': 'off',
    // Enforce a maximum cyclomatic complexity allowed in a program
    complexity: ['error', { max: 60 }],
    // Require `return` statements to either always or never specify values
    // conflict with typescript.
    'consistent-return': 'off',
    // Enforce consistent brace style for all control statements
    // curly style.
    curly: ['error', 'multi-line', 'consistent'],
    // Require `default` cases in `switch` statements
    'default-case': ['error'],
    // Enforce default parameters to be last
    // default parameter must place last.
    'default-param-last': 'off',
    // '@typescript-eslint/default-param-last': ['error'],
    // Enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],
    // Enforce dot notation whenever possible
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    // Require the use of `===` and `!==`
    eqeqeq: ['error'],
    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': ['error'],
    // Require `for-in` loops to include an `if` statement
    'guard-for-in': 'off',
    // Enforce a maximum number of classes per file
    // * we need this.
    'max-classes-per-file': 'off',
    // Disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': ['error'],
    // Disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': ['error'],
    // Disallow lexical declarations in case clauses
    'no-case-declarations': ['off'],
    // Disallow returning value from constructor
    'no-constructor-return': ['error'],
    // Disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': ['error'],
    // Disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error'],
    // Disallow empty functions
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // Disallow empty destructuring patterns
    'no-empty-pattern': ['error'],
    // Disallow `null` comparisons without type-checking operators
    'no-eq-null': ['error'],
    // Disallow the use of `eval()`
    'no-eval': ['error'],
    // Disallow extending native types
    'no-extend-native': ['error'],
    // Disallow unnecessary calls to `.bind()`
    'no-extra-bind': ['error'],
    // Disallow unnecessary labels
    'no-extra-label': ['error'],
    // Disallow fallthrough of `case` statements
    'no-fallthrough': ['off'],
    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': ['error'],
    // Disallow assignments to native objects or read-only global variables
    'no-global-assign': ['error'],
    // Disallow shorthand type conversions
    'no-implicit-coercion': 'off',
    // Disallow declarations in the global scope
    'no-implicit-globals': ['error'],
    // Disallow the use of `eval()`-like methods
    'no-implied-eval': ['error'],
    // Disallow `this` keywords outside of classes or class-like objects
    'no-invalid-this': ['error'],
    // Disallow the use of the `__iterator__` property
    'no-iterator': ['error'],
    // Disallow labeled statements
    'no-labels': ['error'],
    // Disallow unnecessary nested blocks
    'no-lone-blocks': ['error'],
    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': ['error'],
    // Disallow magic numbers
    'no-magic-numbers': 'off',
    // Disallow multiple spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        // TODO: check this.
        // exceptions: {
        //   'VariableDeclarator': true,
        //   'Property': true,
        // },
      },
    ],
    // Disallow multiline strings
    'no-multi-str': ['error'],
    // Disallow `new` operators outside of assignments or comparisons
    'no-new': ['error'],
    // Disallow `new` operators with the `Function` object
    'no-new-func': ['error'],
    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': ['error'],
    // Disallow octal literals
    'no-octal': ['error'],
    // Disallow octal escape sequences in string literals
    'no-octal-escape': ['error'],
    // Disallow reassigning `function` parameters
    // rxJs will cause this is unimplementable.
    'no-param-reassign': 'off',
    // Disallow the use of the `__proto__` property
    'no-proto': ['error'],
    // Disallow variable redeclaration
    'no-redeclare': ['error'],
    // Disallow certain properties on certain objects
    'no-restricted-properties': ['error'],
    // Disallow assignment operators in `return` statements
    // * rxJs use this to short program.
    'no-return-assign': 'off',
    // Disallow unnecessary `return await`
    'no-return-await': ['error'],
    // Disallow `javascript:` urls
    'no-script-url': ['error'],
    // Disallow assignments where both sides are exactly the same
    'no-self-assign': ['error'],
    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': ['error'],
    // Disallow comma operators
    'no-sequences': ['error'],
    // Disallow throwing literals as exceptions
    'no-throw-literal': ['error'],
    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': ['error'],
    // Disallow unused expressions
    'no-unused-expressions': ['off'],
    // Disallow unused labels
    'no-unused-labels': ['error'],
    // Disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': ['error'],
    // Disallow unnecessary `catch` clauses
    'no-useless-catch': ['error'],
    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': ['error'],
    // Disallow unnecessary escape characters
    'no-useless-escape': ['error'],
    // Disallow redundant return statements
    'no-useless-return': ['off'],
    // Disallow `void` operators
    'no-void': ['error'],
    // Disallow specified warning terms in comments
    'no-warning-comments': 'off',
    // Disallow `with` statements
    'no-with': ['error'],
    // Enforce using named capture group in regular expression
    'prefer-named-capture-group': ['error'],
    // Require using Error objects as Promise rejection reasons
    // 'prefer-promise-reject-errors': ['error'],
    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': ['error'],
    // Enforce the consistent use of the radix argument when using `parseInt()`
    radix: ['error'],
    // Disallow async functions which have no `await` expression
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    // Enforce the use of `u` flag on RegExp
    'require-unicode-regexp': 'off',
    // Require `var` declarations be placed at the top of their containing scope
    'vars-on-top': ['error'],
    // Require parentheses around immediate `function` invocations
    // 'wrap-iife': ['error'],
    // Require or disallow "Yoda" conditions
    yoda: ['error'],
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // Typescript constructor.
    'no-empty': 'off',
    // Use logger.
    'no-console': 'off',
    // AllowEmptyCatch: 'off',

    // this is only valid for client program.
    'no-restricted-syntax': 'off',
    // We use this for mangle.
    'no-underscore-dangle': 'off',
    // Sometimes need break.
    'no-await-in-loop': 'off',

    'no-dupe-else-if': 'error',
    // Use function hoisting to improve code readability

    '@typescript-eslint/allowEmptyCatch': 'off',

    'promise/always-return': 'off',

    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    // '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    /*
     * Styles
     */
    // 'enforce linebreaks after opening and before closing array brackets'
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // Enforce line breaks after each array element
    'array-element-newline': ['error', 'consistent'],
    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error'],
    // Enforce consistent brace style for blocks
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],
    // Enforce camelcase naming convention
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private', 'protected'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
    ],
    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['error', 'always', { line: { ignorePattern: '.', ignoreConsecutiveComments: true } }],
    // Require or disallow trailing commas
    // 'comma-dangle': ['error', 'always-multiline'],
    // Enforce consistent spacing before and after commas
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],

    // Enforce consistent comma style
    'comma-style': ['error'],
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error'],
    // Enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',
    // 'unicorn/no-this-assignment': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    // Require or disallow newline at the end of files
    'eol-last': ['error', 'always'],
    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    // Require function names to match the name of the variable or property to which they are
    // assigned
    'func-name-matching': ['error'],
    // Require or disallow named `function` expressions
    'func-names': ['error', 'never'],
    // Enforce the consistent use of either `function` declarations or expressions
    'func-style': ['error'],
    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': ['error', 'consistent'],
    // Enforce consistent line breaks inside function parentheses
    // 'function-paren-newline': ['error', 'multiline-arguments'],
    // Disallow specified identifiers
    'id-blacklist': ['error'],
    // Enforce minimum and maximum identifier lengths
    'id-length': 'off',
    // Require identifiers to match a specified regular expression
    'id-match': ['error'],
    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['off', 'beside'],
    // Enforce consistent indentation
    indent: 'off',
    // '@typescript-eslint/indent': ['error', 2, {
    //   VariableDeclarator: 'first',
    //   FunctionExpression: { body: 1, parameters: 2 },
    //   CallExpression: { arguments: 'first' },
    //   ObjectExpression: 1,
    //   flatTernaryExpressions: false,
    //   ignoreComments: false,
    //   ignoredNodes: [
    //     'JSXElement',
    //     'JSXAttribute',
    //     'JSXSpreadAttribute',
    //   ],
    // }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // 'jsx-quotes': ['error'],
    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [
      'error',
      {
        afterColon: true,
        mode: 'strict',
      },
    ],
    // Enforce consistent spacing before and after keywords
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: { after: true },
          for: { after: true },
          while: { after: true },
        },
      },
    ],
    // Enforce position of line comments
    'line-comment-position': ['off'],
    // Enforce consistent linebreak style
    'linebreak-style': 'off',

    // Require empty lines around comments
    // 'lines-around-comment': [
    //   'error',
    //   {
    //     beforeBlockComment: true,
    //     afterBlockComment: false,
    //     allowBlockStart: true,
    //     allowClassStart: true,
    //     allowObjectStart: true,
    //     allowArrayStart: true,
    //   },
    // ],
    // Require or disallow an empty line between class members
    // makes no sense to allow type inference for expression parameters, but require typing the
    // response
    'lines-between-class-members': 'off',
    // Enforce a maximum depth that blocks can be nested
    'max-depth': ['error', 7],
    // Enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 100,
        ignoreUrls: true,
        ignorePattern: '^import',
      },
    ],
    // Enforce a maximum number of lines per file
    'max-lines': ['error', { max: 3000, skipBlankLines: true }],
    // Enforce a maximum number of line of code in a function
    // rxJS pipe.
    'max-lines-per-function': ['error', 300],
    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', 5],
    // Enforce a maximum number of parameters in function definitions
    // * rxJS confliction.
    'max-params': 'off',
    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': ['error', 150],
    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['off'],
    // Enforce a particular style for multiline comments
    // 'multiline-comment-style': ['error', 'starred-block'],
    // enforce newlines between operands of ternary expressions
    // 'multiline-ternary': ['error', 'always-multiline'],
    // Require constructor names to begin with a capital letter
    'new-cap': ['error', { capIsNewExceptions: ['ASSERT', 'MSG_KEY'], capIsNewExceptionPattern: '^@*' }],
    // Enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': ['error'],
    // Require a newline after each call in a method chain
    'newline-per-chained-call': 'off',
    // Disallow `Array` constructors
    'no-array-constructor': ['error'],
    // Disallow bitwise operators
    'no-bitwise': 'off',
    // Disallow `continue` statements
    'no-continue': ['error'],
    'no-extra-semi': 'off',
    // '@typescript-eslint/no-extra-semi': ['error'],
    'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-parens': [
    //   'error',
    //   'all',
    //   {
    //     conditionalAssign: false,
    //     nestedBinaryExpressions: false,
    //     returnAssign: false,
    //     ignoreJSX: 'all',
    //     enforceForNewInMemberExpressions: false,
    //   },
    // ],

    // Disallow inline comments after code
    'no-inline-comments': ['off'],
    // Disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': ['error'],
    // Disallow mixed binary operators
    'no-mixed-operators': 'off',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],
    // Disallow use of chained assignment expressions
    'no-multi-assign': ['error'],
    // Disallow multiple empty lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    // 'unicorn/no-array-push-push': 'off',
    // 'unicorn/no-array-reduce': 'off',
    // Disallow negated conditions
    'no-negated-condition': 'off',
    // Disallow nested ternary expressions
    'no-nested-ternary': 'off',
    // 'unicorn/no-nested-ternary': 'off',
    // 'unicorn/no-null': 'off',
    // 'unicorn/no-reduce': 'off',
    // Disallow `Object` constructors
    'no-new-object': ['error'],
    // Disallow the unary operators `++` and `--`
    'no-plusplus': 'off',
    // Disallow all tabs
    'no-tabs': ['error'],
    // Disallow ternary operators
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error'],
    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error'],
    'no-unreachable': ['error'],
    // Disallow whitespace before properties
    'no-whitespace-before-property': ['error'],
    // Enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'beside'],
    // Enforce consistent line breaks inside braces
    // 'object-curly-newline': ['error', {
    //   ObjectExpression: { multiline: true },
    //   ObjectPattern: { multiline: true },
    //   ImportDeclaration: { multiline: true },
    //   ExportDeclaration: { multiline: true },
    // }],
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],
    // Enforce placing object properties on separate lines
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    // Enforce variables to be declared either together or separately in functions
    'one-var': 'off',
    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error'],
    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error'],
    // Enforce consistent linebreak style for operators
    // 'operator-linebreak': ['error', 'before', { overrides: { '?': 'after' } }],
    // Require or disallow padding within blocks
    'padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
    // Require or disallow padding lines between statements
    // @see https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // Disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': ['error'],
    // Disallow using Object.assign with an object literal as the first argument and prefer
    // the use of object spread instead.
    'prefer-object-spread': ['error'],
    // Require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],
    // Enforce the consistent use of either backticks, double, or single quotes
    // quotes: ['error', 'single'],
    // '@typescript-eslint/quotes': ['error', 'single'],
    // Require or disallow semicolons instead of ASI
    // @see https://itnext.io/how-to-replace-prettier-by-eslint-rules-21574359e041
    semi: 'off',
    // '@typescript-eslint/semi': ['error', 'never'],
    // '@typescript-eslint/member-delimiter-style': ['error', {
    //   multiline: {
    //     delimiter: 'none',
    //     requireLast: true,
    //   },
    //   singleline: {
    //     delimiter: 'comma',
    //     requireLast: false,
    //   },
    // }],
    // Enforce consistent spacing before and after semicolons
    // 'semi-spacing': ['error'],
    // Enforce location of semicolons
    // 'semi-style': ['error'],
    // Require object keys to be sorted
    'sort-keys': 'off',
    // Require variables within the same declaration block to be sorted
    'sort-vars': 'off',
    // Enforce consistent spacing before blocks
    'space-before-blocks': ['error'],
    // Enforce consistent spacing before `function` definition opening parenthesis
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'always',
    //     named: 'never',
    //     asyncArrow: 'always',
    //   },
    // ],
    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],
    // Require spacing around infix operators
    'space-infix-ops': ['error'],
    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error'],
    // Enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '!<'],
        },
        block: {
          markers: ['!', '*'],
          exceptions: ['*', '!', '-', '+'],
          balanced: true,
        },
      },
    ],
    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error'],
    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error'],
    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error'],
    // Require parenthesis around regex literals
    'wrap-regex': ['off'],
    'unicorn/no-object-as-default-parameter': ['off'],
    // 'unicorn/consistent-destructuring': 'off',
    // 'unicorn/prefer-node-protocol': 'off',
    // Common abbreviations are known and readable
    // 'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/number-literal-case': 'off',
    // 'unicorn/no-process-exit': 'off',
    // 'unicorn/no-fn-reference-in-iterator': 'off',
    // 'doc-doctor/rule-name': 2,

    /*
     * ES6 styles
     */
    // require braces around arrow function bodies
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    // Require parentheses around arrow function arguments
    // 'arrow-parens': ['error', 'as-needed'],
    // Enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': ['error'],
    // Require `super()` calls in constructors
    'constructor-super': ['error'],
    // Enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': ['error'],
    // Disallow reassigning class members
    'no-class-assign': ['error'],
    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'off',
    // Disallow reassigning `const` variables
    'no-const-assign': ['error'],
    // Disallow duplicate class members

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],
    // Disallow duplicate module imports
    // 'no-duplicate-imports': ['error'],
    // Disallow `new` operators with the `Symbol` object
    'no-new-symbol': ['error'],
    // Disallow specified modules when loaded by `import`
    'no-restricted-imports': [
      'error',
      {
        // paths: [{ name: '@mui/material',
        // message: 'Please use import from @mui/material instead.' }],
        patterns: [
          {
            group: [
              '@mui/material/*',
              '!@mui/material/colors',
              '!@mui/material/styles',
              '!@mui/material/locale',
              '!@mui/material/styles/createMixins',
              '!@mui/material/styles/createTypography',
              '!@mui/material/styles/shadows',
            ],
            message: 'Please use import from @mui/material instead.',
          },
          {
            group: ['@mui/icons-material/*'],
            message: 'Please use import from @mui/icons-material instead.',
          },
          {
            group: ['@mui/lab/*'],
            message: 'Please use import from @mui/lab instead.',
          },
        ],
      },
    ],
    // Disallow `this`/`super` before calling `super()` in constructors
    'no-this-before-super': ['error'],
    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': ['error'],
    // Disallow unnecessary constructors
    // * nestJS need this.
    'no-useless-constructor': 'off',
    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error'],
    // Require `let` or `const` instead of `var`
    'no-var': ['error'],
    // Require or disallow method and property shorthand syntax for object literals
    'object-shorthand': ['error'],
    // Require using arrow functions for callbacks
    'prefer-arrow-callback': ['error'],
    // Require `const` declarations for variables that are never reassigned after declared
    'prefer-const': ['error'],
    // Require destructuring from arrays and/or objects
    'prefer-destructuring': ['off'],
    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal
    // literals
    'prefer-numeric-literals': ['error'],
    // Require rest parameters instead of `arguments`
    'prefer-rest-params': ['error'],
    // Require spread operators instead of `.apply()`
    'prefer-spread': ['error'],
    // Require template literals instead of string concatenation
    'prefer-template': ['error'],
    // Require generator functions to contain `yield`
    'require-yield': ['error'],
    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error'],
    // Require symbol descriptions
    'symbol-description': ['error'],
    // Require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': ['error'],
    // Require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': ['error'],

    /*
     * Variables
     */
    // require or disallow initialization in variable declarations
    'init-declarations': 'off',
    // Disallow deleting variables
    'no-delete-var': ['error'],
    // Disallow labels that share a name with a variable
    'no-label-var': ['error'],
    // Disallow specified global variables
    'no-restricted-globals': ['error'],
    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',
    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': ['error'],
    // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
    // typescript will check this.
    'no-undef': 'off',
    // Disallow initializing variables to `undefined`
    'no-undef-init': 'off',
    // Disallow the use of `undefined` as an identifier
    'no-undefined': 'off',
    // Disallow unused variables
    // typescript will check this.
    // 禁止定义不使用的变量
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    // Disallow the use of variables before they are defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],

    /*
     * Node.js
     */
    // require `return` statements after callbacks
    'callback-return': 'off',
    // Require `require()` calls to be placed at top-level module scope
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // Require error handling in callbacks
    'handle-callback-err': ['error'],
    // Disallow use of the `Buffer()` constructor
    'no-buffer-constructor': ['error'],
    // Disallow `require` calls to be mixed with regular variable declarations
    'no-mixed-requires': ['error'],
    // Disallow `new` operators with calls to `require`
    'no-new-require': ['error'],
    // Disallow string concatenation with `__dirname` and `__filename`
    'no-path-concat': ['error'],
    // Disallow the use of `process.env`
    'no-process-env': ['error'],
    // Disallow the use of `process.exit()`
    'no-process-exit': ['error'],
    // Disallow specified modules when loaded by `require`
    'no-restricted-modules': ['error'],
    // Disallow synchronous methods
    'no-sync': ['error'],

    /*
     *  Unicorn rules compatability.
     */
    // 'unicorn/consistent-function-scoping': 'off',

    /*
     *  React JSX.
     */
    // This is for front end.
    // too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-boolean-value': ['error'],
    'react/display-name': 'off',
    // Ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': ['error'],
    // Validate closing bracket location in JSX (fixable)
    // 'react/jsx-closing-bracket-location': ['error', 'after-props'],
    // Validate closing tag location for multiline JSX (fixable)
    'react/jsx-closing-tag-location': 'off',
    // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX
    // expressions on literals in JSX children or attributes (fixable)
    'react/jsx-curly-brace-presence': ['error'],
    // Enforce consistent line breaks inside jsx curly (fixable)
    'react/jsx-curly-newline': ['off'],
    // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    'react/jsx-curly-spacing': ['error', 'never'],
    // Disallow or enforce spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': ['error', 'never'],
    // no jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Ensure proper position of the first property in JSX (fixable)
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // Enforce shorthand or standard form for React fragments (fixable)
    'react/jsx-fragments': ['error'],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['error'],
    // Validate JSX indentation (fixable)
    // 'react/jsx-indent': ['error', 2],
    // Validate props indentation in JSX (fixable)
    // 'react/jsx-indent-props': ['error', 2],
    // Report missing key props in iterators/collection literals
    'react/jsx-key': ['error'],
    // Validate JSX maximum depth
    'react/jsx-max-depth': ['error', { max: 8 }],
    // Limit maximum of props on a single line in JSX (fixable)
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    // Prevents usage of Function.prototype.bind and arrow functions in React component props
    'react/jsx-no-bind': 'off',
    // Comments inside children section of tag should be placed inside braces
    'react/jsx-no-comment-textnodes': ['error'],
    // Enforce no duplicate props
    'react/jsx-no-duplicate-props': ['error'],
    // Prevent using string literals in React component definition
    'react/jsx-no-literals': 'off',
    // : Forbid javascript URLs
    'react/jsx-no-script-url': ['error'],
    // Forbid target="_blank" attribute without rel="noopener noreferrer"
    'react/jsx-no-target-blank': ['error'],
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': ['error'],
    // Disallow unnecessary fragments (fixable)
    'react/jsx-no-useless-fragment': 'off',
    // Limit to one expression per line in JSX (fixable)
    // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['error'],
    // Disallow multiple spaces between inline JSX props (fixable)
    'react/jsx-props-no-multi-spaces': ['error'],
    // Prevent JSX prop spreading
    'react/jsx-props-no-spreading': 'off',
    // Enforce default props alphabetical sorting
    'react/jsx-sort-default-props': ['error'],
    // Enforce props alphabetical sorting (fixable)
    'react/jsx-sort-props': ['error'],
    // Validate spacing before closing bracket in JSX (fixable)
    // 'react/jsx-space-before-closing': ['error', 'never'],
    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    // 'react/jsx-tag-spacing': ['error', {
    //   closingSlash: 'never',
    //   beforeSelfClosing: 'never',
    //   afterOpening: 'never',
    //   beforeClosing: 'never',
    // }],
    // Prevent React to be marked as unused
    'react/jsx-uses-react': ['error'],
    // Prevent variables used in JSX to be marked as unused
    'react/jsx-uses-vars': ['error'],
    // Prevent missing parentheses around multilines JSX (fixable)
    'react/jsx-wrap-multilines': ['error'],
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    // 'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      env: { node: true },
      rules: {
        'simple-import-sort/sort': 'off',
        'import/order': ['error', { 'newlines-between': 'always' }],
        // '@typescript-eslint/ident': 'off',
        '@typescript-eslint/...': 'off',
        // 'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: { 'no-inline-comments': 'off' },
    },
  ],
}
/* eslint-enable no-magic-numbers */
/* eslint-enable max-lines */
/* eslint-enable @typescript-eslint/naming-convention */
