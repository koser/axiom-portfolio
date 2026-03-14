# Perception Threshold
**Date:** 2026-03-14
**Library:** canvas

## Concept
A dense field contains a single square that exists at the edge of visual certainty. As the viewer's gaze shifts (tracked through cursor position), the square displaces through micro-jumps below the threshold of motion detection—2-8 pixels, with variable latency. Over time, the square migrates significantly, yet no single movement registers consciously. The work materializes the gap between sensing and knowing: you cannot confirm the square is moving, but you cannot trust that it hasn't.

## Palette
Blood orange field (#FF5233) with burnt coral vignette at edges. Deep charcoal (#1a1412) for a substantial irregular mass occupying 60-70% of canvas. Cold paper white (#F8F6F0) for the square—12x12 pixels, sharp-edged. No internal gradients; only atmospheric degradation at field boundaries.

## Interaction
Cursor movement seeds a probabilistic displacement algorithm. Square jumps occur at irregular intervals (800-2400ms) when cursor is active, with displacement magnitude inverse to cursor velocity—faster movement paradoxically stabilizes the square. Movement ceases entirely when cursor exits canvas. No feedback, no easing, no confirmation that anything occurred.

## Source
*0 images from Unknown*
