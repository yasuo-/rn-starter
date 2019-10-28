module.exports = function(plop) {
  plop.setGenerator('screen', {
    description: 'Generates new Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (Casing will be modified)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}Screen.tsx',
        templateFile: 'generators/screen/Screen.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('redux', {
    description: 'Generates new redux starter kit',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'redux module name (Casing will be modified)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/redux/modules/{{camelCase name}}Module/index.js',
        templateFile: 'generators/redux/module.js.hbs',
      },
      {
        type: 'modify',
        path: 'src/redux/rootReducer.js',
        pattern: /\/\/ ## Generator Reducer Imports/gi,
        template:
          "// ## Generator Root Reducer Imports\nimport {{properCase name}}Module from './{{camelCase name}}Module';",
      },
      {
        type: 'modify',
        path: 'src/redux/rootReducer.js',
        pattern: /\/\/ ## Generator Reducers/gi,
        template: '// ## Generator Reducers\n\n  {{camelCase name}}: {{properCase name}}Reducer,',
      },
    ],
  });

  // old
  plop.setGenerator('old_screen', {
    description: 'Generates new Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (Casing will be modified)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}Screen.js',
        templateFile: 'generators/screen/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{properCase name}}Screen.js',
        templateFile: 'generators/screen/ScreenContainer.js.hbs',
      },
    ],
  });

  plop.setGenerator('old_reducer', {
    description: 'Generates new reducer',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Reducer name (Casing will be modified)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/reducers/{{camelCase name}}/index.js',
        templateFile: 'generators/reducer/reducer.js.hbs',
      },
      {
        type: 'modify',
        path: 'src/reducers/reducer.js',
        pattern: /\/\/ ## Generator Reducer Imports/gi,
        template:
          "// ## Generator Reducer Imports\nimport {{properCase name}}Reducer from './{{camelCase name}}';",
      },
      {
        type: 'modify',
        path: 'src/reducers/reducer.js',
        pattern: /\/\/ ## Generator Reducers/gi,
        template: '// ## Generator Reducers\n\n  {{camelCase name}}: {{properCase name}}Reducer,',
      },
    ],
  });
};
