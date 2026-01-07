import * as THREE from "three";
import "./style.css";

const BUILD_STAMP = "2026-01-07T21:42Z";
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
const versionTag = document.querySelector("#version");
if (versionTag) {
  versionTag.textContent = `build ${BUILD_STAMP}`;
}
renderer.setPixelRatio(1);
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

const flashTexture = (() => {
  const size = 128;
  const offscreen = document.createElement("canvas");
  offscreen.width = size;
  offscreen.height = size;
  const ctx = offscreen.getContext("2d");
  const center = size / 2;

  ctx.clearRect(0, 0, size, size);
  const gradient = ctx.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    center
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.18, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.45, "rgba(255, 255, 255, 0.92)");
  gradient.addColorStop(0.75, "rgba(255, 255, 255, 0.35)");
  gradient.addColorStop(0.9, "rgba(255, 255, 255, 0.12)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(offscreen);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
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
const patternHistory = [];
const hueHistory = [];
let firstClick = true;

const fireworks = [];
const rockets = [];
const flashes = [];
const detonationQueue = [];
const BLAST_SCALE = 16.07800956;
const BLAST_COUNT_SCALE = 0.85;
const TRAIL_SCALE = 51.7150365615;
const GLOBAL_LIFE_SCALE = 0.2472575625;
const SMALL_BLAST_CHANCE = 0.8;
const SMALL_BLAST_SCALE = 1.0625;
const EXTRA_SCALE = 1.75;
const EXTRA_SCALE_CHANCE = 0.3;
const SPHERICAL_TRAIL_CHANCE = 0.9;
const SPHERICAL_TRAIL_MULTIPLIER = 3.6;
const SPHERICAL_TRAIL_WIDTH_MULTIPLIER = 1.4;
const DOT_TRAIL_CHANCE = 0.175;
const DOT_TRAIL_MULTIPLIER = 2.6;
const DOT_TRAIL_DOT_SCALE = 1.2;
const DOT_PARTICLE_SCALE = 1.1;
const DOT_TRAIL_SAMPLES = [5, 9];
const NO_TRAIL_CHANCE = 0.25;
const TRAIL_SAMPLE_SCALE = 1.0;
const MULTI_CLICK_CHANCE = 0;
const MULTI_CLICK_COUNT = [2, 4];
const MULTI_CLICK_DELAY = [0.05, 0.18];
const MULTI_CLICK_SPREAD = [0, 140];
const ROCKET_LAUNCH_CHANCE = 0.25;
const ROCKET_FLIGHT_TIME = [0.6, 0.9];
const ROCKET_HEIGHT_RANGE = [220, 380];
const ROCKET_DRIFT_RANGE = [-18, 18];
const ROCKET_POINT_SIZE = 2.4;
const ROCKET_POINT_SIZE_RANGE = [0.7, 1.4];
const ROCKET_SIZE_MULTIPLIER = 3;
const ROCKET_SPEED_SCALE_RANGE = [1.221875, 1.725];
const ROCKET_BRIGHTNESS = 1.6;
const ROCKET_HUE_JITTER = 0.08;
const ROCKET_TRAIL_SAMPLES = [18, 28];
const ROCKET_TRAIL_SIZE_SCALE = [0.45, 0.65];
const ROCKET_TRAIL_OPACITY = [0.35, 0.85];
const ROCKET_TRAIL_BRIGHTNESS = [1.05, 1.45];
const ROCKET_TRAIL_FADE_POWER = 1.4;
const SUB_BURST_CHANCE = 0.15;
const SUB_BURST_TRIGGER_RATIO = 0.55;
const SUB_BURST_PARTICLE_CHANCE = 0.16;
const SUB_BURST_MAX = 24;
const SUB_BURST_HUE_VARIANCE = 0.06;
const RAINBOW_SUB_BURST_PATTERN = "rainburst";
const MULTI_BLAST_CHANCE = 0.65;
const MULTI_BLAST_COUNT = [2, 4];
const MULTI_BLAST_DELAY = [0.05, 0.18];
const MULTI_BLAST_SPREAD = [30, 120];
const MULTI_BLAST_RADIUS_SCALE = 0.65;
const MULTI_BLAST_COUNT_SCALE = 0.7;
const BIG_VARIANT_CHANCE = 0.45;
const BIG_RADIUS_MULTIPLIER = 1.45;
const BIG_TRAIL_MULTIPLIER = 3;
const BIG_PARTICLE_MULTIPLIER = 1;
const MULTI_HUE_CHANCE = 0.3;
const HUE_VARIANCE_BOOST = [0.02, 0.06];
const MAX_HUE_VARIANCE = 0.1;
const EXTRA_COLOR_VARIANCE_CHANCE = 0.15;
const EXTRA_COLOR_VARIANCE = [0.01, 0.03];
const MAX_SINGLE_HUE_VARIANCE = 0.04;
const FERRARI_RED_CHANCE = 0.1;
const FERRARI_RED_HUE = 0.01;
const FERRARI_RED_HUE_VARIANCE = 0.02;
const CROSS_EXTRA_ROTATION_COUNT = 2;
const CROSS_INTENSITY_BOOST = 1.8;
const CROSS_TRAIL_BRIGHTNESS_BOOST = 1.75;
const WARP_INTENSITY_BOOST = 1.4;
const WARP_TRAIL_BRIGHTNESS_BOOST = 2.0;
const SUPERNOVA_INTENSITY_BOOST = 1.6;
const SUPERNOVA_TRAIL_BRIGHTNESS_BOOST = 1.6;
const NEW_PATTERN_CHAOS_ROTATIONS = 2;
const NEW_PATTERN_MIRROR_CHANCE = 0.9;
const NEW_PATTERN_SCALE_RANGE = [0.75, 1.45];
const PATTERN_REPEAT_WINDOW = 3;
const HUE_REPEAT_WINDOW = 3;
const GLOBAL_SCALE_RANGE = [0.9, 1.15];
const FIRST_CLICK_COUNT_MULTIPLIER = 1.35;
const FIRST_CLICK_RADIUS_MULTIPLIER = 1.25;
const FIRST_CLICK_TRAIL_MULTIPLIER = 1.6;
const FIRST_CLICK_LIFE_MULTIPLIER = 1.4;
const FIRST_CLICK_MIN_TRAIL_SAMPLES = 18;
const FIRST_CLICK_TRAIL_BRIGHTNESS = 1.4;
const FIRST_CLICK_FORCE_PATTERN = "sphere";
const COLOR_SATURATION_RANGE = [0.98, 1];
const COLOR_LIGHTNESS_RANGE = [0.62, 0.72];
const COLOR_GLOBAL_INTENSITY_SCALE = 5.25;
const HIGH_LIGHTNESS_THRESHOLD = 0.5;
const HIGH_LIGHTNESS_INTENSITY_SCALE = 0.15;
const LOW_LIGHTNESS_THRESHOLD = 0.7;
const LOW_LIGHTNESS_INTENSITY_SCALE = 12.555;
const BASE_TRAIL_BRIGHTNESS = 1.4375;
const HEAD_POINT_RELATIVE_SCALE = 1.1;
const GLOBAL_POINT_SCALE = 1.25;
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
const EXTRA_LONGER_TRAIL_CHANCE = 0.4;
const EXTRA_LONGER_TRAIL_MULTIPLIER = 4.0;
const MID_LONG_TRAIL_CHANCE = 0.5;
const MID_LONG_TRAIL_MULTIPLIER = 100.0;
const BEND_TRAIL_CHANCE = 1;
const CURLY_TRAIL_CHANCE = 0.35;
const SWIRL_TRAIL_CHANCE = 0.35;
const SWIRL_STRENGTH = [8, 18];
const SWIRL_SPEED = [5, 12];
const CURLY_SWIRL_CHANCE = 0.85;
const CURLY_SWIRL_STRENGTH = [16, 30];
const CURLY_SWIRL_SPEED = [9, 18];
const SWIRL_HEAVY_CHANCE = 0.15;
const SWIRL_HEAVY_STRENGTH = [18, 30];
const SWIRL_HEAVY_SPEED = [10, 18];
const SWIRL_DROOP_GRAVITY_BOOST = 0.5;
const CASCADE_TRAIL_CHANCE = 0.45;
const CASCADE_TRAIL_SAMPLES = [48, 72];
const CASCADE_TRAIL_LIFE_MULTIPLIER = 1.35;
const CASCADE_TRAIL_POINT_SCALE = 0.85;
const CASCADE_GRAVITY_SCALE_MULTIPLIER = 1.1;
const CASCADE_GRAVITY_RAMP_BOOST = 0.6;
const CASCADE_DRAG_BOOST = 0.01;
const DROOP_TRAIL_CHANCE = 0.35;
const DROOP_TRAIL_SAMPLES = [50, 75];
const DROOP_TRAIL_POINT_SCALE = 1.1;
const DROOP_TRAIL_BRIGHTNESS = 1.4;
const DROOP_GRAVITY_SCALE_MULTIPLIER = 1.6;
const DROOP_GRAVITY_RAMP_BOOST = 1.3;
const DROOP_DRAG_BOOST = 0.02;
const DROOP_LIFE_MULTIPLIER = 1.4;
const DROOP_EXTRA_CHANCE = 0.15;
const DROOP_EXTRA_TRAIL_MULTIPLIER = 3;
const DROOP_EXTRA_LIFE_MULTIPLIER = 1.25;
const DROOP_EXTRA_FADE_POWER = 0.85;
const MEGA_DROOP_CHANCE = 0.1;
const MEGA_DROOP_TRAIL_MULTIPLIER = 5;
const MEGA_DROOP_LIFE_MULTIPLIER = 1.6;
const MEGA_DROOP_GRAVITY_SCALE_MULTIPLIER = 2.0;
const MEGA_DROOP_GRAVITY_RAMP_BOOST = 2.5;
const MEGA_DROOP_SPHERE_TRAIL_MULTIPLIER = 1.4;
const SPHERICAL_DROOP_CHANCE = 0.9;
const SPHERICAL_DROOP_TRAIL_MULTIPLIER = 2.6;
const SPHERICAL_DROOP_LIFE_MULTIPLIER = 5;
const SPHERICAL_DROOP_GRAVITY_RAMP_BOOST = 0.7;
const SPHERICAL_DROOP_DRAG_BOOST = 0.03;
const CLICK_DROOP_CHANCE = 0.15;
const CLICK_DROOP_TRAIL_MULTIPLIER = 5;
const CLICK_DROOP_LIFE_MULTIPLIER = 1.2;
const CLICK_CURLY_CHANCE = 0.24;
const SPAGHETTI_TO_CROSS_CHANCE = 0.4;
const CURLY_REPLACEMENT_CHANCE = 0.4;
const CURLY_REPLACEMENT_STRAIGHT_CHANCE = 0.5;
const CURLY_REPLACEMENT_TRAJECTORY_BOOST = 0.2;
const SPAGHETTI_FIREWORK_CHANCE = 0.75;
const SPAGHETTI_SPHERICAL_CHANCE = 0.25;
const SPAGHETTI_CURVE_MULTIPLIER = 1.8;
const SPAGHETTI_VARIANCE_RANGE = [1.15, 1.8];
const SPAGHETTI_TRAIL_MULTIPLIER = 2.4;
const SPAGHETTI_LIFE_MULTIPLIER = 0.012;
const SPAGHETTI_TRAIL_GROWTH_BOOST = 1.2;
const SPAGHETTI_SWIRL_MULTIPLIER = 1.8;
const SPAGHETTI_CURL_NOISE_STRENGTH_MULTIPLIER = 26;
const SPAGHETTI_CURL_NOISE_SCALE_MULTIPLIER = 1.0;
const SPAGHETTI_CURL_NOISE_SPEED_MULTIPLIER = 2.2;
const SPAGHETTI_TWIST_MULTIPLIER = 1.6;
const SPAGHETTI_Y_AXIS_CHANCE = 0.85;
const SPAGHETTI_Y_AXIS_MULTIPLIER = 3.4;
const SPAGHETTI_TRAIL_SAMPLE_MULTIPLIER = 5.5;
const SPAGHETTI_DROOP_CHANCE = 0.85;
const SPAGHETTI_DROOP_TRAIL_MULTIPLIER = 1.6;
const SPAGHETTI_DROOP_GRAVITY_SCALE_MULTIPLIER = 1.35;
const SPAGHETTI_DROOP_GRAVITY_RAMP_BOOST = 0.5;
const SPAGHETTI_DROOP_DRAG_BOOST = 0.03;
const SPAGHETTI_SIZE_MULTIPLIER = 0.392;
const SNOWFLAKE_TRAJECTORY_CHANCE = 0.1;
const SNOWFLAKE_SWAY_STRENGTH = [6, 14];
const SNOWFLAKE_SWAY_SPEED = [1.2, 2.4];
const SNOWFLAKE_DRIFT_SCALE = 0.6;
const SNOWFLAKE_DRAG_BOOST = 0.02;
const CURLY_TRAIL_LENGTH_MULTIPLIER = 50.0;
const CURLY_TRAIL_LIFE_MULTIPLIER = 4.5;
const CURLY_TWIST_SCALE = 6;
const TRAJECTORY_VARIANT_CHANCE = 0.3;
const TRAJECTORY_VARIANTS = [
  { name: "zigzag", strength: [8, 16], speed: [6, 12] },
  { name: "corkscrew", strength: [6, 12], speed: [6, 10] },
  { name: "flutter", strength: [4, 10], speed: [8, 14] },
];
const CURL_NOISE_CHANCE = 0.1875;
const CURL_NOISE_STRENGTH = [20, 36];
const CURL_NOISE_SCALE = [0.006, 0.012];
const CURL_NOISE_SPEED = [0.8, 1.6];
const CURL_NOISE_CURLY_MULTIPLIER = 14;
const CURL_NOISE_CURLY_SCALE_MULTIPLIER = 12;
const CURL_NOISE_CURLY_SPEED_MULTIPLIER = 5.2;
const CURLY_Y_AXIS_CHANCE = 0.2;
const CURLY_Y_AXIS_MULTIPLIER = 1.8;
const CURLY_VARIANTS = [
  { name: "tight", strength: 1.4, scale: 1.5, speed: 1.2, twist: 1.6 },
  { name: "loose", strength: 1.1, scale: 1.0, speed: 0.85, twist: 1.2 },
  { name: "snaking", strength: 1.8, scale: 1.9, speed: 1.35, twist: 2.0 },
  { name: "whirl", strength: 2.2, scale: 2.3, speed: 1.6, twist: 2.6 },
];
const CURLY_CURVE_MULTIPLIER = 1.4;
const CURL_NOISE_EPSILON = 0.02;
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
const AXIS_FLIP_CHANCE = 0.8;
const NON_SPHERICAL_FLIP_CHANCE = 0.98;
const NON_SPHERICAL_SCALE_RANGE = [0.625, 2.25];
const NON_SPHERICAL_COLOR_VARIATION_CHANCE = 0.7;
const NON_SPHERICAL_HUE_JITTER = 0.06;
const CHAOS_ROTATION_CHANCE = 0.7;
const CHAOS_ROTATION_ANGLE = [0.15, 0.75];
const CHAOS_SCALE_RANGE = [0.8, 1.25];
const CHAOS_MIRROR_CHANCE = 0.3;
const NON_SPHERICAL_CHAOS_CHANCE = 0.3;
const CROSS_WEIGHT = 3;
const SPHERICAL_BIAS = 0.8;
const SPHERICAL_EXTRA_LONG_TRAIL_CHANCE = 0.8;
const SPHERICAL_EXTRA_LONG_TRAIL_MULTIPLIER = 75;
const PURE_HUES = [0, 1 / 12, 1 / 6, 1 / 3, 1 / 2, 2 / 3, 5 / 6, 11 / 12];
const STRONG_HUES = [0, 1 / 12, 1 / 6, 0.5, 7 / 12, 2 / 3];
const SOLID_HUES = Array.from({ length: 16 }, (_, i) => i / 16);
const MULTI_HUE_REPLACE_CHANCE = 0.7;
const SECONDARY_PATTERN = "rosette";
const SECONDARY_COUNT = [90, 180];
const SECONDARY_RADIUS = [80, 180];
const SECONDARY_LIFE = [1.2, 2.1];
const SECONDARY_TRAIL_STRETCH = [3.2, 6.2];
const SECONDARY_DRAG = [0.965, 0.99];
const SECONDARY_DRIFT = { x: [-1.2, 1.2], y: [-0.8, 0.8], z: [-1.2, 1.2] };
const SECONDARY_POINT_SIZE = [1.1, 2.2];
const SECONDARY_GRAVITY_SCALE = [1.05, 1.4];
const SECONDARY_HUE_VARIANCE = 0.12;
const SECONDARY_TRAIL_BOOST = 2.6;
const SECONDARY_CURVE_STRENGTH = [16, 32];
const SECONDARY_CURVE_DECAY = [0.5, 0.95];
const SECONDARY_GRAVITY_RAMP = [1.0, 1.6];
const SECONDARY_DOT_TRAIL_CHANCE = 0.7;
const SECONDARY_DOT_TRAIL_SAMPLES = [9, 16];
const SPHERE_DENSITY_BOOST = 1.45;
const SPHERE_RADIUS_BOOST = 2.75;
const SPHERE_SIZE_MULTIPLIER = 1.35;
const SPHERE_TRAIL_MULTIPLIER = 165;
const SPHERE_SPEED_MULTIPLIER = 1.35;
const SPHERE_LIFE_MULTIPLIER = 2.2;
const SPHERICAL_CURLY_CHANCE = 0.12;
const SPHERICAL_CURLY_BOOST = 1.7;
const SPHERICAL_SPIRAL_STRENGTH = [12, 22];
const SPHERICAL_SPIRAL_SPEED = [4.5, 7.5];
const FLASH_CHANCE = 1.0;
const FLASH_LIFE = [0.05, 0.1];
const FLASH_SIZE = [0.54, 0.84];
const FLASH_OPACITY = [128, 340];
const FLASH_DIM_CHANCE = 0.25;
const FLASH_BRIGHT_CHANCE = 0.35;
const FLASH_DIM_SCALE = [0.7, 0.95];
const FLASH_BRIGHT_SCALE = [2.4, 3.6];
const FLASH_DIM_OPACITY_SCALE = [0.65, 0.9];
const FLASH_BRIGHT_OPACITY_SCALE = [2.1, 3.2];
const FLASH_OPACITY_MIN = 0.7;
const FLASH_OPACITY_MAX = 480;
const FLASH_COLOR_SATURATION = [0.98, 1];
const FLASH_COLOR_LIGHTNESS = [0.66, 0.78];
const FLASH_COLOR_VARIANCE = 0.04;
const FLASH_SPHERICAL_BRIGHTNESS_BOOST = 22.4;
const FLASH_SPHERICAL_SIZE_BOOST = 3.2;
const FLASH_SPHERICAL_OUTER_SCALE = 2.4;
const FLASH_SPHERICAL_OUTER_OPACITY_SCALE = 1.15;
const FLASH_SPHERICAL_OUTER_LIFE_SCALE = 0.7;
const FLASH_SPHERICAL_OUTER_LIGHTNESS = [0.6, 0.74];
const FLASH_FIREBOWL_COUNT = [6, 10];
const FLASH_FIREBOWL_OFFSET = [0, 0];
const FLASH_FIREBOWL_SIZE_SCALE = [1.6, 2.6];
const FLASH_FIREBOWL_OPACITY_SCALE = [1.0875, 1.6675];
const FLASH_FIREBOWL_LIFE_SCALE = [0.5, 0.9];
const FLASH_FIREBOWL_LIGHTNESS = [0.6, 0.78];
const FLASH_FIREBOWL_HUE_SHIFT = [0, 0];
const FLASH_BURST_COUNT = [4, 7];
const FLASH_BURST_OFFSET = [0, 0];
const FLASH_BURST_SIZE_SCALE = [1.2, 2.6];
const FLASH_BURST_OPACITY_SCALE = [0.9, 1.4];
const FLASH_BURST_LIFE_SCALE = [0.45, 0.9];
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
  {
    pattern: "arcburst",
    count: [140, 300],
    radius: [120, 260],
    life: [1.5, 2.7],
    trailStretch: [2.6, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 26],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    dotTrailChance: 0.4,
    dotTrailSamples: [6, 12],
  },
  {
    pattern: "braid",
    count: [160, 320],
    radius: [110, 250],
    life: [1.6, 2.8],
    trailStretch: [2.8, 5.8],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.95, 1.25],
    hueVariance: 0.12,
    trailBoost: 2.3,
    curveStrength: [14, 28],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.4],
  },
  {
    pattern: "lotus",
    count: [180, 340],
    radius: [120, 260],
    life: [1.5, 2.7],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.1,
    curveStrength: [12, 24],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "spire",
    count: [120, 240],
    radius: [100, 220],
    life: [1.6, 2.8],
    trailStretch: [2.8, 6.2],
    drag: [0.955, 0.99],
    drift: { x: [-1.4, 1.4], y: [-1.0, 1.0], z: [-1.4, 1.4] },
    pointSize: [1.3, 2.6],
    gravityScale: [1.0, 1.35],
    hueVariance: 0.08,
    trailBoost: 2.4,
    curveStrength: [14, 28],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.5],
  },
  {
    pattern: "fanwave",
    count: [160, 320],
    radius: [120, 260],
    life: [1.5, 2.6],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.2,
    curveStrength: [12, 26],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "sparkburst",
    count: [24, 48],
    radius: [35, 70],
    life: [0.7, 1.2],
    trailStretch: [1.4, 2.4],
    drag: [0.94, 0.98],
    drift: { x: [-1.2, 1.2], y: [-0.8, 0.8], z: [-1.2, 1.2] },
    pointSize: [1.0, 2.0],
    gravityScale: [1.0, 1.25],
    hueVariance: 0.08,
    trailBoost: 1.4,
    curveStrength: [8, 14],
    curveDecay: [0.5, 0.9],
    gravityRamp: [1.0, 1.3],
  },
  {
    pattern: "rainburst",
    count: [46, 90],
    radius: [60, 120],
    life: [0.9, 1.6],
    trailStretch: [2.0, 3.6],
    drag: [0.94, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.2, 2.6],
    gravityScale: [1.05, 1.35],
    hueVariance: 0.18,
    trailBoost: 1.9,
    curveStrength: [12, 20],
    curveDecay: [0.4, 0.85],
    gravityRamp: [1.05, 1.6],
  },
  {
    pattern: "supernova",
    count: [200, 420],
    radius: [120, 260],
    life: [1.4, 2.4],
    trailStretch: [3.2, 6.2],
    drag: [0.95, 0.985],
    drift: { x: [-2.2, 2.2], y: [-1.4, 1.4], z: [-2.2, 2.2] },
    pointSize: [1.4, 2.8],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 3.8,
    curveStrength: [20, 36],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.5],
    spherical: true,
  },
  {
    pattern: "prism",
    count: [160, 320],
    radius: [110, 240],
    life: [1.5, 2.6],
    trailStretch: [2.8, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.08,
    trailBoost: 2.0,
    curveStrength: [12, 22],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
  },
  {
    pattern: "warp",
    count: [180, 360],
    radius: [120, 260],
    life: [1.5, 2.7],
    trailStretch: [3.0, 6.0],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.25],
    hueVariance: 0.1,
    trailBoost: 2.8,
    curveStrength: [16, 30],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.5],
  },
  {
    pattern: "arcflower",
    count: [160, 320],
    radius: [120, 260],
    life: [1.5, 2.7],
    trailStretch: [2.4, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 26],
    curveDecay: [0.6, 1.1],
    gravityRamp: [0.9, 1.3],
    dotTrailChance: 0.35,
    dotTrailSamples: [6, 12],
    spherical: true,
  },
  {
    pattern: "lissajous",
    count: [180, 360],
    radius: [120, 270],
    life: [1.6, 2.9],
    trailStretch: [2.6, 5.8],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.12,
    trailBoost: 2.3,
    curveStrength: [14, 28],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.4],
  },
  {
    pattern: "crownburst",
    count: [140, 280],
    radius: [110, 240],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.6],
    drag: [0.95, 0.985],
    drift: { x: [-1.6, 1.6], y: [-1.2, 1.2], z: [-1.6, 1.6] },
    pointSize: [1.3, 2.6],
    gravityScale: [1.0, 1.35],
    hueVariance: 0.1,
    trailBoost: 2.2,
    curveStrength: [12, 24],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.5],
  },
  {
    pattern: "sprayburst",
    count: [140, 280],
    radius: [110, 240],
    life: [1.5, 2.6],
    trailStretch: [2.4, 5.2],
    drag: [0.95, 0.985],
    drift: { x: [-2.0, 2.0], y: [-1.4, 1.4], z: [-2.0, 2.0] },
    pointSize: [1.3, 2.6],
    gravityScale: [1.0, 1.4],
    hueVariance: 0.12,
    trailBoost: 2.1,
    curveStrength: [12, 26],
    curveDecay: [0.5, 1.0],
    gravityRamp: [1.0, 1.6],
  },
  {
    pattern: "ribbon",
    count: [160, 320],
    radius: [120, 260],
    life: [1.6, 2.8],
    trailStretch: [2.6, 5.4],
    drag: [0.95, 0.985],
    drift: { x: [-1.8, 1.8], y: [-1.2, 1.2], z: [-1.8, 1.8] },
    pointSize: [1.3, 2.6],
    gravityScale: [0.9, 1.2],
    hueVariance: 0.1,
    trailBoost: 2.2,
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

function remember(list, value, limit) {
  list.unshift(value);
  if (list.length > limit) {
    list.length = limit;
  }
}

function pickAvoidRecent(list, recent, limit) {
  const excluded = new Set(recent.slice(0, limit));
  const filtered = list.filter((value) => !excluded.has(value));
  return filtered.length ? pick(filtered) : pick(list);
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

function randomMirrorVector(flipChance = AXIS_FLIP_CHANCE) {
  const flip = () => (Math.random() < flipChance ? -1 : 1);
  return new THREE.Vector3(flip(), flip(), flip());
}

function randomScaleVector(range) {
  return new THREE.Vector3(
    rand(range[0], range[1]),
    rand(range[0], range[1]),
    rand(range[0], range[1])
  );
}

function weightedPatternPool(pool, weights) {
  const boosted = [];
  for (const profile of pool) {
    const weight = weights[profile.pattern] ?? 1;
    const whole = Math.max(1, Math.floor(weight));
    const fractional = weight - Math.floor(weight);
    for (let i = 0; i < whole; i += 1) {
      boosted.push(profile);
    }
    if (fractional > 0 && Math.random() < fractional) {
      boosted.push(profile);
    }
  }
  return boosted.length ? boosted : pool;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function fade(t) {
  return t * t * (3 - 2 * t);
}

function hash3(x, y, z) {
  const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return h - Math.floor(h);
}

function noise3(x, y, z) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = x - xi;
  const yf = y - yi;
  const zf = z - zi;
  const u = fade(xf);
  const v = fade(yf);
  const w = fade(zf);

  const n000 = hash3(xi, yi, zi);
  const n100 = hash3(xi + 1, yi, zi);
  const n010 = hash3(xi, yi + 1, zi);
  const n110 = hash3(xi + 1, yi + 1, zi);
  const n001 = hash3(xi, yi, zi + 1);
  const n101 = hash3(xi + 1, yi, zi + 1);
  const n011 = hash3(xi, yi + 1, zi + 1);
  const n111 = hash3(xi + 1, yi + 1, zi + 1);

  const x00 = lerp(n000, n100, u);
  const x10 = lerp(n010, n110, u);
  const x01 = lerp(n001, n101, u);
  const x11 = lerp(n011, n111, u);
  const y0 = lerp(x00, x10, v);
  const y1 = lerp(x01, x11, v);

  return lerp(y0, y1, w);
}

function curlNoise(x, y, z, eps) {
  const fx = x + 31.4;
  const fy = y + 47.2;
  const fz = z + 11.9;
  const gx = x + 17.1;
  const gy = y + 83.6;
  const gz = z + 29.5;
  const hx = x + 53.7;
  const hy = y + 19.3;
  const hz = z + 61.2;

  const dFz_dy = (noise3(hx, hy + eps, hz) - noise3(hx, hy - eps, hz)) / (2 * eps);
  const dFy_dz = (noise3(gx, gy, gz + eps) - noise3(gx, gy, gz - eps)) / (2 * eps);
  const dFx_dz = (noise3(fx, fy, fz + eps) - noise3(fx, fy, fz - eps)) / (2 * eps);
  const dFz_dx = (noise3(hx + eps, hy, hz) - noise3(hx - eps, hy, hz)) / (2 * eps);
  const dFy_dx = (noise3(gx + eps, gy, gz) - noise3(gx - eps, gy, gz)) / (2 * eps);
  const dFx_dy = (noise3(fx, fy + eps, fz) - noise3(fx, fy - eps, fz)) / (2 * eps);

  return new THREE.Vector3(
    dFz_dy - dFy_dz,
    dFx_dz - dFz_dx,
    dFy_dx - dFx_dy
  );
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

  if (pattern === "sprayburst") {
    const axis = randomDirection();
    axis.y = Math.abs(axis.y) * 0.7 + 0.3;
    axis.normalize();
    return buildBasis(axis);
  }

  if (pattern === "lissajous") {
    return {
      a: randInt(2, 4),
      b: randInt(3, 6),
      c: randInt(2, 5),
      phase: rand(0, Math.PI * 2),
    };
  }

  if (pattern === "crownburst") {
    return { spikes: randInt(6, 10) };
  }

  if (pattern === "arcflower") {
    return { petals: randInt(5, 9) };
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

  if (pattern === "rosette") {
    const petals = 8;
    const angle = (i / count) * Math.PI * 2;
    const petal = Math.abs(Math.cos(angle * petals));
    const radius = 0.45 + 0.45 * petal;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      rand(-0.12, 0.12)
    ).normalize();
  }

  if (pattern === "arcburst") {
    const t = count > 1 ? i / (count - 1) : 0.5;
    const angle = (-0.75 + 0.5 * t) * Math.PI;
    const radius = 0.5 + 0.35 * Math.sin(t * Math.PI);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius + 0.15;
    const z = Math.sin(t * Math.PI * 2) * 0.2;
    return new THREE.Vector3(x, y, z).normalize();
  }

  if (pattern === "braid") {
    const t = i / count;
    const angle = t * Math.PI * 6 + (i % 2 === 0 ? 0 : Math.PI);
    const radius = 0.45 + 0.25 * Math.sin(t * Math.PI * 2);
    const y = 0.2 + t * 0.8;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "lotus") {
    const petals = 10;
    const angle = (i / count) * Math.PI * 2;
    const petal = Math.abs(Math.sin(angle * petals));
    const radius = 0.45 + 0.45 * petal;
    const y = 0.2 + 0.25 * Math.cos(angle * petals * 0.5);
    const z = 0.15 * Math.sin(angle * petals * 0.5);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius + z
    ).normalize();
  }

  if (pattern === "spire") {
    const t = i / count;
    const angle = t * Math.PI * 8;
    const radius = 0.2 + 0.6 * (1 - t);
    const y = 0.25 + 0.7 * t;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "fanwave") {
    const t = i / count;
    const yaw = -Math.PI / 2 + t * Math.PI;
    const pitch = 0.2 + 0.6 * Math.sin(t * Math.PI);
    return new THREE.Vector3(
      Math.cos(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.sin(yaw) * Math.cos(pitch)
    ).normalize();
  }

  if (pattern === "sparkburst") {
    const dir = randomDirection();
    dir.y = dir.y * 0.5 + 0.35;
    return dir.normalize();
  }

  if (pattern === "rainburst") {
    const dir = randomDirection();
    dir.y = dir.y * 0.35 + 0.55;
    const flare = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(0.18);
    return dir.add(flare).normalize();
  }

  if (pattern === "supernova") {
    const t = i / count;
    const angle = t * Math.PI * 2;
    const spike = 0.45 + 0.55 * Math.abs(Math.sin(angle * 8));
    const lift = 0.2 + 0.5 * spike;
    return new THREE.Vector3(
      Math.cos(angle) * spike,
      lift,
      Math.sin(angle) * spike
    ).normalize();
  }

  if (pattern === "prism") {
    const sides = 6;
    const step = (Math.PI * 2) / sides;
    const angle = Math.round((i / count) * sides) * step + rand(-0.12, 0.12);
    const up = rand(0.25, 0.65);
    const out = Math.sqrt(1 - up * up);
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "warp") {
    const t = i / count;
    const angle = t * Math.PI * 10;
    const radius = 0.35 + 0.45 * Math.sin(t * Math.PI * 2);
    const y = 0.15 + 0.75 * t;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "arcflower") {
    const petals = data?.petals ?? 7;
    const angle = (i / count) * Math.PI * 2;
    const petal = Math.abs(Math.sin(angle * petals));
    const radius = 0.45 + 0.45 * petal;
    const lift = 0.1 + 0.35 * Math.cos(angle * petals * 0.5);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      lift,
      Math.sin(angle) * radius
    ).normalize();
  }

  if (pattern === "lissajous") {
    const t = (i / count) * Math.PI * 2;
    const a = data?.a ?? 3;
    const b = data?.b ?? 4;
    const c = data?.c ?? 2;
    const phase = data?.phase ?? 0;
    const x = Math.sin(a * t + phase);
    const y = Math.sin(b * t);
    const z = Math.sin(c * t + phase * 0.6) * 0.8;
    return new THREE.Vector3(x, y, z).normalize();
  }

  if (pattern === "crownburst") {
    const spikes = data?.spikes ?? 8;
    const angle = (i / count) * Math.PI * 2;
    const spike = 0.35 + 0.6 * Math.abs(Math.cos(angle * spikes));
    const up = 0.25 + 0.45 * spike;
    const out = Math.sqrt(Math.max(0, 1 - up * up));
    return new THREE.Vector3(
      Math.cos(angle) * out,
      up,
      Math.sin(angle) * out
    ).normalize();
  }

  if (pattern === "sprayburst") {
    const axis = data?.axis ?? new THREE.Vector3(0, 1, 0);
    const tangent = data?.tangent ?? new THREE.Vector3(1, 0, 0);
    const bitangent = data?.bitangent ?? new THREE.Vector3(0, 0, 1);
    const angle = (i / count) * Math.PI * 2;
    const spread = 0.35 + 0.25 * Math.sin(angle * 2);
    const dir = axis
      .clone()
      .addScaledVector(tangent, Math.cos(angle) * spread)
      .addScaledVector(bitangent, Math.sin(angle) * spread);
    return dir.normalize();
  }

  if (pattern === "ribbon") {
    const t = i / count;
    const angle = t * Math.PI * 6;
    const radius = 0.45 + 0.3 * Math.sin(t * Math.PI * 2);
    const y = 0.15 + 0.7 * Math.sin(t * Math.PI);
    const z = 0.25 * Math.cos(angle * 0.5);
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius + z
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
  constructor(position, color, options = {}) {
    const {
      sizeScale: sizeScaleOverride = 1,
      opacityScale: opacityScaleOverride = 1,
      lifeScale: lifeScaleOverride = 1,
      offset = null,
    } = options;

    this.life = range(FLASH_LIFE) * lifeScaleOverride;
    this.lifeMax = this.life;
    const variantRoll = Math.random();
    let sizeScale = 1;
    let opacityScale = 1;
    if (variantRoll < FLASH_DIM_CHANCE) {
      sizeScale = range(FLASH_DIM_SCALE);
      opacityScale = range(FLASH_DIM_OPACITY_SCALE);
    } else if (variantRoll > 1 - FLASH_BRIGHT_CHANCE) {
      sizeScale = range(FLASH_BRIGHT_SCALE);
      opacityScale = range(FLASH_BRIGHT_OPACITY_SCALE);
    }
    sizeScale *= sizeScaleOverride;
    opacityScale *= opacityScaleOverride;
    this.baseOpacity = clamp(
      range(FLASH_OPACITY) * opacityScale,
      FLASH_OPACITY_MIN,
      FLASH_OPACITY_MAX
    );
    this.size = range(FLASH_SIZE) * sizeScale;

    this.material = new THREE.SpriteMaterial({
      map: flashTexture,
      color,
      transparent: true,
      opacity: this.baseOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.material.rotation = rand(0, Math.PI * 2);

    const spawnPosition = offset ? position.clone().add(offset) : position;
    this.sprite = new THREE.Sprite(this.material);
    this.sprite.position.copy(spawnPosition);
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

class Rocket {
  constructor(origin, options) {
    this.position = origin.clone();
    this.velocity = options.velocity.clone();
    this.life = options.life;
    this.targetY = options.targetY;
    this.profile = options.profile;
    this.hue = options.hue;
    this.rocketHue = options.rocketHue;
    this.size = options.size;
    this.clickDroop = options.clickDroop;
    this.clickCurly = options.clickCurly;
    this.forceShowcase = options.forceShowcase;
    this.forceStraight = options.forceStraight;
    this.trailSamples = options.trailSamples;
    this.trailOpacity = options.trailOpacity;
    this.trailSizeScale = options.trailSizeScale;
    this.trailBrightness = options.trailBrightness;
    this.trailFadePower = options.trailFadePower;
    this.trailHistoryIndex = 0;

    const color = hslColor(this.rocketHue, rand(0.9, 1), rand(0.55, 0.75));
    color.multiplyScalar(ROCKET_BRIGHTNESS);
    this.baseColor = color;

    this.positions = new Float32Array([
      this.position.x,
      this.position.y,
      this.position.z,
    ]);
    this.colors = new Float32Array([color.r, color.g, color.b]);
    this.trailPositions = new Float32Array(this.trailSamples * 3);
    this.trailColors = new Float32Array(this.trailSamples * 3);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.positions, 3)
    );
    this.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(this.colors, 3)
    );

    this.material = new THREE.PointsMaterial({
      size: this.size * GLOBAL_POINT_SCALE,
      vertexColors: true,
      map: circleTexture,
      alphaTest: 0.35,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(this.geometry, this.material);

    for (let s = 0; s < this.trailSamples; s += 1) {
      const tIdx = s * 3;
      this.trailPositions[tIdx] = this.position.x;
      this.trailPositions[tIdx + 1] = this.position.y;
      this.trailPositions[tIdx + 2] = this.position.z;
      this.trailColors[tIdx] = this.baseColor.r * this.trailBrightness;
      this.trailColors[tIdx + 1] = this.baseColor.g * this.trailBrightness;
      this.trailColors[tIdx + 2] = this.baseColor.b * this.trailBrightness;
    }

    this.trailGeometry = new THREE.BufferGeometry();
    this.trailGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.trailPositions, 3)
    );
    this.trailGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(this.trailColors, 3)
    );

    this.trailMaterial = new THREE.PointsMaterial({
      size: this.size * this.trailSizeScale * GLOBAL_POINT_SCALE,
      vertexColors: true,
      map: circleTexture,
      alphaTest: 0.35,
      transparent: true,
      opacity: this.trailOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.trail = new THREE.Points(this.trailGeometry, this.trailMaterial);
  }

  update(delta) {
    this.life -= delta;
    this.position.addScaledVector(this.velocity, delta);
    this.positions[0] = this.position.x;
    this.positions[1] = this.position.y;
    this.positions[2] = this.position.z;
    this.geometry.attributes.position.needsUpdate = true;

    this.trailHistoryIndex = (this.trailHistoryIndex + 1) % this.trailSamples;
    const headIdx = this.trailHistoryIndex * 3;
    this.trailPositions[headIdx] = this.position.x;
    this.trailPositions[headIdx + 1] = this.position.y;
    this.trailPositions[headIdx + 2] = this.position.z;

    const denom = this.trailSamples > 1 ? this.trailSamples - 1 : 1;
    for (let s = 0; s < this.trailSamples; s += 1) {
      const order = (this.trailHistoryIndex - s + this.trailSamples) % this.trailSamples;
      const tIdx = order * 3;
      const falloff = Math.pow(1 - s / denom, this.trailFadePower);
      const fade = this.trailOpacity * this.trailBrightness * falloff;
      this.trailColors[tIdx] = this.baseColor.r * fade;
      this.trailColors[tIdx + 1] = this.baseColor.g * fade;
      this.trailColors[tIdx + 2] = this.baseColor.b * fade;
    }
    this.trailGeometry.attributes.position.needsUpdate = true;
    this.trailGeometry.attributes.color.needsUpdate = true;

    if (this.life <= 0 || this.position.y >= this.targetY) {
      const explosionPosition = clampToView(this.position);
      spawnFlash(explosionPosition, this.hue, { spherical: true, direct: false });
      explodeAt(
        explosionPosition,
        this.profile,
        this.hue,
        true,
        this.clickDroop,
        this.clickCurly,
        this.forceStraight,
        this.forceShowcase
      );
      return false;
    }

    return true;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
    this.trailGeometry.dispose();
    this.trailMaterial.dispose();
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
    this.trailVisible = options.trailVisible ?? true;
    this.trailOpacity = options.trailOpacity ?? 0.9;
    this.trailHistory = options.trailHistory ?? false;
    this.spiralStrength = options.spiralStrength ?? 0;
    this.spiralSpeed = options.spiralSpeed ?? 0;
    this.swirlStrength = options.swirlStrength ?? 0;
    this.swirlSpeed = options.swirlSpeed ?? 0;
    this.snowflake = options.snowflake ?? false;
    this.snowflakeSwayStrength = options.snowflakeSwayStrength ?? 0;
    this.snowflakeSwaySpeed = options.snowflakeSwaySpeed ?? 0;
    this.snowflakePhase = null;
    this.trajectoryMode = options.trajectoryMode ?? null;
    this.trajectoryStrength = options.trajectoryStrength ?? 0;
    this.trajectorySpeed = options.trajectorySpeed ?? 0;
    this.trajectoryPhase = null;
    this.trajectoryVectors = null;
    this.curlNoise = options.curlNoise ?? false;
    this.curlNoiseStrength = options.curlNoiseStrength ?? 0;
    this.curlNoiseScale = options.curlNoiseScale ?? 1;
    this.curlNoiseSpeed = options.curlNoiseSpeed ?? 0;
    this.curlNoiseOffset = null;
    this.curlNoiseTwist = options.curlNoiseTwist ?? 1;
    this.curlNoiseYAxis = options.curlNoiseYAxis ?? 1;
    this.subBurst = options.subBurst ?? false;
    this.subBurstProfile = options.subBurstProfile ?? null;
    this.subBurstHue = options.subBurstHue ?? options.hue;
    this.subBurstTriggered = false;
    this.directionRotation = options.directionRotation ?? null;
    this.directionMirror = options.directionMirror ?? null;
    this.directionScale = options.directionScale ?? null;
    this.directionChaosChance = options.directionChaosChance ?? 0;
    this.directionChaosAngle = options.directionChaosAngle ?? null;
    this.directionChaosScaleRange = options.directionChaosScaleRange ?? null;
    this.directionChaosMirrorChance = options.directionChaosMirrorChance ?? 0;
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

    if (this.snowflake) {
      this.snowflakePhase = new Float32Array(this.count);
      for (let i = 0; i < this.count; i += 1) {
        this.snowflakePhase[i] = rand(0, Math.PI * 2);
      }
    }

    if (this.curlNoise) {
      this.curlNoiseOffset = new THREE.Vector3(
        rand(-100, 100),
        rand(-100, 100),
        rand(-100, 100)
      );
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
      if (this.directionScale) {
        dir.multiply(this.directionScale).normalize();
      }
      if (this.directionMirror) {
        dir.multiply(this.directionMirror);
      }
      if (this.directionRotation) {
        dir.applyQuaternion(this.directionRotation);
      }
      if (this.directionChaosChance > 0 && Math.random() < this.directionChaosChance) {
        if (this.directionChaosScaleRange) {
          dir.multiply(randomScaleVector(this.directionChaosScaleRange)).normalize();
        }
        if (
          this.directionChaosMirrorChance > 0 &&
          Math.random() < this.directionChaosMirrorChance
        ) {
          dir.multiply(randomMirrorVector(0.5));
        }
        if (this.directionChaosAngle) {
          dir.applyAxisAngle(randomDirection(), range(this.directionChaosAngle));
          dir.normalize();
        }
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
      const saturation = rand(
        COLOR_SATURATION_RANGE[0],
        COLOR_SATURATION_RANGE[1]
      );
      const lightness = rand(
        COLOR_LIGHTNESS_RANGE[0],
        COLOR_LIGHTNESS_RANGE[1]
      );
      const color = hslColor(hue, saturation, lightness);
      color.multiplyScalar(COLOR_GLOBAL_INTENSITY_SCALE);
      if (lightness >= HIGH_LIGHTNESS_THRESHOLD) {
        color.multiplyScalar(HIGH_LIGHTNESS_INTENSITY_SCALE);
      } else if (lightness <= LOW_LIGHTNESS_THRESHOLD) {
        color.multiplyScalar(LOW_LIGHTNESS_INTENSITY_SCALE);
      }

    const crossBoost = this.pattern === "cross" ? CROSS_INTENSITY_BOOST : 1;
    const warpBoost = this.pattern === "warp" ? WARP_INTENSITY_BOOST : 1;
    const supernovaBoost =
      this.pattern === "supernova" ? SUPERNOVA_INTENSITY_BOOST : 1;
    const patternBoost = crossBoost * warpBoost * supernovaBoost;
    this.colors[idx] = color.r * patternBoost;
    this.colors[idx + 1] = color.g * patternBoost;
    this.colors[idx + 2] = color.b * patternBoost;

    this.baseColors[idx] = color.r * patternBoost;
    this.baseColors[idx + 1] = color.g * patternBoost;
    this.baseColors[idx + 2] = color.b * patternBoost;

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
      this.pointSize * this.trailPointScale * this.trailWidthScale * GLOBAL_POINT_SCALE;
    const headPointSize = Math.max(
      this.pointSize,
      trailPointSize * HEAD_POINT_RELATIVE_SCALE
    );

    this.pointsMaterial = new THREE.PointsMaterial({
      size: headPointSize * GLOBAL_POINT_SCALE,
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
        opacity: this.trailOpacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      this.trail = new THREE.Points(this.trailGeometry, this.trailMaterial);
    } else {
      this.trailMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: this.trailOpacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        linewidth: this.trailWidthScale * GLOBAL_POINT_SCALE,
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

      if (this.snowflake && this.snowflakePhase) {
        const sway =
          this.snowflakePhase[i] +
          this.snowflakeSwaySpeed * age +
          lifeRatio * 0.5;
        const swayFactor = 0.4 + 0.6 * age;
        vx += Math.sin(sway) * this.snowflakeSwayStrength * swayFactor * delta;
        vz += Math.cos(sway) * this.snowflakeSwayStrength * swayFactor * delta;
        vy *= 0.99;
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

      const px = this.positions[idx];
      const py = this.positions[idx + 1];
      const pz = this.positions[idx + 2];

      if (this.curlNoise && this.curlNoiseOffset) {
        const t = elapsedTime * this.curlNoiseSpeed;
        const nx = px * this.curlNoiseScale + this.curlNoiseOffset.x;
        const ny = py * this.curlNoiseScale + this.curlNoiseOffset.y;
        const nz = pz * this.curlNoiseScale + this.curlNoiseOffset.z + t;
        const curl = curlNoise(nx, ny, nz, CURL_NOISE_EPSILON);
        const twist = this.curlNoiseTwist;
        vx += curl.x * this.curlNoiseStrength * delta;
        vy += curl.y * this.curlNoiseStrength * this.curlNoiseYAxis * delta;
        vz += curl.z * this.curlNoiseStrength * delta;
        if (twist !== 1) {
          const rot = twist * delta * (0.4 + age);
          const tX = vx * Math.cos(rot) - vz * Math.sin(rot);
          const tZ = vx * Math.sin(rot) + vz * Math.cos(rot);
          vx = tX;
          vz = tZ;
        }
      }

      vx *= this.drag;
      vy *= this.drag;
      vz *= this.drag;

      this.velocities[idx] = vx;
      this.velocities[idx + 1] = vy;
      this.velocities[idx + 2] = vz;

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

    if (this.subBurst && !this.subBurstTriggered) {
      let spawned = 0;
      let eligible = [];
      for (let i = 0; i < this.count; i += 1) {
        const idx = i * 3;
        const lifeRatio = Math.max(this.life[i] / this.lifeMax[i], 0);
        const vy = this.velocities[idx + 1];
        if (lifeRatio > SUB_BURST_TRIGGER_RATIO || vy >= 0) {
          continue;
        }
        eligible.push(i);
        if (Math.random() > SUB_BURST_PARTICLE_CHANCE) {
          continue;
        }
        const pos = new THREE.Vector3(
          this.positions[idx],
          this.positions[idx + 1],
          this.positions[idx + 2]
        );
        const hue =
          (this.subBurstHue + rand(-SUB_BURST_HUE_VARIANCE, SUB_BURST_HUE_VARIANCE) + 1) %
          1;
        explodeAt(pos, this.subBurstProfile, hue, false, false, false, false, false);
        spawned += 1;
        if (spawned >= SUB_BURST_MAX) {
          break;
        }
      }
      if (spawned === 0 && eligible.length) {
        const pickIndex = pick(eligible);
        const idx = pickIndex * 3;
        const pos = new THREE.Vector3(
          this.positions[idx],
          this.positions[idx + 1],
          this.positions[idx + 2]
        );
        const hue =
          (this.subBurstHue + rand(-SUB_BURST_HUE_VARIANCE, SUB_BURST_HUE_VARIANCE) + 1) %
          1;
        explodeAt(pos, this.subBurstProfile, hue, false, false, false, false, false);
        spawned = 1;
      }
      if (spawned > 0) {
        this.subBurstTriggered = true;
      }
    }

    return alive > 0;
  }

  dispose() {
    this.pointsGeometry.dispose();
    this.pointsMaterial.dispose();
    this.trailGeometry.dispose();
    this.trailMaterial.dispose();
  }
}

function buildExplosionOptions(
  profile,
  hueBase,
  clickDroop = false,
  clickCurly = false,
  forceStraight = false,
  forceShowcase = false
) {
  const scale = profile.scale ?? 1;
  let localForceStraight = forceStraight;
  let baseHue = hueBase ?? Math.random();
  const spaghetti =
    !forceShowcase &&
    !localForceStraight &&
    (Math.random() < SPAGHETTI_FIREWORK_CHANCE ||
      (profile.spherical && Math.random() < SPAGHETTI_SPHERICAL_CHANCE));
  const spaghettiVariance = spaghetti ? range(SPAGHETTI_VARIANCE_RANGE) : 1;
  let baseVariance = profile.hueVariance ?? 0.1;
  const nonSpherical = !profile.spherical;
  const ferrariRed = profile.spherical && Math.random() < FERRARI_RED_CHANCE;
  if (ferrariRed) {
    baseHue = FERRARI_RED_HUE;
    baseVariance = Math.min(baseVariance, FERRARI_RED_HUE_VARIANCE);
  }
  if (nonSpherical && Math.random() < NON_SPHERICAL_COLOR_VARIATION_CHANCE) {
    baseHue =
      (pick(PURE_HUES) + rand(-NON_SPHERICAL_HUE_JITTER, NON_SPHERICAL_HUE_JITTER) + 1) %
      1;
  }
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
  const droopRoll = Math.random();
  const droopExtra = droopRoll < DROOP_EXTRA_CHANCE;
  const megaDroop = Math.random() < MEGA_DROOP_CHANCE;
  const sphericalDroop =
    profile.spherical && Math.random() < SPHERICAL_DROOP_CHANCE;
  const spaghettiDroop = spaghetti && Math.random() < SPAGHETTI_DROOP_CHANCE;
  const droopTrail =
    droopRoll < DROOP_TRAIL_CHANCE ||
    megaDroop ||
    sphericalDroop ||
    clickDroop ||
    spaghettiDroop;
  const sphericalDroopTrailBoost = sphericalDroop ? SPHERICAL_DROOP_TRAIL_MULTIPLIER : 1;
  const sphericalDroopLifeBoost = sphericalDroop ? SPHERICAL_DROOP_LIFE_MULTIPLIER : 1;
  const allowCurly =
    !localForceStraight && (!profile.spherical || clickCurly || spaghetti);
  const extraCurl = allowCurly && Math.random() < CURLY_TRAIL_CHANCE;
  const sphericalCurly =
    allowCurly && profile.spherical && Math.random() < SPHERICAL_CURLY_CHANCE;
  let curlyTrajectory = extraCurl || sphericalCurly || clickCurly || spaghetti;
  let curlySuppressed = false;
  if (!spaghetti && curlyTrajectory && Math.random() < CURLY_REPLACEMENT_CHANCE) {
    curlyTrajectory = false;
    curlySuppressed = true;
    if (Math.random() < CURLY_REPLACEMENT_STRAIGHT_CHANCE) {
      localForceStraight = true;
    }
  }
  const curveBoost = curlyTrajectory
    ? CURLY_CURVE_BOOST *
      (sphericalCurly ? SPHERICAL_CURLY_BOOST : 1) *
      CURLY_CURVE_MULTIPLIER
    : 1;
  const curveBoostAdjusted = curveBoost * (spaghetti ? SPAGHETTI_CURVE_MULTIPLIER : 1);
  const gravityRampExtra = curlyTrajectory ? CURLY_GRAVITY_RAMP_BOOST : 0;
  const trailGrowthExtra =
    (curlyTrajectory ? CURLY_TRAIL_GROWTH_BOOST : 0) +
    (spaghetti ? SPAGHETTI_TRAIL_GROWTH_BOOST : 0);
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
  const noTrail = forceShowcase ? false : Math.random() < NO_TRAIL_CHANCE;
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
  if (spaghetti) {
    trailSamples = Math.max(
      2,
      Math.round(trailSamples * SPAGHETTI_TRAIL_SAMPLE_MULTIPLIER)
    );
  }
  if (forceShowcase) {
    trailSamples = Math.max(trailSamples, FIRST_CLICK_MIN_TRAIL_SAMPLES);
  }
  const trailPointScale = dotTrail
    ? DOT_TRAIL_DOT_SCALE *
      (extremeTrajectory ? EXTREME_TRAIL_POINT_SCALE : 1) *
      (cascadeTrail ? CASCADE_TRAIL_POINT_SCALE : 1) *
      (droopTrail ? DROOP_TRAIL_POINT_SCALE : 1)
    : 1;
  const trailWidthScale =
    range(TRAIL_WIDTH_RANGE) *
    (profile.spherical ? SPHERICAL_TRAIL_WIDTH_MULTIPLIER : 1);
  const particleScale =
    (dotTrail ? DOT_PARTICLE_SCALE : 1) * bigParticleBoost * PARTICLE_SCALE;
  const dotTrailBoost = dotTrail ? DOT_TRAIL_MULTIPLIER : 1;
  const longTrail = Math.random() < LONG_TRAIL_CHANCE;
  const extraLongTrail =
    Math.random() < EXTRA_LONG_TRAIL_CHANCE ? EXTRA_LONG_TRAIL_MULTIPLIER : 1;
  const droopExtraTrail = droopExtra ? DROOP_EXTRA_TRAIL_MULTIPLIER : 1;
  const megaDroopTrail =
    megaDroop
      ? MEGA_DROOP_TRAIL_MULTIPLIER *
        (profile.spherical ? MEGA_DROOP_SPHERE_TRAIL_MULTIPLIER : 1)
      : 1;
  const spaghettiDroopTrail = spaghettiDroop ? SPAGHETTI_DROOP_TRAIL_MULTIPLIER : 1;
  const clickDroopTrail = clickDroop ? CLICK_DROOP_TRAIL_MULTIPLIER : 1;
  const curlyTrailBoost = clickCurly ? CURLY_TRAIL_LENGTH_MULTIPLIER : 1;
  const lengthBoost = Math.random() < LENGTH_BOOST_CHANCE;
  const lengthMultiplier = lengthBoost ? LENGTH_BOOST_MULTIPLIER : 1;
  const extraLongerTrail =
    Math.random() < EXTRA_LONGER_TRAIL_CHANCE
      ? EXTRA_LONGER_TRAIL_MULTIPLIER
      : 1;
  const midLongTrail =
    Math.random() < MID_LONG_TRAIL_CHANCE
      ? MID_LONG_TRAIL_MULTIPLIER
      : 1;
  const swirlHeavy = !localForceStraight && Math.random() < SWIRL_HEAVY_CHANCE;
  const curlySwirl =
    !localForceStraight && curlyTrajectory && Math.random() < CURLY_SWIRL_CHANCE;
  let swirlTrails =
    !localForceStraight &&
    (swirlHeavy || curlySwirl || Math.random() < SWIRL_TRAIL_CHANCE);
  if (spaghetti && !localForceStraight) {
    swirlTrails = true;
  }
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
  if (droopExtra) {
    lifeScale *= DROOP_EXTRA_LIFE_MULTIPLIER;
  }
  if (megaDroop) {
    lifeScale *= MEGA_DROOP_LIFE_MULTIPLIER;
  }
  if (clickDroop) {
    lifeScale *= CLICK_DROOP_LIFE_MULTIPLIER;
  }
  if (clickCurly) {
    lifeScale *= CURLY_TRAIL_LIFE_MULTIPLIER;
  }
  if (spaghetti) {
    lifeScale *= SPAGHETTI_LIFE_MULTIPLIER;
  }
  if (sphericalDroop) {
    lifeScale *= sphericalDroopLifeBoost;
  }
  const trailGrowth = Math.max(
    longTrail ? LONG_TRAIL_GROWTH : 0,
    trajectoryTrail ? TRAJECTORY_TRAIL_GROWTH : 0
  ) + trailGrowthExtra;
  const gravityRampBoost = longTrail ? LONG_GRAVITY_RAMP_BOOST : 0;
  const cascadeGravityRampBoost = cascadeTrail ? CASCADE_GRAVITY_RAMP_BOOST : 0;
  const droopGravityRampBoost = droopTrail ? DROOP_GRAVITY_RAMP_BOOST : 0;
  const megaDroopGravityRampBoost = megaDroop ? MEGA_DROOP_GRAVITY_RAMP_BOOST : 0;
  const swirlDroopBoost = swirlHeavy ? SWIRL_DROOP_GRAVITY_BOOST : 0;
  const sphericalDroopGravityRampBoost = sphericalDroop
    ? SPHERICAL_DROOP_GRAVITY_RAMP_BOOST
    : 0;
  const longTrailBoost = longTrail ? LONG_TRAIL_MULTIPLIER : 1;
  const trajectoryTrailBoost = trajectoryTrail ? TRAJECTORY_TRAIL_MULTIPLIER : 1;
  const extremeTrailBoost = extremeTrajectory ? EXTREME_TRAIL_MULTIPLIER : 1;
  const multiHue =
    !nonSpherical && !ferrariRed && Math.random() < MULTI_HUE_CHANCE;
  const extraVariance =
    !multiHue && Math.random() < EXTRA_COLOR_VARIANCE_CHANCE
      ? range(EXTRA_COLOR_VARIANCE)
      : 0;
  const hueVariance = multiHue
    ? Math.min(baseVariance + range(HUE_VARIANCE_BOOST), MAX_HUE_VARIANCE)
    : Math.min(baseVariance + extraVariance, MAX_SINGLE_HUE_VARIANCE);
  const hues = multiHue
    ? Math.random() < MULTI_HUE_REPLACE_CHANCE
      ? Array.from({ length: randInt(2, 3) }, () => pick(STRONG_HUES))
      : [
          baseHue,
          (baseHue + rand(0.1, 0.3)) % 1,
          (baseHue + rand(0.55, 0.85)) % 1,
        ].slice(0, randInt(2, 3))
    : null;
  const spiralStrength = sphericalCurly
    ? range(SPHERICAL_SPIRAL_STRENGTH)
    : 0;
  const spiralSpeed = sphericalCurly ? range(SPHERICAL_SPIRAL_SPEED) : 0;
  const swirlStrength = swirlHeavy
    ? range(SWIRL_HEAVY_STRENGTH)
    : curlySwirl
      ? range(CURLY_SWIRL_STRENGTH)
      : swirlTrails
        ? range(SWIRL_STRENGTH)
        : 0;
  const swirlSpeed = swirlHeavy
    ? range(SWIRL_HEAVY_SPEED)
    : curlySwirl
      ? range(CURLY_SWIRL_SPEED)
      : swirlTrails
        ? range(SWIRL_SPEED)
        : 0;
  const swirlStrengthAdjusted =
    swirlStrength * (spaghetti ? SPAGHETTI_SWIRL_MULTIPLIER : 1);
  const swirlSpeedAdjusted =
    swirlSpeed * (spaghetti ? SPAGHETTI_SWIRL_MULTIPLIER : 1);
  const curlNoise =
    !localForceStraight &&
    !noTrail &&
    (Math.random() < CURL_NOISE_CHANCE || curlyTrajectory);
  const curlyVariant = curlyTrajectory ? pick(CURLY_VARIANTS) : null;
  const curlyYAxisBoost =
    curlyTrajectory &&
    Math.random() < (spaghetti ? SPAGHETTI_Y_AXIS_CHANCE : CURLY_Y_AXIS_CHANCE);
  const curlYAxisMultiplier = curlyYAxisBoost
    ? (spaghetti ? SPAGHETTI_Y_AXIS_MULTIPLIER : CURLY_Y_AXIS_MULTIPLIER)
    : 1;
  const trajectoryVariantChance = Math.min(
    1,
    TRAJECTORY_VARIANT_CHANCE +
      (curlySuppressed ? CURLY_REPLACEMENT_TRAJECTORY_BOOST : 0)
  );
  const trajectoryVariant =
    !localForceStraight && Math.random() < trajectoryVariantChance
      ? pick(TRAJECTORY_VARIANTS)
      : null;
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
  directionRotation.multiply(randomRotationQuaternion());
  if (nonSpherical) {
    directionRotation.multiply(randomRotationQuaternion());
  }
  const directionMirror = nonSpherical
    ? randomMirrorVector(NON_SPHERICAL_FLIP_CHANCE)
    : randomMirrorVector();
  if (profile.pattern === "cross") {
    for (let i = 0; i < CROSS_EXTRA_ROTATION_COUNT; i += 1) {
      directionRotation.multiply(randomRotationQuaternion());
    }
    if (directionMirror.x > 0 && directionMirror.y > 0 && directionMirror.z > 0) {
      const axis = randInt(0, 2);
      if (axis === 0) {
        directionMirror.x = -1;
      } else if (axis === 1) {
        directionMirror.y = -1;
      } else {
        directionMirror.z = -1;
      }
    }
  }
  if (profile.pattern === "supernova" || profile.pattern === "warp" || profile.pattern === "prism") {
    for (let i = 0; i < NEW_PATTERN_CHAOS_ROTATIONS; i += 1) {
      directionRotation.multiply(randomRotationQuaternion());
    }
    directionMirror.multiply(randomMirrorVector(NEW_PATTERN_MIRROR_CHANCE));
  }
  let directionScale = randomScaleVector(GLOBAL_SCALE_RANGE);
  if (nonSpherical) {
    directionScale.multiply(randomScaleVector(NON_SPHERICAL_SCALE_RANGE));
  }
  if (profile.pattern === "supernova" || profile.pattern === "warp" || profile.pattern === "prism") {
    const extraScale = randomScaleVector(NEW_PATTERN_SCALE_RANGE);
    if (directionScale) {
      directionScale.multiply(extraScale);
    } else {
      directionScale = extraScale;
    }
  }
  if (forceShowcase) {
    directionScale = null;
  }
  const directionChaosChance = nonSpherical
    ? NON_SPHERICAL_CHAOS_CHANCE
    : CHAOS_ROTATION_CHANCE;
  const directionChaosScaleRange = nonSpherical
    ? [CHAOS_SCALE_RANGE[0] * 0.9, CHAOS_SCALE_RANGE[1] * 1.1]
    : CHAOS_SCALE_RANGE;
  const trailBrightness =
    (droopTrail ? DROOP_TRAIL_BRIGHTNESS : 1) * BASE_TRAIL_BRIGHTNESS;
  const crossTrailBrightness =
    profile.pattern === "cross"
      ? trailBrightness * CROSS_TRAIL_BRIGHTNESS_BOOST
      : trailBrightness;
  const warpTrailBrightness =
    profile.pattern === "warp"
      ? crossTrailBrightness * WARP_TRAIL_BRIGHTNESS_BOOST
      : crossTrailBrightness;
  const supernovaTrailBrightness =
    profile.pattern === "supernova"
      ? warpTrailBrightness * SUPERNOVA_TRAIL_BRIGHTNESS_BOOST
      : warpTrailBrightness;
  const showcaseTrailBrightness = forceShowcase
    ? trailBrightness * FIRST_CLICK_TRAIL_BRIGHTNESS
    : supernovaTrailBrightness;
  const snowflake = Math.random() < SNOWFLAKE_TRAJECTORY_CHANCE;
  const baseDrag = range(profile.drag);
  const dragBoost =
    (cascadeTrail ? CASCADE_DRAG_BOOST : 0) +
    (droopTrail ? DROOP_DRAG_BOOST : 0) +
    (sphericalDroop ? SPHERICAL_DROOP_DRAG_BOOST : 0) +
    (spaghettiDroop ? SPAGHETTI_DROOP_DRAG_BOOST : 0) +
    (snowflake ? SNOWFLAKE_DRAG_BOOST : 0);
  const drag = dragBoost > 0 ? Math.min(baseDrag + dragBoost, 0.995) : baseDrag;
  const subBurstProfile = explosionProfiles.find(
    (entry) => entry.pattern === "sparkburst"
  );
  const rainbowSubBurstProfile = explosionProfiles.find(
    (entry) => entry.pattern === RAINBOW_SUB_BURST_PATTERN
  );
  const subBurst = Math.random() < SUB_BURST_CHANCE && !!subBurstProfile;
  const effectiveSubBurstProfile =
    multiHue && rainbowSubBurstProfile ? rainbowSubBurstProfile : subBurstProfile;

  return {
    pattern: profile.pattern,
    count: Math.round(
      randInt(profile.count[0], profile.count[1]) *
        countBoost *
        BLAST_COUNT_SCALE *
        (forceShowcase ? FIRST_CLICK_COUNT_MULTIPLIER : 1)
    ),
    radius:
      range(profile.radius) *
      BLAST_SCALE *
      scale *
      extraScale *
      (smallBlast ? SMALL_BLAST_SCALE : 1) *
      bigRadiusBoost *
      radiusBoost *
      (profile.spherical ? SPHERE_SIZE_MULTIPLIER : 1) *
      (forceShowcase ? FIRST_CLICK_RADIUS_MULTIPLIER : 1) *
      (spaghetti ? SPAGHETTI_SIZE_MULTIPLIER : 1),
    life:
      range(profile.life) *
      lifeScale *
      GLOBAL_LIFE_SCALE *
      sphereLifeBoost *
      (forceShowcase ? FIRST_CLICK_LIFE_MULTIPLIER : 1),
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
      midLongTrail *
      (spaghetti ? SPAGHETTI_TRAIL_MULTIPLIER : 1) *
      extraLongerTrail *
      sphericalExtraTrail *
      droopExtraTrail *
      megaDroopTrail *
      spaghettiDroopTrail *
      clickDroopTrail *
      sphericalDroopTrailBoost *
      curlyTrailBoost *
      (forceShowcase ? FIRST_CLICK_TRAIL_MULTIPLIER : 1),
    drag,
    drift: snowflake
      ? randomVec3({
          x: [
            profile.drift.x[0] * SNOWFLAKE_DRIFT_SCALE,
            profile.drift.x[1] * SNOWFLAKE_DRIFT_SCALE,
          ],
          y: [
            profile.drift.y[0] * SNOWFLAKE_DRIFT_SCALE,
            profile.drift.y[1] * SNOWFLAKE_DRIFT_SCALE,
          ],
          z: [
            profile.drift.z[0] * SNOWFLAKE_DRIFT_SCALE,
            profile.drift.z[1] * SNOWFLAKE_DRIFT_SCALE,
          ],
        })
      : randomVec3(profile.drift),
    pointSize: range(profile.pointSize) * particleScale,
    hue: baseHue,
    hues,
    hueVariance,
    gravityScale:
      range(profile.gravityScale) *
      sphereSpeedBoost *
      (cascadeTrail ? CASCADE_GRAVITY_SCALE_MULTIPLIER : 1) *
      (droopTrail ? DROOP_GRAVITY_SCALE_MULTIPLIER : 1) *
      (megaDroop ? MEGA_DROOP_GRAVITY_SCALE_MULTIPLIER : 1) *
      (spaghettiDroop ? SPAGHETTI_DROOP_GRAVITY_SCALE_MULTIPLIER : 1),
    gravityRamp:
      gravityRamp +
      gravityRampBoost +
      gravityRampExtra +
      cascadeGravityRampBoost +
      droopGravityRampBoost +
      swirlDroopBoost +
      megaDroopGravityRampBoost +
      (spaghettiDroop ? SPAGHETTI_DROOP_GRAVITY_RAMP_BOOST : 0) +
      sphericalDroopGravityRampBoost,
    curveStrength: curveStrength * curveBoostAdjusted,
    curveDecay,
    trailGrowth,
    trailHistory: trajectoryTrail,
    trailMode: dotTrail ? "dots" : "lines",
    trailSamples,
    trailPointScale,
    trailWidthScale,
    trailBrightness: showcaseTrailBrightness,
    trailFadePower: droopExtra
      ? DROOP_EXTRA_FADE_POWER
      : softFade
        ? SOFT_FADE_POWER
        : TRAIL_FADE_POWER,
    trailVisible: !noTrail,
    trailOpacity: noTrail ? 0 : 0.9,
    directionRotation,
    directionMirror,
    directionScale,
    directionChaosChance,
    directionChaosAngle: CHAOS_ROTATION_ANGLE,
    directionChaosScaleRange,
    directionChaosMirrorChance: CHAOS_MIRROR_CHANCE,
    spiralStrength,
    spiralSpeed,
    swirlStrength: swirlStrengthAdjusted,
    swirlSpeed: swirlSpeedAdjusted,
    snowflake,
    snowflakeSwayStrength: snowflake ? range(SNOWFLAKE_SWAY_STRENGTH) : 0,
    snowflakeSwaySpeed: snowflake ? range(SNOWFLAKE_SWAY_SPEED) : 0,
    trajectoryMode,
    trajectoryStrength,
    trajectorySpeed,
    curlNoise,
    curlNoiseStrength: curlNoise
      ? range(CURL_NOISE_STRENGTH) *
        (curlyTrajectory ? CURL_NOISE_CURLY_MULTIPLIER : 1) *
        (curlyVariant ? curlyVariant.strength : 1) *
        (spaghetti ? SPAGHETTI_CURL_NOISE_STRENGTH_MULTIPLIER : 1) *
        spaghettiVariance
      : 0,
    curlNoiseScale: curlNoise
      ? range(CURL_NOISE_SCALE) *
        (curlyTrajectory ? CURL_NOISE_CURLY_SCALE_MULTIPLIER : 1) *
        (curlyVariant ? curlyVariant.scale : 1) *
        (spaghetti ? SPAGHETTI_CURL_NOISE_SCALE_MULTIPLIER : 1) *
        spaghettiVariance
      : 0,
    curlNoiseSpeed: curlNoise
      ? range(CURL_NOISE_SPEED) *
        (curlyTrajectory ? CURL_NOISE_CURLY_SPEED_MULTIPLIER : 1) *
        (curlyVariant ? curlyVariant.speed : 1) *
        (spaghetti ? SPAGHETTI_CURL_NOISE_SPEED_MULTIPLIER : 1) *
        spaghettiVariance
      : 0,
    curlNoiseYAxis: curlYAxisMultiplier,
    curlNoiseTwist: curlyTrajectory
      ? CURLY_TWIST_SCALE *
        (curlyVariant ? curlyVariant.twist : 1) *
        (spaghetti ? SPAGHETTI_TWIST_MULTIPLIER : 1) *
        spaghettiVariance
      : 1,
    subBurst,
    subBurstProfile: effectiveSubBurstProfile,
    subBurstHue: baseHue,
  };
}

function flashColorFromHue(hue, options = {}) {
  const {
    variance = FLASH_COLOR_VARIANCE,
    saturationRange = FLASH_COLOR_SATURATION,
    lightnessRange = FLASH_COLOR_LIGHTNESS,
    intensityScale = 1,
  } = options;
  const baseHue = hue ?? Math.random();
  const flashHue = (baseHue + rand(-variance, variance) + 1) % 1;
  const saturation = rand(saturationRange[0], saturationRange[1]);
  const lightness = rand(lightnessRange[0], lightnessRange[1]);
  const color = hslColor(flashHue, saturation, lightness);
  color.multiplyScalar(COLOR_GLOBAL_INTENSITY_SCALE);
  if (lightness >= HIGH_LIGHTNESS_THRESHOLD) {
    color.multiplyScalar(HIGH_LIGHTNESS_INTENSITY_SCALE);
  } else if (lightness <= LOW_LIGHTNESS_THRESHOLD) {
    color.multiplyScalar(LOW_LIGHTNESS_INTENSITY_SCALE);
  }
  color.multiplyScalar(intensityScale);
  return color;
}

function spawnFlash(position, hue, options = {}) {
  if (!options.spherical || !options.direct) {
    return;
  }
  if (Math.random() > FLASH_CHANCE) {
    return;
  }

  const intensityBlend = options.intensityScale ?? 1;
  const colorBlend = 0.75 + intensityBlend * 0.5;
  const sphericalBoost =
    (options.spherical ? FLASH_SPHERICAL_BRIGHTNESS_BOOST : 1) * intensityBlend;
  const sphericalSizeBoost = options.spherical ? FLASH_SPHERICAL_SIZE_BOOST : 1;
  const mainFlash = new Flash(
    position,
    flashColorFromHue(hue, { intensityScale: colorBlend }),
    {
    opacityScale: sphericalBoost,
    sizeScale: sphericalSizeBoost,
    }
  );
  flashes.push(mainFlash);
  scene.add(mainFlash.sprite);

  const outerHue = (hue ?? Math.random());
  const outerColor = flashColorFromHue(outerHue, {
    lightnessRange: FLASH_SPHERICAL_OUTER_LIGHTNESS,
    intensityScale: colorBlend,
  });
  const outerFlash = new Flash(position, outerColor, {
    opacityScale: sphericalBoost * FLASH_SPHERICAL_OUTER_OPACITY_SCALE,
    sizeScale: sphericalSizeBoost * FLASH_SPHERICAL_OUTER_SCALE,
    lifeScale: FLASH_SPHERICAL_OUTER_LIFE_SCALE,
  });
  flashes.push(outerFlash);
  scene.add(outerFlash.sprite);

  const firebowlCount = randInt(FLASH_FIREBOWL_COUNT[0], FLASH_FIREBOWL_COUNT[1]);
  for (let i = 0; i < firebowlCount; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const radius = rand(FLASH_FIREBOWL_OFFSET[0], FLASH_FIREBOWL_OFFSET[1]);
    const offset = new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      0
    );
    const fireHue =
      (hue ?? Math.random()) + rand(FLASH_FIREBOWL_HUE_SHIFT[0], FLASH_FIREBOWL_HUE_SHIFT[1]);
    const fireColor = flashColorFromHue((fireHue + 1) % 1, {
      saturationRange: [1, 1],
      lightnessRange: FLASH_FIREBOWL_LIGHTNESS,
      intensityScale: colorBlend,
    });
    const fireFlash = new Flash(position, fireColor, {
      sizeScale: range(FLASH_FIREBOWL_SIZE_SCALE) * sphericalSizeBoost,
      opacityScale: range(FLASH_FIREBOWL_OPACITY_SCALE) * sphericalBoost,
      lifeScale: range(FLASH_FIREBOWL_LIFE_SCALE),
      offset,
    });
    flashes.push(fireFlash);
    scene.add(fireFlash.sprite);
  }

  const burstCount = randInt(FLASH_BURST_COUNT[0], FLASH_BURST_COUNT[1]);
  for (let i = 0; i < burstCount; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const radius = rand(FLASH_BURST_OFFSET[0], FLASH_BURST_OFFSET[1]);
    const offset = new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      0
    );
    const burstFlash = new Flash(
      position,
      flashColorFromHue(hue, { intensityScale: colorBlend }),
      {
      sizeScale: range(FLASH_BURST_SIZE_SCALE) * sphericalSizeBoost,
      opacityScale: range(FLASH_BURST_OPACITY_SCALE) * sphericalBoost,
      lifeScale: range(FLASH_BURST_LIFE_SCALE),
      offset,
      }
    );
    flashes.push(burstFlash);
    scene.add(burstFlash.sprite);
  }
}

function buildSecondaryProfile() {
  const countMin = Math.max(10, Math.round(SECONDARY_COUNT[0] * MULTI_BLAST_COUNT_SCALE));
  const countMax = Math.max(countMin, Math.round(SECONDARY_COUNT[1] * MULTI_BLAST_COUNT_SCALE));
  return {
    pattern: SECONDARY_PATTERN,
    count: [countMin, countMax],
    radius: SECONDARY_RADIUS,
    life: SECONDARY_LIFE,
    trailStretch: SECONDARY_TRAIL_STRETCH,
    drag: SECONDARY_DRAG,
    drift: SECONDARY_DRIFT,
    pointSize: SECONDARY_POINT_SIZE,
    gravityScale: SECONDARY_GRAVITY_SCALE,
    hueVariance: SECONDARY_HUE_VARIANCE,
    trailBoost: SECONDARY_TRAIL_BOOST,
    curveStrength: SECONDARY_CURVE_STRENGTH,
    curveDecay: SECONDARY_CURVE_DECAY,
    gravityRamp: SECONDARY_GRAVITY_RAMP,
    dotTrailChance: SECONDARY_DOT_TRAIL_CHANCE,
    dotTrailSamples: SECONDARY_DOT_TRAIL_SAMPLES,
    scale: MULTI_BLAST_RADIUS_SCALE,
  };
}

function scheduleSecondaryBlasts(
  origin,
  profile,
  hueBase,
  clickDroop = false,
  clickCurly = false,
  forceStraight = false
) {
  if (Math.random() >= MULTI_BLAST_CHANCE) {
    return;
  }

  const count = randInt(MULTI_BLAST_COUNT[0], MULTI_BLAST_COUNT[1]);
  const secondaryProfile = buildSecondaryProfile();

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
      clickDroop,
      clickCurly,
      forceStraight,
    });
  }
}

function explodeAt(
  position,
  profile,
  hueBase,
  allowMultiBlast = true,
  clickDroop = false,
  clickCurly = false,
  forceStraight = false,
  forceShowcase = false
) {
  const chosen = profile ?? pick(explosionProfiles);
  const firework = new Firework(
    position,
    buildExplosionOptions(
      chosen,
      hueBase,
      clickDroop,
      clickCurly,
      forceStraight,
      forceShowcase
    )
  );

  fireworks.push(firework);
  scene.add(firework.points);
  if (firework.trailVisible && firework.trail) {
    scene.add(firework.trail);
  }

  if (allowMultiBlast) {
    scheduleSecondaryBlasts(
      position,
      chosen,
      hueBase,
      clickDroop,
      clickCurly,
      forceStraight
    );
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

function chooseProfile(forceSpherical = false, forcePattern = null) {
  const excluded = new Set(patternHistory.slice(0, PATTERN_REPEAT_WINDOW));
  if (forcePattern) {
    const forced = explosionProfiles.filter(
      (profile) => profile.pattern === forcePattern
    );
    if (forced.length) {
      const profile = pick(forced);
      remember(patternHistory, profile.pattern, PATTERN_REPEAT_WINDOW);
      return profile;
    }
  }
  const sphericalPool = explosionProfiles.filter(
    (profile) => profile.spherical && !excluded.has(profile.pattern)
  );
  const nonSphericalPool = explosionProfiles.filter(
    (profile) => !profile.spherical && !excluded.has(profile.pattern)
  );
  const fullPool = explosionProfiles.filter(
    (profile) => !excluded.has(profile.pattern)
  );
  const weightedNonSphericalPool = weightedPatternPool(nonSphericalPool, {
    cross: CROSS_WEIGHT,
  });
  let profile = null;

  if (forceSpherical && sphericalPool.length) {
    profile = pick(sphericalPool);
  } else if (Math.random() < SPHERICAL_BIAS && sphericalPool.length) {
    profile = pick(sphericalPool);
  } else if (weightedNonSphericalPool.length) {
    profile = pick(weightedNonSphericalPool);
  } else if (fullPool.length) {
    profile = pick(fullPool);
  } else {
    profile = pick(explosionProfiles);
  }

  remember(patternHistory, profile.pattern, PATTERN_REPEAT_WINDOW);
  return profile;
}

function flashIntensityBlend() {
  return 1 / (1 + COLOR_GLOBAL_INTENSITY_SCALE * 0.25 + LOW_LIGHTNESS_INTENSITY_SCALE * 0.05);
}

function scheduleSingleDetonation(
  origin,
  baseHue,
  clickDroop = false,
  clickCurly = false,
  forceSpherical = false,
  forceShowcase = false,
  forcePattern = null
) {
  let profile = chooseProfile(forceSpherical, forcePattern);
  if (forcePattern) {
    const forced = explosionProfiles.find(
      (candidate) => candidate.pattern === forcePattern
    );
    if (forced) {
      profile = forced;
      remember(patternHistory, profile.pattern, PATTERN_REPEAT_WINDOW);
    }
  }
  let forceStraight = false;

  if (
    !forcePattern &&
    clickCurly &&
    Math.random() < SPAGHETTI_TO_CROSS_CHANCE &&
    !patternHistory.includes("cross")
  ) {
    const crossPool = explosionProfiles.filter(
      (candidate) => candidate.pattern === "cross"
    );
    if (crossPool.length) {
      profile = pick(crossPool);
      clickCurly = false;
      forceStraight = true;
      remember(patternHistory, profile.pattern, PATTERN_REPEAT_WINDOW);
    }
  }
  const intensityBlend = flashIntensityBlend();
  spawnFlash(origin, baseHue, {
    spherical: profile.pattern === "sphere",
    direct: true,
    intensityScale: intensityBlend,
  });

  detonationQueue.push({
    time: elapsedTime,
    position: origin,
    profile,
    hue: baseHue,
    clickDroop,
    clickCurly,
    forceShowcase,
    forceStraight,
  });
}

function scheduleDetonation(origin) {
  const baseHue = pickAvoidRecent(SOLID_HUES, hueHistory, HUE_REPEAT_WINDOW);
  remember(hueHistory, baseHue, HUE_REPEAT_WINDOW);
  if (firstClick) {
    scheduleSingleDetonation(
      origin,
      baseHue,
      false,
      false,
      true,
      true,
      FIRST_CLICK_FORCE_PATTERN
    );
    firstClick = false;
    return;
  }
  const clickDroop = Math.random() < CLICK_DROOP_CHANCE;
  const clickCurly = Math.random() < CLICK_CURLY_CHANCE;
  const forceSpherical = false;
  const forceShowcase = false;
  const launchRocket = Math.random() < ROCKET_LAUNCH_CHANCE;
  const forcePattern = null;
  if (launchRocket) {
    const profile = chooseProfile(true);
    const flightTime = range(ROCKET_FLIGHT_TIME);
    const height = range(ROCKET_HEIGHT_RANGE);
    const speedScale = range(ROCKET_SPEED_SCALE_RANGE);
    const rocketHue =
      (pick(PURE_HUES) + rand(-ROCKET_HUE_JITTER, ROCKET_HUE_JITTER) + 1) % 1;
    const velocity = new THREE.Vector3(
      rand(ROCKET_DRIFT_RANGE[0], ROCKET_DRIFT_RANGE[1]),
      (height / flightTime) * speedScale,
      rand(ROCKET_DRIFT_RANGE[0], ROCKET_DRIFT_RANGE[1])
    );
    const rocket = new Rocket(origin, {
      velocity,
      life: flightTime,
      targetY: origin.y + height,
      profile,
      hue: baseHue,
      rocketHue,
      size:
        ROCKET_POINT_SIZE * range(ROCKET_POINT_SIZE_RANGE) * ROCKET_SIZE_MULTIPLIER,
      trailSamples: randInt(ROCKET_TRAIL_SAMPLES[0], ROCKET_TRAIL_SAMPLES[1]),
      trailSizeScale: range(ROCKET_TRAIL_SIZE_SCALE),
      trailOpacity: range(ROCKET_TRAIL_OPACITY),
      trailBrightness: range(ROCKET_TRAIL_BRIGHTNESS),
      trailFadePower: ROCKET_TRAIL_FADE_POWER,
      clickDroop,
      clickCurly: false,
      forceShowcase,
      forceStraight: true,
    });
    rockets.push(rocket);
    scene.add(rocket.points);
    scene.add(rocket.trail);
  } else {
    scheduleSingleDetonation(
      origin,
      baseHue,
      clickDroop,
      clickCurly,
      forceSpherical,
      forceShowcase,
      forcePattern
    );
  }
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
          item.allowMultiBlast ?? true,
          item.clickDroop ?? false,
          item.clickCurly ?? false,
          item.forceStraight ?? false,
          item.forceShowcase ?? false
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

  for (let i = rockets.length - 1; i >= 0; i -= 1) {
    const rocket = rockets[i];
    if (!rocket.update(delta)) {
      scene.remove(rocket.points);
      scene.remove(rocket.trail);
      rocket.dispose();
      rockets.splice(i, 1);
    }
  }

  for (let i = fireworks.length - 1; i >= 0; i -= 1) {
    const firework = fireworks[i];
    if (!firework.update(delta)) {
      scene.remove(firework.points);
      if (firework.trailVisible && firework.trail) {
        scene.remove(firework.trail);
      }
      firework.dispose();
      fireworks.splice(i, 1);
    }
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
