<!--<p align="right">
  <a href='https://gitee.com/TechPot-Studio/peb.js' title="在Gitee查看"><img src='https://gitee.com/TechPot-Studio/peb.js/widgets/widget_5.svg' alt='在Gitee上Fork' /></a>
</p>-->
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/pebjs.png" width="299.2" height="137.6" title="Peb.js" alt="Peb.js Icon" />
</p>

---

**请注意，我们即将重建社区并重命名，届时此项目不再更新，但我们会以另一个名字延续下去**

**新项目已经确定——名字为Pecis**

---

<p align="center">
  <a href="https://github.com/TechPot-Studio/peb.js/commits/master" title="提交频率"><img src="https://img.shields.io/github/commit-activity/m/TechPot-Studio/peb.js?logo=git&logoColor=white&style=flat-square" /></a>
  <a href="https://www.codacy.com/gh/TechPot-Studio/peb.js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TechPot-Studio/peb.js&amp;utm_campaign=Badge_Grade" title="Codacy"><img src="https://img.shields.io/codacy/grade/3cf32c2b188944b7bd1359d4d5a4cc7d?logo=codacy&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/stargazers" title="Stars"><img src="https://img.shields.io/github/stars/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/issues" title="Issues"><img src="https://img.shields.io/github/issues/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/pulls" title="Pull Requests"><img src="https://img.shields.io/github/issues-pr/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/network/members" title="Forks"><img src="https://img.shields.io/github/forks/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/peb" title="NPM 版本"><img src="https://img.shields.io/npm/v/peb?logo=npm&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/peb" title="NPM 下载量"><img src="https://img.shields.io/npm/dw/peb?logo=npm&style=flat-square" /></a>
  <a title="jsdelivr 点击量"><img src="https://img.shields.io/jsdelivr/npm/hw/peb?label=jsdelivr%20hits&logo=jsdelivr&logoColor=white&style=flat-square" /></a>
  <a href="./LICENSE" title="开源协议"><img src="https://img.shields.io/github/license/TechPot-Studio/peb.js?style=flat-square" /></a>
  <a href="https://discord.gg/EvsaWcB" title="聊天"><img src="https://img.shields.io/discord/711002879670091868?logo=discord&logoColor=fff&style=flat-square" /></a>
  <a href="" title="贡献者"><img src="https://img.shields.io/github/contributors-anon/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/releases" title="最新版本"><img src="https://img.shields.io/github/v/release/TechPot-Studio/peb.js?label=lastest%20release&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/releases" title="最新测试版"><img src="https://img.shields.io/github/v/release/TechPot-Studio/peb.js?include_prereleases&label=lastest%20prerelease&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/releases" title="从最后一个版本起的提交数"><img src="https://img.shields.io/github/commits-since/TechPot-Studio/peb.js/latest/master?include_prereleases&logo=github&style=flat-square" /></a>
  <a href="./src/peb.js" title="大小"><img src="https://img.shields.io/github/size/TechPot-Studio/peb.js/src/peb.js?style=flat-square" /></a>
  <a href="./dist/peb.min.js" title="打包后大小"><img src="https://img.shields.io/github/size/TechPot-Studio/peb.js/dist/peb.min.js?label=minified%20size&style=flat-square" /></a>
  <a title="Node.js 版本"><img src="https://img.shields.io/static/v1?label=Node.js%20version&message=12&color=informational&logo=node.js&style=flat-square&logoColor=white" /></a>
  <a title="ECMAScript 版本"><img src="https://img.shields.io/static/v1?label=ECMAScript%20version&message=6&color=informational&logo=JavaScript&style=flat-square&logoColor=white" /></a>
</p>

寻找其它语言版本的README?<br />
简体中文 | [English](README.md)
## 关于
让JS开发更简便的 ECMAScript 6 轻量级API。让代码更快、更高效、更易读，并且与其它一部分API兼容。由TechPot Studio创作，一些方法借鉴了jQuery，并且基本符合大众的书写习惯。
  
微软对Internet Explorer的支持已经结束，从`v3.0.0`版起，我们也将停止兼容旧版浏览器的支持

<p align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
</p>

### JQuery的书写习惯
Peb.js 3.2.0+
```js
peb.sel('div#foo').toggleVisible();
```
JQuery
```js
$('div#foo').toggle();
```

**文档**: [查看](./docs)
## 下载
### 使用 **NPM**

[![NPM包信息](https://nodei.co/npm/peb.png?compact=true)](https://www.npmjs.com/package/peb)

```shell
$ npm install peb
```
```javascript
/* ES6 */
import peb from 'peb'
/* CommonJS */
```
**\*** 如果您使用Node.js，请使用14.0.0以上版本。旧版本可能可以运行，但可能出现严重错误
### 或者，从其它第三方API抓取
#### jsdelivr
```html
<script src="//cdn.jsdelivr.net/npm/peb" type="module"></script>
```
#### unpkg
```html
<script src="//unpkg.com/peb" type="module"></script>
```
`type="module"`只在`v3.1.0`后适用

当然，下载源码也是允许的
## 浏览器支持
以下浏览器最低支持此包的版本
| 浏览器 | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/chrome.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/firefox.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/safari.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/edge.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/opera.svg" width="30" /> |
|------: | :------: | :------: | :------: | :------: | :------: |
| **完全**支持 | 54 | 63 | 10.1 | 79 | 41 |

进入文档可查看具体函数支持版本  
**数据来源：[*developer.mozilla.org*](//developer.mozilla.org)**

## 负责人
[@TechPot-Studio/peb](https://github.com/orgs/TechPot-Studio/teams/peb) 

## 脚注
- ZH 版本可能会更新较慢，可能出现一个版本中两个README不同的情况
