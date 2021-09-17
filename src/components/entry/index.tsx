import { Link } from 'react-router-dom';
import githubLog from '@assets/images/github-log.png';

import './style.scss'
import { Card, H4, H5 } from '@blueprintjs/core';
import { WEBGLClasses } from '@/data/webgl-class';

export function Entry() {
  return (
    <div className="content">
      <Card interactive>
        <H4>Hi 我是 Echo</H4>
        <p>一名前端但是不擅长前端的前端工程师，目前就职于 ZOOM。
          <Link to="https://github.com/EchoZhaoH"><img src={githubLog} className="github-log" />github</Link>，欢迎关注我。<br />
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
                {WEBGLClasses.map(cls => (
                  <li key={cls.path}>
                    <Link to={cls.path}>{cls.title}</Link>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        </ul>
      </Card>
    </div>
  );
}
