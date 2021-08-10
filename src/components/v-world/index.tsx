import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function VWorld() {
  const ref = useRef<HTMLDivElement>(null)
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();

  // 创建场景
  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    let timer: number | null = null
    const animate = function () {
      timer = requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate()
    return () => {
      if (timer === null) {
        return
      }
      cancelAnimationFrame(timer)
    }
  }, [])
  return (
    <div ref={ref}></div>
  )
}