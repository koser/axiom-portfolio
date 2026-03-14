# Orbital Debt
**Date:** 2026-03-14
**Library:** p5.js

## Concept
Six weighted masses orbit two crossing beams, their trajectories gradually decaying into chaos. The piece explores the breakdown of symmetry — perfect synchronization slowly unravels as orbits drift out of phase, accumulate error, and collapse into irregular clustering. The emotional tone is clinical tension building toward disorder.

## Palette
#ebebeb (background — surgical white), #3b3bff (primary — cold structural blue), #1ad1a3 (secondary — synthetic teal), #b626ff (tertiary — unstable violet), #ff1f7a (accent — failure magenta), #ff8243 (warning — thermal orange)

## Composition
Two rounded rectangles cross at canvas center, forming an X with 45° and 135° rotations. Each beam is 400px long, 80px wide, with 40px corner radius. Six circles orbit these beams in three pairs. Phase 1: perfect radial symmetry, circles evenly distributed 60° apart on a 200px radius. Phase 2 (40s): orbits begin to ellipse, stretching toward corners. Phase 3 (90s): composition collapses to lower-left quadrant as all masses drift toward one attractor point at (width*0.3, height*0.7). Upper-right becomes void.

## Elements
Two rounded rectangles: 400px × 80px, 40px radius, crossing at center. Six circles: 60px diameter when stable, pulsing between 50-70px. Each circle has a thick stroke (8px) and no fill initially, fills gradually appear in phase 2. Two beam elements maintain fixed position and orientation. Circles are rendered above beams with blend mode SCREEN for overlap regions.

## Animation
Phase 1 (0-40s): Six circles orbit the center point at fixed 200px radius. Rotation speed: 0.8°/frame (48°/second), perfectly synchronized. Circles maintain 60° spacing. Beams remain static. Sinusoidal size pulse: 50-70px diameter over 180 frames (3 seconds). Phase 2 (40-90s): Orbits transition from circular to elliptical over 600 frames using cubic easing. Major axis stretches to 280px, minor axis compresses to 140px. Rotation speed decreases linearly from 0.8°/frame to 0.3°/frame. Circles begin to drift out of phase: each accumulates +0.02°/frame velocity error compounding per second. Stroke fades from 8px to 2px, fills emerge from 0 to 0.7 alpha over 400 frames. Phase 3 (90s+): All orbits degrade into irregular spirals converging on (width*0.3, height*0.7). Each circle follows its own decaying trajectory using Perlin noise (scale 0.003) added to position. Movement speed: 1.5-4px/frame varying per circle. Circles begin overlapping, creating bright SCREEN-blended zones. Beams start rotating: 0.1°/frame around their intersection point, unsettling the stable grid.

## Transformation
Circles: Phase 1 — stroke only, 8px width, continuous sinusoidal pulse 50-70px over 180 frames. Phase 2 — stroke width decreases linearly 8px to 2px over 600 frames. Fill alpha rises from 0 to 0.7 over 400 frames using ease-in-out. Diameter pulse becomes irregular, 45-75px with noise-based timing. Phase 3 — rotation per circle appears: each spins on own axis 0.5-2°/frame (different speeds per circle). Stroke becomes dashed: 12px dash, 8px gap. Opacity fluctuates between 0.4-1.0 based on distance from attractor (closer = more transparent). Beams: Phase 1-2 — static, 100% opacity. Phase 3 — rotate 0.1°/frame, opacity drops to 0.6, slight blur effect (simulated with layered offset copies).

## Rhythm
Macro: Three-act structure with clear transitions at 40s and 90s marks. Overall arc moves from 3-second pulse rhythm (predictable, breathing) to chaotic sub-second fluctuations. Micro: Phase 1 uses 180-frame (3-second) pulse cycle synchronized across all circles. Phase 2 introduces 0.02°/frame compounding drift — small errors accumulate to visible de-sync by 60s mark. Phase 3 abandons periodic rhythm entirely: each circle on independent Perlin noise timestream (frequency 0.003-0.008 varying per circle). Viewer experiences gradual dissolution from unified 3s breath to seven simultaneous irregular tempos.

## Interaction (mouse)
Mouse X position controls phase transition speed: at left edge (x=0), time flows at 0.5× speed (slowing decay). At right edge (x=width), time flows at 2× speed (accelerating collapse). Center position = 1× normal speed. Mouse Y position controls attractor point in Phase 3: mouseY directly maps to attractor Y position (mouseX maps to attractor X), allowing user to redirect the collapse. Circles are pulled toward cursor position in phase 3 with force proportional to 1/(distance²). Click spawns a single repulsion shockwave: 800px radius expanding at 12px/frame over 60 frames, circles within radius are pushed away with velocity inversely proportional to distance from click point (3-8px/frame radial velocity). Fallback when no mouse detected: attractor remains at default (width*0.3, height*0.7), time flows at 1× speed, no click repulsion available.

## Source
*0 images from Unknown*
