import { Link } from 'react-router-dom';

import './style.scss'
import TypeIt from 'typeit-react';
import { Header } from '@components/header';
import { Avatar } from '@components/avatar';

export function Entry() {
  return (
    <>
      <Header />
      <div className="content mt-48">
        <Avatar />
        <TypeIt
          as="div"
          options={{
            cursor: false
          } as any}
        >
          <div>
            <h4 className="text-center">Hi 我是 Echo</h4>
            <p className="mgt-l mgl-l mgr-l"><span>一名前端但是不擅长前端的前端工程师，目前就职于 ZOOM。这是我的</span><Link className="inline-block" to="https://github.com/EchoZhaoH">github</Link><span>，欢迎关注我。</span>
            </p>
          </div>
        </TypeIt>
      </div>
    </>
  );
}
