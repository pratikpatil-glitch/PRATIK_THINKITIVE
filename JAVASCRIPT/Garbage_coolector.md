- Garbage Collection is an automatic process in JavaScript that removes unused objects from memory.

- You don't normally call Garbage Collection yourself. JavaScript handles it automatically.

- JavaScript memory management has three main steps:
    - 1. Allocate Memory: JavaScript creates memory for variables and objects.
    - 2. Use Memory: Your program reads and updates data.
    - 3. Release Memory: Garbage Collection reclaims eligible unused memory.

- JavaScript engines generally use two important memory areas.
  - 1. Stack Memory: 
    - Stores function calls and execution contexts. 
    - Manages function execution
  
  - 2. Heap Memory: 
    - Stores objects and other dynamically allocated data

- Reachability Concept: Reachability means whether an object can still be accessed through a reference from a starting point (root).

- Most modern JavaScript engines use a Mark-and-Sweep-style approach.
- It works in two main steps:
  - Step 1: Mark: marks all reachable objects.
  - Step 2: Sweep: It identifies unmarked objects and reclaims their memory.
  
- What is a Memory Leak? 
  - A memory leak happens when your application keeps objects in memory even though they are no longer needed.
  