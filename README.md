# Fixed!

Problem has been fixed by this commit: https://github.com/flolu/bazel-ts-project/commit/15f6e4bd8a94d0ee299618bc082c81874c73100f

# Usage

Setup

- `yarn install`

Run app

- `yarn start`

  Throws error:

  ```
  app/index.ts(1,15): error TS2307: Cannot find module '@libraries/a' or its corresponding type declarations.
  app/index.ts(2,15): error TS2307: Cannot find module '@libraries/b' or its corresponding type declarations.
  ```
