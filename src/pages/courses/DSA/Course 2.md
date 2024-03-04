---
layout: "../../../layouts/PostLayout.astro"
---

It's great to have all custom code in headers.

# Template Classes

$\sim$ Generics

```c++
template <typename T>

class MyGenericContained{
private:
T privateObject;

public:
void setPrivateObject(T value){
privateObject = value;
}
T getPrivateObject(){
return privateObject;
}

}
```

At compile time T will be replaced by the type specified.

# The stack

LIFO - Last in First Out
![Course 2 2024-03-04 16.18.48.excalidraw.svg](/Course%202%202024-03-04%2016.18.48.excalidraw.svg)

## Implementation

Let's define the stack generic/template class

```c++
#include <iostream>
#define NMAX 10 //pre processing directive

template<typename T>
class Stack{
	private:
		T stackArray[NMAX]; //note that this is static
		int topLevel;
	public:
		// pushes the element at the top of the stack
		void push(T x){
		// we must check if the elements are not overflowing
			if(topLevel >= NMAX-1){

				cout<<"The stack is full. Unlucky";
				return;
		}
			stackArray[++topLevel]=x;
			//first increment then push
		}
		int isEmpty(){
			return topLevel==0;
		}
		T pop(){
			if(isEmpty()){
				T x;
				return x;
			}
			return stackArray[topLevel--]; //take care here!
			//first we return the last el, then we delete
			// Developer Experience
		}
		T peek(){
			if(isEmpty()){
				T x;
				return x;
			}
			return stackArray[topLevel];
		}
		Stack(){
			topLevel=-1;
		}
}
```

### Applications:

- Ctr-Z
- Paratheses balances
  - Algorithm: we push the open brackets to the stack. If we find a closing bracket we check with the top of the stack. If we do not find an opening bracket then the expression is wrong.
- Reversed Polish notation:
  - Every operator follows all of its operands. For a computer it is faster to process this. Very epic [implementation](https://medium.com/@ainayat865/reverse-polish-notation-rpn-with-stack-4551a5f54ae0). // to do: make manim animation

# Queue

FIFO = First in First Out (but not in Romania 🇧🇪)
![Course 2 2024-03-04 17.17.01.excalidraw.svg](/Course%202%202024-03-04%2017.17.01.excalidraw.svg)

```c++
template<typename T>
class Queue{
	private:
		T qArray[NMAX];
		int head;
		int tail;
	public:
		void enqueue(T x){
			if(tail>NMAX-1){
				cout<<"The length of the queue is max 😩";
				return;
			}
			qArray[++tail]=x;
		}
		int isEmpty(){
			return head==tail;
		}
		T dequeue(){
			if(isEmpty()){
				cout<<"The queue is empty";
				T x;
				return x;
			}
			return qArray[head++];
		}
		T peek(){
			if(isEmpty()){
				cout<<"The queue is empty";
				T x;
				return x;
			}
			return qArray[head];
		}
		Queue(){
			tail=0;
			head=0;
		}
}
```

When we add smth, we increase the tail. When we delete smth we increase the head.

For the circular array representation we apply a %NMAX and we check the size;

# Types of queues:

- Dequeue/double ended queue
- Priority queue ([_Quick Dijkstra_](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/) is built with priority queue)

Next Lecture: Radix Sort
