# Swim Lane Disintegration
**Date:** 2026-03-14
**Library:** p5.js

## Concept
A clinical visualization system collapses into organic chaos. Vertical swim lanes — sterile, columnar data structures — host small rectangular glyphs that begin orderly but gradually disobey their constraints, drifting horizontally, bleeding between lanes, ultimately abandoning the grid entirely. The piece explores the tension between imposed structure and emergent disorder.

## Palette
#0d0d0d (void background), #1a1a1a (lane dividers — barely visible vertical scaffolding), #2a7bc4 (primary — cold data blue), #e8a830 (secondary — warning amber), #e84a3c (accent — alert red), #f5f5f5 (rare — system error white)

## Composition
Canvas divided into 12 vertical swim lanes, each 8.33vw wide, spanning full viewport height. Lanes are implied by subtle 1px dividers at #1a1a1a. Phase 1: glyphs confined strictly within lane boundaries, vertical stacking at y-positions 80px, 160px, 240px, 320px, 400px. Phase 2: glyphs begin horizontal drift, some crossing lane boundaries by 20-60px, vertical positions destabilize ±15px. Phase 3: complete spatial breakdown — glyphs cluster in organic groups (center-left, bottom-right), lanes become invisible, negative space dominates top and right quadrants.

## Elements
Rectangular glyphs: 18px wide × 6px tall, sharp corners, no stroke. Count: 180 total (15 per lane). Each glyph has a 'home lane' (0-11) and 'home row' (0-4). Colours distributed: 60% #2a7bc4, 25% #e8a830, 12% #e84a3c, 3% #f5f5f5. Lane dividers: vertical lines 1px wide, full height, #1a1a1a, drawn at x = (laneIndex + 1) × (width/12). Background: solid #0d0d0d.

## Animation
Phase 1 (0-15s): All glyphs static in grid formation. Every 0.8s, one random glyph pulses opacity from 1.0 to 0.4 and back over 12 frames (sinusoidal). Phase 2 (15-45s): Glyphs begin horizontal drift. Each glyph's x-velocity = Perlin noise(glyphID × 0.01, frameCount × 0.002) mapped to -0.8 to +0.8 px/frame. Y-position adds subtle vertical float: ±0.2px/frame sinusoidal oscillation at unique phase offsets per glyph. Lane dividers remain static. Phase 3 (45-90s): Horizontal velocity increases to -1.8 to +1.8 px/frame. Glyphs that exit viewport left re-enter from right (wrap). Glyphs begin forming loose clusters via weak attraction to nearest 8 neighbors: if neighbor within 120px radius, apply 0.05px/frame acceleration toward neighbor. Lane dividers fade opacity from 1.0 to 0.0 over 300 frames (exponential ease-out starting at 45s mark). Phase 4 (90s+): Clusters tighten. Attraction radius reduces to 80px, attraction force increases to 0.12px/frame. Glyphs now also repel if within 25px: -0.3px/frame radial push. Continuous brownian jitter: ±0.4px per frame x/y. Rare white glyphs (#f5f5f5) pulse brighter (opacity 1.0 to 0.6) every 2.3s for 18 frames.

## Transformation
Glyphs do not rotate or scale. Opacity modulation only during Phase 1 pulse events and Phase 4 white glyph pulses. Colour assignment is permanent per glyph. No splitting or merging. As glyphs drift in Phase 2+, their rendering order remains constant (background to foreground based on initial lane index), creating subtle layering when overlapping — earlier lanes appear behind later lanes.

## Rhythm
Macro: slow build from stillness to turbulence over 90 seconds, then sustained restless equilibrium. Phase transitions are gradual, not abrupt — no sudden cuts. Micro: Phase 1 pulse rhythm is irregular (poisson-distributed intervals averaging 0.8s). Phase 2-3 motion is continuous fluid drift, no stops. Phase 4 introduces two competing rhythms: fast jitter (per-frame) vs. slow cluster breathing (attraction/repulsion creates 3-5 second expansion/contraction cycles). White glyph pulses at 2.3s intervals create a steady visual heartbeat against chaotic motion.

## Interaction (mouse)
Mouse X position controls global horizontal drift bias: at left edge (x=0), all glyphs gain -1.2px/frame leftward bias; at right edge, +1.2px/frame rightward bias; center is neutral. This bias layer adds to existing Perlin noise velocities. Mouse Y position controls cluster attraction strength: at top (y=0), attraction disabled (glyphs spread); at bottom, attraction multiplied by 2.5× (tight clusters). Click at any time spawns a 'disturbance wave': all glyphs within 200px radius of cursor receive radial outward velocity of 3.5px/frame, decaying by 0.15px/frame² over 40 frames. Hold 'R' key to reset all glyphs to Phase 1 grid positions over 120 frames (exponential ease-in-out), then resume Phase 2 choreography. Passive fallback when mouse inactive for 8+ seconds: mouse X simulated at center, mouse Y oscillates sinusoidally between 30% and 70% of viewport height with 11-second period.

## Source
*0 images from Unknown*
