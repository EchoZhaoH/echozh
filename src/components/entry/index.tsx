import { Link } from 'react-router-dom';
import githubLog from '@assets/images/github-log.png';

import './style.scss'
import { H4 } from '@blueprintjs/core';
import TypeIt from 'typeit-react';

export function Entry() {
  return (
    <div className="content flex-center-column fill-height">
      <TypeIt
        as="div"
        options={{
          cursor: false
        } as any}
      >
        <div className="flex-center-column fill-height">
          <H4>Hi 我是 Echo</H4>
          <p className="mgt-l mgl-l mgr-l">一名前端但是不擅长前端的前端工程师，目前就职于 ZOOM。这是我的<Link to="https://github.com/EchoZhaoH"><img src={githubLog} className="github-log" />github</Link>，欢迎关注我。<br />
          </p>
        </div>
      </TypeIt>
    </div>
  );
}
