# React - A\* Shortest Path Search Algorithm - Visualization

[Click here to view the application](https://react-astar-visualization.herokuapp.com/)

## About the algorithm

A* Search Algorithm is one of the best and popular technique used in path-finding and graph traversals. Unlike Dijkstraβs algorithm, A* search algorithm is much more efficient as it also considers its current position from the end node while traversal. [Click here](https://github.com/prtvi/mso/#about-the-a-search-algorithm) to read more about the algorithm.

## About the project

In this application, you can use various grid sizes and also adjust the visualization speed.
You first set the grid size and then set the visualization speed.

Now you click on the boxes to first set the `start node` π§ then the `end node` πͺ. Then you start adding the `barrier nodes` π«.
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

3: The end result, the shortest path highlighted in green π©

<img src="out/3.png" alt="end result" width="300"/>

<br>

### Legend

β¬οΈ Reset (default unset node) <br>
π§ Start node <br>
πͺ End node <br>
π« Barrier node <br>
π¦ Open node (traversing yet possible over this node) <br>
π₯ Closed node (no more traversing will happen on this node) <br>
π© Path (shortest path found) <br>
