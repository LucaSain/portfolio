---
layout: "../../../layouts/PostLayout.astro"
---

## Abstract Data Types

It's a collection of axioms and operations
Operations
what actions can be performed on the data type. For each operation we know:
name
arguments
return type

Axioms are rules between operations
We do not know the information about the implementation of operations
Similar to Java interfaces

### Examples

- Stack
  - Operations: push, pop, peek, isEmpty

# Introduction to C/C++

- Similar to Java
- The basic structure of a C program
  Inclusion of headers
  Definition of types/classes
  Declaration of global variables
  Definition of functions
  The main functions
  _Example here_

```c
#include <stuff>
int a,b,c;
int main(){
	a=10;
	scanf("%d",&b);
	c=a+b;
	printf("%d\n",c);
	return 0;
}
```

### Transition to C++

C++ is a superset of language C.
_c code can be compiled by a c++ compiler, but the c cannot compile c++ code_
c follows procedural programming, no OOP.
c++ can do both 💪
c++ has namespaces

_Example here_

```c++
#include <iostream>
using namespace std;
int main(){
	int a;
	cin>>a;
	cout<<a;
	return 0;
}
```

**Passing by value**

```c++
#include <iostream>
using namespace std;
void doShit(int val){
	val=0;
	return;
}

int main(){
	int a;
	cin>>a;
	doShit(a);
	cout<<a; //expects the value of a to not change
	return 0;
}
```

**Passing by reference**

```c++
#include <iostream>
using namespace std;
void doShit(int &val){
	val=0;
	return;
}

int main(){
	int a;
	cin>>a;
	doShit(a);
	cout<<a; //expects the value of a to be 0
	return 0;
}
```

![img](https://www.sitesbay.com/cpp/images/data-type-in-cpp.jpg)

### Datatype: struct

```c++
struct name{
	//structure here
};

struct prof{
	int age;
	int sallary;
}
//using typedef
typedef struct student Student{
// struct def further
```

### Datatype: classes and objects

```c++
class thing{
public:
	double re;
	double im;
	//code further
private:
	//more stuff
//constructor
	thing(){
	// constructive code here
	}
//destructor
	tilde_thing(){
	// desctructive code here
	}
}
```

Elements from structs are public by default

Elements from classes are private by default
