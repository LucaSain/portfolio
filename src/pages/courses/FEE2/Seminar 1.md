---
layout: "../../../layouts/PostLayout.astro"
---

# Vectors - recap

Sum of two vectors:

$$\displaylines{\vec{a}=a_x\vec{i}+a_y\vec{j} \\ \vec{b}=b_x\vec{i}+b_y\vec{j} \\ \vec{a}+\vec{b}=(a_x+b_x)\vec{i}+(a_y+b_y)\vec{j}}$$

![Seminar 2 2024-02-27 17.18.31.excalidraw](/Seminar%202%202024-02-27%2017.18.31.excalidraw.svg)

_note: addition is a bilinear form_

Dot product:

$$\displaylines{\vec{a}=a_x\vec{i}+a_y\vec{j} \\ \vec{b}=b_x\vec{i}+b_y\vec{j} \\ \vec{a} \cdot \vec{b}=(a_x+b_x)\vec{i}+(a_y+b_y)\vec{j}\\ or \\ \vec{a} \cdot \vec{b}=||\vec{a}||\space||\vec{b}||\space \cos(\angle{\vec{a},\vec{b}})}$$

![Seminar 2 2024-02-27 17.30.43.excalidraw](/Seminar%202%202024-02-27%2017.30.43.excalidraw.svg)

_note: dot product is a bilinear form_

Cross product:

$$\displaylines{ a \times b = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z\end{vmatrix}\\ and \\ ||\vec{a} \times \vec{b}||=||\vec{a}||\space||\vec{b}||\space \sin(\angle{\vec{a},\vec{b}})}$$

![Seminar 1 2024-02-27 18.00.50.excalidraw](/Seminar%201%202024-02-27%2018.00.50.excalidraw.svg)

_note: the cross product is **not** a bilinear form_

# FEE2 basics:

We define Nabla (also called _gradient_):

$$\newcommand\mycolv[1]{\begin{bmatrix}#1\end{bmatrix}} \nabla=\frac{\partial}{\partial x}\vec{i}+ \frac{\partial}{\partial y}\vec{j}+ \frac{\partial}{\partial z}\vec{k} = \mycolv{\frac{\partial}{\partial x}\\\frac{\partial}{\partial y}\\\frac{\partial}{\partial z}}$$

The cases we are going to apply nabla are:

1. To a scalar => 0
2. To a vector in a dot product
3. To a vector in a cross product

I really really recommended [this video](https://www.youtube.com/watch?v=rB83DpBJQsE&pp=ygUbM2JsdWUxYnJvd24gZGl2ZXJnZW5jZSBjdXJs) on divergence and curl by 3B1B.

## The divergence of a vector field

Studies whether how the vector field behaves _near a certain point_.
It can behave like a sink or like a source.

![Seminar 1 2024-03-04 19.32.08.excalidraw.svg](/Seminar%201%202024-03-04%2019.32.08.excalidraw.svg)

The divergence is denoted by:

$$div\space \vec{w}=\nabla \vec{w} = \frac{\partial w_x}{\partial x}\vec{i}+ \frac{\partial w_y}{\partial y}\vec{j}+ \frac{\partial w_z}{\partial z}\vec{k}$$

In our case, the study of electromagnetism is equal to the (vector) Electric Field Strength at the point given by $\vec{w}$.

## The curl of a vector field

Studies how the vector fields rotates _near a certain point_.
It can rotate clockwise (negative curl) and counterclockwise(positive curl).

![Seminar 1 2024-03-04 19.40.47.excalidraw.svg](/Seminar%201%202024-03-04%2019.40.47.excalidraw.svg)

The curl is denoted by:

$$curl \space \vec{w} = \nabla \times \vec{w}$$

# Electric fields

The elementary electromagnetic components are the proton(+) and the electron(-).

The particles can hold charges positive and negative respectively. When a positive charge _connects_ with a negative one, an electric dipole is formed.
The force exercised by two particles is given by **Coulomb's law**:


$$ |F|=k\frac{|q_1q_2|}{r^2} $$


Where $q_1,q_2$ are the electric charges of the particles. $k$ is the **Coulomb's constant** and $r$ is the distance between particles.

![Seminar 1 2024-03-04 19.50.37.excalidraw.svg](/Seminar%201%202024-03-04%2019.50.37.excalidraw.svg)

$$\displaylines{k=9\times10^9 \frac{m}{F}\\k=\frac{1}{4\pi\epsilon_0}}\Bigg|\Rightarrow \epsilon_0=\frac{1}{4\pi9\times10^9}\frac{F}{m}$$

$e_0$ is called **electric permittivity of void**.
The electric permittivity is equal to:

$$\epsilon = \epsilon_0\times\epsilon_r$$

And $\epsilon_r$ is the relative electric permittivity. A factor by which the electric field between charges is decreased relative to a vacuum. Docs [here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiH0ef8l9uEAxXSQvEDHf4uBP0QFnoECBsQAw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRelative_permittivity%23%3A~%3Atext%3DRelative%2520permittivity%2520is%2520the%2520factor%2Chas%2520vacuum%2520as%2520its%2520dielectric.&usg=AOvVaw1bbwmtFwPfoJwLYS1vSkqe&opi=89978449).

Some values for electric permittivity for certain mediums: air=copper=iron=1.

And finally, the **Electric field strength** is given by the formula:

$$\vec{E}=\frac{q}{4\pi\epsilon_0r^2}\frac{\bar{r}}{r}$$

## Charges. Density of charges.

Before we proceed to exercises we have to talk about the density of charges.

The density of charges is a n-th dimensional construct, meaning that we can have density of charges [way beyond the 3rd dimension](https://en.wikipedia.org/wiki/Four-current#:~:text=In%20special%20and%20general%20relativity,unit%20time%20per%20unit%20area.). However we, as engineers 😎 will work up to the 3rd dimension.

The domain(or medium) is the physical space in which the charges interact.
![Seminar 1 2024-03-04 20.14.51.excalidraw.svg](/Seminar%201%202024-03-04%2020.14.51.excalidraw.svg)

Now, the density of charge for the whole domain is given by the formula:

$$\rho_{Domain}=\sum_{k=1}^nq_k + \int_l\rho_ldl+\iint_sq_sds+\iiint_v\rho_vdl$$

# Exercises

Given the following charges and the coordinate system:

$$\displaylines{q_1=q_2=10^{-6}C\\2a=b=4cm}$$

![Seminar 1 2024-03-04 20.33.52.excalidraw.svg](/Seminar%201%202024-03-04%2020.33.52.excalidraw.svg)

And we need to measure the electric field strength at point D.

It is easy to see that the charges, along with the measuring point form a equilateral triangle. Thus, the angle between edges is π/3.

Let's draw the vector forces corresponding to the charges:
![Seminar 1 2024-03-04 21.02.23.excalidraw.svg](/Seminar%201%202024-03-04%2021.02.23.excalidraw.svg)

The vectors can be decomposed as such:

$$\displaylines{\vec{E}_1=\vec{E}_{1x}+\vec{E}_{1y}\\\vec{E}_2=\vec{E}_{2x}+\vec{E}_{2y}}$$

And having the angles from the properties of the equilateral triangle we can easily deduce a relation between the vector and its x and y components of the vectors:

$$
\displaylines{\vec{E}_{1y}= \vec{E}_1\sin\frac{\pi}{3}\\\vec{E}_{2y} = \vec{E}_2 \sin\frac{\pi}{3}\\
\vec{E}_{1x}= \vec{E}_1\cos\frac{\pi}{3}\\\vec{E}_{2x} = \vec{E}_2 \cos\frac{\pi}{3}\\
||\vec{E}_1||=||\vec{E}_2||}
$$

And we can see that $\vec{E}_{1y}=-\vec{E}_{2y}$ all the day and all the night. Thus, the sum of the vectors is:

$$\vec{E}_1+\vec{E}_2 = \vec{E}_1\cos\frac{\pi}{3} + \vec{E}_2\cos\frac{\pi}{3} = 2 \vec{E}_1\cos\frac{\pi}{3}$$

Finally, applying the formula for the Electric Field Strength:

$$\displaylines{\vec{E}=\frac{q}{4\pi\epsilon_0r^2}\frac{\bar{r}}{r} = \frac{10^{-6}}{4\pi\frac{1}{4\pi\space9\times10^9}16\times10^{-4}}\frac{4cm\space\vec{i}}{4cm}=\\\frac{10^{-2}\times10^{9}}{16}\vec{i}=\frac{10^7}{16}\vec{i}}$$

_note the negative sign that results from the orientation of the axis_

Done 🥳.
