# Module 1: Computational Geometry & Coordinate Transformations

Welcome to Module 1! In this module, we explore how CAD software translates physical objects into numbers and matrices that a computer can rapidly process. Let's build your engineering intuition so you don't have to memorize formulas.

## 1. The Spaces: Where does the geometry live?

When you model an object, you are working in two primary spaces:

*   **Definition Space (DS)**: Think of this as the absolute, fixed universe where your entire project lives. It is a 3D Euclidean space with a fixed Cartesian coordinate system $(X, Y, Z)$.
*   **Model Space (MS)**: This is a *temporary*, local coordinate system $(X_T, Y_T, Z_T)$ that you attach to the specific object you are currently drawing. 

**Why do we need a Model Space?** 
Imagine you are drawing a hole on the slanted roof of a 3D house. Doing the math in the absolute Definition Space $(X,Y,Z)$ is a nightmare. Instead, you create a temporary Model Space where the $X_T, Y_T$ plane lies perfectly flat on the slanted roof. Now, the hole is just a simple 2D circle with $Z_T = 0$. You've reduced a complex 3D problem into a simple 2D one!

> [!TIP]
> **Exam Connection (Q30):**
> *   *Question:* The Definition Space (SD)...
> *   *Logic:* It is fixed relative to the model (b) and uses the exact same unit of measurement as the Model Space (a). It is *not* temporary; the Model Space is the temporary one.
> *   *Correct Answer:* **a, b**

---

## 2. Point Representation: The Magic of Homogeneous Coordinates

A point in 3D space naturally has 3 coordinates: $P = [X_T, Y_T, Z_T]$. This is called **natural coordinates** (a $1\times3$ matrix).

However, computer graphics relies heavily on **Homogeneous Coordinates**, which adds a 4th dimension: $P = [X_T, Y_T, Z_T, 1]$ (a $1\times4$ matrix).

**Why do we add a 1?**
In computer graphics, we move objects by multiplying their coordinates by a matrix. 
*   *Scaling* and *Rotation* can easily be done by multiplying a $1\times3$ vector by a $3\times3$ matrix.
*   *Translation* (moving an object), however, requires *adding* a vector, not multiplying. 
By adding the dummy "1", we can use a $4\times4$ matrix to perform scaling, rotation, AND translation using *only* matrix multiplication. This means graphics cards can process millions of transformations in parallel at lightning speed!

> [!TIP]
> **Exam Connection (Q34):**
> *   *Question:* A point can be represented by...
> *   *Logic:* It can use natural coordinates ($1\times3$ matrix) or homogeneous coordinates ($1\times4$ matrix).
> *   *Correct Answer:* **a, b**

---

## 3. Curves: From Simple Arcs to Complex Splines

### Conic Arcs
Conic arcs are curves derived from intersecting a cone with a plane: **ellipse, parabola, and hyperbola**. (A circle is technically a special ellipse).
They are defined by the general quadratic equation in a 2D plane:
$$A \cdot X_T^2 + B \cdot X_T \cdot Y_T + C \cdot Y_T^2 + D \cdot X_T + E \cdot Y_T + F = 0$$

To determine which shape the equation represents, the software computes three determinants:
*   $Q_1 = \text{Determinant of the } 3\times3 \text{ coefficient matrix}$
*   $Q_2 = \text{Determinant of the top-left } 2\times2 \text{ matrix }$
*   $Q_3 = A + C$

**The Classification Logic:**
*   **Ellipse**: $Q_2 > 0$ and $Q_1 \cdot Q_3 < 0$
*   **Parabola**: $Q_2 = 0$ and $Q_1 \neq 0$
*   **Hyperbola**: $Q_2 < 0$ and $Q_1 \neq 0$

> [!TIP]
> **Exam Connection (Q38):**
> *   *Question:* A conic arc can come from a...
> *   *Correct Answer:* **Hyperbola, Parabola, Ellipse (a, d, f)**

### Parametric Spline Curves
When CAD needs to draw a smooth, freeform curve through a set of given points (interruption points), it uses parametric splines.
*   **What are they?** They are sequences of polynomial segments (usually of degree 1, 2, or 3) pieced together.
*   **Why parametric?** Instead of $y = f(x)$ (which fails if the curve loops back on itself and has two $y$ values for one $x$), we use a parameter $u$ (representing the distance along the curve). So we have $X(u)$, $Y(u)$, and $Z(u)$. 
*   **Fictitious Segments**: To define the tangency/derivatives at the very end of the curve without needing extra complex math, the system creates an invisible "fictitious" polynomial segment ($N+1$) at the end.

> [!TIP]
> **Exam Connection (Q28):**
> *   *Question:* The polynomial defining a parameterized spline curve can be of degree...
> *   *Logic:* CAD systems use linear (degree 1), quadratic (degree 2), or cubic (degree 3) polynomials for these segments.
> *   *Correct Answer:* **1, 2, 3 (b, c, d)**

---

## 4. Surfaces in 3D

How do we build 3D skins (surfaces)? CAD uses several methods based on curves:
1.  **Regular (Ruled) Surface**: Imagine two separate curves in space. Draw straight lines connecting points from curve A to curve B. This creates a ruled surface.
2.  **Surface of Revolution**: Take an axis of rotation (a straight line), a generator curve, and sweep the curve around the axis between a start angle and an end angle (e.g., making a vase or a tire).
3.  **Tabulated Cylinder**: Take a directive line (a curve) and sweep a straight line segment (generatrix) along it, keeping the segment parallel to its original orientation. 

> [!TIP]
> **Exam Connection (Q29):**
> *   *Question:* An axis of rotation (a line), a generator, and two rotation angles (start/final) define a surface of...
> *   *Correct Answer:* **Revolution (b)**

---

## 5. Matrix Transformations

Because we use homogeneous coordinates ($1\times4$ matrices), we can define a standard $4\times4$ matrix for every type of movement. 
*   **Translation**: Modifies the 4th column.
*   **Scaling**: Modifies the main diagonal.
*   **Rotation**: Uses sine and cosine functions in a $2\times2$ subgrid depending on the axis of rotation.

**Composite Transformations:**
Suppose you want to rotate an object around a specific point $C$ (not the origin $O$). You cannot do it directly. You must:
1.  **Translate** the object so point $C$ moves to the origin $O$ (Matrix $T_{CC}$).
2.  **Rotate** the object around the origin (Matrix $R$).
3.  **Translate** the object back so the origin moves back to point $C$ (Matrix $T_{CC}^{-1}$).
The final operation is the product of these matrices!

---

## 6. Projections: Looking at 3D on a 2D Screen

To display a 3D model on your flat monitor, the software must "project" the 3D points onto a 2D projection plane. The behavior of the projection depends entirely on the **Center of Projection** (the "camera" or the "eye").

*   **Central (Conic) Projection**: 
    *   The center of projection is at a **finite distance** from the object.
    *   Projection lines converge like a cone toward the center.
    *   This creates *perspective* (objects further away look smaller). It mimics the human eye.
*   **Parallel (Cylindrical) Projection**:
    *   The center of projection is infinitely far away (at an **infinite distance**).
    *   Projection lines are perfectly parallel (like a cylinder).
    *   *Orthogonal*: The projection plane is perpendicular to the projection lines (e.g., standard Top, Front, Side views in engineering drafts).
    *   *Axonometric*: The projection plane is tilted (e.g., Isometric views).

> [!TIP]
> **Exam Connection (Q23 & Q24):**
> *   *Q23*: A projection where the center of projection is at a **finite distance** is called... -> **Central, Conic (a, c)**
> *   *Q24*: A projection where the center of projection is at an **infinite distance** is called... -> **Cylindrical, Parallel (b, d)**

---

## Summary of Module 1
You now understand that CAD software converts objects into temporary coordinate systems to simplify math, uses $1\times4$ homogeneous coordinates to perform lightning-fast matrix transformations, builds complex curves using parametric polynomials and conics invariants, and projects 3D models onto your 2D screen using either finite (central) or infinite (parallel) projection centers.
