 package.json中 npm依赖包版本前的符号的意义

版本的格式
major.minor.patch
主版本号.次版本号.修补版本号

————————————————————
patch：修复bug，兼容老版本
minor：新增功能，兼容老版本
major：新的架构调整，不兼容老版本

版本号符号的意义，在进行 npm install 后会根据依赖包版本的下载对应版本的包
~ 会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
^ 会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
* 这意味着安装最新版本的依赖包 

http://reactivex.io/rxjs/manual/installation.html
All Module Types (CJS/ES6/AMD/TypeScript) via npm
cnpm install @reactivex/rxjs@5.5.10 --save

cnpm install rxjs --save

cnpm uninstall rxjs
安装特定版本：
cnpm i rxjs@5.5.10 --save

npm i requirejs
