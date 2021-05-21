# InsertionSort - Code Challenge 26

## Collaboratos: Clement Buchanan & Kale Lesko

## Challenge Summary
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

## Whiteboard Process
![Whiteboard](assets/Insertion%20Sort%20(1).png)

## Approach & Efficiency

Time: 0(n^2)
Space: 0(n)

## Solution
[Link to the code](https://github.com/ClementBuchanan/InsertionSort/blob/main/index.js)

## blog article

1. To create an insertion sort you must first loop through the array minus the base value
2. Next we loop through the entire array for comarison
3. Then do a console.log('outer', array[1])
4. Then check if the valus is less than the current index then console.log ('inner', array[j]).
5. If so then we store the it in a temp variable removing it from the array.
6. Again we console.log('temp', temp)
7. Next we insert the VALUE into the current index after which we console.log('post-sort', array) and then we finally return the sorted array.
