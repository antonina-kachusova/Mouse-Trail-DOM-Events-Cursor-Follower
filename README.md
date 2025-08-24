# 🐭 Mouse Trail (Cursor Follower)

A lightweight, framework-free **cursor trail** effect in pure JavaScript and CSS.  
As you move the mouse, a chain of colored dots smoothly chases the pointer with easing, creating a fluid rainbow trail.

## Features
- **Pure JS + CSS**, no dependencies — just open the page and move the mouse. :contentReference[oaicite:0]{index=0}
- **Rainbow coloring** across the trail segments. :contentReference[oaicite:1]{index=1}
- **Eased following** via per-segment interpolation on every frame. :contentReference[oaicite:2]{index=2}
- **Performance-friendly** dots (`position: absolute`, `pointer-events: none`, `will-change`). :contentReference[oaicite:3]{index=3}
- **Zero config run**: script builds the trail on load and starts animating with `requestAnimationFrame`. :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}

## How it works
1. On startup, the script creates **TRAIL_LENGTH** small `<div>` elements with class `trail` and places them at the initial mouse position. Each dot is slightly **smaller** and **more transparent** than the previous one. :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}  
2. Mouse movement updates a shared `mouse` position; an animation loop eases each dot toward the previous point at a constant **speed factor**. :contentReference[oaicite:8]{index=8} :contentReference[oaicite:9]{index=9}  
3. Dot styles are positioned via `left/top` with center alignment, producing a smooth trailing effect. :contentReference[oaicite:10]{index=10}

## Styling
Each trail segment is an absolutely-positioned circle with transitions enabled for color/opacity; events are ignored to avoid blocking page interactions.
```css
.trail {
  position: absolute; width: 14px; height: 14px; border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transition: background 0.2s, opacity 0.2s;
  will-change: left, top, width, height, background, opacity;
}
## Customize

Length: change TRAIL_LENGTH (default 18). More dots = fuller trail.

Speed: tweak const speed = 0.22; (higher = snappier).

Color: modify rainbowColor(i, total) or set a fixed background per dot.

Size/opacity gradient: adjust the initial width/height and opacity computed in the creation loop.

## Run locally

Open index.html in any modern browser — that’s it.

## Files

index.html — minimal HTML that links styles.css and script.js.

styles.css — base layout and .trail styles for smooth rendering.

script.js — trail creation, mouse tracking, and animation loop.

