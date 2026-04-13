export interface Vec2 { x: number; y: number }

export const v2 = (x = 0, y = 0): Vec2 => ({ x, y });
export const add = (a: Vec2, b: Vec2): Vec2 => ({ x: a.x + b.x, y: a.y + b.y });
export const sub = (a: Vec2, b: Vec2): Vec2 => ({ x: a.x - b.x, y: a.y - b.y });
export const scale = (a: Vec2, s: number): Vec2 => ({ x: a.x * s, y: a.y * s });
export const dot = (a: Vec2, b: Vec2): number => a.x * b.x + a.y * b.y;
export const cross = (a: Vec2, b: Vec2): number => a.x * b.y - a.y * b.x;
export const length = (a: Vec2): number => Math.hypot(a.x, a.y);
export const lengthSq = (a: Vec2): number => a.x * a.x + a.y * a.y;
export const distance = (a: Vec2, b: Vec2): number => Math.hypot(a.x - b.x, a.y - b.y);

export function normalize(a: Vec2): Vec2 {
  const l = length(a);
  return l === 0 ? { x: 0, y: 0 } : { x: a.x / l, y: a.y / l };
}

export function rotate(a: Vec2, angle: number): Vec2 {
  const c = Math.cos(angle), s = Math.sin(angle);
  return { x: a.x * c - a.y * s, y: a.x * s + a.y * c };
}

export function lerp(a: Vec2, b: Vec2, t: number): Vec2 {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export function angle(a: Vec2): number {
  return Math.atan2(a.y, a.x);
}

export function angleBetween(a: Vec2, b: Vec2): number {
  return Math.acos(dot(normalize(a), normalize(b)));
}

export function perpendicular(a: Vec2): Vec2 {
  return { x: -a.y, y: a.x };
}

export function reflect(v: Vec2, normal: Vec2): Vec2 {
  const d = 2 * dot(v, normal);
  return { x: v.x - d * normal.x, y: v.y - d * normal.y };
}

export function clamp(v: Vec2, max: number): Vec2 {
  const l = length(v);
  return l > max ? scale(normalize(v), max) : v;
}
