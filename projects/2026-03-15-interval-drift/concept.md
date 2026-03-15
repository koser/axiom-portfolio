# Interval Drift
**Date:** 2026-03-15
**Library:** p5.js

## Concept
A study in perceptual instability through vertical stripe intervals. What appears stable reveals micro-shifts in spacing and alignment, creating a field that breathes without obvious motion. The piece exploits peripheral vision's sensitivity to pattern disruption — stare at the center and the edges seem to crawl.

## Palette
#1a1a1a (deep background), #c4c4c4 (primary stripes — neutral mass), #2d2d2d (secondary stripes — dark intervals), #e8e8e8 (accent — rare bright interruptions)

## Composition
Full-width vertical stripe field, 50 stripes spanning viewport height. Initial state: regular intervals of windowWidth/50 px. Phase 1 (0-15s): stripes compress toward center, density increases from edges (uniform spacing) to center (5-8px gaps). Phase 2 (15-40s): intervals become chaotic, some stripes 5px apart, others 60px, creating irregular rhythm across full width. Phase 3 (40-90s): stripes in left third (x < width*0.33) migrate right at 1.5px/frame, right third (x > width*0.67) migrate left at 1.5px/frame, center third oscillates with amplitude 30px and period 180-300 frames. Moire interference emerges in center third where stripe density peaks at 8-12 overlapping stripes per 100px.

## Elements
Vertical stripes, each 8-14px wide (uniformly random per stripe), full viewport height (y: 0 to windowHeight). Total count: 50 stripes. Primary stripes (#c4c4c4): 35 stripes (70%). Shadow stripes (#2d2d2d): 15 stripes (30%), render first in draw order. Accent stripes (#e8e8e8): 4 stripes marked as potential accents, flash at 1.0 opacity for 1 frame, else opacity 0. Each stripe stores: baseX (original x), x (current x), baseWidth (8-14px), width (current width modulated), vx (velocity px/frame), phaseOffset (0-6.28 radians random), type (primary/shadow/accent), noiseOffset (random 0-1000 for Perlin noise lookup).

## Animation
Phase 1 (0-900 frames / 0-15s): Each stripe drifts horizontally at base velocity 0.1-0.4px/frame. X-position modulated by sin(frameCount*0.01 + phaseOffset)*0.3 + noise(noiseOffset)*0.2, oscillating ±20px from baseX. Width pulses: width = baseWidth + sin(frameCount*0.035 + phaseOffset)*2, amplitude ±2px, period 180 frames (3 seconds). Phase 2 (900-2400 frames / 15-40s): Horizontal drift increases to 0.6-1.2px/frame. Every 4th stripe (index%4==0) applies clustering force: vx += 0.3px/frame toward right neighbor. Spacing becomes 5-60px gaps. Width variance increases: width = baseWidth + sin(frameCount*0.03 + phaseOffset)*5, amplitude ±5px. Phase 3 (2400-5400 frames / 40-90s): Wave motion applied. Stripes at x < width*0.33 apply constant rightward force +1.5px/frame. Stripes at x > width*0.67 apply constant leftward force -1.5px/frame. Center stripes (width*0.33 < x < width*0.67) oscillate chaotically: vx += sin(frameCount*0.02 + phaseOffset)*0.8. Every 240 frames (4 seconds), select 5-8 random stripes, apply resetToOrigin() over 120 frames with easeOutCubic (t³ interpolation). Accent stripes: every frame, if random(1) < 0.011 (average 1 flash per 90 frames), draw at full opacity for that frame only.

## Transformation
Each stripe's width modulates continuously. Phase 1: width = baseWidth + sin(frameCount*0.035 + phaseOffset)*2. Phase 2: width = baseWidth + sin(frameCount*0.03 + phaseOffset)*5. Phase 3: width = baseWidth + sin(frameCount*0.025 + phaseOffset)*(5 + mouseInfluence.widthAmplitude). X-position updated each frame: x += vx. Velocity vx accumulates forces: Phase 1: vx = sin(frameCount*0.01 + phaseOffset)*0.3 + noise(noiseOffset + frameCount*0.001)*0.2. Phase 2: vx += clustering force (0.3px/frame if index%4==0). Phase 3: vx += wave force (±1.5px/frame based on x region). Friction applied every frame: vx *= 0.95. Mouse influence: vx += mouseInfluence.driftForce. Position constrained: if x < -50, x = width+50; if x > width+50, x = -50 (wrap around). Opacity: always 1.0 except accents (1.0 for 1 frame when triggered, else 0). No rotation. Draw order: shadow stripes (z=-1), primary stripes (z=0), accent stripes (z=1).

## Rhythm
Macro: 90-second arc from stable (Phase 1) to unstable (Phase 3). Phase transitions blend over 300 frames (5 seconds at 60fps) using linear interpolation of behaviour parameters. Micro: each stripe has unique period (180-600 frames) creating polyrhythmic interference — no two frames identical. Phase 1 breathing: 180-frame cycles (3 seconds). Phase 2: irregular 120-420 frame cycles (2-7 seconds) due to clustering disruption. Phase 3: chaotic layering of 180-300 frame oscillations plus 240-frame shockwave resets. Accent flashes: stochastic rhythm averaging 1 flash per 90 frames (1.5 seconds), maximum 4 simultaneous flashes possible.

## Interaction (mouse)
Mouse X position (0 to windowWidth) mapped to drift bias: driftForce = map(mouseX, 0, windowWidth, -0.5, +0.5) px/frame. This force adds to all stripe velocities: vx += driftForce. Left edge (mouseX=0): -0.5px/frame leftward pull. Right edge (mouseX=windowWidth): +0.5px/frame rightward pull. Center (mouseX=windowWidth/2): 0 force (neutral). Mouse Y position (0 to windowHeight) controls width modulation amplitude: widthAmplitude = map(mouseY, 0, windowHeight, 0, 10) px. Top (mouseY=0): amplitude 0px (locked to base width). Bottom (mouseY=windowHeight): amplitude 10px (±10px oscillation). Mouse click (mousePressed): trigger reset wave from mouseX. Wave expands at 3px/frame, radius starts at 150px. All stripes within radius return to baseX over 90 frames using easeOutCubic interpolation. Wave persists for 90 frames then removed. Mouse idle detection: if no mouse movement (abs(mouseX-lastMouseX) < 1 && abs(mouseY-lastMouseY) < 1) for 300 frames (5 seconds), decay mouse forces over 120 frames: driftForce *= 0.99 per frame until reaching 0. After 120 decay frames, system reverts to autonomous drift (mouseInfluence.driftForce = 0, widthAmplitude = phase default).

## Source
*0 images from Unknown*
