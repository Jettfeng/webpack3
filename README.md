<h2>3-2 由浅入深 webpack - 打包 JS</h2>
<p>1.webpack entry<entry> output</p>
<p>2.webpack --config webpack.conf.js</p>
<h2>3-3 由浅入深 webpack - 编译 ES6</h2>
<h3>Babel</h3>
<p>Babel-loader:官网：babeljs.io</p>
<p>npm install --save-dev babel-loader babel-core</p>
<p>最新版：npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env (env包含旧版本)</p>
<p>Babel-presets</p>
<p>Babel-plugin</p>
<p>@babel/polyfill:npm install --save @babel/polyfill，全局垫片,使用时直接在js文件中引入</p>
<p>@babel/plugin-transform-runtime:npm install --save-dev @babel/plugin-transform-runtime,局部垫片,在.babelrc中配置</p>
<p>@babel/plugin-transform-runtime依赖于@babel/runtime：npm install --save @babel/runtime</p>
<h2>3-5 由浅入深 webpack - 打包公共代码（1）</h2>
<p>插件：CommonsChunkPlugin</p>
<h2>3-7 由浅入深 webpack - 代码分割和懒加载（1）</h2>
<p>1.webpack methods:require.ensure或者webpack.include</p>
<p>2.Es 2015 Loader spec</p>
<h2> 3-9 由浅入深 webpack - 处理 CSS - style-loader（1）</h2>
<p>style-loader css-loader</p>
<p></p>
