# empty-project

Root project.

### Building and running on localhost

First install dependencies:

```sh
npm install
```

### VS Code Prettier settings.json

```json
{
  "editor.foldingMaximumRegions": 10000,
  "json.maxItemsComputed": 50000,
  "git.commandsToLog": ["commit", "push"],
  "github.gitAuthentication": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "window.zoomLevel": -1,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Visual Studio Code functional snippet React rfc

Goto: File -> Preferences -> Configure User Snippets
Select New Global Snippets file and type <any-name> you want and hit enter
File should be created with the following name <any-name>.code-snippet
Paste this code:

```json
{
  "React Functional Component": {
    "prefix": ["rfc"],
    "body": [
      "",
      "const $TM_FILENAME_BASE = () => {",
      "  return (",
      "    <div>",
      "      $2",
      "    </div>",
      "  )",
      "};",
      "",
      "export default $TM_FILENAME_BASE",
      ""
    ],
    "description": "React Functional Component"
  }
}
```

Type rfc and press enter. JSX Example:

```jsx
const FCnameBasedOnFilename = () => {
  return <div></div>;
};

export default FCnameBasedOnFilename;
```

### To run in hot module reloading mode:

```sh
npm start
```

### To lint:

```sh
npm lint
```

### To create a production build:

```sh
npm run build
```

### To create a development build:

```sh
npm run build-dev
```

[github.com/brandonvilla21/module-federation](http://github.com/brandonvilla21/module-federation)
