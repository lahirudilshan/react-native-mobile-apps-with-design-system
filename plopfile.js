const path = require('path');
const fs = require('fs-extra');
const { execSync } = require('child_process');

// Color configuration for console output
// Using ANSI escape codes for text coloring
const colors = {
  green: text => `\x1b[32m${text}\x1b[0m`,
  blue: text => `\x1b[34m${text}\x1b[0m`,
  yellow: text => `\x1b[33m${text}\x1b[0m`,
  red: text => `\x1b[31m${text}\x1b[0m`,
};

// Logging utility functions with emoji indicators
const log = {
  success: msg => console.log(colors.green(`✅ ${msg}`)),
  info: msg => console.log(colors.blue(`🔹 ${msg}`)),
  warning: msg => console.log(colors.yellow(`⚠️  ${msg}`)),
  error: msg => console.log(colors.red(`❌ ${msg}`)),
  final: msg => console.log(colors.yellow(`🚀 ${msg}`)),
};

// Utility functions for project management
const utils = {
  // Validates project name format using regex
  // Must start with a letter and contain only letters and numbers
  isValidProjectName: name => /^[A-Za-z][A-Za-z0-9]*$/.test(name),

  // Validates project name and optionally checks if project directory exists
  validateProject: (value, checkExistence = false) => {
    if (!utils.isValidProjectName(value)) {
      return 'Invalid project name. Please try again.';
    }
    if (checkExistence) {
      const projectDir = path.join(process.cwd(), 'apps', value);
      if (!fs.existsSync(projectDir)) {
        return 'Project directory does not exist!';
      }
    }
    return true;
  },

  // Removes unnecessary files after project creation
  // Includes newly created app.git directory and package-lock.json
  removeFiles: async projectName => {
    const gitPath = path.join(process.cwd(), 'apps', projectName, '.git');
    const lockPath = path.join(process.cwd(), 'package-lock.json');

    if (fs.existsSync(gitPath)) await fs.remove(gitPath);
    if (fs.existsSync(lockPath)) await fs.remove(lockPath);
  },

  // Updates package.json scripts with project-specific commands
  updatePackageScripts: (content, answers) => {
    const json = JSON.parse(content);
    // Define new scripts for development, starting, cache reset, and cleaning
    const newScripts = {
      [`${answers.name}:dev`]: `clear && yarn workspace ${answers.name} android`,
      [`${answers.name}:start`]: `clear && yarn workspace ${answers.name} start`,
      [`${answers.name}:start-reset`]: `clear && yarn workspace ${answers.name} reset-cache`,
      [`${answers.name}:clean`]: `clear && cd apps/${answers.name}/android && ./gradlew clean`,
    };
    json.scripts = { ...json.scripts, ...newScripts };
    return JSON.stringify(json, null, 2);
  },
};

// Common actions for updating project configuration files
const commonActions = {
  // Updates Metro bundler configuration
  updateMetroConfig: {
    type: 'add',
    path: 'apps/{{name}}/metro.config.js',
    templateFile: 'resources/plop-templates/metro.config.js.hbs',
    force: true,
  },
  // Updates Android settings.gradle
  updateSettingsGradle: {
    type: 'add',
    path: 'apps/{{name}}/android/settings.gradle',
    templateFile: 'resources/plop-templates/settings.gradle.hbs',
    force: true,
  },
  // Updates Android build.gradle with correct paths
  updateBuildGradle: {
    type: 'modify',
    path: 'apps/{{name}}/android/app/build.gradle',
    pattern: /react {/,
    template: `react {
    root = file("../../")
    reactNativeDir = file("../../../../node_modules/react-native")
    codegenDir = file("../../../../node_modules/@react-native/codegen")
    cliFile = file("../../../../node_modules/react-native/cli.js")`,
  },
  // Updates root package.json with new scripts
  updatePackageJson: {
    type: 'modify',
    path: 'package.json',
    transform: utils.updatePackageScripts,
  },
  // Updates app's package.json with start-reset script
  updateAppPackageJson: {
    type: 'modify',
    path: 'apps/{{name}}/package.json',
    transform: (content) => {
      const json = JSON.parse(content);
      json.scripts = {
        ...json.scripts,
        'storybook:clean': 'rm -rf node_modules/.cache/storybook',
        'start-reset': 'npx react-native start --reset-cache',
      };
      return JSON.stringify(json, null, 2);
    },
  },
  // add copy-files
  copyFiles: {
    type: 'addMany',
    destination: 'apps/{{name}}/',
    base: 'resources/plop-templates/copy-files',
    templateFiles: 'resources/plop-templates/copy-files/**/*',
    force: true,
    verbose: true, // Add this to see more details
    globOptions: {
      dot: true, // Add this to include dot files
    },
  },
};

// Main module export - Plop generator configuration
module.exports = function (plop) {
  // Add custom action type for React Native initialization
  plop.setActionType('initReactNative', async answers => {
    const { name } = answers;
    log.info(`Creating new React Native app: ${name}...`);

    try {
      const appsDir = path.join(process.cwd(), 'apps');

      // Create apps directory if it doesn't exist
      if (!fs.existsSync(appsDir)) {
        fs.mkdirSync(appsDir);
      }

      // Initialize React Native app
      execSync(`cd ${appsDir} && npx @react-native-community/cli init ${name}`, {
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'development' },
      });

      log.success('React Native app created successfully');
      return 'React Native app initialization completed';
    } catch (error) {
      log.error('Failed to initialize React Native app');
      log.error(error.message);
      throw error;
    }
  });

  // Add this new custom action type registration
  // Fix the customAction type registration
  plop.setActionType('customAction', async (answers, config) => {
    if (typeof config.action === 'function') {
      return await config.action(answers); // Return the result instead of throwing error
    }
    throw new Error('Custom action must be a function');
  });

  // Generator 1: init react native app
  plop.setGenerator('react-native-app', {
    description: 'Create a new React Native app',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'Enter project name (must start with a letter and contain only letters and numbers):',
        validate: value => utils.validateProject(value),
      },
    ],
    actions: [
      { type: 'add', path: 'apps/.gitkeep', skipIfExists: true },
      // Replace customAction with new initReactNative action
      { type: 'initReactNative' },
      commonActions.updateMetroConfig,
      commonActions.updateSettingsGradle,
      commonActions.updateBuildGradle,
      commonActions.updatePackageJson,
      commonActions.updateAppPackageJson, // Add this line to include the new action
      commonActions.copyFiles,
      {
        type: 'customAction',
        async action(answers) {
          await utils.removeFiles(answers.name);
          log.success(`New app '${answers.name}' created and configured successfully! 🎉`);
          log.final(`Run: yarn install && yarn ${answers.name}:dev`);
        },
      },
    ],
  });

  // Generator 2: Configures an existing React Native app
  plop.setGenerator('react-native-app-config', {
    description: 'Configure an existing React Native app',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter project name to configure:',
        validate: value => utils.validateProject(value, true),
      },
    ],
    actions: [
      // Apply configuration updates to existing app
      commonActions.updateMetroConfig,
      commonActions.updateSettingsGradle,
      commonActions.updateBuildGradle,
      {
        type: 'customAction',
        async action(answers) {
          log.success(`Configuration setup completed for project: ${answers.name}`);
        },
      },
    ],
  });

  // Generator 3: Updates scripts in root package.json
  plop.setGenerator('update-root-scripts', {
    description: 'Update root package.json scripts',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter project name to update scripts for:',
        validate: value => utils.validateProject(value, true),
      },
    ],
    actions: [
      // Update package.json scripts and cleanup
      commonActions.updatePackageJson,
      {
        type: 'customAction',
        async action(answers) {
          await utils.removeFiles(answers.name);
          log.success('Root scripts updated successfully');
        },
      },
    ],
  });

  // Generator 4: Adds a new React Native app with Storybook
  plop.setGenerator('copy-common-files', {
    description: 'copy common files to project',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter project name to copy common files:',
        validate: value => utils.validateProject(value),
      },
    ],
    actions: [
      {
        type: 'customAction',
        async action() {
          const templatePath = path.join(process.cwd(), 'plop-templates', 'copy-files');
          log.info(`Checking template path: ${templatePath}`);
          if (!fs.existsSync(templatePath)) {
            log.error(`Template directory not found: ${templatePath}`);
            return;
          }
          const files = fs.readdirSync(templatePath);
          log.info(`Found files: ${files.join(', ')}`);
          return 'Template check completed';
        },
      },
      commonActions.copyFiles,
    ],
  });
};
