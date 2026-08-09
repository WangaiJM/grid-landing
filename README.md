# Grid Landing

## Objectives

The main objectives for this project were to:

- Animate the menu panel so it slides in from the edge
- Count the stat numbers up from zero on page load
- Trap keyboard focus inside the open menu
- Respect `prefers-reduced-motion`
- Load the four stats from a JSON file

## What I Learned

One thing that surprised me during this project was how useful `useContext` can be.

Since the navigation overlay is rendered on the body, controlled by button on header and nav is it's own component. I had to use `useContext`. I wasn't expecting that. I realised that `useContext` has much broader applications than I had originally expected.

### Concepts I Want to Explore Further

There are two concepts from this project that I want to understand more deeply:

- **Trapping keyboard focus inside an open menu**
- **Counting stat numbers up from zero on page load**

## Repository

[Grid Landing](https://github.com/WangaiJM/grid-landing)

## Live Site

[Grid Landing Live Site](https://grid-landing-tss.netlify.app/)
