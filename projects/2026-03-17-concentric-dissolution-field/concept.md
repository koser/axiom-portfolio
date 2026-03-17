# Concentric Dissolution Field
**Date:** 2026-03-17
**Project ID:** AG26
**Library:** p5.js

## Concept
A system of nested contour lines undergoes progressive fragmentation, where rigid circular forms splinter into organic, flowing tendrils that migrate across the canvas before reconstituting. The piece embodies the tension between mathematical precision and organic decay, echoing the moodboard's stark black-on-white linework and the way structured rings break into fluid, almost biological appendages.

## Palette
#f8f8f8 (background — sterile white with slight warmth), #0d0d0d (primary — sharp black for contours and solid forms), #1a1a1a (secondary — softer black for transitional states and shadows), #3a3a3a (accent — mid-gray for dissolving particles and ghost trails)

## Composition
Begins with a large centered ring system (400px diameter) occupying the middle 60% of the canvas. Over Phase 2, fragments migrate toward edges — upper-right and lower-right quadrants become dense with tendrils while left side empties. Phase 3 sees reconstitution in offset center (shifted 80px right, 40px down), creating asymmetric tension. Empty space is deliberate negative space, not void — it has weight.

## Elements
PRIMARY: Contour rings constructed from custom closed bezier paths with 32 control points, each point subject to radial noise displacement (0-8px amplitude, noise scale 0.015). Rings range 80-420px diameter, stroke weight 1.8-3.2px, no fill. SECONDARY: Tendril systems — each is a chain of 40-80 connected bezier segments with decreasing width (start 4px, end 0.8px), endpoints driven by flow field (Perlin noise grid 20x20 cells, vector magnitude 0.5-2.5px/frame). Tendrils have organic wobble via curveVertex with tangent handles offset by noise(). TERTIARY: Fragment particles — small irregular polygons (5-9 vertices, 3-12px size) shed from ring edges, each with independent rotation (0.5-3°/frame) and velocity (1.2-4px/frame) following flow field with drag coefficient 0.98. TEXTURE: Trailing system where each moving element leaves 8-15 frame echo with exponential opacity falloff (alpha 0.08 to 0.01).

## Animation
PHASE 1 (0-12s, frames 0-720): Rings breathe radially — radius oscillates with sin(frameCount * 0.015) * 12px, stroke weight pulses with sin(frameCount * 0.023 + ringIndex) * 0.6px. Noise displacement amplitude grows linearly from 0 to 8px over 12s. At frame 360, innermost ring begins to fragment — every 6th control point detaches as particle. PHASE 2 (12-42s, frames 720-2520): Fragmentation accelerates. Every ring loses 2-5 particles/second. Particles accelerate to 2.8-5px/frame following flow field angle mapped from Perlin noise (noiseScale 0.008, time evolution frameCount * 0.0003). Simultaneously, tendril growth initiates from remaining ring segments — tendrils spawn at 0.3/second per ring, grow at 120px/second (2px/frame) for 1.5-3.5s then stop. Flow field rotates slowly (0.08°/frame global rotation). By frame 1800, only 30% of original ring mass remains. PHASE 3 (42-90s, frames 2520-5400): Tendril retraction phase. Existing tendrils begin curling inward, following exponential ease-in curve (easeInExpo) over 8-14s individual duration. As they curl, they shed mini-particles (1-2px) at rate 15/second. Simultaneously, new rings reconstitute at offset center from accumulated particles — particles within 200px of new center experience attraction force (inverse square, k=800). New rings form with staggered timing (ring 1 at frame 2700, ring 2 at 2940, etc). Stroke weight of new rings starts at 0.8px, grows to 2.8px with cubic ease-out over 4s.

## Transformation
Rings morph through 3 states: INTACT (frames 0-360, smooth bezier with gentle noise), FRAGMENTING (frames 360-1800, control points detach based on noise threshold, gaps appear in stroke creating broken circles), DISSOLVED (frames 1800-2520, only scattered particles remain). Tendrils undergo: GROWTH (spawn to full length over 90-210 frames, width tapers exponentially from base to tip), STABLE (maintain shape for 600-900 frames with subtle wobble from noise), CURL (retract over 480-840 frames, bezier control points rotate around spawn origin at 0.8-2°/frame). Particles: BIRTH (spawn at velocity 3-6px/frame, rotation 2-5°/frame, alpha 0.9), DRIFT (velocity decays to 0.8-2px/frame over 300 frames, alpha stable), DEATH (alpha fades 0.9 to 0 over final 180 frames before removal).

## Rhythm
Macro rhythm: slow 90-second breath cycle (12s build → 30s chaos → 48s reconstitution). Micro rhythm: particle ejection is staccato (bursts of 3-7 particles every 0.4-0.9s), tendril spawning is syncopated (offbeat timing using prime number frame intervals: 89, 97, 103 frame gaps), ring breathing is sustained legato (smooth sine waves at 0.067Hz). Acceleration arc: piece starts at 60% speed, accelerates to 140% speed by frame 1400, then decelerates to 75% speed by frame 4000. Speed multiplier = 0.6 + (sin(frameCount * 0.0008) * 0.4 + 0.4) * 0.8.

## Interaction (mouse)
Mouse X position controls flow field rotation speed: left edge = -0.15°/frame (counter-clockwise), center = 0°/frame (frozen), right edge = +0.15°/frame (clockwise), mapped with smoothstep easing. Mouse Y position controls fragmentation threshold: top 20% = high cohesion (particles need noise value >0.75 to detach), bottom 20% = low cohesion (particles detach at noise >0.25), creating visible stability difference. Click spawns a radial shockwave: 60 particles burst from click point with initial velocity 8-14px/frame, radial distribution, exponential decay over 120 frames. Shockwave also temporarily distorts nearby tendril control points (displacement 20-40px with elastic ease-out over 90 frames). When mouse is stationary for >180 frames, interaction gently fades — flow field rotation drifts toward autonomous sine wave, fragmentation threshold returns to default 0.5 over 300 frames.

## Source
*0 images from Unknown*
