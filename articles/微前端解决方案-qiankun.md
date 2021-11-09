---
title: 微前端解决方案-qiankun
tag: 微前端
date: 2021-10-20
---

### 组成 qiankun 的基石

#### single-spa

**single-spa** 是支撑 **qiankun** 的基石，**qiankun** 在上层包装了 **single-spa**，从而实现对外暴露了更加友好的 `api`。让开发者能更加专注业务开发。
我们可以从 **qiankun** 的第一个启动函数 `start` 开始剖析，



