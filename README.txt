# L-System Fractal Generator (p5.js Turtle Graphics)

A JavaScript + p5.js project that generates classic fractals using **L-systems** and **turtle graphics**. It builds fractal strings through rewrite rules (axioms + productions) and then interprets the result with a turtle that draws lines, rotates, and branches using a stack.

## What it does
- Implements an `LSystem` engine to iteratively apply rewrite rules to an axiom
- Uses a `Turtle` interpreter to convert symbols (F, +, -, [, ]) into drawing commands
- Renders multiple well-known fractals by swapping rule sets and angles

## Included fractals / demos
- Binary Tree
- Cantor Set
- Koch Curve
- Sierpinski-style curve
- Dragon Curve
- Fern / Plant system (branching with push/pop)
- Hilbert Curve
- Bonus/custom “bush” and crystal-style pattern

## How it works (high-level)
1. Choose an example function (e.g., `example7(6)` for the fern)
2. An L-system starts with an axiom and expands for `stage` iterations via rules
3. A symbol-to-command map translates characters into turtle actions
4. The turtle draws by moving forward, turning, and using a stack for branches

## Running
Open in the p5.js web editor or serve locally in a browser. In `setup()`, uncomment the example you want and adjust the stage value to change complexity.

## Tech
- JavaScript (ES6)
- p5.js
- L-systems (string rewriting)
- Turtle graphics + stack-based branching
