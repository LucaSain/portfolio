---
layout: "../../../layouts/PostLayout.astro"
---

Calculus is an extension of the *Euclidian Geometry*
*The area of a rect with the l of a irrational number*


**Theorem**


$$r_n \epsilon Q \space r_n \rightarrow x \\ \rho_n \epsilon Q \space \rho_n \rightarrow y  \space \space r_n \cdot \rho_n \rightarrow xy  $$

# The area under the graph of a function

The fundamental theorem of calculus. The theorem of Leibniz-Newton.
![Course 1 2024-02-29 08.28.42.excalidraw](/Course%201%202024-02-29%2008.28.42.excalidraw.svg)
$$A=F(b)-F(a), F'=f$$
$$\int_a^bf(x)dx=A$$

## Proof

![Course 1 2024-02-29 08.33.38.excalidraw](/Course%201%202024-02-29%2008.33.38.excalidraw.svg)
Newton looked at the derivative of the Area of $f(x)$.
The area of the rectangle is: $$(y-x)*m\le A(y) - A(x)\le M(y-x) \\ m \le \frac{A(y) -A(x)}{y-x}\le M \\ \lim_{x \to y}\frac{A(y)-A(x)}{y-x}=A'(y)$$

## The Riemann integral

$$f:[a,b] \rightarrow R $$
![Course 1 2024-02-29 09.04.31.excalidraw](/Course%201%202024-02-29%2009.04.31.excalidraw.svg)
*Fermat found the formula for the area of $x^\alpha$ but the formula for $x^{-1}$.*
A division:$$\Delta = division[a,b] \quad a=x_0\lt x_1 \lt x_2 \lt ... \lt x_n = b  $$
$$||\Delta|| = \max_{i=1,n}(x_i-x_{i-1}) \\ \xi_i \epsilon [x_{i-1},x_i] \quad intermediary \space point  \\ \sum_{i=0}^n{f(\xi_i)(x_i-x_{i-1})}=S(f,\Delta,\xi_i)$$

**Definition**
$f$ is Riemann integrable on the interval $[a,b]$ if $\exists I \epsilon R$ with $\forall \xi \gt 0, \exists \delta_\xi \space such \space that \space \forall \Delta \space with ||\Delta|| \lt \delta_{\xi_i} \space and  \space \forall(\xi_i)$

### The fundamental theorem of calculus

$$f:[a,b] \rightarrow R \quad \int_a^bf(x)dx = F(b)-F(a), F'=f$$
The set of all primitives of function f is:
$$\int f(x)dx = \set{F| F'=f}$$
*We must know the table of primitives*

**Integration by parts**
$$\int_a^buv'=uv\rvert_a^b - \int_a^bu'v$$
**Compositie functions**
$$\int_a^bf(\phi(t))\cdot\phi'(x)dx = F(\phi(b))-F(\phi(a))$$

We are going to define the generalisations of this formulas.

### Improper Riemann integrals

<figure>
<img src="/Course 1 2024-02-29 09.28.29.excalidraw.svg" title="wikilink"
alt="Course12024-02-2909.28.29.excalidraw" />

</figure>

Compute the area $\ln:(0,1] \rightarrow R$
$$
A(a)=\int_\epsilon^1|ln(x)|dx = -\int_\epsilon^1\ln(x)dx = -(-\epsilon\ln(\epsilon)-1+\epsilon), \epsilon \to 0 = 1
$$
Compute the area $e^x$. The area is still 1 👌.
Here's an animation to illustrate the Riemann Summation:
![Excalidraw/CreateCircle.mp4](/CreateCircle.mp4 "wikilink")

**Definition**
$$f \rightarrow R, b \space \epsilon \space R\cup\set{\infty} \\ \int_a^bf(x)dx \space \text{is  convergent if} \\
\lim_{{u \to b} \\ u \lt b} \int_a^bf(x)dx \space \epsilon \space \Re \\ 
\text{if yes} \\ 
\int_a^bf(x)dx=\lim_{{u \to b} \\ u<b} \int_a^uf(x)dx
$$

The analogy with the theory of series goes **deeper** than just the formulations
For example:
$$\int_a^\infty \frac{1}{x^2} dx \quad (a>0) \space C \Rightarrow \alpha >1$$
$$\int_1^{\infty}\frac{1}{x^2} \mathit{is \space convergent}$$
$$\int_1^\infty \frac{1}{x} \mathit{ \space is \space divergent}  $$
**Tests of convergence**
let $\int_a^bf(x) \quad f \ge 0  \space(at \space b)_{b \space \epsilon \space \Re} \quad \mathit{if} \space (b-x)^\alpha f(x)\epsilon(0,\infty)$

## Tests of convergence recap

| Name                                 | Formulae                                       | Convergence                                                                                                                                                      | Divergence                   |
|--------------------------------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| Ratio Test                           | $\lim_{n \to \infty}\|\frac{a_{n+1}}{a_n}=r\|$ | $r<1$                                                                                                                                                            | $r>1$                        |
| Comparison Test                      | $f \lt g$                                      | $g \space \mathit{converges}$                                                                                                                                    | $f \space \mathit{diverges}$ |
| Leibniz Test (absolutely convergent) | $\sum_{n=1}^\infty (-1)^n a_n$                 | $a_n >0 \space \\ \lim_{n \to \infty} a_n=0,\\ and \space  \forall n, a_{n+1}\le a_n$                                                             | \-                           |
| Stolz-Cesaro Theorem                 | $\lim_{n \to \infty}\frac{a_n}{b_n}=l$         | $(b_n)_{n \ge 1} \\ \mathit{strictly \space monotone \space \\ and \space divergent \space}$ $lim_{n \to \infty} \frac{a_{n+1}-a_n}{b_{n+1}-b{n}}=l$ | \-                           |
| Riemann series/ Harmonic series      | $x \to \infty$                                 | $\frac{-1}{x}$                                                                                                                                                   | $\frac{1}{x}$                |

## New tests of convergence

The integral test:
$$if \space f \space is \space a \space monotone \space decreasing \space and\\ \space \int_1^\infty f(x)dx = \lim_{t \to \infty} \int_1^t f(x)dx \lt \infty \\ \mathit{the \space series \space converges} \\ \text{otherwise, if the integral diverge, the series diverge as well}$$

## Algorithm

1.  Write down the integral and the improper integral notation.
2.  Compute the integral. And calculate the limit.
3.  If the limit exists (in $R$), we say that the integral **converges** and we can proceed further.
4.  If the limit is $\pm\infty$, we say that the integral **diverges**.
5.  If the limit is uncertain, we try to calculate it with another method.

## Exercises:

Calculate the integral and determine the convergence of:
$$\int_0^1\frac{1}{\sqrt{x}}dx$$
1. Let's write down the integral:$$\int_0^1\frac{1}{\sqrt{x}}dx=\lim_{t \to 0}\int_t^1\frac{1}{\sqrt{x}}dx=\lim_{t \to 0}\int_t^1x^{-\frac{1}{2}}dx$$
2. And let's compute it the usual way:$$\lim_{t \to 0}(2x^{\frac{1}{2}}\rvert_t^1)=2\lim_{t \to 0}(1^{\frac{1}{2}}-t^{\frac{1}{2}})=2$$
3. And the limit is indeed in $R$. Thus the integral is **convergent**.
Here's a https://www.youtube.com/watch?v=L16yPgIrIxU for this integral.

Now, for another one:$$\int_1^\infty\frac{1}{\sqrt{x}}dx$$
Note that this integral is quite similar, but since the domain differs we can foresee a different result. Straight to the computation we have:$$2\lim_{t \to \infty}(1^{\frac{1}{2}}-t^{\frac{1}{2}})=-\infty$$
The limit is not in $R$. The integral is divergent.

For the last one:$$\int_1^\infty\frac{x+1}{(x^2+2)\sqrt{x}}dx$$
i don't f know:)))
