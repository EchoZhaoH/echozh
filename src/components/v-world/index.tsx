import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import bgImg from '@assets/images/stage-1.jpeg';

export default function VWorld() {
  const ref = useRef<HTMLDivElement>(null);

  // 创建场景
  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(bgImg),
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const bgTexture = new THREE.TextureLoader().load(bgImg);
    bgTexture.mapping = THREE.CubeRefractionMapping;
    bgTexture.wrapS = THREE.RepeatWrapping;
    bgTexture.wrapT = THREE.RepeatWrapping;
    bgTexture.repeat.set(1, 1);
    scene.background = bgTexture;

    camera.position.z = 5;
    let timer: number | null = null;
    const animate = function () {
      timer = requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);
  return (
    <div ref={ref} />
  );
}
