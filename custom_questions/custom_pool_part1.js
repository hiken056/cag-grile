const customPoolPart1 = [
  {
    q: "Which of the following describes a 'synthetic' curve?",
    opts: [{t:"A perfect mathematical circle", c:false}, {t:"A straight line equation", c:false}, {t:"A Bezier or Spline curve defined by control points", c:true}, {t:"A conic arc section", c:false}],
    exp: "<b>Concept: Curves</b><br>Synthetic curves (like Bezier and B-splines) are complex curves built by algorithms using control points because a single simple analytical equation cannot perfectly trace complex, organic shapes. Analytical curves are simple mathematical equations (circles, lines, conics)."
  },
  {
    q: "In CAD systems, what is the primary purpose of 'trimming'?",
    opts: [{t:"To change the color of a line", c:false}, {t:"To remove sections of an object extending beyond a cutting boundary", c:true}, {t:"To extrude a 2D profile into 3D", c:false}, {t:"To add thickness to a polyline", c:false}],
    exp: "<b>Concept: 2D Operations</b><br>Trimming is a fundamental editing tool used to cut away excess geometry that crosses an intersection or boundary. Any geometric entity (point, line, arc, circle) can act as the 'knife' edge."
  },
  {
    q: "What defines an 'extrusion' operation in 3D modeling?",
    opts: [{t:"Sweeping a 2D profile along a straight linear trajectory", c:true}, {t:"Revolving a profile around an axis", c:false}, {t:"Connecting two different cross-sections (lofting)", c:false}, {t:"Subtracting one solid from another", c:false}],
    exp: "<b>Concept: Sweeping Operations</b><br>Extrusion is the simplest form of sweeping. You take a flat 2D shape (the generator) and pull it in a straight line (the linear trajectory) to give it height and volume."
  },
  {
    q: "Which Boolean operation is used to keep ONLY the overlapping volume of two intersecting solids?",
    opts: [{t:"Union", c:false}, {t:"Subtraction / Difference", c:false}, {t:"Intersection", c:true}, {t:"Sweeping", c:false}],
    exp: "<b>Concept: Constructive Solid Geometry (CSG)</b><br>Intersection is the Boolean operation that calculates where two solids overlap and deletes everything else, leaving only the shared volume."
  },
  {
    q: "What is the primary characteristic of a B-Rep (Boundary Representation) model?",
    opts: [{t:"It relies on adding basic solid primitives together", c:false}, {t:"It defines the solid volume exclusively by its outer topological shell (faces, edges, vertices)", c:true}, {t:"It has zero internal volume", c:false}, {t:"It is only used for 2D drafting", c:false}],
    exp: "<b>Concept: 3D Modeling Types</b><br>B-Rep doesn't 'build' with blocks like CSG. Instead, it carefully stitches together a mathematical, watertight 'skin' or boundary. If the skin is perfectly closed (defined by faces, edges, and nodes), the computer recognizes the space inside as solid."
  },
  {
    q: "Why is 'solid modeling' superior to 'surface modeling' in mechanical engineering?",
    opts: [{t:"Surface models look prettier", c:false}, {t:"Solid models contain volumetric data allowing mass property calculations (weight, center of gravity)", c:true}, {t:"Solid models process much faster on older computers", c:false}, {t:"Surface models cannot be rendered", c:false}],
    exp: "<b>Concept: Solids vs Surfaces</b><br>Because solid models differentiate the 'inside' from the 'outside', you can assign a material density to them. The software can then calculate exactly how much the part will weigh and where its balance point is, which is impossible with an empty surface shell."
  },
  {
    q: "A cyber-physical system (CPS) is a defining technology of which industrial era?",
    opts: [{t:"First Industrial Revolution", c:false}, {t:"Second Industrial Revolution", c:false}, {t:"Third Industrial Revolution", c:false}, {t:"Fourth Industrial Revolution (Industry 4.0)", c:true}],
    exp: "<b>Concept: Industry 4.0</b><br>CPS involves connecting physical manufacturing machines to the internet and digital networks, allowing them to communicate and be controlled remotely. This IoT (Internet of Things) approach is the hallmark of Industry 4.0."
  },
  {
    q: "In GKS, what does the 'GKS Closed' state imply?",
    opts: [{t:"The system is actively drawing", c:false}, {t:"The system is fully initialized and waiting for primitives", c:false}, {t:"The graphical system is completely shut down and inactive", c:true}, {t:"A segment is being recorded", c:false}],
    exp: "<b>Concept: GKS State Machine</b><br>'GKS Closed' is the default, inactive state before the system is booted up, or after it has been safely shut down. You cannot draw or open workstations in this state."
  },
  {
    q: "What coordinate matrix size is required for homogeneous transformations in 3D?",
    opts: [{t:"1x2", c:false}, {t:"1x3", c:false}, {t:"1x4", c:true}, {t:"2x2", c:false}],
    exp: "<b>Concept: Computer Graphics Math</b><br>Homogeneous coordinates add a dummy 4th dimension 'W' [X, Y, Z, 1] to a 3D point. This 1x4 matrix allows complex transformations (like translation and perspective scaling) to be executed using simple matrix multiplication."
  },
  {
    q: "A cylindrical/parallel projection is characterized by:",
    opts: [{t:"The projection rays converging at a focal point", c:false}, {t:"The center of projection being at a finite distance", c:false}, {t:"The center of projection being at an infinite distance", c:true}, {t:"Heavy perspective distortion", c:false}],
    exp: "<b>Concept: 3D to 2D Projections</b><br>In a cylindrical (or parallel) projection, the 'camera' or light source is infinitely far away. Because of this, the rays never spread out; they remain perfectly parallel. This creates isometric drawings where objects don't shrink in the distance."
  },
  {
    q: "What is the primary function of the 'Model Space (MS)' in CAD?",
    opts: [{t:"It is the absolute, fixed world coordinate system", c:false}, {t:"It handles the printing layout", c:false}, {t:"It is a temporary, movable local coordinate system used to easily draw on specific faces", c:true}, {t:"It maps pixels to the screen", c:false}],
    exp: "<b>Concept: Coordinate Spaces</b><br>The Model Space is a local coordinate system. Instead of doing complex math to figure out the absolute coordinates of a tilted face, you snap a temporary Model Space onto that face, making it the new 'flat' ground (Z=0) so you can easily sketch on it."
  },
  {
    q: "In the prescriptive design model, what immediately follows 'Problem Definition'?",
    opts: [{t:"Detail Design", c:false}, {t:"Conceptual Design", c:true}, {t:"Evaluation", c:false}, {t:"Manufacturing", c:false}],
    exp: "<b>Concept: Prescriptive Design</b><br>The logical, textbook flow of prescriptive design is: 1) Problem Definition (what do we need?), 2) Conceptual Design (brainstorming solutions), and 3) Detail Design (engineering the final CAD models)."
  },
  {
    q: "Which of the following best defines a 'Polyline'?",
    opts: [{t:"A collection of completely unlinked, independent straight lines", c:false}, {t:"A single continuous entity that can mix straight lines and arcs", c:true}, {t:"A 3D surface generated by sweeping", c:false}, {t:"A text primitive", c:false}],
    exp: "<b>Concept: 2D Drafting</b><br>A polyline is a single, unified chain of lines and arcs. Because it is one entity, you can easily calculate its total length, give it a continuous thickness, or use it as a closed boundary for a solid extrusion."
  },
  {
    q: "What is the purpose of the 'LAYER' command in 2D drafting?",
    opts: [{t:"To convert 2D lines into 3D blocks", c:false}, {t:"To stack different conceptual parts of a drawing on transparent, toggleable sheets", c:true}, {t:"To change the color of the background", c:false}, {t:"To trim intersecting lines", c:false}],
    exp: "<b>Concept: File Organization</b><br>Layers allow engineers to organize complex drawings. For example, architectural plans put walls on one layer, electrical wiring on another, and plumbing on another. You can turn layers on and off to avoid visual clutter."
  },
  {
    q: "When dimensioning a drawing, what is the 'extension line'?",
    opts: [{t:"The line containing the numerical text", c:false}, {t:"The arrows pointing to the ends", c:false}, {t:"The thin lines extending outward from the actual part to show where the measurement starts and ends", c:true}, {t:"The invisible boundary box", c:false}],
    exp: "<b>Concept: Technical Drafting</b><br>Extension lines visually 'extend' the edges of the part out into empty space so you can draw the dimension line between them without drawing directly over the physical part's geometry."
  },
  {
    q: "What makes a feature 'abstract' during the conceptual design phase?",
    opts: [{t:"It has no engineering significance", c:false}, {t:"It does not physically exist", c:false}, {t:"It has engineering significance, but its exact geometric details are not yet finalized", c:true}, {t:"It is an aesthetic logo", c:false}],
    exp: "<b>Concept: Abstract Features</b><br>An abstract feature represents the *intent* of the design (e.g., 'we need a cooling vent here') before the engineer has done the math to figure out exactly how big the vent needs to be."
  },
  {
    q: "Which type of projection creates perspective distortion (where objects further away appear smaller)?",
    opts: [{t:"Central / Conic projection", c:true}, {t:"Parallel projection", c:false}, {t:"Cylindrical projection", c:false}, {t:"Isometric projection", c:false}],
    exp: "<b>Concept: 3D to 2D Projections</b><br>A central (conic) projection has a focal point at a finite distance (just like the human eye or a camera lens). Because light rays converge into this single point, objects further away take up less of the view angle, creating perspective."
  },
  {
    q: "What does the phrase 'no semantic information should be lost' mean in CAD-CAM interfacing?",
    opts: [{t:"The file size must be highly compressed", c:false}, {t:"The colors of the 3D model must perfectly match the screen", c:false}, {t:"The engineering meaning of features (like a threaded hole) must be preserved, not just the raw geometry", c:true}, {t:"The software must not crash", c:false}],
    exp: "<b>Concept: System Integration</b><br>When moving a model from CAD to CAM, standard interfaces (like STEP) must carry 'semantic' metadata. If a designer marks a cylinder as an 'M6 Threaded Hole', the CAM software needs to read that metadata to know to use a tapping tool, rather than just seeing a dumb cylinder."
  },
  {
    q: "Why does changing a single dimension in a modern parametric CAD model require heavy recalculations?",
    opts: [{t:"Because the material properties physically change", c:false}, {t:"Because the software must reevaluate geometric constraints and recalculate intersecting boundaries", c:true}, {t:"Because the screen resolution changes", c:false}, {t:"Because it must immediately 3D print the new part", c:false}],
    exp: "<b>Concept: Parametric Modeling</b><br>In parametric modeling, parts are linked by constraints (e.g., 'hole must be exactly 5cm from the edge'). If you make the part longer, the software has to recalculate the hole's position and re-cut the intersecting geometry to maintain that constraint rule."
  },
  {
    q: "What distinguishes 'Concurrent Engineering' from traditional sequential engineering?",
    opts: [{t:"It takes significantly longer to complete projects", c:false}, {t:"Designers, manufacturing engineers, and marketing work in parallel from day one to avoid redesigns", c:true}, {t:"It completely removes humans from the process", c:false}, {t:"It focuses only on software engineering", c:false}],
    exp: "<b>Concept: Modern Management</b><br>Traditional engineering was a 'throw it over the wall' process (Design -> then Manufacturing -> then Sales). Concurrent engineering breaks down silos, having all teams collaborate simultaneously. This ensures the designer doesn't design something that manufacturing physically cannot build."
  },
  {
    q: "In the context of GKS transformations, what does 'SCR' stand for?",
    opts: [{t:"System Coordinates Normalized", c:false}, {t:"Screen Device Resolution", c:false}, {t:"System Coordinates Real", c:true}, {t:"Standard Color Range", c:false}],
    exp: "<b>Concept: GKS Pipeline</b><br>SCR stands for System Coordinates Real. This is the raw mathematical coordinate data of the actual object in the 3D world before it is scaled or projected onto a screen."
  },
  {
    q: "What is the primary role of an AGVS (Automated Guided Vehicle System) in a CIM environment?",
    opts: [{t:"To physically cut the metal parts", c:false}, {t:"To handle internal factory floor transport and logistics", c:true}, {t:"To store raw materials in a warehouse", c:false}, {t:"To generate the manufacturing G-code", c:false}],
    exp: "<b>Concept: Factory Hardware</b><br>AGVS consists of mobile robots that autonomously drive around the factory floor (using magnetic strips, lasers, or vision) to transport parts between different machining cells (FMS) and the storage warehouse (ASRS)."
  },
  {
    q: "Which of the following is an example of an 'internal factor' that dictates enterprise adaptability?",
    opts: [{t:"Changes in government public policy", c:false}, {t:"Shifts in the global market demand", c:false}, {t:"The company's management structure and adopted technology", c:true}, {t:"Demands from clients", c:false}],
    exp: "<b>Concept: Enterprise Management</b><br>Adaptability depends on what a company can control. The agility of its Management structure and the flexibility of its internal Technology stack are the primary internal factors. Everything else (markets, clients, laws) is external."
  },
  {
    q: "In expert systems, the 'Inference Engine' is responsible for:",
    opts: [{t:"Storing the raw geometric data", c:false}, {t:"Applying logical IF-THEN rules to the data to deduce solutions", c:true}, {t:"Generating the CAD visual interface", c:false}, {t:"Storing the database passwords", c:false}],
    exp: "<b>Concept: Expert Systems (AI)</b><br>The Knowledge Base holds the dumb facts. The Inference Engine is the active brain (the code algorithm). It applies its library of logical IF-THEN rules to those facts to solve problems or recognize patterns."
  },
  {
    q: "What is the function of the ASRS module in a fully integrated factory?",
    opts: [{t:"Automated Storage and Retrieval System - it acts as a robotic warehouse for raw materials and finished goods", c:true}, {t:"It guides the robotic transport vehicles across the floor", c:false}, {t:"It runs the CNC milling machines", c:false}, {t:"It generates the 3D CAD models", c:false}],
    exp: "<b>Concept: Factory Hardware</b><br>ASRS (Automated Storage and Retrieval System) is a massive automated warehouse. Giant robotic cranes zip down aisles to pull bins of raw materials and hand them off to the AGVs, entirely without human forklift drivers."
  },
  {
    q: "In GKS, the 'Workstation Active' state allows:",
    opts: [{t:"The system to shut down completely", c:false}, {t:"The workstation to actively receive and display graphical output", c:true}, {t:"Segments to have their geometric transformations modified", c:false}, {t:"The system to delete the drawing", c:false}],
    exp: "<b>Concept: GKS States</b><br>When a workstation is merely 'Open', it is initialized but not listening. When it transitions to 'Workstation Active', it is officially hooked up to the pipeline and actively rendering the graphical primitives being sent to it."
  },
  {
    q: "A P&ID (Piping and Instrumentation Diagram) is best described as:",
    opts: [{t:"A photorealistic 3D rendering of a factory", c:false}, {t:"A 2D logical schematic showing the functional flow of pipes, valves, and sensors using standard symbols", c:true}, {t:"A blueprint used to calculate the physical weight of pipes", c:false}, {t:"A solid B-Rep model of a valve", c:false}],
    exp: "<b>Concept: Industrial Schematics</b><br>A P&ID does not care about physical 3D space, pipe length, or gravity. It is purely a functional, logical map (like a subway map) showing how fluids process through tanks and valves, using standard ISA symbols."
  },
  {
    q: "What does THT stand for in PCB manufacturing?",
    opts: [{t:"Total Heat Transfer", c:false}, {t:"Through-Hole Technology", c:true}, {t:"Top-Heavy Traces", c:false}, {t:"Transistor Hardware Testing", c:false}],
    exp: "<b>Concept: Electronic Manufacturing</b><br>Through-Hole Technology (THT) involves components with wire leads/pins. The PCB has physical holes drilled completely through it. The pins are inserted into these holes and soldered on the opposite side."
  },
  {
    q: "Why has SMD (Surface Mount Device) technology largely overtaken THT in modern electronics?",
    opts: [{t:"SMD components are much easier to solder by hand", c:false}, {t:"SMD requires expensive drill bits to make holes in the PCB", c:false}, {t:"SMD components are tiny, require no drilled holes, and allow for massively higher component density", c:true}, {t:"SMD components handle extreme high voltages better", c:false}],
    exp: "<b>Concept: Electronic Manufacturing</b><br>Because SMDs are glued directly to the surface pads of a PCB without pins passing through, both sides of the board can be densely packed with microscopic chips. This is how modern smartphones are miniaturized."
  },
  {
    q: "What defines a component's 'Footprint' in PCB design software?",
    opts: [{t:"The physical 2D arrangement of copper pads required to solder the specific component to the board", c:true}, {t:"The amount of electricity the component consumes", c:false}, {t:"The physical height of the component in 3D", c:false}, {t:"The logical symbol used in the schematic diagram", c:false}],
    exp: "<b>Concept: PCB Design</b><br>The schematic uses logical symbols (like a zig-zag for a resistor). But when designing the actual physical board, the 'footprint' is the exact millimeter-perfect drawing of the copper pads that the physical chip will sit on and be soldered to."
  },
  {
    q: "Which GKS transformation converts normalized coordinates (SCN) into specific screen pixels (SCD)?",
    opts: [{t:"Window/Viewport transformation", c:false}, {t:"Workstation transformation", c:true}, {t:"Segment transformation", c:false}, {t:"Homogeneous transformation", c:false}],
    exp: "<b>Concept: GKS Pipeline</b><br>The Workstation Transformation is the final step. It takes the generic normalized data (SCN) that is device-independent, and mathematically maps it onto the actual hardware pixel grid of the specific monitor or printer (System Coordinates Device - SCD)."
  },
  {
    q: "What is the fundamental difference between the Prescriptive and Descriptive models of design?",
    opts: [{t:"Prescriptive describes how things actually happen; Descriptive shows how they should happen", c:false}, {t:"Prescriptive details the ideal, logical process (how it should be); Descriptive observes real-world, messy human iteration (how it actually is)", c:true}, {t:"Prescriptive only uses 2D CAD; Descriptive uses 3D CAD", c:false}, {t:"There is no difference", c:false}],
    exp: "<b>Concept: Design Methodology</b><br>Prescriptive = 'Prescribing' a strict algorithmic workflow (Problem -> Concept -> Detail). Descriptive = 'Describing' the reality of engineers jumping back and forth, guessing, generating operations, and evaluating them in rapid cycles."
  },
  {
    q: "A pocket milled into a block of metal is best described as what kind of feature?",
    opts: [{t:"A Design Feature", c:false}, {t:"A Manufacturing Feature", c:true}, {t:"An Abstract Feature", c:false}, {t:"An Aesthetic Feature", c:false}],
    exp: "<b>Concept: Feature Classification</b><br>A pocket is defined by how the machine removes the metal (the CNC mill path, the tool radius, the depth limits). Because its geometry is dictated by the machining process, it is a Manufacturing Feature."
  },
  {
    q: "Which of the following describes 'Management by continuous learning and improvement'?",
    opts: [{t:"Setting rigid yearly quotas that cannot be changed", c:false}, {t:"A modern, agile approach where goals dynamically adapt and processes are constantly refined based on new data", c:true}, {t:"Managing employees by exceptions and punishing failures", c:false}, {t:"Only focusing on short-term stock prices", c:false}],
    exp: "<b>Concept: Modern Management</b><br>In fast-changing modern markets, rigid 'Management by Objectives' fails. Continuous learning (Kaizen/Agile) ensures the enterprise constantly evolves its processes, improving quality and adapting to external shocks."
  },
  {
    q: "In the formula 'Date + Operatii = Obiect', what software paradigm is being described?",
    opts: [{t:"Procedural Programming (C, Pascal)", c:false}, {t:"Database Management (SQL)", c:false}, {t:"Object-Oriented Programming (OOP)", c:true}, {t:"Centralized Mainframe Computing", c:false}],
    exp: "<b>Concept: Software Architecture</b><br>This is the fundamental definition of Object-Oriented software (like Java, C++, Python). Instead of separating a dumb database from the application, OOP encapsulates the raw Data and the Operations (methods/functions) that act upon it into a single intelligent 'Object'."
  },
  {
    q: "If an engineer needs to determine if a complex part will physically collide with another part in an assembly, what model must they use?",
    opts: [{t:"A 2D Wireframe", c:false}, {t:"A Surface Model", c:false}, {t:"A complete Solid Model", c:true}, {t:"A P&ID Schematic", c:false}],
    exp: "<b>Concept: Solid Modeling Applications</b><br>Collision detection (interference checking) requires knowing exactly where the 'inside' and 'outside' boundaries of parts are. Only Solid Modeling calculates true, unambiguous volumetric space to accurately flag collisions."
  },
  {
    q: "What is the primary output of a CAPP (Computer-Aided Process Planning) system?",
    opts: [{t:"The 3D CAD geometry file", c:false}, {t:"The Technological Record (the step-by-step manufacturing plan and routing)", c:true}, {t:"The marketing brochure", c:false}, {t:"The physical raw material delivery", c:false}],
    exp: "<b>Concept: Process Planning</b><br>CAPP acts as the bridge between CAD and CAM. It analyzes the design and writes the 'Technological Record'—a highly detailed recipe detailing which machines to use, in what order, with what tools, and at what speeds to produce the part."
  },
  {
    q: "Which of the following is NOT an analytical curve?",
    opts: [{t:"A straight line", c:false}, {t:"A circle", c:false}, {t:"A parabola", c:false}, {t:"A cubic B-spline", c:true}],
    exp: "<b>Concept: Curve Types</b><br>Lines, circles, and parabolas (conics) are Analytical curves because they can be defined by simple, perfect mathematical equations. A B-spline is a Synthetic curve, algorithmically generated using control points to approximate a complex shape."
  },
  {
    q: "In GKS, why can't geometric transformations be applied to an OPEN segment?",
    opts: [{t:"Because the segment is still actively recording primitives and its final boundaries are unknown", c:true}, {t:"Because open segments are instantly deleted", c:false}, {t:"Because transformations are only for 3D, and GKS is strictly 2D", c:false}, {t:"Because the workstation is offline", c:false}],
    exp: "<b>Concept: GKS Segmentation</b><br>When a segment is Open, you are actively pushing new geometry into it. The system cannot apply a transformation matrix (like rotating it 90 degrees) because it doesn't know the final bounds of the segment yet. You must Close the segment first."
  },
  {
    q: "What happens during the 'Feature Recognition' step in a CIM environment?",
    opts: [{t:"The software uses AI/Algorithms to scan dumb 3D CAD geometry and logically identify manufacturing features like 'holes' or 'slots'", c:true}, {t:"The user manually types in the name of every line", c:false}, {t:"The CNC machine visually scans the raw metal with a camera", c:false}, {t:"The marketing team recognizes product features to sell", c:false}],
    exp: "<b>Concept: CAPP & Feature Recognition</b><br>CAD models are just pure math (faces and edges). Feature Recognition algorithms scan this math to detect topological patterns. When it sees a cylindrical void in a block, it tags it as a 'Hole', allowing the CAM system to know it needs a drill bit."
  },
  {
    q: "Which of the following accurately describes 'Discrete Event' manufacturing?",
    opts: [{t:"Pumping crude oil continuously through a refinery", c:false}, {t:"Manufacturing cars on an assembly line where actions happen in distinct, countable steps", c:true}, {t:"Mixing chemicals in a continuous flow vat", c:false}, {t:"Generating electricity in a dam", c:false}],
    exp: "<b>Concept: Production Types</b><br>Discrete manufacturing produces distinct, countable items (cars, phones, screws). The automation relies on discrete events (Part A arrives -> Robot Arm moves -> Drill activates). Continuous manufacturing deals with fluids and gasses that never stop flowing."
  },
  {
    q: "In 3D modeling, what is a 'Boolean Operation'?",
    opts: [{t:"A logical combination of solid shapes using math operations like Union, Subtraction, or Intersection", c:true}, {t:"A way to color a surface true or false", c:false}, {t:"A type of 2D line trimming", c:false}, {t:"The process of exporting a file to CAM", c:false}],
    exp: "<b>Concept: Constructive Solid Geometry</b><br>Boolean operations are the core of CSG. They treat solid bodies like sets of points in space. You can Union them (add them together), Subtract them (cut one with the other), or Intersect them (keep the overlap)."
  },
  {
    q: "Which transformation matrix is used to move a point from one location to another without rotating or scaling it?",
    opts: [{t:"Translation", c:true}, {t:"Rotation", c:false}, {t:"Scaling", c:false}, {t:"Reflection", c:false}],
    exp: "<b>Concept: Geometric Transformations</b><br>Translation simply adds an X, Y, and Z offset to a point's coordinates, sliding it linearly through space without altering its size, orientation, or shape."
  },
  {
    q: "A drawing that strictly contains polylines, texts, and polymarkers is sufficient for what?",
    opts: [{t:"Photorealistic 3D rendering", c:false}, {t:"Basic 2D industrial technical drafting", c:true}, {t:"Calculating mass properties", c:false}, {t:"Simulating stress and strain (CAE)", c:false}],
    exp: "<b>Concept: 2D Drafting Primitives</b><br>The majority of standard 2D engineering blueprints only require these three basic primitives: Lines/Arcs (Polylines) to draw the part, Markers (Polymarkers) for centers, and Text for dimensions and notes."
  },
  {
    q: "What defines a 'Central (Conic)' projection?",
    opts: [{t:"The projection rays are perfectly parallel", c:false}, {t:"The center of projection is at an infinite distance", c:false}, {t:"The center of projection is at a finite distance, causing rays to diverge and create perspective", c:true}, {t:"It removes all Z-axis depth data perfectly", c:false}],
    exp: "<b>Concept: 3D Projections</b><br>In a central projection, the 'eye' or 'camera' is close to the object (a finite distance). The light rays fan out in a cone shape. Because of this geometry, objects closer to the eye appear larger than objects further away."
  },
  {
    q: "What is the key advantage of using a parametric CAD system?",
    opts: [{t:"It is entirely free and open source", c:false}, {t:"It allows designers to change a single dimension, and the software automatically updates the rest of the model based on mathematical constraints", c:true}, {t:"It only uses wireframes, which are faster to render", c:false}, {t:"It automatically writes G-code for CNC machines", c:false}],
    exp: "<b>Concept: Parametric Modeling</b><br>Parametric design uses variables and constraints (e.g., 'Length = 10', 'Hole is exactly in the center'). If you update 'Length = 20', the CAD engine recalculates everything and stretches the part while keeping the hole perfectly centered."
  },
  {
    q: "Which element acts as the 'brain' of an autonomous robotic workcell in an FMS?",
    opts: [{t:"The mechanical gripper", c:false}, {t:"The raw material", c:false}, {t:"The local control algorithm/software processing sensor feedback", c:true}, {t:"The AGVS transport cart", c:false}],
    exp: "<b>Concept: Cyber-Physical Systems</b><br>While the sensors are the 'eyes' and the robotic arms are the 'muscles', the local control algorithms (often driven by Edge computing or AI) act as the brain. They process the sensor data to make real-time decisions."
  },
  {
    q: "In the acronym CIM, what does the 'I' represent?",
    opts: [{t:"Intelligent", c:false}, {t:"Integrated", c:true}, {t:"Industrial", c:false}, {t:"Iterative", c:false}],
    exp: "<b>Concept: Computer Integrated Manufacturing</b><br>CIM stands for Computer Integrated Manufacturing. It emphasizes that all computer systems (CAD, CAM, CAPP, ERP, ASRS) are 'Integrated' into a single, unified data network, rather than operating in isolated silos."
  },
  {
    q: "What must happen when converting 'System Coordinates Normalized' (SCN) to 'System Coordinates Device' (SCD)?",
    opts: [{t:"The object is rotated in 3D space", c:false}, {t:"The 3D model is translated into G-code", c:false}, {t:"The normalized mathematical data is scaled and mapped to the physical pixel resolution of the specific monitor being used", c:true}, {t:"The file is saved to the hard drive", c:false}],
    exp: "<b>Concept: GKS Workstation Transformation</b><br>Normalized coordinates (SCN) are generic. The Workstation Transformation must look at the specific hardware (e.g., a 1080p monitor vs a 4K printer) and figure out exactly which physical pixels (SCD) to turn on."
  },
  {
    q: "Why are 'standards' critical for engineering design knowledge?",
    opts: [{t:"They ensure aesthetic beauty", c:false}, {t:"They provide reliable, pre-verified technical data (like thread pitches or material strengths) to ensure safety and compatibility", c:true}, {t:"They generate creativity and intuition", c:false}, {t:"They allow the software to run faster", c:false}],
    exp: "<b>Concept: Design Knowledge</b><br>Engineers rely heavily on standards (like ISO or DIN) so they don't have to reinvent the wheel. If you specify an M8 metric bolt, the standard guarantees the manufacturer will cut the exact thread pitch needed so the parts fit perfectly worldwide."
  }
];
