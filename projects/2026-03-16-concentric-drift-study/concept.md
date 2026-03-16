# Concentric Drift Study
**Date:** 2026-03-16
**Project ID:** AG24
**Library:** p5.js

## Concept
An exploration of imperfect circularity through nested, hand-drawn contours that breathe and migrate across the canvas. Inspired by the organic, wobbly line quality of the moodboard — each ring is a living stroke constructed from hundreds of vertex points displaced by layered noise fields. The piece captures the tension between geometric intention and organic execution, like a compass drawing disturbed by trembling hands.

## Palette
#f8f7f4 (background — warm off-white paper), #1a1a1c (primary — deep charcoal for main contours), #2d2d30 (secondary — slightly lighter for ghost trails), #0a0a0d (accent — deepest black for foreground emphasis)

## Composition
Initially centered: a nest of 12-18 concentric rings occupy the central 60% of the canvas, densest at the core. Over time, the entire system drifts slowly toward screen edges (upper-right quadrant by 45 seconds), then returns via a different path (lower-left by 90 seconds), creating a slow orbital migration. Empty space breathes around the cluster, expanding and contracting. By 120 seconds, the composition has traced an irregular elliptical path across the canvas, leaving faint ghost trails that fade over 8-10 seconds.

## Elements
PRIMARY: Contour Rings — closed curves built with 180-240 vertex points per ring, positioned radially from a shared center. Each point's radius is base_radius + noise(angle, time, ring_index) * displacement_amount, creating organic wobble. Ring count: 12-18, radii from 15px (innermost) to 280px (outermost), spaced unevenly (inner rings tighter, outer rings more spread). Stroke weight: 0.8-1.4px, varies per ring and oscillates over time. SECONDARY: Ghost Trails — semi-transparent (alpha 8-15) copies of rings that persist for 8-10 seconds behind the main structure as it drifts, creating a motion history. Trail count: 40-60 ghost rings at any moment, distributed along the drift path. TERTIARY: Disruption Strands — occasional (every 18-25 seconds) thin bezier curves (3-5 per event) that slice across the ring system at oblique angles, stroke weight 0.3-0.5px, length 120-300px, appearing for 2-3 seconds before fading.

## Animation
PHASE 1 (0-30s): Rings establish at canvas center. Each ring rotates independently — innermost rings 0.15deg/frame clockwise, outermost 0.08deg/frame counter-clockwise, creating a slow churning effect. Noise displacement amplitudes breathe sinusoidally: 3-9px range with 6-second cycles, each ring offset by 0.4 seconds to create wave propagation inward-to-outward. Stroke weights pulse 0.8-1.4px with 4-second cycles, cubic easing. No drift yet. PHASE 2 (30-75s): Drift begins. Center point moves toward upper-right at 0.4px/frame (24px/second) with exponential easing in (first 5 seconds) and sinusoidal micro-wobble (±2px perpendicular to drift direction, 2.5-second cycle). Rotation speeds increase: inner rings to 0.25deg/frame, outer to 0.12deg/frame. Noise displacement amplitudes expand: 4-14px range. Ghost trails begin accumulating. Disruption strands appear every 20 seconds — 4 bezier curves slash across at angles between 25-65deg from horizontal, alpha 60-90, cubic fade-out over 2.5 seconds. PHASE 3 (75-120s): Drift reverses direction toward lower-left at 0.5px/frame with 8-second sinusoidal curve (acceleration/deceleration). Rings begin to desynchronize: every 3rd ring pauses rotation for 1-2 seconds randomly, creating visual stutter. Noise displacement becomes aggressive: 6-20px range, faster frequency (noise scale increases by 40%). Stroke weights become more erratic: 0.6-1.8px with occasional jumps. Disruption strands intensify: every 12-15 seconds, 6-7 curves at steeper angles (60-85deg), longer duration (4 seconds), alpha 80-110. Ghost trail opacity slightly increases (alpha 12-20) making the path more visible. By 120s, system returns near center but offset 80-120px from original position.

## Transformation
Individual rings undergo continuous metamorphosis. Noise seed per ring increments by 0.003/frame, causing the wobble pattern to slowly migrate around each ring (full pattern rotation takes ~180 seconds). Every 12-18 seconds, a random ring experiences a 'shudder' — its noise displacement doubles for 8 frames (0.13 seconds), then returns to baseline with exponential easing over 40 frames. Rings subtly scale: base radius oscillates ±4-7% with 9-second sinusoidal cycles, each ring phase-offset by ring_index * 0.6 seconds. Ghost trails fade linearly from alpha 15 to 0 over 480-600 frames. Disruption strands spawn at full opacity (80-110), hold for 60 frames, then fade exponentially over 90 frames.

## Rhythm
Macro rhythm: 30-second phase blocks with distinct drift behaviours, creating a three-act structure that loops. Micro rhythm: layered breathing patterns at 4s (stroke weight), 6s (noise amplitude), and 9s (scale) create complex visual interference. Staccato interruptions from disruption strands every 12-25 seconds break the hypnotic flow. The piece has a meditative, slow-burn quality with occasional sharp punctuation — imagine a 3-second inhale, 4-second exhale breathing pattern disrupted by irregular coughs.

## Interaction (passive)
Fully autonomous. Primary driver: millis() for phase transitions and global animation clock. Secondary drivers: multiple layered Perlin noise fields (one per ring for wobble, one for drift trajectory micro-adjustments, one for disruption strand timing variance). Random events (shudders, disruption strands) triggered by checking if frameCount % random_interval === 0, with intervals rerolled after each trigger. The drift path uses a combination of linear interpolation between phase targets and noise-based perpendicular offset for organic trajectory.

## Source
*0 images from Unknown*
