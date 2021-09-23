import { WEBGLClasses } from "@/data/webgl-class";
import { Card, H5 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

export function WEBGLClassesPage() {
  return (
    <div className="flex-center fill-height">
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
    </div>
  )
}