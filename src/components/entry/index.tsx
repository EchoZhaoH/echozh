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
            <p className="mgt-l mgl-l mgr-l text-center"><span>前端工程师，喜欢摄影，目前正在学习 rust。</span>
            </p>
          </div>
        </TypeIt>
      </div>
    </>
  );
}
