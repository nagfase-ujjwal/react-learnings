# Hello Team, This is my React Learnings Repository. I will be adding all the learnings related to React in this repository.

# `Package.json` - configuration for our npm. List dependencies and scripts

## Our project is dependent on a lot of packages, which are also known as the dependencies and npm manages that, like the version of the package.

## It will take care of it in package.json

## These files are what npm reads to figure out what each package needs.

## It keeps an approx version of the package installed

<!-- ------------------------------------------------------ -->

# `Bundler` - most important package in our project

## When we have these normal html,css, js files, our whole code needs to be bundled, minified, cached, compressed and cleaned before it can be sent to production.

## Bundlers basically packages your app properly so that it can be shipped to production

## e.g., of Bundlers - Webpack, Parcel, Vite

## e.g., when we use npx create-react-app, behind the scenes it uses Webpack and Babel to build things up

<!-- ------------------------------------------------------- -->

# `Package.lock.json` - keeps track of the exact version of the dependency installed, along with the sub-dependencies.

## `dev: true ` - means devDependency is true for that dependency/package

## `integrity` - this is a hash, for the tar file we installed. It verifies whatever we have on our machine, the same version is deployed onto production

## Only your project root has a package-lock.json.

<!-- ------------------------------------------------------- -->

# `node_modules` - contains all the code which we fetch from npm registry

## We installed a package, inside the node modules folder the actual code of that package, along with the code of its sub-dependencies package will be kept.(kind of like a storehouse/database where all our packages exist)

## node-modules can get so large in size, which can slow down the repo, is the reason which is why we don't commit it to our git repository or to production. Also, all the info needed to reconstruct node-modules is already in package.json and package-lock.json

<!-- ------------------------------------------------------- -->

# `Transitive Dependencies` - Installing a dependency can have its own sub-dependencies, which in turn can have its own sub-dependencies, this is known as `Transitive Dependencies`.

## This is one of the main reasons node-modules grows so massive

<!-- ------------------------------------------------------- -->

# `How many package.json and package-lock.json do we have?`

## Every dependency and sub-dependency that we have inside node-modules have their own package.json, which contains its own normal dependencies, devDependencies, metaData(name, version, author, license) and scripts

<!-- ------------------------------------------------------- -->

# `.gitIgnore` - exclude pushing node_modules, dist/ and .env to github

## any files or folders we add to the `.gitignore` file, it will not push those files to github

## Anything listed there won’t be tracked, staged, or pushed to GitHub.

<!-- ------------------------------------------------------- -->

# `Should I put my package.json and package-lock.json to github?`

## Yes, you should commit both files to github.

## 📦 Why commit package.json?

- It lists all your project’s dependencies and scripts.
- Other developers can see what libraries your project relies on.
- It’s the blueprint for installing dependencies (npm install).

## 🔒 Why commit package-lock.json?

- It locks down the exact versions of every dependency and transitive dependency.
- Prevents the dreaded “works on my machine but not in production” problem.
- Ensures reproducibility: anyone cloning your repo gets the same dependency tree.
- Helps with security audits by providing a precise dependency map.

## We don't push `node_modules` because, if i have my package.json and package-lock.json i can regenerate my `node_modules` with `npm i`. It will fetch all the listed dependencies and sub-dependencies from the npm registry and create a new `node_modules`.w

<!-- ------------------------------------------------------- -->
