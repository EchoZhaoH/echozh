import { Link } from 'react-router-dom';
import githubLog from '@assets/images/github-log.png';

import './style.scss'
import { Card, H4, H5 } from '@blueprintjs/core';

const DAY = 24*60*60*1000

export function Entry() {
  const days = Math.floor((Date.now() - new Date('2021-08-06').getTime()) / DAY)
  return (
    <div className="content">
      <Card interactive>
        <H4>Hi 我是 Echo</H4>
        <p>一名前端工程师，目前就职于 ZOOM，喜欢折腾。这是我的
          <Link to="https://github.com/EchoZhaoH"><img src={githubLog} className="github-log" />github</Link>，欢迎关注我。<br />
          目前在减肥，坚持了 <strong>{days}</strong> 天。同时也在培养自己的阅读习惯（刷 b 站停不下来）。
        </p>
      </Card>
      <Card interactive>
        <H4>下面是我的目前正在看的书</H4>
        <ul>
          <li>
            <Card interactive>
              <H5>重构</H5>
              <p>改善既有代码的设计（第二版）</p>
            </Card>
          </li>
          <li>
            <Card interactive>
              <H5>交互式计算机图形学</H5>
              <p>基于 WebGL 的自顶向下方法（第七版）<br />这有我跟着练习的 demo</p>
              <ul>
                <li>
                  <Link to="/v-world">demo</Link>
                </li>
                <li>
                  <Link to="/webgl/class1/demo1">demo1</Link>
                </li>
                <li>
                  <Link to="/webgl/class1/demo2">demo2</Link>
                </li>
              </ul>
            </Card>
          </li>
        </ul>
      </Card>
    </div>
  );
}
