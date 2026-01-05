import * as THREE from "three";
import "./style.css";

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);

const scene = new THREE.Scene();
const circleTexture = (() => {
  const size = 64;
  const offscreen = document.createElement("canvas");
  offscreen.width = size;
  offscreen.height = size;
  const ctx = offscreen.getContext("2d");
  const center = size / 2;
  const gradient = ctx.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    center
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.25, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.45, "rgba(255, 255, 255, 0.7)");
  gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.25)");
  gradient.addColorStop(0.7, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(offscreen);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  return texture;
})();

let width = window.innerWidth;
let height = window.innerHeight;

const camera = new THREE.OrthographicCamera(
  -width / 2,
  width / 2,
  height / 2,
  -height / 2,
  0.1,
  1000
);
camera.position.z = 200;

const clock = new THREE.Clock();
const gravity = new THREE.Vector3(0, -96, 0);
let elapsedTime = 0;
let lastClickSignature = "";

const fireworks = [];
const flashes = [];
const detonationQueue = [];
const BLAST_SCALE = 8.775;
const TRAIL_SCALE = 5.5;
const GLOBAL_LIFE_SCALE = 1.35;
const SMALL_BLAST_CHANCE = 0.8;
const SMALL_BLAST_SCALE = 0.85;
const EXTRA_SCALE = 1.75;
const EXTRA_SCALE_CHANCE = 0.3;
const SPHERICAL_TRAIL_CHANCE = 0.7;
const SPHERICAL_TRAIL_MULTIPLIER = 2.5;
const DOT_TRAIL_CHANCE = 0.35;
const DOT_TRAIL_MULTIPLIER = 2.6;
const DOT_TRAIL_DOT_SCALE = 1.2;
const DOT_PARTICLE_SCALE = 1.1;
const DOT_TRAIL_SAMPLES = [5, 9];
const TRAIL_SAMPLE_SCALE = 0.5625;
const MULTI_CLICK_CHANCE = 0;
const MULTI_CLICK_COUNT = [2, 4];
const MULTI_CLICK_DELAY = [0.05, 0.18];
const MULTI_CLICK_SPREAD = [0, 140];
const MULTI_BLAST_CHANCE = 0.3;
const MULTI_BLAST_COUNT = [2, 4];
const MULTI_BLAST_DELAY = [0.05, 0.18];
const MULTI_BLAST_SPREAD = [30, 120];
const MULTI_BLAST_RADIUS_SCALE = 0.65;
const MULTI_BLAST_COUNT_SCALE = 0.7;
const BIG_VARIANT_CHANCE = 0.45;
const BIG_RADIUS_MULTIPLIER = 1.45;
const BIG_TRAIL_MULTIPLIER = 3;
const BIG_PARTICLE_MULTIPLIER = 1;
const MULTI_HUE_CHANCE = 0.4;
const HUE_VARIANCE_BOOST = [0.06, 0.22];
const MAX_HUE_VARIANCE = 0.35;
const HEAD_POINT_RELATIVE_SCALE = 1.1;
const LONG_TRAIL_CHANCE = 0.4;
const LONG_TRAIL_MULTIPLIER = 2.8;
const LONG_LIFE_MULTIPLIER = 1.35;
const LONG_TRAIL_GROWTH = 2.6;
const LONG_GRAVITY_RAMP_BOOST = 0.8;
const LIFE_BOOST_CHANCE = 0.33;
const LIFE_BOOST_MULTIPLIER = 1.5;
const LIFE_BOOST_TRAIL_MULTIPLIER = 2.5;
const LENGTH_BOOST_CHANCE = 0.55;
const LENGTH_BOOST_MULTIPLIER = 2.5;
const BEND_TRAIL_CHANCE = 1;
const CURLY_TRAIL_CHANCE = 0.3;
const SWIRL_TRAIL_CHANCE = 0.35;
const SWIRL_STRENGTH = [8, 18];
const SWIRL_SPEED = [5, 12];
const CASCADE_TRAIL_CHANCE = 0.45;
const CASCADE_TRAIL_SAMPLES = [48, 72];
const CASCADE_TRAIL_LIFE_MULTIPLIER = 1.35;
const CASCADE_TRAIL_POINT_SCALE = 0.85;
const CASCADE_GRAVITY_SCALE_MULTIPLIER = 1.1;
const CASCADE_GRAVITY_RAMP_BOOST = 0.6;
const CASCADE_DRAG_BOOST = 0.01;
const DROOP_TRAIL_CHANCE = 0.35;
const DROOP_TRAIL_SAMPLES = [40, 64];
const DROOP_TRAIL_POINT_SCALE = 1.1;
const DROOP_TRAIL_BRIGHTNESS = 1.4;
const DROOP_GRAVITY_SCALE_MULTIPLIER = 1.6;
const DROOP_GRAVITY_RAMP_BOOST = 1.3;
const DROOP_DRAG_BOOST = 0.02;
const DROOP_LIFE_MULTIPLIER = 1.4;
const TRAJECTORY_VARIANT_CHANCE = 0.3;
const TRAJECTORY_VARIANTS = [
  { name: "zigzag", strength: [8, 16], speed: [6, 12] },
  { name: "corkscrew", strength: [6, 12], speed: [6, 10] },
  { name: "flutter", strength: [4, 10], speed: [8, 14] },
];
const EXTREME_TRAIL_CHANCE = 0.35;
const EXTREME_TRAIL_MULTIPLIER = 12;
const EXTREME_LIFE_MULTIPLIER = 1.6;
const EXTREME_TRAIL_SAMPLES = [22, 34];
const EXTREME_TRAIL_POINT_SCALE = 1.4;
const TRAJECTORY_TRAIL_MULTIPLIER = 1.2;
const TRAJECTORY_LIFE_MULTIPLIER = 1.1;
const TRAJECTORY_TRAIL_GROWTH = 1.2;
const TRAJECTORY_TRAIL_SAMPLES = [14, 22];
const TRAIL_FADE_CUTOFF = 0.18;
const TRAIL_FADE_POWER = 1.9;
const SOFT_FADE_CHANCE = 0.35;
const SOFT_FADE_POWER = 1.2;
const CURLY_CURVE_BOOST = 5.8;
const CURLY_GRAVITY_RAMP_BOOST = 0.8;
const CURLY_TRAIL_GROWTH_BOOST = 1.2;
const TRAIL_WIDTH_RANGE = [0.35, 4.2];
const PARTICLE_SCALE = 0.6;
const EXTRA_LONG_TRAIL_CHANCE = 0.25;
const EXTRA_LONG_TRAIL_MULTIPLIER = 600;
const AXIS_FLIP_CHANCE = 0.5;
const SPHERICAL_BIAS = 0.82;
const SPHERICAL_EXTRA_LONG_TRAIL_CHANCE = 0.25;
const SPHERICAL_EXTRA_LONG_TRAIL_MULTIPLIER = 35;
const PURE_HUES = [0, 1 / 6, 1 / 3, 2 / 3];
const SPHERE_DENSITY_BOOST = 1.45;
const SPHERE_RADIUS_BOOST = 2.75;
const SPHERE_TRAIL_MULTIPLIER = 28;
const SPHERE_SPEED_MULTIPLIER = 1.35;
const SPHERE_LIFE_MULTIPLIER = 1.35;
const SPHERICAL_CURLY_CHANCE = 0.35;
const SPHERICAL_CURLY_BOOST = 1.7;
const SPHERICAL_SPIRAL_STRENGTH = [12, 22];
const SPHERICAL_SPIRAL_SPEED = [4.5, 7.5];
const FLASH_CHANCE = 0.65;
const FLASH_LIFE = [0.03, 0.06];
const FLASH_SIZE = [60, 120];
const FLASH_OPACITY = [1, 1];
const explosionProfiles = [
  {
    pattern: "burst",
    count: [180, 360],
    radius: [90, 220],
    life: [1.5, 2.6],
    trailStretch: [1.8, 4.4],
    drag: [0.94, 0.985],
    drift: { x: [-2.2, 2.2], y: [-1.6, 1.6], z: [-2.2, 2.2] },
    pointSize: [1.4, 3.0],
    gravityScale: [0.9, 1.1],
    hueVariance: 0.1,
    trailBoost: 2.1,
    curveStrength: [14, 28],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.4],
    spherical: true,
  },
  {
    pattern: "ring",
    count: [140, 280],
    radius: [110, 240],
    life: [1.4, 2.2],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.8, 1.0],
    hueVariance: 0.08,
    trailBoost: 2.0,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.7, 1.2],
    spherical: true,
  },
  {
    pattern: "fan",
    count: [120, 260],
    radius: [90, 210],
    life: [1.3, 2.2],
    trailStretch: [1.8, 4.6],
    drag: [0.94, 0.98],
    drift: { x: [-2.6, 2.6], y: [-1.4, 1.4], z: [-2.6, 2.6] },
    pointSize: [1.2, 2.6],
    gravityScale: [1.0, 1.25],
    hueVariance: 0.12,
  },
  {
    pattern: "spiral",
    count: [180, 360],
    radius: [100, 230],
    life: [1.6, 2.6],
    trailStretch: [2.2, 4.8],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.8],
    gravityScale: [0.85, 1.1],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.5, 1.0],
    gravityRamp: [0.8, 1.3],
    spherical: true,
  },
  {
    pattern: "palm",
    count: [120, 260],
    radius: [100, 220],
    life: [1.8, 3.0],
    trailStretch: [2.8, 5.6],
    drag: [0.96, 0.99],
    drift: { x: [-1.4, 1.4], y: [-1.0, 1.0], z: [-1.4, 1.4] },
    pointSize: [1.6, 3.0],
    gravityScale: [1.1, 1.45],
    hueVariance: 0.05,
  },
  {
    pattern: "flower",
    count: [200, 400],
    radius: [100, 240],
    life: [1.5, 2.6],
    trailStretch: [2.2, 4.4],
    drag: [0.95, 0.98],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.4],
    spherical: true,
  },
  {
    pattern: "sphere",
    count: [320, 560],
    radius: [110, 260],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.15],
    hueVariance: 0.08,
    trailBoost: 2.1,
    curveStrength: [10, 22],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.8, 1.2],
    spherical: true,
  },
  {
    pattern: "dahlia",
    count: [300, 520],
    radius: [110, 260],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.08,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.9, 1.3],
    spherical: true,
  },
  {
    pattern: "globe",
    count: [320, 560],
    radius: [120, 280],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.15],
    hueVariance: 0.08,
    trailBoost: 2.2,
    curveStrength: [10, 22],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.8, 1.2],
    dotTrailChance: 0.5,
    dotTrailSamples: [7, 12],
    spherical: true,
  },
  {
    pattern: "pearl",
    count: [300, 520],
    radius: [120, 270],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.9, 1.3],
    dotTrailChance: 0.25,
    dotTrailSamples: [5, 9],
    spherical: true,
  },
  {
    pattern: "shell",
    count: [320, 560],
    radius: [120, 280],
    life: [1.5, 2.6],
    trailStretch: [2.2, 5.0],
    drag: [0.94, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.0,
    curveStrength: [10, 22],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.8, 1.2],
    dotTrailChance: 0.4,
    dotTrailSamples: [6, 11],
    spherical: true,
  },
  {
    pattern: "orbital",
    count: [280, 520],
    radius: [120, 270],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.08,
    trailBoost: 2.3,
    curveStrength: [14, 28],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.9, 1.3],
    dotTrailChance: 0.6,
    dotTrailSamples: [8, 14],
    spherical: true,
  },
  {
    pattern: "bloom",
    count: [320, 560],
    radius: [120, 280],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.08,
    trailBoost: 2.3,
    curveStrength: [14, 28],
    curveDecay: [0.7, 1.2],
    gravityRamp: [0.9, 1.3],
    dotTrailChance: 0.35,
    dotTrailSamples: [6, 12],
    spherical: true,
  },
  {
    pattern: "cross",
    count: [120, 240],
    radius: [90, 210],
    life: [1.4, 2.3],
    trailStretch: [2.4, 5.0],
    drag: [0.95, 0.985],
    drift: { x: [-1.4, 1.4], y: [-1.2, 1.2], z: [-1.4, 1.4] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.9, 1.1],
    hueVariance: 0.08,
  },
  {
    pattern: "cross",
    count: [120, 240],
    radius: [90, 210],
    life: [1.4, 2.3],
    trailStretch: [2.4, 5.0],
    drag: [0.95, 0.985],
    drift: { x: [-1.4, 1.4], y: [-1.2, 1.2], z: [-1.4, 1.4] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.9, 1.1],
    hueVariance: 0.08,
  },
  {
    pattern: "comet",
    count: [80, 180],
    radius: [120, 260],
    life: [2.0, 3.4],
    trailStretch: [3.2, 6.8],
    drag: [0.965, 0.99],
    drift: { x: [-2.4, 2.4], y: [-1.4, 1.4], z: [-2.4, 2.4] },
    pointSize: [1.6, 3.2],
    gravityScale: [1.1, 1.5],
    hueVariance: 0.06,
    trailBoost: 2.4,
    curveStrength: [16, 30],
    curveDecay: [0.4, 0.9],
    gravityRamp: [1.0, 1.6],
  },
  {
    pattern: "crown",
    count: [140, 260],
    radius: [90, 220],
    life: [1.6, 2.6],
    trailStretch: [2.0, 4.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.4, 2.8],
    gravityScale: [1.0, 1.3],
    hueVariance: 0.08,
    trailBoost: 1.9,
    curveStrength: [10, 20],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.7, 1.2],
  },
  {
    pattern: "willow",
    count: [160, 320],
    radius: [110, 260],
    life: [2.2, 3.6],
    trailStretch: [3.0, 6.4],
    drag: [0.965, 0.99],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.4, 2.8],
    gravityScale: [1.2, 1.6],
    hueVariance: 0.08,
    trailBoost: 2.4,
    curveStrength: [18, 36],
    curveDecay: [0.4, 0.9],
    gravityRamp: [1.2, 1.8],
  },
  {
    pattern: "star",
    count: [140, 280],
    radius: [110, 250],
    life: [1.5, 2.6],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.0, 1.0], z: [-1.6, 1.6] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.95, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.0,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.3],
  },
  {
    pattern: "wave",
    count: [160, 320],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.9, 1.4],
  },
  {
    pattern: "scatter",
    count: [220, 420],
    radius: [120, 280],
    life: [1.4, 2.4],
    trailStretch: [2.2, 5.0],
    drag: [0.94, 0.985],
    drift: { x: [-2.4, 2.4], y: [-1.6, 1.6], z: [-2.4, 2.4] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.15],
    hueVariance: 0.14,
  },
  {
    pattern: "umbrella",
    count: [140, 260],
    radius: [110, 240],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.4, 2.8],
    gravityScale: [1.0, 1.3],
    hueVariance: 0.08,
    trailBoost: 2.1,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.9, 1.4],
  },
  {
    pattern: "peony",
    count: [200, 420],
    radius: [120, 280],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.9, 1.15],
    hueVariance: 0.08,
    trailBoost: 2.2,
    curveStrength: [12, 26],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    spherical: true,
  },
  {
    pattern: "chrysanthemum",
    count: [180, 360],
    radius: [120, 270],
    life: [1.7, 2.8],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.08,
    trailBoost: 2.3,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.4],
    spherical: true,
  },
  {
    pattern: "nova",
    count: [160, 320],
    radius: [120, 260],
    life: [1.5, 2.6],
    trailStretch: [2.4, 5.0],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.95, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.0,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.3],
    spherical: true,
  },
  {
    pattern: "double",
    count: [140, 280],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.95, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.4],
  },
  {
    pattern: "fountain",
    count: [140, 280],
    radius: [80, 180],
    life: [1.4, 2.4],
    trailStretch: [2.6, 5.8],
    drag: [0.95, 0.985],
    drift: { x: [-1.2, 1.2], y: [-0.8, 0.8], z: [-1.2, 1.2] },
    pointSize: [1.4, 2.8],
    gravityScale: [1.1, 1.4],
    hueVariance: 0.12,
    trailBoost: 2.5,
    curveStrength: [14, 28],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.5],
  },
  {
    pattern: "cylinder",
    count: [180, 360],
    radius: [110, 250],
    life: [1.5, 2.6],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.0,
    curveStrength: [10, 20],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.8, 1.2],
  },
  {
    pattern: "tornado",
    count: [160, 300],
    radius: [110, 240],
    life: [1.6, 2.8],
    trailStretch: [2.8, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.2, 1.2], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.95, 1.25],
    hueVariance: 0.12,
    trailBoost: 2.2,
    curveStrength: [14, 26],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.4],
  },
  {
    pattern: "vortex",
    count: [160, 320],
    radius: [110, 260],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.2, 1.2], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.1,
    curveStrength: [14, 26],
    curveDecay: [0.5, 1.0],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "halo",
    count: [140, 260],
    radius: [120, 260],
    life: [1.4, 2.4],
    trailStretch: [2.2, 4.8],
    drag: [0.95, 0.985],
    drift: { x: [-1.4, 1.4], y: [-1.0, 1.0], z: [-1.4, 1.4] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.85, 1.1],
    hueVariance: 0.1,
    trailBoost: 2.0,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.8, 1.2],
    spherical: true,
  },
  {
    pattern: "sheaf",
    count: [140, 260],
    radius: [110, 230],
    life: [1.4, 2.6],
    trailStretch: [2.6, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.0, 1.0], z: [-1.6, 1.6] },
    pointSize: [1.3, 2.6],
    gravityScale: [1.0, 1.3],
    hueVariance: 0.12,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.5, 1.0],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "pinwheel",
    count: [160, 320],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.2, 1.2], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "petal",
    count: [160, 320],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    spherical: true,
  },
  {
    pattern: "starburst",
    count: [180, 360],
    radius: [120, 280],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    spherical: true,
  },
  {
    pattern: "ripple",
    count: [160, 320],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    spherical: true,
  },
  {
    pattern: "burstlet",
    count: [240, 480],
    radius: [120, 280],
    life: [1.4, 2.4],
    trailStretch: [2.0, 4.6],
    drag: [0.94, 0.985],
    drift: { x: [-2.2, 2.2], y: [-1.4, 1.4], z: [-2.2, 2.2] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.15],
    hueVariance: 0.14,
    trailBoost: 2.0,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.0],
    gravityRamp: [0.8, 1.2],
  },
  {
    pattern: "saturn",
    count: [220, 420],
    radius: [120, 280],
    life: [1.6, 2.8],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    spherical: true,
  },
  {
    pattern: "crossette",
    count: [180, 360],
    radius: [110, 250],
    life: [1.5, 2.6],
    trailStretch: [2.2, 5.0],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.0,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.2],
  },
  {
    pattern: "spokes",
    count: [200, 380],
    radius: [120, 270],
    life: [1.5, 2.6],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.1,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "helix",
    count: [180, 360],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.2, 1.2], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "crescent",
    count: [180, 340],
    radius: [120, 270],
    life: [1.5, 2.7],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.3],
  },
  {
    pattern: "diamond",
    count: [160, 320],
    radius: [110, 250],
    life: [1.4, 2.5],
    trailStretch: [2.2, 5.0],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.1,
    curveStrength: [10, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.8, 1.3],
  },
  {
    pattern: "lattice",
    count: [220, 420],
    radius: [130, 290],
    life: [1.6, 2.9],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.2, 1.2], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.3,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
];

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function randInt(min, max) {
  return Math.floor(rand(min, max + 1));
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function range(pair) {
  return rand(pair[0], pair[1]);
}

function randomRotationQuaternion() {
  return new THREE.Quaternion().setFromEuler(
    new THREE.Euler(
      rand(0, Math.PI * 2),
      rand(0, Math.PI * 2),
      rand(0, Math.PI * 2)
    )
  );
}

function randomMirrorVector() {
  const flip = () => (Math.random() < AXIS_FLIP_CHANCE ? -1 : 1);
  return new THREE.Vector3(flip(), flip(), flip());
}

function scaleTrailSamples(samples) {
  const scaledMin = Math.max(2, Math.round(samples[0] * TRAIL_SAMPLE_SCALE));
  const scaledMax = Math.max(scaledMin, Math.round(samples[1] * TRAIL_SAMPLE_SCALE));
  return [scaledMin, scaledMax];
}

function randomVec3(bounds) {
  return new THREE.Vector3(
    rand(bounds.x[0], bounds.x[1]),
    rand(bounds.y[0], bounds.y[1]),
    rand(bounds.z[0], bounds.z[1])
  );
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function hslColor(h, s, l) {
  const color = new THREE.Color();
  color.setHSL(h, s, l);
  return color;
}

function randomDirection() {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const sinPhi = Math.sin(phi);

  return new THREE.Vector3(
    Math.cos(theta) * sinPhi,
    Math.sin(theta) * sinPhi,
    Math.cos(phi)
  );
}

function randomHorizontalDirection() {
  const angle = rand(0, Math.PI * 2);
  return new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
}

function fibonacciDirection(i, count) {
  const offset = 2 / count;
  const y = i * offset - 1 + offset / 2;
  const radius = Math.sqrt(Math.max(0, 1 - y * y));
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const theta = i * goldenAngle;
  return new THREE.Vector3(
    Math.cos(theta) * radius,
    y,
    Math.sin(theta) * radius
  );
}

function buildBasis(axis) {
  const helper =
    Math.abs(axis.y) > 0.8 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const tangent = new THREE.Vector3().crossVectors(axis, helper).normalize();
  const bitangent = new THREE.Vector3().crossVectors(axis, tangent).normalize();
  return { axis, tangent, bitangent };
}

function buildPatternData(pattern) {
  if (
    pattern === "ring" ||
    pattern === "cross" ||
    pattern === "comet" ||
    pattern === "double" ||
    pattern === "nova" ||
    pattern === "saturn" ||
    pattern === "crossette"
  ) {
    return buildBasis(randomDirection());
  }

  return null;
}

function directionFor(pattern, i, count, data) {
  if (pattern === "burst") {
    return randomDirection();
  }

  if (pattern === "ring") {
    const angle = Math.random() * Math.PI * 2;
    if (data) {
      const dir = data.tangent
        .clone()
        .multiplyScalar(Math.cos(angle))
        .add(data.bitangent.clone().multiplyScalar(Math.sin(angle)));
      dir.addScaledVector(data.axis, rand(-0.08, 0.08));
      return dir.normalize();
    }

    return new THREE.Vector3(
      Math.cos(angle),
      Math.sin(angle),
      rand(-0.15, 0.15)
    ).normalize();
  }

  if (pattern === "fan") {
    const yaw = rand(-Math.PI / 2, Math.PI / 2);
    const pitch = rand(0.1, Math.PI / 2.4);
    return new THREE.Vector3(
      Math.cos(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.sin(yaw) * Math.cos(pitch)
    ).normalize();
  }

  if (pattern === "spiral") {
    const turns = rand(6, 10);
    const t = (i / count) * Math.PI * turns;
    const radius = 0.6 + 0.4 * Math.sin(t * 0.35);
    return new THREE.Vector3(
      Math.cos(t) * radius,
      Math.sin(t) * radius,
      Math.cos(t * 0.3) * 0.35
    ).normalize();
  }

  if (pattern === "crescent") {
    const angle = (i / count) * Math.PI * 1.6 - Math.PI * 0.8;
    const radius = 0.65 + 0.25 * Math.cos(angle * 0.6);
    const x = Math.cos(angle) * radius + 0.35;
    const y = Math.sin(angle) * radius;
    return new THREE.Vector3(
      x,
      y,
      rand(-0.15, 0.15)
    ).normalize();
  }

  if (pattern === "diamond") {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    const scale = 1 / (Math.abs(x) + Math.abs(y));
    const radius = 0.75 + 0.15 * Math.sin(angle * 4);
    return new THREE.Vector3(
      x * scale * radius,
      y * scale * radius,
      rand(-0.12, 0.12)
    ).normalize();
  }

  if (pattern === "lattice") {
    const layers = 5;
    const layer = i % layers;
    const t = layers > 1 ? layer / (layers - 1) - 0.5 : 0;
    const angle = (i / count) * Math.PI * 6;
    const radius = 0.55 + 0.25 * Math.sin(angle * 1.5 + layer);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      t * 0.85,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "sphere") {
    return fibonacciDirection(i, count);
  }

  if (pattern === "dahlia") {
    const base = fibonacciDirection(i, count);
    return base.add(randomDirection().multiplyScalar(0.08)).normalize();
  }

  if (pattern === "globe") {
    const base = fibonacciDirection(i, count);
    return base.add(randomDirection().multiplyScalar(0.04)).normalize();
  }

  if (pattern === "pearl") {
    const base = fibonacciDirection(i, count);
    return base.add(randomDirection().multiplyScalar(0.12)).normalize();
  }

  if (pattern === "shell") {
    const base = randomDirection();
    return base.add(randomDirection().multiplyScalar(0.06)).normalize();
  }

  if (pattern === "orbital") {
    const base = fibonacciDirection(i, count);
    const swirl = new THREE.Vector3(-base.z, 0, base.x).multiplyScalar(0.2);
    return base.add(swirl).normalize();
  }

  if (pattern === "bloom") {
    const base = fibonacciDirection(i, count);
    const pulse = 0.2 + 0.3 * Math.sin((i / count) * Math.PI * 6);
    return base.add(randomDirection().multiplyScalar(pulse)).normalize();
  }

  if (pattern === "flower") {
    const petals = randInt(5, 8);
    const angle = (i / count) * Math.PI * 2;
    const radius = 0.6 + 0.35 * Math.sin(angle * petals);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      rand(-0.2, 0.2)
    ).normalize();
  }

  if (pattern === "cross") {
    if (data) {
      const axis = Math.random() < 0.5 ? data.tangent : data.bitangent;
      const dir = axis
        .clone()
        .multiplyScalar(Math.random() < 0.5 ? -1 : 1);
      dir.addScaledVector(data.axis, rand(-0.18, 0.18));
      dir.addScaledVector(randomDirection(), 0.05);
      return dir.normalize();
    }
  }

  if (pattern === "comet") {
    const axis = data?.axis ?? randomDirection();
    return axis.clone().add(randomDirection().multiplyScalar(0.35)).normalize();
  }

  if (pattern === "crown") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.15, 0.45);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "palm") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.55, 0.95);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "willow") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.2, 0.45);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "star") {
    const points = randInt(5, 7);
    const angle = (i / count) * Math.PI * 2;
    const spike = Math.abs(Math.cos(angle * points));
    const radius = 0.45 + 0.5 * spike;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      rand(-0.18, 0.18)
    ).normalize();
  }

  if (pattern === "wave") {
    const t = i / count;
    const angle = t * Math.PI * 2;
    const y = Math.sin(angle * 3) * 0.35;
    return new THREE.Vector3(
      Math.cos(angle),
      y,
      Math.sin(angle)
    ).normalize();
  }

  if (pattern === "scatter") {
    const dir = randomDirection();
    dir.y = Math.abs(dir.y) * 0.75 + 0.25;
    return dir.normalize();
  }

  if (pattern === "umbrella") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.65, 0.95);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "peony") {
    const dir = randomDirection();
    dir.y = Math.abs(dir.y) * 0.7 + 0.3;
    return dir.normalize();
  }

  if (pattern === "chrysanthemum") {
    const petals = randInt(8, 12);
    const angle = (i / count) * Math.PI * 2;
    const radius = 0.5 + 0.45 * Math.sin(angle * petals);
    const lift = 0.15 + 0.35 * Math.cos(angle * petals);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      lift,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "double") {
    if (data) {
      const angle = (i / count) * Math.PI * 2;
      const lobe = i % 2 === 0 ? 1 : -1;
      const dir = data.tangent
        .clone()
        .multiplyScalar(Math.cos(angle) * 0.6)
        .add(data.bitangent.clone().multiplyScalar(Math.sin(angle) * 0.6 * lobe));
      dir.addScaledVector(data.axis, rand(0.2, 0.7));
      dir.addScaledVector(randomDirection(), 0.05);
      return dir.normalize();
    }
  }

  if (pattern === "nova") {
    const spikes = randInt(10, 16);
    const angle = (i / count) * Math.PI * 2;
    const spike = 0.35 + 0.65 * Math.abs(Math.sin(angle * spikes));
    if (data) {
      const dir = data.tangent
        .clone()
        .multiplyScalar(Math.cos(angle) * spike)
        .add(data.bitangent.clone().multiplyScalar(Math.sin(angle) * spike));
      dir.addScaledVector(data.axis, 0.15 + spike * 0.5);
      return dir.normalize();
    }

    return new THREE.Vector3(
      Math.cos(angle) * spike,
      0.15 + spike * 0.5,
      Math.sin(angle) * spike
    ).normalize();
  }

  if (pattern === "fountain") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.8, 1.0);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "cylinder") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.1, 0.35);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "tornado") {
    const t = i / count;
    const angle = t * Math.PI * 6;
    const up = 0.2 + t * 0.8;
    const radius = 0.4 + 0.4 * t;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      up,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "vortex") {
    const t = i / count;
    const angle = t * Math.PI * 10;
    const radius = 0.4 + 0.5 * Math.sin(t * Math.PI);
    const up = 0.2 + 0.6 * (1 - t);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      up,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "halo") {
    const angle = rand(0, Math.PI * 2);
    const up = rand(0.35, 0.55);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "sheaf") {
    const angle = rand(-Math.PI / 6, Math.PI / 6);
    const pitch = rand(0.4, 0.9);
    return new THREE.Vector3(
      Math.cos(angle) * Math.cos(pitch),
      Math.sin(pitch),
      Math.sin(angle) * Math.cos(pitch)
    ).normalize();
  }

  if (pattern === "pinwheel") {
    const t = i / count;
    const angle = t * Math.PI * 8;
    const radius = 0.5 + 0.4 * Math.sin(t * Math.PI);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * 0.35,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "petal") {
    const petals = randInt(6, 10);
    const angle = (i / count) * Math.PI * 2;
    const radius = 0.55 + 0.35 * Math.cos(angle * petals);
    const lift = 0.25 + 0.35 * Math.sin(angle * petals);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      lift,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "starburst") {
    const spikes = randInt(8, 14);
    const angle = (i / count) * Math.PI * 2;
    const spike = 0.4 + 0.6 * Math.abs(Math.cos(angle * spikes));
    return new THREE.Vector3(
      Math.cos(angle) * spike,
      0.25 + spike * 0.5,
      Math.sin(angle) * spike
    ).normalize();
  }

  if (pattern === "ripple") {
    const t = i / count;
    const angle = t * Math.PI * 2;
    const radius = 0.5 + 0.45 * Math.sin(t * Math.PI * 4);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * 0.2,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "burstlet") {
    const dir = randomDirection();
    dir.y = Math.abs(dir.y) * 0.55 + 0.25;
    return dir.normalize();
  }

  if (pattern === "saturn") {
    const ringCount = Math.floor(count * 0.7);
    if (i < ringCount) {
      const angle = (i / ringCount) * Math.PI * 2;
      if (data) {
        const dir = data.tangent
          .clone()
          .multiplyScalar(Math.cos(angle))
          .add(data.bitangent.clone().multiplyScalar(Math.sin(angle)));
        dir.addScaledVector(data.axis, rand(-0.08, 0.08));
        return dir.normalize();
      }
      return new THREE.Vector3(
        Math.cos(angle),
        Math.sin(angle),
        rand(-0.12, 0.12)
      ).normalize();
    }

    return randomDirection().normalize();
  }

  if (pattern === "crossette") {
    if (data) {
      const axis = Math.random() < 0.5 ? data.tangent : data.bitangent;
      const dir = axis.clone().multiplyScalar(Math.random() < 0.5 ? -1 : 1);
      dir.addScaledVector(data.axis, rand(-0.15, 0.15));
      return dir.normalize();
    }
  }

  if (pattern === "spokes") {
    const spikes = randInt(8, 14);
    const step = (Math.PI * 2) / spikes;
    const index = Math.round((i / count) * spikes);
    const angle = index * step + rand(-0.18, 0.18);
    const up = rand(0.2, 0.6);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "helix") {
    const turns = rand(4, 7);
    const t = i / count;
    const angle = t * Math.PI * 2 * turns;
    const radius = 0.45 + 0.25 * Math.sin(t * Math.PI * 2);
    const lift = 0.2 + 0.8 * t;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      lift,
      Math.sin(angle) * radius
    ).normalize();
  }

  const angle = rand(0, Math.PI * 2);
  const up = rand(0.35, 0.9);
  const out = Math.sqrt(1 - up * up);
  return new THREE.Vector3(
    Math.cos(angle) * out,
    up,
    Math.sin(angle) * out
  ).normalize();
}

class Flash {
  constructor(position, color) {
    this.life = range(FLASH_LIFE);
    this.lifeMax = this.life;
    this.baseOpacity = range(FLASH_OPACITY);
    this.size = range(FLASH_SIZE);

    this.material = new THREE.SpriteMaterial({
      map: circleTexture,
      color,
      transparent: true,
      opacity: this.baseOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      alphaTest: 0.5,
    });

    this.sprite = new THREE.Sprite(this.material);
    this.sprite.position.copy(position);
    this.sprite.scale.set(this.size, this.size, 1);
  }

  update(delta) {
    this.life -= delta;
    if (this.life <= 0) {
      return false;
    }

    const t = this.life / this.lifeMax;
    const fade = t * t;
    this.material.opacity = this.baseOpacity * fade;
    const scale = this.size * (1 + (1 - t) * 0.2);
    this.sprite.scale.set(scale, scale, 1);
    return true;
  }

  dispose() {
    this.material.dispose();
  }
}

class Firework {
  constructor(origin, options) {
    this.count = options.count;
    this.pattern = options.pattern;
    this.radius = options.radius;
    this.lifeBase = options.life;
    this.trailStretch = options.trailStretch;
    this.trailGrowth = options.trailGrowth ?? 0;
    this.drag = options.drag;
    this.drift = options.drift;
    this.pointSize = options.pointSize;
    this.trailMode = options.trailMode ?? "lines";
    this.trailSamples = options.trailSamples ?? 2;
    this.trailPointScale = options.trailPointScale ?? 1;
    this.trailWidthScale = options.trailWidthScale ?? 1;
    this.trailBrightness = options.trailBrightness ?? 1;
    this.trailFadePower = options.trailFadePower ?? TRAIL_FADE_POWER;
    this.trailHistory = options.trailHistory ?? false;
    this.spiralStrength = options.spiralStrength ?? 0;
    this.spiralSpeed = options.spiralSpeed ?? 0;
    this.swirlStrength = options.swirlStrength ?? 0;
    this.swirlSpeed = options.swirlSpeed ?? 0;
    this.trajectoryMode = options.trajectoryMode ?? null;
    this.trajectoryStrength = options.trajectoryStrength ?? 0;
    this.trajectorySpeed = options.trajectorySpeed ?? 0;
    this.trajectoryPhase = null;
    this.trajectoryVectors = null;
    this.directionRotation = options.directionRotation ?? null;
    this.directionMirror = options.directionMirror ?? null;
    this.gravityScale = options.gravityScale ?? 1;
    this.gravityRamp = options.gravityRamp ?? 0;
    this.curveStrength = options.curveStrength ?? 0;
    this.curveDecay = options.curveDecay ?? 1;
    this.patternData = buildPatternData(this.pattern);
    this.curveVectors = null;
    this.trailHistoryIndex = null;
    this.spiralPhase = null;
    this.swirlPhase = null;

    if (this.trailMode !== "dots") {
      this.trailSamples = 2;
      this.trailHistory = false;
    }

    const baseSpeed = this.radius / this.lifeBase;

    this.positions = new Float32Array(this.count * 3);
    this.trailPositions = new Float32Array(this.count * this.trailSamples * 3);
    this.colors = new Float32Array(this.count * 3);
    this.baseColors = new Float32Array(this.count * 3);
    this.trailColors = new Float32Array(this.count * this.trailSamples * 3);
    this.velocities = new Float32Array(this.count * 3);
    this.life = new Float32Array(this.count);
    this.lifeMax = new Float32Array(this.count);

    if (this.curveStrength > 0) {
      this.curveVectors = new Float32Array(this.count * 2);
      for (let i = 0; i < this.count; i += 1) {
        const angle = rand(0, Math.PI * 2);
        const strength = this.curveStrength * rand(0.6, 1.4);
        const cIdx = i * 2;
        this.curveVectors[cIdx] = Math.cos(angle) * strength;
        this.curveVectors[cIdx + 1] = Math.sin(angle) * strength;
      }
    }

    if (this.trailHistory) {
      this.trailHistoryIndex = new Uint16Array(this.count);
    }

    if (this.spiralStrength > 0) {
      this.spiralPhase = new Float32Array(this.count);
      for (let i = 0; i < this.count; i += 1) {
        this.spiralPhase[i] = rand(0, Math.PI * 2);
      }
    }

    if (this.swirlStrength > 0) {
      this.swirlPhase = new Float32Array(this.count);
      for (let i = 0; i < this.count; i += 1) {
        this.swirlPhase[i] = rand(0, Math.PI * 2);
      }
    }

    if (this.trajectoryMode) {
      this.trajectoryPhase = new Float32Array(this.count);
      if (this.trajectoryMode === "zigzag" || this.trajectoryMode === "flutter") {
        this.trajectoryVectors = new Float32Array(this.count * 3);
      }
      for (let i = 0; i < this.count; i += 1) {
        this.trajectoryPhase[i] = rand(0, Math.PI * 2);
        if (this.trajectoryVectors) {
          const dir = randomHorizontalDirection();
          const tIdx = i * 3;
          this.trajectoryVectors[tIdx] = dir.x;
          this.trajectoryVectors[tIdx + 1] = dir.y;
          this.trajectoryVectors[tIdx + 2] = dir.z;
        }
      }
    }

    for (let i = 0; i < this.count; i += 1) {
      const dir = directionFor(this.pattern, i, this.count, this.patternData);
      if (this.directionMirror) {
        dir.multiply(this.directionMirror);
      }
      if (this.directionRotation) {
        dir.applyQuaternion(this.directionRotation);
      }
      const speed = baseSpeed * rand(0.6, 1.2);
      const idx = i * 3;

      this.positions[idx] = origin.x;
      this.positions[idx + 1] = origin.y;
      this.positions[idx + 2] = origin.z;

      this.velocities[idx] = dir.x * speed;
      this.velocities[idx + 1] = dir.y * speed;
      this.velocities[idx + 2] = dir.z * speed;

      const particleLife = this.lifeBase * rand(0.7, 1.3);
      this.life[i] = particleLife;
      this.lifeMax[i] = particleLife;

      const baseHue = options.hues ? pick(options.hues) : options.hue;
      const hue =
        (baseHue + rand(-options.hueVariance, options.hueVariance) + 1) % 1;
      const color = hslColor(hue, rand(0.6, 1), rand(0.45, 0.75));

      this.colors[idx] = color.r;
      this.colors[idx + 1] = color.g;
      this.colors[idx + 2] = color.b;

      this.baseColors[idx] = color.r;
      this.baseColors[idx + 1] = color.g;
      this.baseColors[idx + 2] = color.b;

      const trailOffset = i * this.trailSamples * 3;
      for (let s = 0; s < this.trailSamples; s += 1) {
        const tIdx = trailOffset + s * 3;
        this.trailColors[tIdx] = color.r * this.trailBrightness;
        this.trailColors[tIdx + 1] = color.g * this.trailBrightness;
        this.trailColors[tIdx + 2] = color.b * this.trailBrightness;
        if (this.trailHistory) {
          this.trailPositions[tIdx] = origin.x;
          this.trailPositions[tIdx + 1] = origin.y;
          this.trailPositions[tIdx + 2] = origin.z;
        }
      }
    }

    this.pointsGeometry = new THREE.BufferGeometry();
    this.pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.positions, 3)
    );
    this.pointsGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(this.colors, 3)
    );

    const trailPointSize =
      this.pointSize * this.trailPointScale * this.trailWidthScale;
    const headPointSize = Math.max(
      this.pointSize,
      trailPointSize * HEAD_POINT_RELATIVE_SCALE
    );

    this.pointsMaterial = new THREE.PointsMaterial({
      size: headPointSize,
      vertexColors: true,
      map: circleTexture,
      alphaTest: 0.35,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.pointsGeometry, this.pointsMaterial);

    this.trailGeometry = new THREE.BufferGeometry();
    this.trailGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.trailPositions, 3)
    );
    this.trailGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(this.trailColors, 3)
    );

    if (this.trailMode === "dots") {
      this.trailMaterial = new THREE.PointsMaterial({
        size: this.pointSize * this.trailPointScale * this.trailWidthScale,
        vertexColors: true,
        map: circleTexture,
        alphaTest: 0.35,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      this.trail = new THREE.Points(this.trailGeometry, this.trailMaterial);
    } else {
      this.trailMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        linewidth: this.trailWidthScale,
      });
      this.trail = new THREE.LineSegments(this.trailGeometry, this.trailMaterial);
    }
  }

  update(delta) {
    let alive = 0;

    for (let i = 0; i < this.count; i += 1) {
      let lifeLeft = this.life[i] - delta;
      this.life[i] = lifeLeft;

      const idx = i * 3;
      const trailOffset = i * this.trailSamples * 3;

      if (lifeLeft <= 0) {
        this.colors[idx] = 0;
        this.colors[idx + 1] = 0;
        this.colors[idx + 2] = 0;
        for (let s = 0; s < this.trailSamples; s += 1) {
          const tIdx = trailOffset + s * 3;
          this.trailColors[tIdx] = 0;
          this.trailColors[tIdx + 1] = 0;
          this.trailColors[tIdx + 2] = 0;
        }
        continue;
      }

      alive += 1;

      const lifeRatio = Math.max(lifeLeft / this.lifeMax[i], 0);
      const age = 1 - lifeRatio;
      const gravityFactor = this.gravityScale * (1 + this.gravityRamp * age);

      let vx = this.velocities[idx];
      let vy = this.velocities[idx + 1];
      let vz = this.velocities[idx + 2];

      vx += (gravity.x * gravityFactor + this.drift.x) * delta;
      vy += (gravity.y * gravityFactor + this.drift.y) * delta;
      vz += (gravity.z * gravityFactor + this.drift.z) * delta;

      if (this.curveVectors) {
        const cIdx = i * 2;
        const curveFactor = Math.pow(lifeRatio, this.curveDecay);
        vx += this.curveVectors[cIdx] * curveFactor * delta;
        vz += this.curveVectors[cIdx + 1] * curveFactor * delta;
      }

      if (this.spiralStrength > 0 && this.spiralPhase) {
        const spin =
          this.spiralPhase[i] + this.spiralSpeed * age + lifeRatio * 0.6;
        vx += Math.cos(spin) * this.spiralStrength * delta;
        vz += Math.sin(spin) * this.spiralStrength * delta;
      }

      if (this.swirlStrength > 0 && this.swirlPhase) {
        const swirl =
          this.swirlPhase[i] + this.swirlSpeed * age + lifeRatio * 1.2;
        const swirlFactor = 0.35 + 0.65 * age;
        vx += Math.sin(swirl) * this.swirlStrength * swirlFactor * delta;
        vz += Math.cos(swirl) * this.swirlStrength * swirlFactor * delta;
      }

      if (this.trajectoryMode && this.trajectoryPhase) {
        const phase = this.trajectoryPhase[i] + this.trajectorySpeed * age;
        if (this.trajectoryMode === "zigzag" && this.trajectoryVectors) {
          const tIdx = i * 3;
          const zig = Math.sin(phase) * this.trajectoryStrength;
          vx += this.trajectoryVectors[tIdx] * zig * delta;
          vy += this.trajectoryVectors[tIdx + 1] * zig * delta;
          vz += this.trajectoryVectors[tIdx + 2] * zig * delta;
        } else if (this.trajectoryMode === "corkscrew") {
          const spin = this.trajectoryStrength * delta;
          vx += Math.cos(phase) * spin;
          vz += Math.sin(phase) * spin;
        } else if (this.trajectoryMode === "flutter" && this.trajectoryVectors) {
          const tIdx = i * 3;
          const flutter = Math.sin(phase * 1.6) * this.trajectoryStrength;
          vx += this.trajectoryVectors[tIdx] * flutter * 0.6 * delta;
          vz += this.trajectoryVectors[tIdx + 2] * flutter * 0.6 * delta;
          vy += flutter * 0.35 * delta;
        }
      }

      vx *= this.drag;
      vy *= this.drag;
      vz *= this.drag;

      this.velocities[idx] = vx;
      this.velocities[idx + 1] = vy;
      this.velocities[idx + 2] = vz;

      const px = this.positions[idx];
      const py = this.positions[idx + 1];
      const pz = this.positions[idx + 2];

      const nx = px + vx * delta;
      const ny = py + vy * delta;
      const nz = pz + vz * delta;

      this.positions[idx] = nx;
      this.positions[idx + 1] = ny;
      this.positions[idx + 2] = nz;

      const dx = nx - px;
      const dy = ny - py;
      const dz = nz - pz;

      this.colors[idx] = this.baseColors[idx] * lifeRatio;
      this.colors[idx + 1] = this.baseColors[idx + 1] * lifeRatio;
      this.colors[idx + 2] = this.baseColors[idx + 2] * lifeRatio;

      const trailBase = Math.max(
        (lifeRatio - TRAIL_FADE_CUTOFF) / (1 - TRAIL_FADE_CUTOFF),
        0
      );
      const trailFade = Math.pow(trailBase, this.trailFadePower);
      const trailIntensity = trailFade * this.trailBrightness;

      if (this.trailHistory) {
        let headIndex = this.trailHistoryIndex[i];
        headIndex = (headIndex + 1) % this.trailSamples;
        this.trailHistoryIndex[i] = headIndex;

        const headIdx = trailOffset + headIndex * 3;
        this.trailPositions[headIdx] = nx;
        this.trailPositions[headIdx + 1] = ny;
        this.trailPositions[headIdx + 2] = nz;

        const denom = this.trailSamples > 1 ? this.trailSamples - 1 : 1;
        for (let s = 0; s < this.trailSamples; s += 1) {
          const order = (headIndex - s + this.trailSamples) % this.trailSamples;
          const tIdx = trailOffset + order * 3;
          const falloff = Math.pow(1 - s / denom, 1.6);
          const fade = trailIntensity * falloff;
          this.trailColors[tIdx] = this.baseColors[idx] * fade;
          this.trailColors[tIdx + 1] = this.baseColors[idx + 1] * fade;
          this.trailColors[tIdx + 2] = this.baseColors[idx + 2] * fade;
        }
      } else {
        const stretch = this.trailStretch * (1 + this.trailGrowth * age);
        const tailX = nx - dx * stretch;
        const tailY = ny - dy * stretch;
        const tailZ = nz - dz * stretch;
        const sampleCount = this.trailSamples;
        const denom = sampleCount > 1 ? sampleCount - 1 : 1;

        for (let s = 0; s < sampleCount; s += 1) {
          const t = s / denom;
          const tIdx = trailOffset + s * 3;
          this.trailPositions[tIdx] = tailX + (nx - tailX) * t;
          this.trailPositions[tIdx + 1] = tailY + (ny - tailY) * t;
          this.trailPositions[tIdx + 2] = tailZ + (nz - tailZ) * t;

          this.trailColors[tIdx] = this.baseColors[idx] * trailIntensity;
          this.trailColors[tIdx + 1] = this.baseColors[idx + 1] * trailIntensity;
          this.trailColors[tIdx + 2] = this.baseColors[idx + 2] * trailIntensity;
        }
      }
    }

    this.pointsGeometry.attributes.position.needsUpdate = true;
    this.pointsGeometry.attributes.color.needsUpdate = true;
    this.trailGeometry.attributes.position.needsUpdate = true;
    this.trailGeometry.attributes.color.needsUpdate = true;

    return alive > 0;
  }

  dispose() {
    this.pointsGeometry.dispose();
    this.pointsMaterial.dispose();
    this.trailGeometry.dispose();
    this.trailMaterial.dispose();
  }
}

function buildExplosionOptions(profile, hueBase) {
  const scale = profile.scale ?? 1;
  const baseHue = hueBase ?? Math.random();
  const baseVariance = profile.hueVariance ?? 0.1;
  const trailBoost = profile.trailBoost ?? 1;
  const curveStrength = profile.curveStrength ? range(profile.curveStrength) : 0;
  const curveDecay = profile.curveDecay ? range(profile.curveDecay) : 1;
  const gravityRamp = profile.gravityRamp ? range(profile.gravityRamp) : 0;
  const extraScale =
    Math.random() < EXTRA_SCALE_CHANCE ? EXTRA_SCALE : 1;
  const smallBlast = Math.random() < SMALL_BLAST_CHANCE;
  const extremeTrajectory = Math.random() < EXTREME_TRAIL_CHANCE;
  const bendTrails = extremeTrajectory || Math.random() < BEND_TRAIL_CHANCE;
  const cascadeTrail = Math.random() < CASCADE_TRAIL_CHANCE;
  const droopTrail = Math.random() < DROOP_TRAIL_CHANCE;
  const extraCurl = Math.random() < CURLY_TRAIL_CHANCE;
  const sphericalCurly =
    profile.spherical && Math.random() < SPHERICAL_CURLY_CHANCE;
  const curlyTrajectory = extraCurl || sphericalCurly;
  const curveBoost = curlyTrajectory
    ? CURLY_CURVE_BOOST * (sphericalCurly ? SPHERICAL_CURLY_BOOST : 1)
    : 1;
  const gravityRampExtra = curlyTrajectory ? CURLY_GRAVITY_RAMP_BOOST : 0;
  const trailGrowthExtra = curlyTrajectory ? CURLY_TRAIL_GROWTH_BOOST : 0;
  const sphericalTrailBoost =
    profile.spherical && Math.random() < SPHERICAL_TRAIL_CHANCE
      ? SPHERICAL_TRAIL_MULTIPLIER
      : 1;
  const bigVariant = Math.random() < BIG_VARIANT_CHANCE;
  const bigRadiusBoost = bigVariant ? BIG_RADIUS_MULTIPLIER : 1;
  const bigTrailBoost = bigVariant ? BIG_TRAIL_MULTIPLIER : 1;
  const bigParticleBoost = bigVariant ? BIG_PARTICLE_MULTIPLIER : 1;
  const trajectoryTrail = bendTrails || cascadeTrail || droopTrail;
  const dotTrailChance = profile.dotTrailChance ?? DOT_TRAIL_CHANCE;
  const dotTrail = trajectoryTrail || Math.random() < dotTrailChance;
  const dotTrailSamples = scaleTrailSamples(
    profile.dotTrailSamples ?? DOT_TRAIL_SAMPLES
  );
  const extremeTrailSamples = scaleTrailSamples(EXTREME_TRAIL_SAMPLES);
  const trajectoryTrailSamples = scaleTrailSamples(TRAJECTORY_TRAIL_SAMPLES);
  const cascadeTrailSamples = scaleTrailSamples(CASCADE_TRAIL_SAMPLES);
  const droopTrailSamples = scaleTrailSamples(DROOP_TRAIL_SAMPLES);
  let trailSamples = extremeTrajectory
    ? randInt(extremeTrailSamples[0], extremeTrailSamples[1])
    : trajectoryTrail
      ? randInt(trajectoryTrailSamples[0], trajectoryTrailSamples[1])
      : dotTrail
        ? randInt(dotTrailSamples[0], dotTrailSamples[1])
        : 2;
  if (cascadeTrail) {
    trailSamples = randInt(cascadeTrailSamples[0], cascadeTrailSamples[1]);
  }
  if (droopTrail) {
    const droopSamples = randInt(droopTrailSamples[0], droopTrailSamples[1]);
    trailSamples = Math.max(trailSamples, droopSamples);
  }
  const trailPointScale = dotTrail
    ? DOT_TRAIL_DOT_SCALE *
      (extremeTrajectory ? EXTREME_TRAIL_POINT_SCALE : 1) *
      (cascadeTrail ? CASCADE_TRAIL_POINT_SCALE : 1) *
      (droopTrail ? DROOP_TRAIL_POINT_SCALE : 1)
    : 1;
  const trailWidthScale = range(TRAIL_WIDTH_RANGE);
  const particleScale =
    (dotTrail ? DOT_PARTICLE_SCALE : 1) * bigParticleBoost * PARTICLE_SCALE;
  const dotTrailBoost = dotTrail ? DOT_TRAIL_MULTIPLIER : 1;
  const longTrail = Math.random() < LONG_TRAIL_CHANCE;
  const extraLongTrail =
    Math.random() < EXTRA_LONG_TRAIL_CHANCE ? EXTRA_LONG_TRAIL_MULTIPLIER : 1;
  const lengthBoost = Math.random() < LENGTH_BOOST_CHANCE;
  const lengthMultiplier = lengthBoost ? LENGTH_BOOST_MULTIPLIER : 1;
  const swirlTrails = Math.random() < SWIRL_TRAIL_CHANCE;
  const softFade = Math.random() < SOFT_FADE_CHANCE;
  const lifeBoost = Math.random() < LIFE_BOOST_CHANCE;
  const lifeTrailMultiplier = lifeBoost ? LIFE_BOOST_TRAIL_MULTIPLIER : 1;
  let lifeScale =
    (longTrail ? LONG_LIFE_MULTIPLIER : 1) *
    (lifeBoost ? LIFE_BOOST_MULTIPLIER : 1) *
    (trajectoryTrail ? TRAJECTORY_LIFE_MULTIPLIER : 1) *
    (extremeTrajectory ? EXTREME_LIFE_MULTIPLIER : 1);
  if (cascadeTrail) {
    lifeScale *= CASCADE_TRAIL_LIFE_MULTIPLIER;
  }
  if (droopTrail) {
    lifeScale *= DROOP_LIFE_MULTIPLIER;
  }
  const trailGrowth = Math.max(
    longTrail ? LONG_TRAIL_GROWTH : 0,
    trajectoryTrail ? TRAJECTORY_TRAIL_GROWTH : 0
  ) + trailGrowthExtra;
  const gravityRampBoost = longTrail ? LONG_GRAVITY_RAMP_BOOST : 0;
  const cascadeGravityRampBoost = cascadeTrail ? CASCADE_GRAVITY_RAMP_BOOST : 0;
  const droopGravityRampBoost = droopTrail ? DROOP_GRAVITY_RAMP_BOOST : 0;
  const longTrailBoost = longTrail ? LONG_TRAIL_MULTIPLIER : 1;
  const trajectoryTrailBoost = trajectoryTrail ? TRAJECTORY_TRAIL_MULTIPLIER : 1;
  const extremeTrailBoost = extremeTrajectory ? EXTREME_TRAIL_MULTIPLIER : 1;
  const multiHue = Math.random() < MULTI_HUE_CHANCE;
  const hueVariance = multiHue
    ? Math.min(baseVariance + range(HUE_VARIANCE_BOOST), MAX_HUE_VARIANCE)
    : 0;
  const hues = multiHue
    ? [
        baseHue,
        (baseHue + rand(0.1, 0.3)) % 1,
        (baseHue + rand(0.55, 0.85)) % 1,
      ].slice(0, randInt(2, 3))
    : null;
  const spiralStrength = sphericalCurly
    ? range(SPHERICAL_SPIRAL_STRENGTH)
    : 0;
  const spiralSpeed = sphericalCurly ? range(SPHERICAL_SPIRAL_SPEED) : 0;
  const swirlStrength = swirlTrails ? range(SWIRL_STRENGTH) : 0;
  const swirlSpeed = swirlTrails ? range(SWIRL_SPEED) : 0;
  const trajectoryVariant =
    Math.random() < TRAJECTORY_VARIANT_CHANCE ? pick(TRAJECTORY_VARIANTS) : null;
  const trajectoryMode = trajectoryVariant ? trajectoryVariant.name : null;
  const trajectoryStrength = trajectoryVariant ? range(trajectoryVariant.strength) : 0;
  const trajectorySpeed = trajectoryVariant ? range(trajectoryVariant.speed) : 0;

  const countBoost = profile.spherical ? SPHERE_DENSITY_BOOST : 1;
  const radiusBoost = profile.spherical ? SPHERE_RADIUS_BOOST : 1;
  const sphereTrailBoost = profile.spherical ? SPHERE_TRAIL_MULTIPLIER : 1;
  const sphereSpeedBoost = profile.spherical ? SPHERE_SPEED_MULTIPLIER : 1;
  const sphereLifeBoost = profile.spherical ? SPHERE_LIFE_MULTIPLIER : 1;
  const sphericalExtraTrail =
    profile.spherical && Math.random() < SPHERICAL_EXTRA_LONG_TRAIL_CHANCE
      ? SPHERICAL_EXTRA_LONG_TRAIL_MULTIPLIER
      : 1;
  const directionRotation = randomRotationQuaternion();
  const directionMirror = randomMirrorVector();
  const trailBrightness = droopTrail ? DROOP_TRAIL_BRIGHTNESS : 1;
  const baseDrag = range(profile.drag);
  const dragBoost =
    (cascadeTrail ? CASCADE_DRAG_BOOST : 0) +
    (droopTrail ? DROOP_DRAG_BOOST : 0);
  const drag = dragBoost > 0 ? Math.min(baseDrag + dragBoost, 0.995) : baseDrag;

  return {
    pattern: profile.pattern,
    count: Math.round(randInt(profile.count[0], profile.count[1]) * countBoost),
    radius:
      range(profile.radius) *
      BLAST_SCALE *
      scale *
      extraScale *
      (smallBlast ? SMALL_BLAST_SCALE : 1) *
      bigRadiusBoost *
      radiusBoost,
    life: range(profile.life) * lifeScale * GLOBAL_LIFE_SCALE * sphereLifeBoost,
    trailStretch:
      range(profile.trailStretch) *
      TRAIL_SCALE *
      trailBoost *
      sphericalTrailBoost *
      sphereTrailBoost *
      dotTrailBoost *
      longTrailBoost *
      lengthMultiplier *
      lifeTrailMultiplier *
      bigTrailBoost *
      trajectoryTrailBoost *
      extremeTrailBoost *
      extraLongTrail *
      sphericalExtraTrail,
    drag,
    drift: randomVec3(profile.drift),
    pointSize: range(profile.pointSize) * particleScale,
    hue: baseHue,
    hues,
    hueVariance,
    gravityScale:
      range(profile.gravityScale) *
      sphereSpeedBoost *
      (cascadeTrail ? CASCADE_GRAVITY_SCALE_MULTIPLIER : 1) *
      (droopTrail ? DROOP_GRAVITY_SCALE_MULTIPLIER : 1),
    gravityRamp:
      gravityRamp +
      gravityRampBoost +
      gravityRampExtra +
      cascadeGravityRampBoost +
      droopGravityRampBoost,
    curveStrength: curveStrength * curveBoost,
    curveDecay,
    trailGrowth,
    trailHistory: trajectoryTrail,
    trailMode: dotTrail ? "dots" : "lines",
    trailSamples,
    trailPointScale,
    trailWidthScale,
    trailBrightness,
    trailFadePower: softFade ? SOFT_FADE_POWER : TRAIL_FADE_POWER,
    directionRotation,
    directionMirror,
    spiralStrength,
    spiralSpeed,
    swirlStrength,
    swirlSpeed,
    trajectoryMode,
    trajectoryStrength,
    trajectorySpeed,
  };
}

function spawnFlash(position, hue) {
  if (Math.random() > FLASH_CHANCE) {
    return;
  }

  const color = hslColor(hue, 0.9, 0.6);
  const flash = new Flash(position, color);
  flashes.push(flash);
  scene.add(flash.sprite);
}

function buildSecondaryProfile(profile) {
  const countMin = Math.max(10, Math.round(profile.count[0] * MULTI_BLAST_COUNT_SCALE));
  const countMax = Math.max(countMin, Math.round(profile.count[1] * MULTI_BLAST_COUNT_SCALE));
  return {
    ...profile,
    count: [countMin, countMax],
    scale: (profile.scale ?? 1) * MULTI_BLAST_RADIUS_SCALE,
  };
}

function scheduleSecondaryBlasts(origin, profile, hueBase) {
  if (Math.random() >= MULTI_BLAST_CHANCE) {
    return;
  }

  const count = randInt(MULTI_BLAST_COUNT[0], MULTI_BLAST_COUNT[1]);
  const secondaryProfile = buildSecondaryProfile(profile);

  for (let i = 0; i < count; i += 1) {
    const spread = rand(MULTI_BLAST_SPREAD[0], MULTI_BLAST_SPREAD[1]);
    const angle = rand(0, Math.PI * 2);
    const offset = new THREE.Vector3(
      Math.cos(angle) * spread,
      Math.sin(angle) * spread * 0.7,
      0
    );
    const delay = range(MULTI_BLAST_DELAY) + i * rand(0.04, 0.12);
    const position = clampToView(origin.clone().add(offset));

    detonationQueue.push({
      time: elapsedTime + delay,
      position,
      profile: secondaryProfile,
      hue: hueBase,
      allowMultiBlast: false,
    });
  }
}

function explodeAt(position, profile, hueBase, allowMultiBlast = true) {
  const chosen = profile ?? pick(explosionProfiles);
  const firework = new Firework(
    position,
    buildExplosionOptions(chosen, hueBase)
  );

  fireworks.push(firework);
  scene.add(firework.points);
  scene.add(firework.trail);

  if (allowMultiBlast) {
    scheduleSecondaryBlasts(position, chosen, hueBase);
  }
}

function screenToWorld(x, y) {
  const ndc = new THREE.Vector3(
    (x / width) * 2 - 1,
    -(y / height) * 2 + 1,
    0
  );
  ndc.unproject(camera);
  return new THREE.Vector3(ndc.x, ndc.y, 0);
}

function clampToView(position) {
  return new THREE.Vector3(
    clamp(position.x, -width / 2 + 40, width / 2 - 40),
    clamp(position.y, -height / 2 + 120, height / 2 - 80),
    0
  );
}

function scheduleSingleDetonation(origin, baseHue) {
  const excluded = new Set(lastClickSignature ? lastClickSignature.split("|") : []);
  const sphericalPool = explosionProfiles.filter(
    (profile) => profile.spherical && !excluded.has(profile.pattern)
  );
  const fullPool = explosionProfiles.filter(
    (profile) => !excluded.has(profile.pattern)
  );
  let profile = null;

  if (Math.random() < SPHERICAL_BIAS && sphericalPool.length) {
    profile = pick(sphericalPool);
  } else if (fullPool.length) {
    profile = pick(fullPool);
  } else {
    profile = pick(explosionProfiles);
  }
  lastClickSignature = profile.pattern;
  spawnFlash(origin, baseHue);

  detonationQueue.push({
    time: elapsedTime,
    position: origin,
    profile,
    hue: baseHue,
  });
}

function scheduleDetonation(origin) {
  const baseHue = pick(PURE_HUES);
  scheduleSingleDetonation(origin, baseHue);
}

function onPointerDown(event) {
  const target = screenToWorld(event.clientX, event.clientY);
  const clamped = clampToView(target);
  scheduleDetonation(clamped);

  const hint = document.querySelector("#hint");
  if (hint) {
    hint.classList.add("hidden");
  }
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;

  camera.left = -width / 2;
  camera.right = width / 2;
  camera.top = height / 2;
  camera.bottom = -height / 2;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

canvas.addEventListener("pointerdown", onPointerDown);
canvas.addEventListener("contextmenu", (event) => event.preventDefault());
window.addEventListener("resize", resize);

function animate() {
  const delta = Math.min(clock.getDelta(), 0.033);
  elapsedTime += delta;

  if (detonationQueue.length) {
    for (let i = detonationQueue.length - 1; i >= 0; i -= 1) {
      const item = detonationQueue[i];
      if (item.time <= elapsedTime) {
        explodeAt(
          item.position,
          item.profile,
          item.hue,
          item.allowMultiBlast ?? true
        );
        detonationQueue.splice(i, 1);
      }
    }
  }

  for (let i = flashes.length - 1; i >= 0; i -= 1) {
    const flash = flashes[i];
    if (!flash.update(delta)) {
      scene.remove(flash.sprite);
      flash.dispose();
      flashes.splice(i, 1);
    }
  }

  for (let i = fireworks.length - 1; i >= 0; i -= 1) {
    const firework = fireworks[i];
    if (!firework.update(delta)) {
      scene.remove(firework.points);
      scene.remove(firework.trail);
      firework.dispose();
      fireworks.splice(i, 1);
    }
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
