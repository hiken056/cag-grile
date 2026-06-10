# Module 2: Graphical Standards & GKS (Graphical Kernel System)

Welcome to Module 2! Today we are looking at **GKS (Graphical Kernel System)**, an international ISO standard (1985) created so programmers wouldn't have to rewrite their graphics code for every new screen or printer. GKS is the "middleman" between the software (like AutoCAD) and the hardware (your monitor).

---

## 1. The 6 Graphical Primitives: The "Alphabet" of GKS

Primitives are the basic building blocks used to draw everything on the screen. GKS uses exactly 6 primitives:

1. **Polyline (Linia franta)**: A sequence of connected line segments.
2. **Polymarker (Polimarcaj)**: A set of points marked by a specific symbol (e.g., a cross, square, or star).
3. **Text (Textul)**: An array of characters.
4. **Fill Area (Zona compacta)**: A colored or hatched polygon.
5. **Cell Array (Sablonul)**: A grid of colored cells (like a pixel image or bitmap).
6. **Generalized Drawing Primitive (GDP)**: Used for non-standard geometric shapes (like perfect circles or ellipses) so they can still share standard attributes (like line thickness or color).

> [!TIP]
> **Exam Connection (Q36):**
> *   *Question:* Which of the following GKS primitives are sufficient for industrial technical drawings?
> *   *Logic:* In old-school engineering blueprints, you only really need to draw lines (Polyline), mark points/centers (Polymarker), and write dimensions/labels (Text). You don't need complex shading or pixel grids for a technical draft.
> *   *Correct Answer:* **Text, Polyline, Polymarker (c, d, f)**

🔍 **Visual Search Suggestion:**
> *Search for **"GKS graphical primitives"** or simply **"CAD polymarker vs polyline"** to visually see how these basic vector blocks combine to form complex drawings. Seeing the difference between a `polyline` and a `fill area` will lock this into your memory.*

---

## 2. Segments: Grouping Primitives

If you draw a car using 500 polylines, you don't want to move each line individually. GKS uses **Segments** to group logically related primitives. A segment has a name and attributes (like visibility).

There is a critical difference between an **Open Segment** and a **Closed Segment**:

*   **Open Segment**: You are currently inside it, "recording" new drawing commands. 
    *   *What you CAN do:* Add new primitives.
    *   *What you CANNOT do:* Apply geometric transformations (move/scale/rotate) or modify its global attributes. It's not finished yet!
*   **Closed Segment**: The recording is stopped.
    *   *What you CAN do:* Apply geometric transformations, modify its attributes, or change where it is displayed.
    *   *What you CANNOT do:* Add new primitives.

> [!IMPORTANT]
> **Exam Connection (Q22):**
> *   *Question:* Which operations can be performed on an **open** GKS segment?
> *   *Logic:* Because the segment is "open" (currently being built), we *can* add new primitives. Conversely, because it is not finished, we *cannot* apply geometric transformations to it yet. Both of these statements correctly describe the constraints of an open segment.
> *   *Correct Answer:* **b (New primitives can be added) & d (Geometric transformations cannot be applied)**

---

## 3. Coordinate Systems & Transformations

GKS uses a 3-step pipeline to get a point from the virtual 3D world onto your physical screen.

### The 3 Coordinate Systems:
1.  **SCR (Sistem de Coordonate ale Reprezentarii)**: Also known as *World Coordinates (WC)*. This is the real-world math space where your building might be 100 meters wide.
2.  **SCN (Sistem de Coordonate Normalizate)**: Also known as *Normalized Device Coordinates (NDC)*. This is a generic, unitless space (usually 0 to 1) that acts as a universal middle-ground.
3.  **SCD (Sistem de Coordonate ale Dispozitivului)**: Also known as *Device Coordinates (DC)*. These are the literal pixels on your specific monitor.

### The 2 Major Transformations:
1.  **Window/Viewport Transformation (Transformarea "fereastra/vizor")**: 
    *   Converts from the real world to the generic middle ground: **SCR $\rightarrow$ SCN**.
2.  **Workstation Transformation (Transformarea "statie de lucru")**: 
    *   Converts from the generic middle ground to your specific monitor: **SCN $\rightarrow$ SCD**.

> [!TIP]
> **Exam Connection (Q32 & Q33):**
> *   *Q32 (Window/Viewport)*: Converts **SCR $\rightarrow$ SCN (f)**
> *   *Q33 (Workstation)*: Converts **SCN $\rightarrow$ SCD (e)**

🔍 **Visual Search Suggestion:**
> *Search for **"Computer graphics Window to Viewport transformation"**. You will see a beautiful diagram showing a large world (Window/SCR) being mapped into a normalized square (Viewport/SCN), which is then mapped to the physical screen pixels (SCD). This visual makes the 3-step pipeline instantly click.*

---

## 4. The GKS State Machine

Because GKS is a software kernel, it operates as a "finite state machine"—meaning it has specific modes it can be in, and certain commands only work in certain modes.

**GKS has exactly 5 operational states:**
1.  **GKS Closed**: The system is offline.
2.  **GKS Open**: The software is running, but no monitor/workstation is connected.
3.  **Workstation Open**: A monitor is connected.
4.  **Workstation Active**: The monitor is actively receiving drawing commands.
5.  **Segment Open**: A segment is currently open and accepting primitives.

> [!TIP]
> **Exam Connection (Q37):**
> *   *Question:* Seen as a finite state machine, how many operational states does GKS have?
> *   *Correct Answer:* **5 (b)**

🔍 **Visual Search Suggestion:**
> *Search for **"GKS state machine diagram"**. You will see a flowchart showing how the system moves from Closed $\rightarrow$ Open $\rightarrow$ WS Open $\rightarrow$ WS Active $\rightarrow$ Segment Open. It looks just like a staircase!*

---

## Summary of Module 2
You now understand how the GKS standard builds drawings using 6 basic primitives (and only 3 are needed for technical drafts!). You know that an open segment is "recording" and cannot be transformed, while a closed segment is "finished" and cannot receive new lines. Finally, you understand the 3-step coordinate pipeline (SCR $\rightarrow$ SCN $\rightarrow$ SCD) and the 5 operational states of the GKS kernel.

If the logic feels solid, let me know, and we can jump into the exciting world of automated factories in **Module 3: CIM & Industry 4.0**!
