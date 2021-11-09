import { WEBGLClasses } from "@/data/webgl-class";
import { Link } from "react-router-dom";

import { Back } from '@components/back'

export function WEBGLClassesPage() {
  return (
    <>
      <div className="flex-center fill-height">
        <h5>交互式计算机图形学</h5>
        <p>基于 WebGL 的自顶向下方法（第七版）<br />这有我跟着练习的 demo</p>
        <ul>
          {WEBGLClasses.map(cls => (
            <li key={cls.path}>
              <Link to={cls.path}>{cls.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Back />
    </>
  )
}