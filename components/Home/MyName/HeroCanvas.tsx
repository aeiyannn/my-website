import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return; // skip mobile — save perf
    if (!mountRef.current) return;

    const el = mountRef.current;
    const W = el.clientWidth;
    const H = el.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.z = 9;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // WebGL unavailable — skip silently
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Group so everything rotates together
    const group = new THREE.Group();
    scene.add(group);

    // 70 random node positions spread across the view
    const N = 70;
    const nodes: THREE.Vector3[] = Array.from({ length: N }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6
      )
    );

    // Coral dots
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(nodes.flatMap((v) => [v.x, v.y, v.z]), 3)
    );
    group.add(
      new THREE.Points(
        ptGeo,
        new THREE.PointsMaterial({ color: 0xcc785c, size: 0.07, transparent: true, opacity: 0.55 })
      )
    );

    // Hairline edges between nearby nodes — single LineSegments draw call
    const maxDist = 4;
    const edgeVerts: number[] = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          edgeVerts.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(edgeVerts, 3));
    group.add(
      new THREE.LineSegments(
        edgeGeo,
        new THREE.LineBasicMaterial({ color: 0xcc785c, transparent: true, opacity: 0.1 })
      )
    );

    // Gentle mouse parallax — rotates toward cursor
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    const onMouse = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMouse);

    // Render loop — slow base spin + mouse influence
    let id: number;
    const tick = () => {
      id = requestAnimationFrame(tick);
      // Lerp toward mouse for smooth feel
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      group.rotation.y += 0.0006 + currentX * 0.003;
      group.rotation.x = -currentY * 0.5;
      renderer.render(scene, camera);
    };
    tick();

    // Handle window resize
    const onResize = () => {
      const nW = el.clientWidth;
      const nH = el.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      ptGeo.dispose();
      edgeGeo.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none hidden md:block"
      aria-hidden="true"
    />
  );
}
