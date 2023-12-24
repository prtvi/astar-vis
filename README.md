# React - A\* Shortest Path Search Algorithm - Visualization

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a9c61d8-169c-440c-bc7a-cde975870424/deploy-status)](https://app.netlify.com/sites/astar-visualisation/deploys)

Check out the link in the repository details to view the application

## About the algorithm

A* Search Algorithm is one of the best and popular technique used in path-finding and graph traversals. Unlike Dijkstra’s algorithm, A* search algorithm is much more efficient as it also considers its current position from the end node while traversal. [Click here](https://github.com/prtvi/mso/#about-the-a-search-algorithm) to read more about the algorithm.

## About the project

In this application, you can use various grid sizes and also adjust the visualization speed.
You first set the grid size and then set the visualization speed.

Now you click on the boxes to first set the `start node` 🟧 then the `end node` 🟪. Then you start adding the `barrier nodes` 🟫.
Reference to different types of nodes is given in the legend below.

Now click on the start button to start the visualization.

## Output

### Here are some snapshots from the visualization:

1: Start, end node and barriers set, algorithm to be started

<img src="out/1.png" alt="Start, end node and barriers set, algorithm to be started" width="300"/>

<br>

2: Halfway of the algorithm running

<img src="out/2.png" alt="halfway snapshot of algorithm running" width="300"/>

<br>

3: The end result, the shortest path highlighted in green 🟩

<img src="out/3.png" alt="end result" width="300"/>

<br>

### Legend

⬜️ Reset (default unset node) <br>
🟧 Start node <br>
🟪 End node <br>
🟫 Barrier node <br>
🟦 Open node (traversing yet possible over this node) <br>
🟥 Closed node (no more traversing will happen on this node) <br>
🟩 Path (shortest path found) <br>

## Other links

Click [here](https://prtvi.github.io/allprojects.html) to check out my other projects
