---
layout: "../../../layouts/PostLayout.astro"
---


# Coulomb's law. Coulomb's Force. Electric field strength. Coulomb's integrals.

## Coulomb's law
The electric force exerted between two point-like charges $q_1$ and $q_2$ placed at the distance $r$ in vacuum is directly proportional to the product of the two charges and inverse proportional to the square of the distance.

![Course 1 2024-03-06 10.25.59.excalidraw.svg](/Course%201%202024-03-06%2010.25.59.excalidraw.svg)


$$\displaylines{F=k\frac{|q_1 q_2|}{r^2}\\k=\frac{1}{4\pi\epsilon_0} \approx 9\times10^9\frac{Nm^2}{c^2}}$$

The electric permittivity of void:$\epsilon_0=8,865\times10^{-12}F/m$.
For more notes about the electric permittivity check: [FEE2/Seminar 1](/courses/FEE2/Seminar%201)

The direction of Coulomb's force is on the line connecting the two charges and the orientation is is given by the following rule:
![Course 1 2024-03-06 10.36.11.excalidraw.svg](/Course%201%202024-03-06%2010.36.11.excalidraw.svg)

$$|\vec{F}_{21}|=|\vec{F}_{12}|$$

Now, for a charge exercised by one charge, the electric field strength exerted by a charge $Q$ is a vector with a size that's directly proportional to the charge and inverse proportional to the square of the distance, with a radial direction all around the space and with orientation:
+ Positive charge: the direction of the electric field is outwards
+ Negative charge: the direction of the electric field is inwards

![Course 1 2024-03-06 10.40.57.excalidraw.svg](/Course%201%202024-03-06%2010.40.57.excalidraw.svg)

$$\vec{E}_0 (\text{vacuum})=\frac{\vec{F}}{q}=\frac{Q}{4\pi\epsilon_0r^2}\frac{\vec{r}}{r}$$

This structure is called an _electric dipole_:

![Course 1 2024-03-06 10.45.06.excalidraw.svg](/Course%201%202024-03-06%2010.45.06.excalidraw.svg)

Here's an animation on how the electric field looks live
The vector can be decomposed as:


$$\vec{E}=E_x\vec{i}+ E_y\vec{j}+E_z\vec{k}$$


![Course 1 2024-03-06 10.48.01.excalidraw.svg](/Course%201%202024-03-06%2010.48.01.excalidraw.svg)


For scalar products check [FEE2/Seminar 1](/courses/FEE2/Seminar%201).

Electric charges classification:

| Sign     | Name    | Unit    |
| -------- | ------- | ------- |
| $\rho_l$ | linear  | $c/m$   |
| $\rho_s$ | surface | $c/m^2$ |
| $\rho_v$ | volume  | $c/m^3$ |
If $\rho_x$ is constant, just multiply the constants by the length, volume and surface to get the charge of the domain.

$$\displaylines{Q_l=\int{\frac{\rho_l\vec{r}dl}{r^3}} \\ Q_s=\iint{\frac{\rho_s\vec{r}ds}{r^3}} \\ Q_v=\iiint{\frac{\rho_v\vec{r}dv}{r^3}}}$$

$$\displaylines{\vec{E}_l=\frac{1}{4\pi \epsilon_0} \int{\frac{\rho_l\vec{r}dl}{r^3}} \\ \vec{E}_s=\frac{1}{4\pi \epsilon_0} \iint{\frac{\rho_s\vec{r}ds}{r^3}} \\ \vec{E}_v=\frac{1}{4\pi \epsilon_0} \iiint{\frac{\rho_v\vec{r}dv}{r^3}}}$$


### Examples
[FEE2/Seminar 1](/courses/FEE2/Seminar%201) and [FEE2/Seminar 2](/courses/FEE2/Seminar%202).

![Course 1 2024-03-06 11.20.04.excalidraw.svg](/Course%201%202024-03-06%2011.20.04.excalidraw.svg)


$$\displaylines{q1=q2 \\ E_{P1}=\frac{2q}{4\pi\epsilon_0a^2} \\ E_{1P2}=\frac{q}{4\pi\epsilon_0a^2} \Rightarrow \vec{E}_{1P2}=E_{1P2}\times-\vec{i} \\ E_{2P2}=\frac{q}{4\pi\epsilon_09a^2} \Rightarrow \vec{E}_{2P2}=E_{1P2}\times\vec{i}}$$



![Course 1 2024-03-06 11.28.30.excalidraw.svg](/Course%201%202024-03-06%2011.28.30.excalidraw.svg)


$$\displaylines{E_{1x}=E\cos\alpha \\ E_{1y}=E\sin\alpha \\E_{2x}=E\cos\alpha \\E_{2y}=E\sin\alpha \\ E_x=2\frac{qa}{4\pi\epsilon_0(x^2+a^2)^\frac{3}{2}}\\E_y=0}$$


_Very easy calculation_
![Course 1 2024-03-06 11.34.33.excalidraw.svg](/Course%201%202024-03-06%2011.34.33.excalidraw.svg)


Let's write the equations, since the cable is a line, a sum of points we apply the integral:


$$\displaylines{\rho_l=ct\\\rho_l=\frac{dQ}{dy}=\frac{Q}{2a}\\E=\int_{-a}^a dE \\ E_x=\int_{-a}^a dE_x \\ E_y=\int_{-a}^a dE_y}$$


Now since $dQ$ is similar to a point we can write:


$$\\ dE=\frac{dQ}{4\pi\epsilon_0r^2}$$


Now let's compute $r$:


$$\displaylines{r=\sqrt{y^2+x^2}\\ dE_x=dE\cos\alpha=dE\frac{x}{r} \\ dE_y=dE\cos\alpha=dE\frac{y}{r}}$$


Further:


$$\displaylines{dE_x=\frac{Qdyx}{2a4\pi\epsilon_0r^3}=\frac{xQdy}{8\pi a \epsilon_0(x^2+y^2)^{3/2}}\\ dE_y=\frac{yQdy}{8\pi\epsilon_0(x^2 +y^2)^{3/2}}}$$



And since the problem is symmetric we can conclude that:


$$\displaylines{E_y=0\\E_x=\int_0^adE_x=\frac{xQ}{4\pi a\epsilon_0 }\int_0^a\frac{dy}{(x^2+y^2)^{3/2}}}$$


_We solve the last integral by integrating by parts and after simplifying the terms:_


$$E_x=\frac{Q}{4\pi \epsilon_0 }\frac{1}{x\sqrt{x^2+a^2}}$$


Or written 🥐 in a more comprehensive way (check [FEE2/Seminar 2](/courses/FEE2/Seminar%202)):


$$E_x=\frac{\rho_l \cos\alpha}{2\pi\epsilon_0a}$$



HW:solve the last integral through a different method