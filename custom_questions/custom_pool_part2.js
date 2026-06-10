const customPoolPart2 = [
  {
    q: "Which of the following geometric transformations inherently alter the physical scale or proportional dimensions of a geometric segment?",
    opts: [
      {t:"Translation, which linearly slides the coordinate points through Cartesian space.", c:false}, 
      {t:"Scaling, which applies a multiplicative factor to the coordinate matrices, fundamentally changing the object's size.", c:true}, 
      {t:"Rotation, which orbits the coordinate points around a defined central axis or origin point.", c:false}, 
      {t:"Perspective Projection, which utilizes a finite focal point to induce depth distortion and apparent size reduction.", c:true}
    ],
    exp: "<b>Concept: Geometric Transformations</b><br>Scaling mathematically stretches or shrinks the object. Perspective projection also alters apparent size (objects further away are drawn smaller). Translation and Rotation are 'rigid body' transformations; they move the object but do not distort its shape or size."
  },
  {
    q: "A basic 2D industrial engineering drawing typically relies on which specific graphical primitives to convey its geometric information?",
    opts: [
      {t:"Polylines, which act as unified chains of connected line segments and mathematical arcs.", c:true}, 
      {t:"Polymarkers, which are utilized to explicitly denote center points, intersections, or distinct nodes.", c:true}, 
      {t:"Constructive Solid Primitives, which are combined using Boolean operations to generate volumetric depth.", c:false}, 
      {t:"Text annotations, which are strictly necessary for conveying precise dimensional measurements and manufacturing tolerances.", c:true}
    ],
    exp: "<b>Concept: 2D Drafting Primitives</b><br>The vast majority of standard 2D engineering blueprints only require these three basic primitives: Lines/Arcs (Polylines) to draw the part, Markers (Polymarkers) for centers, and Text for dimensions. Solid primitives are exclusively for 3D modeling."
  },
  {
    q: "What defines the functionality of the local control algorithm (the 'brain') within an autonomous robotic workcell in an FMS?",
    opts: [
      {t:"It provides the raw physical clamping force required by the mechanical end-effector to securely grip heavy materials.", c:false}, 
      {t:"It actively processes real-time feedback data from embedded sensors to execute complex kinematic movement decisions.", c:true}, 
      {t:"It functions autonomously at the 'Edge' of the network, ensuring micro-second reaction times without waiting for cloud server latency.", c:true}, 
      {t:"It serves exclusively as a passive data logger, blindly transmitting raw telemetry to the central factory mainframe.", c:false}
    ],
    exp: "<b>Concept: Cyber-Physical Systems</b><br>While the sensors are the 'eyes' and the robotic arms are the 'muscles', the local control algorithms act as the brain. They process the sensor data on the Edge (locally) to make real-time, microsecond decisions."
  },
  {
    q: "In the acronym CIM (Computer Integrated Manufacturing), the term 'Integrated' signifies:",
    opts: [
      {t:"The strict reliance on artificial intelligence expert systems to entirely eliminate human engineering oversight.", c:false}, 
      {t:"The elimination of isolated software silos by seamlessly networking CAD, CAM, CAPP, and ERP systems into a unified digital pipeline.", c:true}, 
      {t:"The physical integration of all CNC milling machines and robotic assembly arms onto a single, massive continuous conveyor belt.", c:false}, 
      {t:"The assurance that semantic metadata, such as feature definitions and tolerances, flows smoothly between different engineering departments.", c:true}
    ],
    exp: "<b>Concept: Computer Integrated Manufacturing</b><br>CIM emphasizes that software systems (CAD, CAM, CAPP, ERP) should not operate as isolated islands. They must be 'Integrated' via network databases so that semantic data flows seamlessly from the designer's desk directly to the factory floor machinery."
  },
  {
    q: "Why are standardized engineering specifications (such as ISO, DIN, or ANSI) critical for modern design knowledge?",
    opts: [
      {t:"They completely restrict the creative intuition of industrial designers by enforcing rigid aesthetic styling requirements.", c:false}, 
      {t:"They provide highly reliable, pre-verified technical data (such as thread pitches or material yield strengths) to ensure structural safety.", c:true}, 
      {t:"They guarantee interoperability and precise physical compatibility between parts manufactured by entirely different global suppliers.", c:true}, 
      {t:"They allow the CAD software's graphics engine to render wireframe models with significantly fewer polygon calculations.", c:false}
    ],
    exp: "<b>Concept: Design Knowledge</b><br>Engineers rely heavily on standards (like ISO or DIN) so they don't have to reinvent the wheel. If you specify an M8 metric bolt, the standard guarantees the manufacturer will cut the exact thread pitch needed so the parts fit perfectly anywhere in the world."
  },
  {
    q: "What differentiates a 'Wireframe Model' from a 'Boundary Representation (B-Rep) Model'?",
    opts: [
      {t:"A Wireframe Model lacks any mathematical definition of faces or surfaces, rendering it inherently ambiguous and visually confusing.", c:true}, 
      {t:"A B-Rep Model defines a completely watertight topological shell consisting of mathematically linked vertices, edges, and enclosing faces.", c:true}, 
      {t:"A Wireframe Model allows the software to accurately calculate volumetric mass properties and execute complex collision detection algorithms.", c:false}, 
      {t:"A B-Rep Model strictly uses Boolean operations on solid geometric primitives (like cylinders and spheres) to construct its shape.", c:false}
    ],
    exp: "<b>Concept: 3D Modeling Types</b><br>Wireframes are just 'sticks' in 3D space with no faces, making them visually ambiguous. B-Rep models use a mathematically watertight 'skin' of faces. CSG uses Boolean primitives, not B-Rep."
  },
  {
    q: "The 'Feature Recognition' process in a CAPP system is characterized by which of the following actions?",
    opts: [
      {t:"The utilization of complex algorithms or AI to scan pure topological CAD geometry to logically identify distinct manufacturing features.", c:true}, 
      {t:"The manual typing of descriptive alphanumeric tags onto every individual polyline by the drafting engineer.", c:false}, 
      {t:"The translation of abstract geometry into semantic features, such as recognizing a cylindrical void as a 'machinable hole'.", c:true}, 
      {t:"The physical scanning of a raw metal billet using optical laser cameras to determine its exact physical dimensions.", c:false}
    ],
    exp: "<b>Concept: CAPP & Feature Recognition</b><br>CAD models are just pure math (faces and edges). Feature Recognition algorithms scan this math to detect topological patterns. When it sees a cylindrical void in a block, it semantically tags it as a 'Hole', allowing the CAM system to automatically select a drill bit."
  },
  {
    q: "Which of the following characteristics define an Automated Storage and Retrieval System (ASRS)?",
    opts: [
      {t:"It functions as a massive, entirely autonomous robotic warehouse managing the inventory of both raw materials and finished components.", c:true}, 
      {t:"It is explicitly responsible for generating the highly complex G-code routing instructions required by the flexible machining systems.", c:false}, 
      {t:"It coordinates directly with AGV (Automated Guided Vehicle) transport carts to smoothly hand off supply bins without human intervention.", c:true}, 
      {t:"It executes the primary subtractive milling operations required to physically shape the final manufactured goods.", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>ASRS is strictly a robotic warehouse system. It uses towering robotic cranes to pull bins of materials from massive shelves and hands them off to the AGVs. It does not cut metal or write G-code."
  },
  {
    q: "When a designer utilizes a 'Parametric' CAD system, they benefit from which of the following capabilities?",
    opts: [
      {t:"The ability to easily alter a single fundamental dimension, triggering the software to automatically recalculate and update all dependent geometry.", c:true}, 
      {t:"The utilization of defined mathematical constraints (such as 'parallel', 'tangent', or 'coincident') to logically govern the shape of the model.", c:true}, 
      {t:"The system's inherent ability to automatically write and execute compiled procedural C++ code for embedded microcontrollers.", c:false}, 
      {t:"The absolute removal of all geometric constraints, allowing for pure, unrestricted freeform clay sculpting without mathematical rules.", c:false}
    ],
    exp: "<b>Concept: Parametric Modeling</b><br>Parametric design uses variables and constraints (e.g., 'Length = 10', 'Hole is tangent to edge'). If you update a variable, the CAD engine recalculates everything and stretches the part while maintaining all logical constraint rules."
  },
  {
    q: "A Piping and Instrumentation Diagram (P&ID) is fundamentally distinct from a 3D structural CAD model because:",
    opts: [
      {t:"It provides a highly detailed, mathematically accurate 3D volumetric representation of the entire chemical refinery layout.", c:false}, 
      {t:"It serves strictly as a 2D logical schematic, mapping the functional flow of process fluids through pipes, control valves, and sensors.", c:true}, 
      {t:"It utilizes standardized abstract symbols (such as ISA standards) rather than representing the true physical or spatial dimensions of the components.", c:true}, 
      {t:"It is exclusively used to calculate the physical weight, stress strain, and center of gravity of the heavy piping network.", c:false}
    ],
    exp: "<b>Concept: Industrial Schematics</b><br>A P&ID is a logical flow diagram. Much like a subway map, it does not care about true distances, physical weight, or 3D space. It uses standard abstract symbols to show engineers exactly how tanks, valves, and sensors logically connect."
  },
  {
    q: "Which factors necessitate the shift from sequential 'throw-it-over-the-wall' engineering to Concurrent Engineering?",
    opts: [
      {t:"The urgent need to drastically reduce costly late-stage manufacturing redesigns by ensuring manufacturability concerns are addressed immediately.", c:true}, 
      {t:"The requirement to completely isolate the marketing department from the engineering department to prevent creative interference.", c:false}, 
      {t:"The desire to break down isolated departmental silos, requiring design, manufacturing, and QA teams to collaborate in parallel from day one.", c:true}, 
      {t:"The mandate to significantly lengthen product development lead times to ensure absolute perfection before physical prototyping.", c:false}
    ],
    exp: "<b>Concept: Modern Management</b><br>Sequential engineering causes massive delays because manufacturing often discovers a design is impossible to build months after the design team finishes it. Concurrent engineering fixes this by having all teams collaborate simultaneously from day one, drastically reducing lead times and costly redesigns."
  },
  {
    q: "What defines the functionality of an Expert System's 'Inference Engine' within an industrial AI context?",
    opts: [
      {t:"It acts as the massive, static relational database, permanently archiving pure geometric facts and historical manufacturing records.", c:false}, 
      {t:"It functions as the active algorithmic processor, recursively applying logical IF-THEN rules to the stored data to deduce actionable solutions.", c:true}, 
      {t:"It dynamically generates the photorealistic 3D CAD interface presented to the human operator during the drafting phase.", c:false}, 
      {t:"It allows the AI system to process inputs, recognize patterns, and make complex decisions entirely separate from the raw knowledge base.", c:true}
    ],
    exp: "<b>Concept: Expert Systems (AI)</b><br>An expert system splits the brain in two. The Knowledge Base holds the dumb facts. The Inference Engine is the active code algorithm that applies its library of logical rules to those facts to solve complex problems or diagnose machinery."
  },
  {
    q: "In the context of electrical manufacturing, Surface Mount Device (SMD) technology offers which advantages over older Through-Hole Technology (THT)?",
    opts: [
      {t:"SMD components are significantly larger and therefore much easier for human technicians to manually solder using basic hand tools.", c:false}, 
      {t:"SMD components do not require physical holes to be drilled entirely through the fiberglass board, drastically reducing complex manufacturing costs.", c:true}, 
      {t:"SMD allows components to be densely packed on both the top and bottom surfaces of the PCB, enabling the extreme miniaturization of modern devices.", c:true}, 
      {t:"SMD copper traces are inherently capable of handling immensely higher electrical voltages without any risk of thermal substrate failure.", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>SMDs are glued and soldered directly to the surface pads without pins passing through the board. This eliminates expensive drilling costs and allows both sides of the board to be covered in microscopic chips, which is how smartphones are miniaturized."
  },
  {
    q: "The 'Descriptive' model of design methodology is best characterized by:",
    opts: [
      {t:"Outlining a strict, idealized, linear algorithmic workflow (Problem -> Concept -> Detail) for how design should theoretically occur.", c:false}, 
      {t:"Acknowledging the messy, highly iterative reality of human engineering, actively observing how design actually happens in practice.", c:true}, 
      {t:"Recognizing that engineers frequently jump back and forth between phases, continuously generating sub-solutions and evaluating them in rapid cycles.", c:true}, 
      {t:"Mandating the exclusive use of 2D CAD drafting techniques while strictly forbidding the use of 3D CSG solid modeling.", c:false}
    ],
    exp: "<b>Concept: Design Methodology</b><br>Prescriptive = 'Prescribing' an idealized textbook workflow. Descriptive = 'Describing' the chaotic reality of human engineers jumping back and forth, guessing, generating operations, and evaluating them in rapid, non-linear cycles."
  },
  {
    q: "Why is 'Continuous Learning and Improvement' (often termed Agile or Kaizen) essential for modern enterprise management?",
    opts: [
      {t:"Because rigid 'Management by Objectives' fails catastrophically in fast-changing global markets subjected to unpredictable external shocks.", c:true}, 
      {t:"Because it establishes immutable ten-year production quotas that middle management is strictly forbidden to alter or adapt.", c:false}, 
      {t:"Because it empowers cross-functional teams to constantly iterate on their internal workflows, thereby continuously elevating product quality.", c:true}, 
      {t:"Because it strictly enforces the management of employees by exceptions, ensuring that any deviation from the original static plan is aggressively punished.", c:false}
    ],
    exp: "<b>Concept: Modern Management</b><br>In highly volatile global markets, rigid long-term plans are useless. Continuous learning ensures the enterprise constantly evolves its processes, empowering teams to improve quality incrementally and adapt rapidly to new technologies or market demands."
  },
  {
    q: "What defines a 'Discrete Event' manufacturing process?",
    opts: [
      {t:"It involves the unbroken, unending flow of materials, such as pumping crude oil through a high-pressure chemical refinery.", c:false}, 
      {t:"It produces distinct, highly countable items, such as assembling complex automobiles or soldering electronic smartphones.", c:true}, 
      {t:"It relies on automation systems that trigger actions based on distinct sequential events (e.g., 'Sensor detects part -> Robot Arm activates').", c:true}, 
      {t:"It is generally much more difficult to pause or restart compared to continuous fluid manufacturing processes.", c:false}
    ],
    exp: "<b>Concept: Production Types</b><br>Discrete manufacturing produces distinct items (cars, screws, phones). The automation relies on distinct, triggerable events (Part arrives -> Sensor trips -> Robot moves). Continuous manufacturing deals with fluids and gasses that never stop flowing."
  },
  {
    q: "In the Object-Oriented software paradigm (Data + Operations = Object), the 'Operations' refer to:",
    opts: [
      {t:"The raw, static attributes and database variables that define the structural state of the entity.", c:false}, 
      {t:"The active methods, functions, and algorithmic rules that are strictly encapsulated within the object to manipulate its own internal data.", c:true}, 
      {t:"The centralized mainframe SQL database that strictly isolates all application logic from the data storage layer.", c:false}, 
      {t:"The procedural execution of legacy C or Pascal scripts that operate on globally exposed variables.", c:false}
    ],
    exp: "<b>Concept: Software Architecture</b><br>In OOP, an Object is a unified entity. The 'Data' represents its internal variables (attributes), while the 'Operations' are its internal functions (methods) that intelligently manipulate that data, keeping everything safely encapsulated."
  },
  {
    q: "A cylindrical pocket milled into a solid block of aluminum is fundamentally classified as a 'Manufacturing Feature' because:",
    opts: [
      {t:"It is completely devoid of any specific geometric dimensions, tolerances, or engineering significance.", c:false}, 
      {t:"Its exact geometric boundaries (such as corner radii) are directly dictated by the specific dimensions of the spinning subtractive CNC cutting tool.", c:true}, 
      {t:"It represents an abstract design intent that has not yet been finalized into physical, machinable coordinates.", c:false}, 
      {t:"Its defining characteristics rely heavily on the physical constraints and pathing of the manufacturing process used to physically create it.", c:true}
    ],
    exp: "<b>Concept: Feature Classification</b><br>A pocket isn't just an abstract geometric hole; it's defined by how the machine removes the metal. The corner radii of the pocket will perfectly match the radius of the spinning end-mill tool used to cut it, making its geometry a direct byproduct of the manufacturing process."
  },
  {
    q: "Which of the following statements accurately describe the 'GKS Closed' state?",
    opts: [
      {t:"It is the default, inactive state of the graphical kernel before the environment has been successfully initialized by the operating system.", c:true}, 
      {t:"The system is actively buffering graphical output but has temporarily suspended pushing the pixels to the display screen.", c:false}, 
      {t:"The graphical system is completely shut down, and absolutely no drawing commands or workstation activations can be processed.", c:true}, 
      {t:"A specific geometric segment has been permanently locked, preventing any subsequent rotational or scaling transformations.", c:false}
    ],
    exp: "<b>Concept: GKS State Machine</b><br>'GKS Closed' is the absolute base state. The system is inactive. You must issue the 'Open GKS' command to initialize the environment before you can open workstations, activate them, or draw any geometric segments."
  },
  {
    q: "What is the primary function of an Automated Guided Vehicle System (AGVS) within a Computer Integrated Manufacturing facility?",
    opts: [
      {t:"To physically cut and mill the raw metal billets into highly precise finished geometric components.", c:false}, 
      {t:"To autonomously handle internal factory logistics, seamlessly transporting materials between distinct machining cells.", c:true}, 
      {t:"To navigate complex factory floor layouts without human drivers by utilizing magnetic strips, laser guidance, or AI vision systems.", c:true}, 
      {t:"To act as the massive, robotic warehousing system that permanently stores the inventory of raw materials.", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>AGVS consists of the mobile robotic transport carts. They do no machining and they do not store bulk inventory; their sole purpose is autonomous physical transport and logistics, zipping materials between the warehouse (ASRS) and the machines (FMS)."
  },
  {
    q: "In the context of CAD transformations, Homogeneous Coordinates are essential because:",
    opts: [
      {t:"They strictly eliminate the Z-axis, perfectly converting 3D solid models into 2D isometric drafting representations.", c:false}, 
      {t:"They introduce a dummy 4th coordinate 'W' (creating a 1x4 matrix) to mathematically allow complex 3D transformations like translation and perspective.", c:true}, 
      {t:"They allow multiple sequential transformations (Translation, Rotation, Scaling) to be combined into a single matrix multiplication operation.", c:true}, 
      {t:"They inherently calculate the volumetric center of gravity and total mass of B-Rep modeled components.", c:false}
    ],
    exp: "<b>Concept: Computer Graphics Math</b><br>By adding the dummy 'W' coordinate, homogeneous coordinates allow computers to perform Translation (which is normally addition) as a Multiplication operation. This means translation, rotation, and scaling can all be multiplied together into one super-matrix, making rendering insanely fast."
  },
  {
    q: "What defines a 'Central (Conic) Projection' in computer graphics?",
    opts: [
      {t:"The projection rays are perfectly parallel, ensuring that isometric models do not shrink in the distance.", c:false}, 
      {t:"The center of projection (the virtual camera or eye) is located at a finite distance from the target object.", c:true}, 
      {t:"The geometric light rays diverge outward in a cone shape, inherently creating realistic perspective distortion.", c:true}, 
      {t:"It removes all Z-axis depth data perfectly, resulting in a flat, 2D orthographic schematic.", c:false}
    ],
    exp: "<b>Concept: 3D Projections</b><br>In a central projection, the 'eye' is close to the object (a finite distance). The light rays fan out in a cone shape. Because of this geometry, objects closer to the eye appear larger than objects further away, creating true perspective."
  },
  {
    q: "During the conceptual design phase, why are features often classified as 'Abstract'?",
    opts: [
      {t:"Because they possess significant engineering intent (e.g., 'we need a cooling vent'), but their exact geometric dimensions are not yet mathematically finalized.", c:true}, 
      {t:"Because they are completely devoid of engineering significance and are included solely as aesthetic placeholders for the marketing team.", c:false}, 
      {t:"Because they represent functional requirements that must be satisfied before detailed CAD modeling and CNC programming can commence.", c:true}, 
      {t:"Because they physically cannot be manufactured using traditional subtractive machining methods under any circumstances.", c:false}
    ],
    exp: "<b>Concept: Abstract Features</b><br>An abstract feature represents the *intent* of the design before the exact math is done. Knowing you need a 'ventilated area' is the abstract intent; engineering the exact 5mm louvers is the detailed geometric finalization."
  },
  {
    q: "In the acronym CIM, what does the 'I' represent?",
    opts: [
      {t:"Intelligent", c:false}, 
      {t:"Integrated", c:true}, 
      {t:"Industrial", c:false}, 
      {t:"Iterative", c:false}
    ],
    exp: "<b>Concept: Computer Integrated Manufacturing</b><br>CIM stands for Computer Integrated Manufacturing. It emphasizes that all computer systems (CAD, CAM, CAPP, ERP) are deeply 'Integrated' into a single, unified digital network, rather than operating in isolated departmental silos."
  },
  {
    q: "The Workstation Transformation in the GKS pipeline is specifically responsible for:",
    opts: [
      {t:"Translating purely logical 3D coordinate data into executable CNC G-code instructions for manufacturing.", c:false}, 
      {t:"Taking device-independent Normalized Coordinates (SCN) and mathematically scaling them to specific Device Coordinates (SCD).", c:true}, 
      {t:"Mapping abstract image geometry to match the exact physical pixel resolution grid of the currently active output monitor.", c:true}, 
      {t:"Executing complex Boolean operations on Constructive Solid Geometry primitives to generate new segments.", c:false}
    ],
    exp: "<b>Concept: GKS Workstation Transformation</b><br>Normalized coordinates (SCN) are generic and range from 0 to 1. The Workstation Transformation must look at the specific hardware (e.g., a 1080p monitor vs a 4K laser printer) and figure out exactly which physical pixels (SCD) to illuminate to draw the shape."
  },
  {
    q: "What defines 'Concurrent Engineering' as a superior methodology to traditional sequential engineering?",
    opts: [
      {t:"It fundamentally requires significantly longer lead times to complete projects due to the massive overhead of cross-departmental meetings.", c:false}, 
      {t:"It breaks down isolated departments, requiring design, manufacturing, and marketing teams to collaborate in parallel from day one.", c:true}, 
      {t:"It completely removes human decision-making from the process by relying entirely on AI-driven expert systems.", c:false}, 
      {t:"It drastically reduces costly late-stage redesigns by ensuring manufacturability concerns are addressed during the initial conceptual phase.", c:true}
    ],
    exp: "<b>Concept: Modern Management</b><br>Concurrent engineering replaces the old 'throw it over the wall' sequential method. By having manufacturing engineers review the CAD models while they are still being conceptualized, the company avoids designing parts that are physically impossible or too expensive to manufacture."
  },
  {
    q: "Within the GKS transformation pipeline, the acronym 'SCR' stands for and represents what specific type of data?",
    opts: [
      {t:"System Coordinates Normalized, which represents the data mapped perfectly to the hardware display screen.", c:false}, 
      {t:"System Coordinates Real, representing the pure mathematical coordinate data of the object in its actual continuous 3D world space.", c:true}, 
      {t:"Screen Device Resolution, indicating the exact pixel density of the currently active workstation.", c:false}, 
      {t:"It is the unscaled, device-independent geometric data before any workstation transformation is applied.", c:true}
    ],
    exp: "<b>Concept: GKS Pipeline</b><br>SCR (System Coordinates Real) is the actual mathematical world-space coordinates. SCN (System Coordinates Normalized) scales it between 0 and 1. SCD (System Coordinates Device) finally maps it to actual physical pixels."
  },
  {
    q: "In a fully integrated CIM factory, the AGVS (Automated Guided Vehicle System) is primarily responsible for:",
    opts: [
      {t:"Physically cutting and milling the raw metal billets into finished geometric parts.", c:false}, 
      {t:"Autonomously handling internal logistics and transporting parts between distinct machining cells across the factory floor.", c:true}, 
      {t:"Replacing human forklift operators by using magnetic tape, lasers, or vision systems to navigate complex facility layouts.", c:true}, 
      {t:"Generating the highly complex G-code routing instructions required by the CNC machines.", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>AGVS consists of mobile robotic carts. They do no machining and write no code; their sole purpose is autonomous physical transport and logistics, moving materials from the warehouse (ASRS) to the flexible machining systems (FMS)."
  },
  {
    q: "Which of the following are examples of 'internal factors' that determine an enterprise's overall adaptability?",
    opts: [
      {t:"Sudden shifts in international trade laws and government public policy.", c:false}, 
      {t:"The flexibility and modernity of the company's internal technology stack and manufacturing hardware.", c:true}, 
      {t:"The agility of the company's management structure and corporate decision-making hierarchy.", c:true}, 
      {t:"Drastic changes in global market demand and consumer preferences.", c:false}
    ],
    exp: "<b>Concept: Enterprise Management</b><br>Internal factors are things the company directly controls (Management, Technology, Organization). External factors are completely outside their direct control (Markets, Laws, Competitors, Client demands)."
  },
  {
    q: "In the architecture of Artificial Intelligence Expert Systems, the 'Inference Engine' serves what critical purpose?",
    opts: [
      {t:"It acts as the static database, storing pure geometric facts and historical manufacturing data.", c:false}, 
      {t:"It functions as the active algorithmic brain, applying logical IF-THEN rules to the stored data to deduce actionable solutions.", c:true}, 
      {t:"It is completely responsible for generating the visual 3D CAD interface presented to the human operator.", c:false}, 
      {t:"It separates the control logic from the raw knowledge base, allowing the system to learn and adapt without rewriting the core database.", c:true}
    ],
    exp: "<b>Concept: Expert Systems (AI)</b><br>An expert system splits the brain in two. The Knowledge Base holds the dumb facts. The Inference Engine is the active code algorithm that applies its library of logical rules to those facts to solve complex problems."
  },
  {
    q: "The ASRS (Automated Storage and Retrieval System) module in a factory is characterized by:",
    opts: [
      {t:"Acting as a massive, robotic warehouse that manages the inventory of raw materials and finished goods.", c:true}, 
      {t:"Utilizing towering robotic cranes that autonomously travel down aisles to pull specific storage bins without human intervention.", c:true}, 
      {t:"Executing the primary subtractive machining operations required to form complex B-Rep models.", c:false}, 
      {t:"Providing the computational power required to run the factory's ERP (Enterprise Resource Planning) software.", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>ASRS is strictly for storage and retrieval. It is a highly automated warehouse system that hands off bins of materials to the AGVs, completely eliminating the need for human forklift drivers in the storage sector."
  },
  {
    q: "In the GKS standard, transitioning a workstation to the 'Workstation Active' state enables which of the following?",
    opts: [
      {t:"It commands the system hardware to completely power down and clear its graphical buffers.", c:false}, 
      {t:"It allows the workstation to actively receive, process, and render incoming graphical output primitives to the screen.", c:true}, 
      {t:"It permanently locks all open segments, preventing any future geometric transformations from being applied.", c:false}, 
      {t:"It officially hooks the initialized hardware into the active GKS pipeline, moving it beyond a merely 'Open' standby status.", c:true}
    ],
    exp: "<b>Concept: GKS States</b><br>When a workstation is 'Open', it is powered on and initialized but is sitting in standby. It must be transitioned to 'Workstation Active' before it will actually listen to the pipeline and begin drawing primitives on the screen."
  },
  {
    q: "A P&ID (Piping and Instrumentation Diagram) is an essential industrial document because it:",
    opts: [
      {t:"Provides a photorealistic, mathematically accurate 3D solid model of the entire chemical refinery layout.", c:false}, 
      {t:"Serves as a 2D logical schematic that maps the functional flow of fluids through pipes, valves, and control sensors.", c:true}, 
      {t:"Utilizes standardized abstract symbols (like ISA standards) rather than representing the true physical dimensions of the components.", c:true}, 
      {t:"Calculates the precise physical weight and center of gravity of the piping network for structural support engineering.", c:false}
    ],
    exp: "<b>Concept: Industrial Schematics</b><br>A P&ID is not a physical map; it is a logical flow diagram. Much like a subway map, it does not care about true distances or 3D space. It uses standard symbols to show engineers exactly how tanks, valves, and sensors logically connect."
  },
  {
    q: "In printed circuit board (PCB) manufacturing, Through-Hole Technology (THT) involves:",
    opts: [
      {t:"Gluing microscopic, pin-less components directly to the top copper surface of the board.", c:false}, 
      {t:"Utilizing components with physical wire leads that must be inserted through holes drilled completely through the fiberglass board.", c:true}, 
      {t:"Soldering the component leads on the opposite side of the board to establish a strong mechanical and electrical connection.", c:true}, 
      {t:"Achieving massively higher component density compared to modern Surface Mount Device (SMD) techniques.", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>THT is the older, highly robust method where component pins pass entirely through drilled holes in the PCB. It provides great mechanical strength but severely limits how densely components can be packed compared to modern SMDs."
  },
  {
    q: "Surface Mount Device (SMD) technology has largely replaced THT in modern electronics because:",
    opts: [
      {t:"SMD components are significantly larger and therefore much easier for human technicians to manually solder using basic hand tools.", c:false}, 
      {t:"SMD components do not require physical holes to be drilled entirely through the fiberglass board, drastically reducing complex manufacturing costs.", c:true}, 
      {t:"SMD allows components to be densely packed on both the top and bottom surfaces of the PCB, enabling the extreme miniaturization of modern devices.", c:true}, 
      {t:"SMD copper traces are inherently capable of handling immensely higher electrical voltages without any risk of thermal substrate failure.", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>SMDs are glued and soldered directly to the surface pads without pins passing through the board. This eliminates drilling costs and allows both sides of the board to be covered in microscopic chips, making smartphones possible."
  }
];
