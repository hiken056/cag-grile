const customPoolPart1 = [
  {
    q: "Which of the following characteristics accurately describe 'synthetic' curves in computational geometry?",
    opts: [
      {t:"They are generated algorithmically using a defined set of control points to approximate or interpolate a complex organic shape.", c:true}, 
      {t:"They rely entirely on elementary trigonometric equations, such as those used for creating perfect circles and parabolas.", c:false}, 
      {t:"They include advanced formulations such as B-splines and Bezier curves, which provide local or global control flexibility.", c:true}, 
      {t:"They are mathematically restricted to 2D planar space and cannot be swept or extruded into 3D solid representations.", c:false}
    ],
    exp: "<b>Concept: Curves</b><br>Synthetic curves (like Bezier and B-splines) are complex curves built by algorithms using control points because a single simple analytical equation cannot perfectly trace complex, organic shapes. Analytical curves are the ones driven by simple trigonometric/algebraic equations (circles, lines, conics)."
  },
  {
    q: "In 2D and 3D CAD modeling, the Boolean operation of 'Intersection' is used to achieve which of the following outcomes?",
    opts: [
      {t:"It fuses two distinct solid bodies together into a single continuous volumetric boundary.", c:false}, 
      {t:"It calculates the overlapping spatial region of two intersecting solids and deletes all non-overlapping geometry.", c:true}, 
      {t:"It is heavily utilized in Constructive Solid Geometry (CSG) to define complex internal cavities and shared volumes.", c:true}, 
      {t:"It trims the extending line segments of a 2D profile that cross an established cutting boundary.", c:false}
    ],
    exp: "<b>Concept: Constructive Solid Geometry (CSG)</b><br>Intersection is the Boolean operation that calculates where two solids overlap and deletes everything else, leaving only the shared volume. Union fuses them. Trimming is a 2D line operation, not a Boolean solid operation."
  },
  {
    q: "What defines an 'extrusion' sweeping operation in the context of 3D solid modeling?",
    opts: [
      {t:"It involves sweeping a closed 2D geometric profile along a strictly linear trajectory to generate volumetric height.", c:true}, 
      {t:"It requires revolving a 2D profile around a defined central axis to create a symmetrical cylindrical shape.", c:false}, 
      {t:"It can only be applied to analytical surfaces and is fundamentally incompatible with synthetic spline boundaries.", c:false}, 
      {t:"It relies on a generator profile and a director curve to define the topological boundaries of the resulting solid.", c:true}
    ],
    exp: "<b>Concept: Sweeping Operations</b><br>Extrusion is the simplest form of sweeping. You take a flat 2D shape (the generator profile) and pull it along a straight line (the linear trajectory/director) to give it volume. It can absolutely be applied to synthetic curves."
  },
  {
    q: "Which of the following statements correctly differentiates B-Rep (Boundary Representation) from CSG (Constructive Solid Geometry)?",
    opts: [
      {t:"CSG builds models by combining basic solid primitives (blocks, cylinders) using Boolean operations.", c:true}, 
      {t:"B-Rep defines the solid volume exclusively by stitching together an outer topological shell of faces, edges, and vertices.", c:true}, 
      {t:"CSG is fundamentally incapable of calculating mass properties like weight or center of gravity.", c:false}, 
      {t:"B-Rep models consist entirely of zero-thickness surfaces and are therefore unable to represent true volumetric density.", c:false}
    ],
    exp: "<b>Concept: 3D Modeling Types</b><br>CSG uses Boolean math on primitives. B-Rep stitches a mathematically watertight 'skin'. If a B-Rep skin is perfectly closed, the computer recognizes the space inside as a true solid, allowing for mass calculations (unlike a dumb surface model)."
  },
  {
    q: "Why is solid modeling considered computationally superior to surface modeling for mechanical engineering design?",
    opts: [
      {t:"Solid models contain internal volumetric data, enabling the software to accurately calculate mass, weight, and center of gravity.", c:true}, 
      {t:"Solid models strictly utilize polygonal meshes, which are significantly faster for the graphics processor to render on screen.", c:false}, 
      {t:"Solid models inherently differentiate the 'inside' from the 'outside' of a part, allowing for accurate interference and collision detection.", c:true}, 
      {t:"Surface models are unable to be assigned any color or texture mapping for photorealistic rendering purposes.", c:false}
    ],
    exp: "<b>Concept: Solids vs Surfaces</b><br>Because solid models define an unambiguous 'inside' and 'outside', engineers can assign material density (to calculate weight) and perfectly detect physical collisions. Surface models can be rendered beautifully, but lack this engineering depth."
  },
  {
    q: "Which of the following are defining characteristics of the Fourth Industrial Revolution (Industry 4.0)?",
    opts: [
      {t:"The complete elimination of all human labor from the manufacturing and assembly process.", c:false}, 
      {t:"The extensive integration of Cyber-Physical Systems (CPS) to connect physical machines with digital networks.", c:true}, 
      {t:"The reliance on steam power and early mechanized textile production systems.", c:false}, 
      {t:"The utilization of the Internet of Things (IoT) and cloud computing for real-time factory data analytics.", c:true}
    ],
    exp: "<b>Concept: Industry 4.0</b><br>Industry 4.0 is hallmarked by Cyber-Physical Systems, IoT, and Cloud Computing. It does not completely eliminate humans, but rather augments manufacturing with extreme digital integration and smart data."
  },
  {
    q: "In the Graphical Kernel System (GKS) state machine, what does the 'GKS Closed' state imply regarding system functionality?",
    opts: [
      {t:"The system is actively buffering graphical output but has temporarily paused rendering to the display screen.", c:false}, 
      {t:"The graphical system is completely shut down, inactive, and must be initialized before any drawing can occur.", c:true}, 
      {t:"A specific graphical segment has been closed and its geometric transformations are now permanently locked.", c:false}, 
      {t:"It is the default state of the system before the 'Open GKS' command establishes the initial operating environment.", c:true}
    ],
    exp: "<b>Concept: GKS State Machine</b><br>'GKS Closed' is the absolute base state. The system is inactive. You must call 'Open GKS' to initialize the environment before you can even attempt to open a workstation or draw a segment."
  },
  {
    q: "When mapping coordinate spaces in CAD, what is the primary function of the 'Model Space' (often represented as a local coordinate system)?",
    opts: [
      {t:"It serves as the absolute, immutable world coordinate system from which all other coordinate systems are derived.", c:false}, 
      {t:"It provides a temporary, movable coordinate frame that allows engineers to easily draw on specific angled faces or planes.", c:true}, 
      {t:"It simplifies complex 3D trigonometric calculations by temporarily redefining the Z=0 plane to match the current working surface.", c:true}, 
      {t:"It is specifically utilized to manage the 2D layout and scaling of the final printed blueprint document.", c:false}
    ],
    exp: "<b>Concept: Coordinate Spaces</b><br>The Model Space (or Local Coordinate System / UCS) is a movable frame. Instead of doing complex math to calculate the absolute world coordinates of a tilted face, you snap a temporary Model Space onto that face, making it the new 'flat' ground (Z=0)."
  },
  {
    q: "According to the prescriptive design methodology, what phases follow the initial 'Problem Definition'?",
    opts: [
      {t:"Conceptual Design, where engineers brainstorm and evaluate multiple potential abstract solutions.", c:true}, 
      {t:"Detail Design, where the final selected concept is rigorously engineered and fully modeled in CAD software.", c:true}, 
      {t:"Reverse Engineering, where a competitor's product is scanned to automatically generate a functional prototype.", c:false}, 
      {t:"Market Analysis, where the financial viability of the problem definition is evaluated by the sales department.", c:false}
    ],
    exp: "<b>Concept: Prescriptive Design</b><br>The logical, textbook flow of prescriptive design is: 1) Problem Definition (identifying the need), 2) Conceptual Design (brainstorming abstract solutions), and 3) Detail Design (engineering the final concrete CAD models)."
  },
  {
    q: "Which of the following geometric and topological characteristics accurately describe a 'Polyline'?",
    opts: [
      {t:"It is composed of a collection of completely unlinked, mathematically independent straight line segments.", c:false}, 
      {t:"It acts as a single, continuous entity that can seamlessly combine both straight line segments and arc segments.", c:true}, 
      {t:"Because it is unified, the software can easily calculate its total continuous length or apply a uniform global thickness.", c:true}, 
      {t:"It represents a closed 3D surface generated by sweeping a profile around an infinite rotational axis.", c:false}
    ],
    exp: "<b>Concept: 2D Drafting</b><br>A polyline is a single, unified chain of lines and arcs. Because it is one topological entity, you can calculate its total length, give it a continuous thickness, or use it as a closed boundary for a solid 3D extrusion."
  },
  {
    q: "What is the primary engineering purpose of utilizing the 'LAYER' system within a complex 2D drafting environment?",
    opts: [
      {t:"To mathematically convert 2D planar lines into 3D volumetric solid blocks through boolean extrusion.", c:false}, 
      {t:"To logically group and stack different conceptual parts of a drawing on transparent, toggleable organizational sheets.", c:true}, 
      {t:"To allow architectural, electrical, and plumbing schematics to exist in the same file without causing overwhelming visual clutter.", c:true}, 
      {t:"To permanently merge intersecting geometric entities into a single, uneditable base layer for final printing.", c:false}
    ],
    exp: "<b>Concept: File Organization</b><br>Layers allow engineers to organize complex drawings. By placing walls on one layer and electrical wiring on another, users can toggle visibility to isolate specific systems, preventing the drawing from becoming an unreadable mess."
  },
  {
    q: "When executing dimensioning standards on an engineering drawing, what is the role of an 'extension line'?",
    opts: [
      {t:"It is the horizontal or vertical line that directly contains the numerical measurement text.", c:false}, 
      {t:"It visually extends outward from the physical edges of the part into empty space to mark the bounds of the measurement.", c:true}, 
      {t:"It ensures that dimension arrows and text are not drawn directly on top of the physical part's geometric boundaries.", c:true}, 
      {t:"It acts as an invisible boundary box that restricts the placement of subsequent dimensional annotations.", c:false}
    ],
    exp: "<b>Concept: Technical Drafting</b><br>Extension lines visually 'extend' the edges of the part out into the empty space of the drawing sheet. This allows the dimension line (the one with the arrows and text) to be drawn clearly without overlapping and obscuring the actual part geometry."
  },
  {
    q: "During the conceptual design phase, a feature is considered 'abstract' because:",
    opts: [
      {t:"It possesses significant engineering intent, but its exact geometric dimensions and tolerances are not yet finalized.", c:true}, 
      {t:"It is entirely devoid of engineering significance and is included solely for aesthetic or marketing purposes.", c:false}, 
      {t:"It represents a functional requirement (e.g., 'heat dissipation') before the physical form (e.g., 'cooling fins') is completely defined.", c:true}, 
      {t:"It physically does not exist and cannot be manufactured using traditional subtractive machining methods.", c:false}
    ],
    exp: "<b>Concept: Abstract Features</b><br>An abstract feature represents the *intent* of the design before the exact math is done. Knowing you need a 'ventilated area' is the abstract intent; engineering the exact 5mm louvers is the detailed geometric finalization."
  },
  {
    q: "Which types of 3D to 2D projections inherently create perspective distortion, where objects further from the projection plane appear smaller?",
    opts: [
      {t:"Central projections (also known as conic projections).", c:true}, 
      {t:"Parallel projections (also known as cylindrical projections).", c:false}, 
      {t:"Projections where the focal center (the eye or camera) is located at a finite distance from the object.", c:true}, 
      {t:"Isometric projections, which are heavily utilized in mechanical assembly manuals.", c:false}
    ],
    exp: "<b>Concept: 3D to 2D Projections</b><br>Central (conic) projections have a focal point at a finite distance, causing light rays to converge. This creates perspective distortion. Parallel (cylindrical/isometric) projections have an infinite focal distance, so rays remain parallel and size is preserved regardless of depth."
  },
  {
    q: "In the context of CAD-CAM integration, the critical requirement that 'no semantic information should be lost' implies:",
    opts: [
      {t:"The engineering meaning and functional attributes of features (like identifying a cylinder as an 'M6 Threaded Hole') must be transferred.", c:true}, 
      {t:"The transferred file must be heavily compressed to ensure rapid transmission across the factory's local area network.", c:false}, 
      {t:"The CAM software must receive the exact color codes and rendering textures applied by the designer in the CAD software.", c:false}, 
      {t:"The receiving system must understand the topological relationships and specific manufacturing requirements of the geometry.", c:true}
    ],
    exp: "<b>Concept: System Integration</b><br>Semantic information goes beyond dumb geometry. A cylinder is just math; an 'M6 Threaded Hole' is semantic data. If this is lost during transfer to CAM, the machine won't know it needs to use a threading tap instead of a standard drill bit."
  },
  {
    q: "Why does altering a single fundamental dimension in a complex parametric CAD model often trigger computationally heavy recalculations?",
    opts: [
      {t:"Because the software must completely rewrite the underlying graphics driver instructions to display the new color palette.", c:false}, 
      {t:"Because the software must reevaluate all mathematically linked geometric constraints and update dependent features accordingly.", c:true}, 
      {t:"Because parametric systems rely on relationships (e.g., 'this hole must remain centered'); changing the boundary forces the hole's coordinates to be recalculated.", c:true}, 
      {t:"Because the system must instantly send the updated geometric data to a connected 3D printer for verification.", c:false}
    ],
    exp: "<b>Concept: Parametric Modeling</b><br>Parametric models are webs of mathematical constraints. If you lengthen a plate, any hole constrained to be 'in the exact center' must have its absolute coordinates recalculated, and the Boolean subtraction must be re-processed to cut the hole in the new location."
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
      {t:"SMD components are significantly larger and easier for human technicians to manually solder with basic tools.", c:false}, 
      {t:"SMD components do not require physical holes to be drilled through the board, drastically reducing manufacturing costs.", c:true}, 
      {t:"SMD allows components to be densely packed on both the top and bottom surfaces of the PCB, enabling extreme miniaturization.", c:true}, 
      {t:"SMD traces are capable of handling immensely higher electrical voltages without the risk of thermal failure.", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>SMDs are glued and soldered directly to the surface pads without pins passing through the board. This eliminates drilling costs and allows both sides of the board to be covered in microscopic chips, making smartphones possible."
  },
  {
    q: "In the software environment of PCB design, the term 'Footprint' refers to:",
    opts: [
      {t:"The exact 2D geometric arrangement and sizing of the copper pads required to physically solder a specific component to the board.", c:true}, 
      {t:"The total amount of electrical wattage the component is rated to consume during peak operation.", c:false}, 
      {t:"The physical 3D height profile of the component, which is critical for calculating enclosure clearances.", c:false}, 
      {t:"The physical land pattern that must perfectly match the leads of the real-world microchip.", c:true}
    ],
    exp: "<b>Concept: PCB Design</b><br>The schematic uses logical symbols, but the 'footprint' is the exact, millimeter-perfect drawing of the copper pads on the PCB surface. If the footprint is off by a millimeter, the physical chip's legs will not align with the solder pads."
  },
  {
    q: "The Workstation Transformation step within the GKS pipeline is responsible for:",
    opts: [
      {t:"Translating purely logical 3D coordinate data into executable CNC G-code for manufacturing.", c:false}, 
      {t:"Taking device-independent Normalized Coordinates (SCN) and mathematically mapping them to Device Coordinates (SCD).", c:true}, 
      {t:"Scaling the abstract image data to match the exact physical pixel resolution grid of the active output monitor or printer.", c:true}, 
      {t:"Rotating and scaling segments within the virtual world space before they are normalized.", c:false}
    ],
    exp: "<b>Concept: GKS Pipeline</b><br>Normalized coordinates (SCN) are generic and range from 0 to 1. The Workstation Transformation must look at the specific hardware (e.g., a 1080p monitor vs a 4K laser printer) and figure out exactly which physical pixels (SCD) to illuminate."
  },
  {
    q: "How does the 'Descriptive' model of engineering design differ from the 'Prescriptive' model?",
    opts: [
      {t:"The Prescriptive model outlines a strict, idealized, linear algorithmic workflow for how design *should* occur.", c:true}, 
      {t:"The Descriptive model acknowledges the messy, iterative reality of human engineering, observing how design *actually* happens in practice.", c:true}, 
      {t:"The Descriptive model relies entirely on 2D CAD drafting, while the Prescriptive model mandates the use of 3D CSG solid modeling.", c:false}, 
      {t:"There is absolutely no functional difference; both terms are used interchangeably in modern ISO standards.", c:false}
    ],
    exp: "<b>Concept: Design Methodology</b><br>Prescriptive = 'Prescribing' a strict, textbook workflow (Problem -> Concept -> Detail). Descriptive = 'Describing' the reality of engineers jumping back and forth, guessing, generating operations, and evaluating them in rapid, non-linear cycles."
  },
  {
    q: "A cylindrical pocket milled into a solid block of aluminum is classified as a 'Manufacturing Feature' because:",
    opts: [
      {t:"It is completely devoid of any specific geometric dimensions or tolerance requirements.", c:false}, 
      {t:"Its defining characteristics (tool radius, depth limits, entry path) are directly dictated by the specific subtractive machining process used to create it.", c:true}, 
      {t:"It relies on the physical constraints of the CNC milling machine and the cutting tool geometry rather than pure abstract design intent.", c:true}, 
      {t:"It is an aesthetic feature added solely by the industrial design team to improve the product's marketability.", c:false}
    ],
    exp: "<b>Concept: Feature Classification</b><br>A pocket isn't just an abstract hole; it's defined by how the machine removes the metal. The corner radii of the pocket will perfectly match the radius of the spinning end-mill tool used to cut it, making it a true Manufacturing Feature."
  },
  {
    q: "The management philosophy of 'Continuous Learning and Improvement' (Agile/Kaizen) involves:",
    opts: [
      {t:"Establishing rigid, immutable ten-year production quotas that middle management is strictly forbidden to alter.", c:false}, 
      {t:"A highly adaptable approach where production goals and workflows are dynamically refined based on constant real-world data feedback.", c:true}, 
      {t:"Empowering teams to constantly iterate on their processes, thereby continuously elevating product quality and system efficiency.", c:true}, 
      {t:"Managing employees strictly by exceptions, ensuring that any deviation from the original static plan is aggressively punished.", c:false}
    ],
    exp: "<b>Concept: Modern Management</b><br>In fast-changing global markets, rigid 'Management by Objectives' fails catastrophically. Continuous learning ensures the enterprise constantly evolves its processes, improving quality incrementally and adapting rapidly to external market shocks."
  },
  {
    q: "The fundamental software paradigm summarized by 'Data + Operations = Object' refers to:",
    opts: [
      {t:"Legacy Procedural Programming languages such as C and Pascal.", c:false}, 
      {t:"Object-Oriented Programming (OOP) methodologies heavily utilized in modern CAD software architectures.", c:true}, 
      {t:"The encapsulation of raw static data attributes and the active methods (functions) that manipulate them into a single coherent entity.", c:true}, 
      {t:"Standard Relational Database Management Systems (RDBMS) that strictly isolate data storage from application logic.", c:false}
    ],
    exp: "<b>Concept: Software Architecture</b><br>This is the core definition of Object-Oriented software (like Java, C++, Python). Instead of separating a dumb database from the application code, OOP encapsulates the raw Data and the Operations (methods) that act upon it into a single intelligent 'Object'."
  },
  {
    q: "A fundamental difference between continuous and discrete event manufacturing is that:",
    opts: [
      {t:"Continuous manufacturing involves the unbroken flow of materials, such as pumping crude oil through a chemical refinery.", c:true}, 
      {t:"Discrete manufacturing produces distinct, countable items, such as assembling automobiles or electronic smartphones.", c:true}, 
      {t:"Discrete manufacturing relies heavily on continuous fluid dynamic equations to control the flow rate of the assembly line.", c:false}, 
      {t:"Continuous manufacturing systems are generally much easier to pause and restart without suffering massive material losses.", c:false}
    ],
    exp: "<b>Concept: Production Types</b><br>Discrete manufacturing produces distinct items (cars, screws). The automation relies on discrete events (Part arrives -> Robot moves). Continuous manufacturing deals with fluids and gasses that never stop flowing and cannot be easily paused."
  }
];
