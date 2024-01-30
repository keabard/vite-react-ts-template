# Prerequisites

NodeJS is installed

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

```
nvm install 20
```

# How to install

```
npx degit git@github.com:keabard/vite-react-ts-template.git my-awesome-app
```

```
cd my-awesome-app
```

```
npm install
```

```
npm run dev
```

# Opinionated stack

- [Vite](https://vitejs.dev/) - Modern bundling for JS frontend stacks
- [Vitest](https://vitest.dev/) - Test runner for Vite
- [React](https://react.dev/) - Most popular JS frontend tech
- [TypeScript](https://www.typescriptlang.org/) - The go-to tool for typed JS
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Test your components as a user
- [StyleX](https://stylexjs.com/) - CSS in JS that compiles to CSS, best of both worlds
- [Prettier](https://prettier.io/) - Enforces code formatting
- [ESLint](https://eslint.org/) - Enforces code style
