.eslintrc.js

作用：配置 ESLint，用于定义代码质量和风格检查的规则。
时机：在代码编写和提交时，通过 ESLint 检查代码是否符合规定的风格和质量标准。如果构建过程包含 lint 检查（如使用 npm run lint），则在构建时也会发挥作用。
.lintstagedrc

作用：配置 lint-staged，在 git 提交前对暂存的文件进行 lint 检查。
时机：在代码提交前，通过预提交钩子（pre-commit hook）自动运行，确保提交的代码符合 lint 规则。虽然间接影响构建，但主要作用在提交阶段。
.npmrc

作用：配置 npm 的行为，例如设置 registry、缓存目录等。
时机：在安装 npm 包时发挥作用，确保 npm 使用正确的配置来管理和安装依赖项。在构建过程中，通过 npm install 安装依赖时会使用这些配置。
.prettierrc

作用：配置 Prettier，用于定义代码格式化的规则。
时机：在代码编写和提交时，通过 Prettier 格式化代码。如果构建过程中包含格式化检查（如使用 npm run format），则在构建时也会发挥作用。
.stylelintrc.js

作用：配置 Stylelint，用于定义 CSS 代码质量和风格检查的规则。
时机：在编写和提交 CSS 代码时，通过 Stylelint 检查 CSS 是否符合规定的风格和质量标准。如果构建过程包含 CSS 的 lint 检查（如使用 npm run lint:css），则在构建时也会发挥作用。
.umirc.ts

作用：配置 UmiJS 框架的文件，用于定义应用的构建和运行方式。
时机：如果你的 React 应用使用 UmiJS 框架，这个配置文件会在应用的启动和构建过程中发挥作用，控制路由、插件和构建选项等。
package-lock.json 或 pnpm-lock.yaml

作用：锁定项目依赖的确切版本，确保在不同环境下安装的依赖一致。
时机：在安装依赖时（如 npm install 或 pnpm install），确保所有环境下安装的依赖版本一致，从而确保构建过程的稳定性和一致性。
tsconfig.json

作用：配置 TypeScript 编译器的行为，定义编译选项和项目结构。
时机：在编译 TypeScript 代码时（如使用 tsc 或在构建工具中使用 TypeScript 插件），控制 TypeScript 的编译过程和输出结果。
typings.d.ts

作用：TypeScript 的声明文件，用于定义全局类型和模块的类型声明。
时机：在编译 TypeScript 代码时，提供类型信息，确保类型检查和编译过程顺利进行。