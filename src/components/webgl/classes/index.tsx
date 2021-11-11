import { WEBGLClasses } from "@/data/webgl-class";
import { Link } from "react-router-dom";

import { Back } from '@components/back'

export function WEBGLClassesPage() {
  return (
    <div className="py-4 mx-auto sm:w-screen-sm <sm:px-4">
      <h5 className="text-lg">交互式计算机图形学</h5>
      <p className="text-gray-500 mt-5">基于 WebGL 的自顶向下方法（第七版）<br />这有我跟着练习的 demo</p>
      <ul>
        {WEBGLClasses.map(cls => (
          <li key={cls.path}>
            <Link to={cls.path}>{cls.title}</Link>
          </li>
        ))}
      </ul>
      <Back />
    </div>
  )
}