import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import type { MousePosition } from '@/types'

// ─── Floating Particles ───────────────────────────────────────────────────────
function ParticleField() {
  const ref = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 1200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return positions
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
    ref.current.rotation.x = state.clock.elapsedTime * 0.015
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

// ─── Network Node ─────────────────────────────────────────────────────────────
function NetworkNode({
  position,
  pulse,
}: {
  position: [number, number, number]
  pulse: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current || !ringRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.scale.setScalar(1 + Math.sin(t * 2 + pulse) * 0.08)
    ringRef.current.scale.setScalar(1 + Math.sin(t * 1.5 + pulse) * 0.15)
    ringRef.current.rotation.z = t * 0.5
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[0.22, 0.015, 8, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  )
}

// ─── Connection Line ──────────────────────────────────────────────────────────
function ConnectionLine({
  start,
  end,
  opacity,
}: {
  start: [number, number, number]
  end: [number, number, number]
  opacity: number
}) {
  const lineGeometry = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [start, end])

  return (
    <primitive object={new THREE.Line(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: '#00d4ff', transparent: true, opacity: opacity * 0.3 })
    )} />
  )
}

// ─── Network Graph ────────────────────────────────────────────────────────────
function NetworkGraph({ mouse }: { mouse: MousePosition }) {
  const groupRef = useRef<THREE.Group>(null)

  const nodes: [number, number, number][] = useMemo(() => [
    [0, 0, 0],
    [2.5, 1.2, -1],
    [-2.2, 1.5, 0.5],
    [1.8, -1.8, 1],
    [-1.5, -2, -1],
    [3.2, -0.5, 0.5],
    [-3, 0.3, -0.5],
    [0.5, 3, 0.5],
    [0.3, -3, -0.5],
    [-2.5, 2.5, 1],
    [2.8, 2, -0.5],
    [-0.5, 0.5, 2.5],
  ], [])

  const connections: [number, number][] = useMemo(() => [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [1, 10], [2, 6], [2, 9],
    [3, 5], [3, 8], [4, 6], [4, 8],
    [7, 10], [7, 9], [11, 0], [11, 1],
  ], [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y = mouse.x * 0.3 + t * 0.04
    groupRef.current.rotation.x = mouse.y * 0.2 + Math.sin(t * 0.2) * 0.1
  })

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <NetworkNode key={i} position={pos} pulse={i * 0.7} />
      ))}
      {connections.map(([a, b], i) => (
        <ConnectionLine
          key={i}
          start={nodes[a]}
          end={nodes[b]}
          opacity={0.6}
        />
      ))}
    </group>
  )
}

// ─── Main Scene Export ────────────────────────────────────────────────────────
export function NetworkScene({ mouse }: { mouse: MousePosition }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0066ff" />
      <ParticleField />
      <NetworkGraph mouse={mouse} />
      <fog attach="fog" args={['#040608', 12, 35]} />
    </>
  )
}
