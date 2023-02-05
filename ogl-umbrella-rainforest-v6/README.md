#  OGL - Object Oriented Graphics Library
### A rendering of an umbrella rainforest- A surellist art project.

[HEMSPHERE](https://www.omnicalculator.com/math/volume-of-hemisphere)
# Installation
1) Clone the repository
2) Run `npm install` to install all the dependencies
3) Run `npm build` to build the project
4) Run `npm start` to start the server

# Usage of the Graphics Pipeline
# =================
# Steps to use the graphics pipeline:
1) create a canvas (a window or a canvas element)

2) create a scene
   1) Add objects to the scene
   2) Add the objects to either `drawables` or `renderables`
4) create a camera
3) create a renderer
4) Add all the objects to the renderer
5) add the scene to the renderer
6) render the scene

### TODO
1) Compile all the code in the `src/lib` directory into a single `dist/ogl.js` file.
2) Parse and Renderer for a JSON object for a scene description.
3) Mouse and Keyboard events for the camera.
   