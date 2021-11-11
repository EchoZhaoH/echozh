import { Link } from 'react-router-dom';

import './style.scss'
import TypeIt from 'typeit-react';
import { Header } from '@components/header';
import { Pet } from '@/components/pet'

export function Entry() {
  return (
    <>
      <Header />
      <Pet className="mt-20" />
      <div className="content mt-4">
        <TypeIt
          as="div"
          options={{
            cursor: false
          } as any}
        >
          <div>
            <h4 className="text-center">Hi 我是 Echo</h4>
            <p className="mgt-l mgl-l mgr-l text-center"><span>幻想工程师，喜欢拍照。这是我的</span><Link className="inline-block" to="https://github.com/EchoZhaoH">github</Link><span>，欢迎关注我。</span>
            </p>
          </div>
        </TypeIt>
      </div>
    </>
  );
}
