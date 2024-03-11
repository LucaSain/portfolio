---
layout: "../../../layouts/PostLayout.astro"
---

Formulas for Electromagnetic charge:

$$\displaylines{\vec{E}_l=\frac{1}{4\pi \epsilon_0} \int{\frac{\rho_l\vec{r}dl}{r^3}} \\ \vec{E}_s=\frac{1}{4\pi \epsilon_0} \iint{\frac{\rho_s\vec{r}ds}{r^3}} \\ \vec{E}_v=\frac{1}{4\pi \epsilon_0} \iiint{\frac{\rho_v\vec{r}dv}{r^3}}}$$

1. Given the following domain, with a linear charge, calculate the Electric Field Strength at the point M:

![Seminar 2 2024-03-05 14.11.55.excalidraw.svg](/Seminar%202%202024-03-05%2014.11.55.excalidraw.svg)

$$\displaylines{\vec{E}(M)=E_x\vec{i}+E_y\vec{j}\\\vec{r}=r_x\vec{i}+r_y\vec{j}\\ r_x=OM=a\\r_y=OP=?}$$
To calculate OP, let's take P on the edge of the _cable_.

![Seminar 2 2024-03-08 09.51.39.excalidraw.svg](/Seminar%202%202024-03-08%2009.51.39.excalidraw.svg)

We can chose $\alpha \epsilon (\pi-\alpha_1,\alpha_2)$. Why?

<figure>
<video class="video" src="/AngleChange.mp4" title=
alt="AngleChange.mp4" controls/>
</figure>

When we integrate over alpha, we take all values of alpha and thus we can get the proper value of the Electric Field Strength. This is possible because the linear density of charge $\rho_l$ is constant.

Let's go back to $OP$:
$$OP=a\tan^{-1}\alpha$$
And r, the distance between the observation point $M$ and $P$ is:

$$r=\sqrt{a^2+a^2\tan^{-2}\alpha}=\sqrt{a^2+a^2\frac{\cos^2\alpha}{\sin^2 \alpha}} \Rightarrow r=\frac{a}{sin \alpha}$$

The formula asks for $dl$, a _small_ segment of the cable, with tendency to become a point. In this case it's enough to take the derivative of $OP$ with respect to $\alpha$:

$$\displaylines{\frac{dl}{d\alpha}=\frac{dOP}{d\alpha} \Leftrightarrow \frac{dl}{d\alpha} = \frac{ (a \tan^{-1}\alpha)}{d\alpha} \\ dl=-\frac{a}{sin^2\alpha}d\alpha}$$

Finally, we compute $E_x$ and $E_y$:

$$E_x=\frac{1}{4\pi \epsilon_0} \int_{\pi-\alpha_1}^{\alpha_2}{\frac{\rho_l\vec{r}dl}{r^3}}=\frac{1}{4\pi \epsilon_0}\int_{\pi-\alpha_1}^{\alpha_2}{\frac{-a\rho_l\frac{a}{\sin^2\alpha}}{\frac{a^3}{\sin^3\alpha}}d\alpha}$$

$$E_x=\frac{\rho_l}{4\pi\epsilon_0a}(\cos\alpha_2+\cos\alpha_1)$$

And for $E_y$, $dl$ is going to be dependent on $\tan\alpha$ rather than the cotangent. And we have the result:

$$E_y=\frac{\rho_l}{4\pi\epsilon_0a}(\sin\alpha_1-\sin\alpha_2)$$

Summing them up:

$$\vec{E}(M)=\frac{\rho_l}{4\pi\epsilon_0a}[(\cos\alpha_2+\cos\alpha_1)\vec{i}+(\sin\alpha_1-\sin\alpha_2)\vec{j}]$$

## More exercises

Infinite wire
![Seminar 2 2024-03-08 13.03.21.excalidraw.svg](/Seminar%202%202024-03-08%2013.03.21.excalidraw.svg)
In this case, we can assume that the left side is equal to the right side, thus $\alpha_1 = \alpha_2$. Further, it's easy to see that when the length of the cable $\to \infty$ then $\alpha \to 0$.

<figure>
<video class="video" src="/AngleToZero.mp4" title=
alt="AngleToZero.mp4" controls/>
</figure>

Finally, we can compute the electric field strength vector from the integral:

$$\displaylines{\vec{E}(M)=\frac{\rho_l}{4\pi\epsilon_0 a } [(\cos0+\cos0)\vec{i}+(\sin0-sin0)\vec{j}]\\\vec{E}(M) = \frac{2\rho_l}{4\pi\epsilon_0 a }}$$

Where $a$ is the distance from the measurement point to the cable. (in this case from $M$ to the origin).
The result is quite previsible, since the symmetry property of the cable is satisfied.
In the simulation we can see that the electric field has no horizontal components.

<figure>
<video class="video" src="/ElectricFieldExampleScene.mp4" title=
alt="ElectricFieldExampleScene.mp4" controls/>
</figure>

For a semi-finite wire, the approach is similar. We impose that only one of the two angles tends to zero. In my case, $\alpha_2 \to 0$ and the electric field strength will be:

$$\vec{E}(M)=\frac{\rho_l}{4\pi\epsilon_0a}[(\cos0+\cos\alpha_1)\vec{i}+(\sin\alpha_1-\sin0)\vec{j}]$$

$$\vec{E}(M)=\frac{\rho_l}{4\pi\epsilon_0a}[(1+\cos\alpha_1)\vec{i}+(\sin\alpha_1)\vec{j}]$$

**Symmetric wire.** Check [[FEE2/Course 1|Course 1]].
Compute $E(M)$:
After a quick observation we conclude that this is the case of an isosceles triangle.


![Seminar 2 2024-03-08 16.00.15.excalidraw.svg](/Seminar%202%202024-03-08%2016.00.15.excalidraw.svg)


Now, it's only a matter of replacing the angles with the same one in order to get the final equation.

$$\vec{E}(M)=\frac{\rho_l}{4\pi\epsilon_0a}[(\cos\alpha+\cos\alpha)\vec{i}+(\sin\alpha-\sin\alpha)\vec{j}]$$

Interesting enough, the $Oy$ component is reduced and we are left with only the $Ox$ component:

$$\vec{E}(M)=\frac{\rho_l\cos\alpha}{2\pi\epsilon_0a}\vec{i}$$

For the case when a>>>b (the computation point is very close to the wire), the angle both $a,\alpha \to 0$ and the result must be computed. We write $\cos\alpha$ and:

$$\vec{E}(M)=\lim_{a \to 0}(\frac{\rho_l\frac{b}{\sqrt{a^2+b^2}}}{2\pi\epsilon_0a})\vec{i}=\vec{0}$$

This tells us that in the middle of the wire, the electric field strength is 0. Keep in mind that this is happening only for a wire that has $\rho_l=ct$. And this is a equilibrium scenario as well. (ASK THE TEACHER ABOUT THIS)

Now for when b>>>a (the computation point is very far from the edges of wire), $a \to \infty, \alpha \to \frac{\pi}{2}$, and we can easily compute:

$$\displaylines{\vec{E}(M)=\frac{\rho_l}{4\pi\epsilon_0 a } [(\cos\frac{\pi}{2}+\cos\frac{\pi}{2})\vec{i}+(\sin\frac{\pi}{2}-sin\frac{\pi}{2})\vec{j}]\\\vec{E}(M) = 0}$$

And this is predictable as well, since the field cannot extend that far.

## Exercise

![Seminar 2 2024-03-05 14.40.20.excalidraw.svg](/Seminar%202%202024-03-05%2014.40.20.excalidraw.svg)

Compute $E(M)$.

$$\vec{E}(M)=E_x\vec{i}+E_y\vec{j}+E_z\vec{k}$$

Now we have to chose a point:
![Seminar 2 2024-03-05 14.45.23.excalidraw.svg](/Seminar%202%202024-03-05%2014.45.23.excalidraw.svg)

![Seminar 2 2024-03-05 14.46.59.excalidraw.svg](/Seminar%202%202024-03-05%2014.46.59.excalidraw.svg)

$$\displaylines{\alpha\epsilon(-\alpha_1,\alpha_2)\\ r_x=a\sin\alpha \\ r_y=a\cos\alpha\\ r_z=b}\Rightarrow r=\sqrt{a^2+b^2}$$

Before we proceed with the computations we need to find $dl$:

![Seminar 2 2024-03-08 22.36.16.excalidraw.svg](/Seminar%202%202024-03-08%2022.36.16.excalidraw.svg)

$$dl = a \space d\alpha$$
There are three components. In order to compile them we'll apply the formulas.

$$\displaylines{E_x=\int_{-\alpha_1}^{\alpha_2} \frac{\rho_l dl \vec{r}_x }{4 \pi \epsilon_0r^3} = \frac{a\rho_l}{4\pi\epsilon_0(a^2+b^2)^{3/2}} \int_{-\alpha_1}^{\alpha_2}\sin\alpha d\alpha \\ E_x= \frac{a\rho_l}{4\pi\epsilon_0(a^2+b^2)^{3/2}}(-\cos\alpha_2-\cos\alpha_1)}$$

For typing sake, we'll replace the fraction with constants with $k$:

$$E_x= -\frac{ak}{(a^2+b^2)^{3/2}}(\cos\alpha_2+\cos\alpha_1)$$

Similarly, for the $y$ direction we get:

$$E_y= \frac{ak}{(a^2+b^2)^{3/2}}(\sin\alpha_2-\sin\alpha_1)$$

And for the $z$ direction:

$$E_z= \frac{abk}{(a^2+b^2)^{3/2}}(\alpha_2+\alpha_1)$$

Now for the **entire circle**, we have a trick up our sleeve:
[Check this video](https://www.youtube.com/watch?v=iLDtok2Zl8I)
![Seminar 2 2024-03-09 09.57.20.excalidraw.svg](/Seminar%202%202024-03-09%2009.57.20.excalidraw.svg)

The problem is symmetric. Thus, the $Ox$ and $Oy$ components are being reduced and we are left with only the $Oz$ component. Let's consider a very small segment, with tendency of becoming a line, segments has the charge $dq$:

$$dE_z=\frac{dq}{4\pi\epsilon_0r^2}\cos\alpha = \frac{kdq}{a^2+b^2}\frac{b}{\sqrt{a^2+b^2}}$$

Summing everything up with an integral:

$$\displaylines{\int dE_z = \frac{kb}{(a^2+b^2)^{3/2}} \int dq \Leftrightarrow \\ E_z = \frac{kbQ}{(a^2+b^2)^{3/2}}} $$

Now, we'd like to express $E_z$ in terms of linear density of charge rather than in terms of charge.

$$\frac{Q}{2\pi r} = \rho_l \Leftrightarrow Q = \rho_l 2\pi r$$

$$E_z = \frac{2kab\rho_l \pi}{(a^2+b^2)^{3/2}}$$

## The disk

![Seminar 2 2024-03-05 15.22.36.excalidraw.svg](/Seminar%202%202024-03-05%2015.22.36.excalidraw.svg)

$$\displaylines{\vec{E}=\iint\frac{\rho_sds\bar{r}}{4\pi\epsilon_0r^3}\\ \alpha = \epsilon[0,2\pi]\\R\epsilon[0,a]\\ \\  \vec{E}(M)=E_x\vec{i}+E_y\vec{j}+E_z\vec{k} \\ \vec{r}=r_x\vec{i}+r_y\vec{j}+r_z\vec{k}\\ \\ r_x=R\sin\alpha \\ r_y=R\cos\alpha \\ r_z=b \\ ds=Rd\alpha}$$

![Seminar 2 2024-03-05 15.30.00.excalidraw.svg](/Seminar%202%202024-03-05%2015.30.00.excalidraw.svg)

Writing the integral for $E_x$:

$$E_x=\iint \frac{\rho_sdRdxR\sin\alpha}{4\pi\epsilon_0(R^2+b^2)^\frac{3}{2}} = \frac{\rho_s}{4\pi\epsilon_0}\int_0^{2\pi}\sin xdx \int_0^\alpha\frac{R^2dR}{(R^2+b^2)^\frac{3}{2}}$$

$$E_y=\frac{\rho_s}{4\pi\epsilon_0}\int_0^{2\pi}\cos xdx \int_0^\alpha\frac{R^2dR}{(R^2+b^2)^\frac{3}{2}}$$

$$E_y=\frac{\rho_s}{4\pi\epsilon_0}\int_0^{2\pi}d\alpha\int_0^\alpha\frac{R^2dR}{(R^2+b^2)^\frac{3}{2}}$$

## Homework:

The donut.


Recap area and volume
