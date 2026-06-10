const customQuestions = [
  {
    q: "The abbreviation CAD stands for:",
    opts: [
      {t:"Computer-Aided Design", c:true}, 
      {t:"Calculated Automated Drafting", c:false}, 
      {t:"Cyber-Assisted Design", c:false}, 
      {t:"Computer-Assigned Drafting", c:false}
    ],
    exp: "<b>Concept: Acronyms</b><br>CAD stands for Computer-Aided Design."
  },
  {
    q: "Computer-Aided Engineering (CAE) primarily focuses on:",
    opts: [
      {t:"Finite Element Analysis (FEA)", c:true}, 
      {t:"Thermal and stress simulations", c:true}, 
      {t:"Kinematic testing", c:true}, 
      {t:"Generating CNC machine G-code", c:false}
    ],
    exp: "<b>Concept: CAE</b><br>CAE is used for engineering analysis and simulation (stress, heat, motion). Generating G-code is the role of CAM."
  },
  {
    q: "Which of the following describes Enterprise Resource Planning (ERP)?",
    opts: [
      {t:"Manages business processes", c:true}, 
      {t:"Handles inventory and payroll", c:true}, 
      {t:"Draws 2D architectural lines", c:false}, 
      {t:"Simulates fluid dynamics", c:false}
    ],
    exp: "<b>Concept: ERP</b><br>ERP software handles the business side of a company, such as accounting, inventory, and human resources."
  },
  {
    q: "The 'Conceptual Design' phase typically involves:",
    opts: [
      {t:"Brainstorming abstract ideas", c:true}, 
      {t:"Evaluating multiple potential solutions", c:true}, 
      {t:"Generating final manufacturing blueprints", c:false}, 
      {t:"Writing CNC toolpaths", c:false}
    ],
    exp: "<b>Concept: Design Phases</b><br>Conceptual design is the early brainstorming phase. Final blueprints and toolpaths happen in Detail Design and CAM."
  },
  {
    q: "Which of the following are true about Surface Models?",
    opts: [
      {t:"They lack internal volumetric data", c:true}, 
      {t:"They can represent complex organic curves", c:true}, 
      {t:"They inherently distinguish inside from outside", c:false}, 
      {t:"They are used to calculate part weight", c:false}
    ],
    exp: "<b>Concept: 3D Modeling Types</b><br>Surface models are infinitely thin skins. Because they lack volume, you cannot calculate mass or weight with them."
  },
  {
    q: "Parametric constraints in CAD include:",
    opts: [
      {t:"Parallelism", c:true}, 
      {t:"Tangency", c:true}, 
      {t:"Coincidence", c:true}, 
      {t:"Pixel resolution", c:false}
    ],
    exp: "<b>Concept: Parametric Design</b><br>Constraints are mathematical rules (like keeping two lines parallel) that govern the sketch geometry."
  },
  {
    q: "Geometric Translation involves:",
    opts: [
      {t:"Sliding points linearly through space", c:true}, 
      {t:"Shifting coordinates by a fixed distance", c:true}, 
      {t:"Altering the physical size of the object", c:false}, 
      {t:"Orbiting around a central axis", c:false}
    ],
    exp: "<b>Concept: Transformations</b><br>Translation is simply moving an object from one location to another without changing its size (scaling) or rotation."
  },
  {
    q: "Computer-Aided Process Planning (CAPP) serves as the bridge between:",
    opts: [
      {t:"CAD and CAM", c:true}, 
      {t:"Design and Manufacturing", c:true}, 
      {t:"Marketing and Sales", c:false}, 
      {t:"Human Resources and Payroll", c:false}
    ],
    exp: "<b>Concept: CAPP</b><br>CAPP translates the CAD design into a manufacturing plan (CAM), detailing the exact steps needed to build the part."
  },
  {
    q: "A Bill of Materials (BOM) contains:",
    opts: [
      {t:"A comprehensive list of required components", c:true}, 
      {t:"Raw material quantities", c:true}, 
      {t:"Sub-assemblies needed for the final product", c:true}, 
      {t:"Photorealistic rendering textures", c:false}
    ],
    exp: "<b>Concept: Manufacturing Documents</b><br>The BOM is essentially the 'recipe' list of everything needed to physically build the product."
  },
  {
    q: "Which operations are specifically excluded from Constructive Solid Geometry (CSG)?",
    opts: [
      {t:"Extrusion (sweeping)", c:true}, 
      {t:"Skinning (lofting)", c:true}, 
      {t:"Revolving around an axis", c:true}, 
      {t:"Boolean Union", c:false}
    ],
    exp: "<b>Concept: CSG vs Sweeping</b><br>CSG strictly uses Boolean math (Union, Subtraction, Intersection) on solid primitives. Sweeping and lofting are B-Rep techniques."
  },
  {
    q: "A true 3D Solid Model explicitly contains:",
    opts: [
      {t:"Internal volumetric data", c:true}, 
      {t:"Information distinguishing 'inside' from 'outside'", c:true}, 
      {t:"Mass property definitions", c:true}, 
      {t:"Only 2D planar projection data", c:false}
    ],
    exp: "<b>Concept: Solid Models</b><br>Unlike 2D drafting or 3D wireframes, solid models define a watertight volume, enabling mass and collision calculations."
  },
  {
    q: "Which entities are considered 3D primitives in a CSG system?",
    opts: [
      {t:"Cylinder", c:true}, 
      {t:"Sphere", c:true}, 
      {t:"Rectangular Block", c:true}, 
      {t:"2D Spline curve", c:false}
    ],
    exp: "<b>Concept: CSG Primitives</b><br>CSG uses fundamental 3D volumetric building blocks. A 2D spline curve has no volume and is therefore not a primitive."
  },
  {
    q: "In PCB manufacturing, the exact arrangement of copper pads for a component is called a:",
    opts: [
      {t:"Footprint", c:true}, 
      {t:"Land pattern", c:true}, 
      {t:"Logical schematic symbol", c:false}, 
      {t:"Boolean intersection", c:false}
    ],
    exp: "<b>Concept: PCB Design</b><br>The footprint is the exact physical layout of the copper pads that match the pins of the real-world microchip."
  },
  {
    q: "Which of the following describes a Parallel (Isometric) projection?",
    opts: [
      {t:"Projection rays are perfectly parallel", c:true}, 
      {t:"The focal point is at an infinite distance", c:true}, 
      {t:"It preserves scale regardless of depth", c:true}, 
      {t:"It inherently creates perspective distortion", c:false}
    ],
    exp: "<b>Concept: Projections</b><br>Parallel projections have an infinite focal distance. Rays don't converge, so objects don't shrink in the distance (no perspective distortion)."
  },
  {
    q: "The term 'Semantic Information' in CAD refers to:",
    opts: [
      {t:"Engineering meaning beyond pure math", c:true}, 
      {t:"Identifying a cylinder as a 'Threaded Hole'", c:true}, 
      {t:"Functional attributes and tolerances", c:true}, 
      {t:"The specific color of a rendered pixel", c:false}
    ],
    exp: "<b>Concept: Semantic Data</b><br>Semantic information gives meaning to the math. A 5mm cylinder is just geometry; tagging it as an 'M5 tapped hole' is semantic data."
  },
  {
    q: "What defines an Expert System's 'Knowledge Base'?",
    opts: [
      {t:"It stores static geometric facts", c:true}, 
      {t:"It archives historical manufacturing records", c:true}, 
      {t:"It contains raw IF-THEN heuristic rules", c:true}, 
      {t:"It actively executes algorithmic deductions", c:false}
    ],
    exp: "<b>Concept: AI Systems</b><br>The Knowledge Base is the storage warehouse for facts and rules. The Inference Engine is what actively executes and deduces."
  },
  {
    q: "The GKS acronym 'SCD' stands for:",
    opts: [
      {t:"System Coordinates Device", c:true}, 
      {t:"System Coordinates Device-independent", c:false}, 
      {t:"System Coordinates Real", c:false}, 
      {t:"Screen Coordinate Data", c:false}
    ],
    exp: "<b>Concept: GKS Pipeline</b><br>SCD is System Coordinates Device, representing the actual, final physical pixels on the specific hardware monitor or printer."
  },
  {
    q: "Which of the following are true about 'Wireframe Models'?",
    opts: [
      {t:"They lack mathematical surface definitions", c:true}, 
      {t:"They are inherently visually ambiguous", c:true}, 
      {t:"They are composed entirely of edges and vertices", c:true}, 
      {t:"They define a completely watertight topological shell", c:false}
    ],
    exp: "<b>Concept: 3D Modeling Types</b><br>Wireframes are just 'sticks' in 3D space with no faces. They are visually ambiguous because you can't tell which line is in front of the other."
  },
  {
    q: "In an FMS (Flexible Manufacturing System), the local 'Edge' control algorithm:",
    opts: [
      {t:"Processes real-time sensor feedback", c:true}, 
      {t:"Executes microsecond movement decisions", c:true}, 
      {t:"Acts as the brain of the robotic workcell", c:true}, 
      {t:"Relies entirely on cloud latency", c:false}
    ],
    exp: "<b>Concept: Cyber-Physical Systems</b><br>Local Edge controllers must process sensor data instantly (in microseconds) to prevent robotic collisions, avoiding slow cloud server latency."
  },
  {
    q: "A B-Rep model mathematically defines:",
    opts: [
      {t:"A watertight topological shell", c:true}, 
      {t:"Connected faces, edges, and vertices", c:true}, 
      {t:"The outer skin of a 3D volume", c:true}, 
      {t:"Only 2D center lines", c:false}
    ],
    exp: "<b>Concept: B-Rep</b><br>Boundary Representation builds a solid by perfectly stitching together an outer skin (boundary) made of topological faces and edges."
  },
  {
    q: "Why are standard ISO/DIN specifications critical for engineering?",
    opts: [
      {t:"They provide pre-verified technical data", c:true}, 
      {t:"They guarantee interoperability between suppliers", c:true}, 
      {t:"They ensure structural safety", c:true}, 
      {t:"They mandate specific aesthetic styling", c:false}
    ],
    exp: "<b>Concept: Design Knowledge</b><br>Standards ensure that an M8 bolt manufactured in Germany will perfectly fit an M8 nut manufactured in Japan."
  },
  {
    q: "Which of the following correctly describes 'Surface Mount Device' (SMD) technology?",
    opts: [
      {t:"Components are densely packed", c:true}, 
      {t:"Enables extreme miniaturization", c:true}, 
      {t:"Eliminates expensive PCB drilling", c:true}, 
      {t:"Requires physical wire leads passing through holes", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>SMD parts are glued/soldered directly to the surface, eliminating drilling and allowing parts to be placed on both sides of the board."
  },
  {
    q: "A 'Discrete Event' manufacturing process typically produces:",
    opts: [
      {t:"Automobiles", c:true}, 
      {t:"Electronic smartphones", c:true}, 
      {t:"Machined screws", c:true}, 
      {t:"Pumped crude oil", c:false}
    ],
    exp: "<b>Concept: Production Types</b><br>Discrete manufacturing creates distinct, countable objects. Crude oil is a continuous fluid process."
  },
  {
    q: "In the acronym CIM, the 'Integrated' aspect signifies:",
    opts: [
      {t:"Networking CAD, CAM, and CAPP into a unified pipeline", c:true}, 
      {t:"Seamlessly sharing semantic engineering metadata", c:true}, 
      {t:"Eliminating isolated software silos", c:true}, 
      {t:"Integrating humans onto a massive conveyor belt", c:false}
    ],
    exp: "<b>Concept: Computer Integrated Manufacturing</b><br>CIM ensures that all software systems talk to each other perfectly via a shared database."
  },
  {
    q: "Parametric CAD systems allow designers to:",
    opts: [
      {t:"Utilize mathematical constraints", c:true}, 
      {t:"Alter a single dimension to update the entire model", c:true}, 
      {t:"Maintain logical relationships (e.g., tangency)", c:true}, 
      {t:"Automatically compile C++ microcontroller code", c:false}
    ],
    exp: "<b>Concept: Parametric Modeling</b><br>Parametric design uses variables and constraints. Updating a variable forces the CAD engine to recalculate the part based on its logical rules."
  },
  {
    q: "The Descriptive model of design explicitly acknowledges:",
    opts: [
      {t:"The messy reality of human engineering", c:true}, 
      {t:"Highly iterative workflows", c:true}, 
      {t:"Rapid cycle evaluation of sub-solutions", c:true}, 
      {t:"A strictly linear, non-repeating workflow", c:false}
    ],
    exp: "<b>Concept: Design Methodology</b><br>The Prescriptive model is the strict, linear textbook approach. The Descriptive model describes the actual, chaotic, iterative reality."
  },
  {
    q: "Which of the following are examples of Homogeneous Coordinates applied in CAD?",
    opts: [
      {t:"Introducing a dummy 'W' coordinate", c:true}, 
      {t:"Using a 1x4 coordinate matrix", c:true}, 
      {t:"Combining Translation and Rotation via multiplication", c:true}, 
      {t:"Generating CNC toolpaths", c:false}
    ],
    exp: "<b>Concept: Computer Graphics Math</b><br>Homogeneous coordinates use a 4th dummy variable (1x4 matrix) to trick the math into performing Translation via Multiplication, vastly speeding up 3D rendering."
  },
  {
    q: "Automated Guided Vehicles (AGVs) navigate using:",
    opts: [
      {t:"Floor-embedded magnetic strips", c:true}, 
      {t:"Laser guidance systems", c:true}, 
      {t:"AI vision cameras", c:true}, 
      {t:"CNC subtractive G-code", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>AGVs are robotic carts that navigate via lasers, tape, or vision. They do not cut metal, so they do not use G-code."
  },
  {
    q: "What differentiates a P&ID (Piping and Instrumentation Diagram) from a standard CAD model?",
    opts: [
      {t:"It is a 2D logical schematic", c:true}, 
      {t:"It uses standardized abstract symbols", c:true}, 
      {t:"It ignores real-world spatial distances", c:true}, 
      {t:"It calculates precise volumetric weight", c:false}
    ],
    exp: "<b>Concept: Industrial Schematics</b><br>A P&ID is a logical flow diagram. It uses standard abstract symbols to show how pipes connect, but ignores true physical dimensions or 3D scale."
  },
  {
    q: "The 'Inference Engine' in an Expert System serves to:",
    opts: [
      {t:"Act as the active algorithmic processor", c:true}, 
      {t:"Deduce actionable solutions", c:true}, 
      {t:"Apply logical IF-THEN rules to raw data", c:true}, 
      {t:"Permanently archive historical geometric facts", c:false}
    ],
    exp: "<b>Concept: Expert Systems (AI)</b><br>The Inference Engine is the active brain that processes rules. The Knowledge Base is the permanent archive."
  },
  {
    q: "The ASRS (Automated Storage and Retrieval System) is characterized by:",
    opts: [
      {t:"Autonomous robotic warehouse cranes", c:true}, 
      {t:"Managing raw material inventory", c:true}, 
      {t:"Handing off supply bins to AGVs", c:true}, 
      {t:"Executing complex milling operations", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>ASRS is strictly a robotic warehouse system that fetches materials. It does not perform any subtractive machining."
  },
  {
    q: "Through-Hole Technology (THT) involves:",
    opts: [
      {t:"Components with physical wire leads", c:true}, 
      {t:"Inserting pins through drilled fiberglass holes", c:true}, 
      {t:"High mechanical robustness", c:true}, 
      {t:"Gluing microscopic parts directly to the surface", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>THT uses wire leads passing through drilled holes. Gluing microscopic parts to the surface is the definition of SMD."
  },
  {
    q: "An 'Extrusion' sweeping operation perfectly preserves:",
    opts: [
      {t:"The exact original 2D cross-section", c:true}, 
      {t:"Uniform volumetric height", c:true}, 
      {t:"The shape along a straight linear trajectory", c:true}, 
      {t:"A completely symmetrical cylindrical shape", c:false}
    ],
    exp: "<b>Concept: Sweeping Operations</b><br>Extrusion pulls a flat shape in a straight line, preserving its cross-section uniformly. Revolving creates cylindrical symmetry."
  },
  {
    q: "The Workstation Transformation in the GKS pipeline maps:",
    opts: [
      {t:"Normalized Coordinates (SCN) to Device Coordinates (SCD)", c:true}, 
      {t:"Device-independent data to physical pixels", c:true}, 
      {t:"System Coordinates Real (SCR) directly to SCD", c:false}, 
      {t:"3D CAD models to CNC G-code", c:false}
    ],
    exp: "<b>Concept: GKS Workstation Transformation</b><br>The Workstation Transformation looks at the specific hardware (monitor/printer) and scales the 0-1 Normalized Coordinates (SCN) into physical pixels (SCD)."
  },
  {
    q: "A cylindrical pocket milled into a block is a 'Manufacturing Feature' because:",
    opts: [
      {t:"Its corner radii match the spinning cutting tool", c:true}, 
      {t:"Its geometry is dictated by the CNC milling path", c:true}, 
      {t:"It represents abstract, non-physical design intent", c:false}, 
      {t:"It is devoid of engineering significance", c:false}
    ],
    exp: "<b>Concept: Feature Classification</b><br>Manufacturing features are defined by how the machine removes the metal. A pocket's shape is a direct byproduct of the specific subtractive tool used."
  },
  {
    q: "The management philosophy of 'Continuous Learning' (Kaizen/Agile) involves:",
    opts: [
      {t:"Dynamically refining goals based on feedback", c:true}, 
      {t:"Empowering teams to iterate on processes", c:true}, 
      {t:"Continuously elevating product quality", c:true}, 
      {t:"Establishing immutable ten-year quotas", c:false}
    ],
    exp: "<b>Concept: Modern Management</b><br>In volatile global markets, rigid long-term plans fail. Continuous learning ensures the enterprise constantly evolves its processes."
  },
  {
    q: "The Object-Oriented software paradigm (Data + Operations = Object) relies on:",
    opts: [
      {t:"Encapsulation of attributes and methods", c:true}, 
      {t:"Combining variables and functions into one entity", c:true}, 
      {t:"Strictly isolating data storage from logic", c:false}, 
      {t:"Legacy Procedural Programming languages", c:false}
    ],
    exp: "<b>Concept: Software Architecture</b><br>OOP encapsulates raw Data and the Operations (methods) that act upon it into a single intelligent 'Object'."
  },
  {
    q: "An 'Abstract Feature' in the conceptual phase represents:",
    opts: [
      {t:"Functional engineering intent", c:true}, 
      {t:"A requirement whose exact geometry is not yet finalized", c:true}, 
      {t:"An aesthetic placeholder without engineering value", c:false}, 
      {t:"A mathematically perfect B-Rep solid", c:false}
    ],
    exp: "<b>Concept: Abstract Features</b><br>An abstract feature represents intent (e.g., 'we need a ventilated area') before the exact math and dimensions of the louvers are finalized."
  },
  {
    q: "A typical 2D architectural layer system helps engineers by:",
    opts: [
      {t:"Logically grouping distinct conceptual parts", c:true}, 
      {t:"Isolating electrical wiring from plumbing", c:true}, 
      {t:"Preventing overwhelming visual clutter", c:true}, 
      {t:"Converting 2D lines into 3D volumetric solids", c:false}
    ],
    exp: "<b>Concept: File Organization</b><br>Layers allow engineers to toggle visibility to isolate specific systems (like turning off the plumbing lines to focus on the walls)."
  },
  {
    q: "The 'Detail Design' step in the prescriptive design phase is responsible for:",
    opts: [
      {t:"Finalizing millimeter-perfect geometric dimensions", c:true}, 
      {t:"Establishing manufacturing material specifications", c:true}, 
      {t:"Creating watertight 3D solid CAD models", c:true}, 
      {t:"Brainstorming wildly different abstract concepts", c:false}
    ],
    exp: "<b>Concept: Prescriptive Design</b><br>Detail Design is the final step where the concrete CAD models, precise tolerances, and blueprints are rigorously engineered."
  },
  {
    q: "Concurrent Engineering is considered superior to sequential engineering because:",
    opts: [
      {t:"Manufacturing engineers collaborate from day one", c:true}, 
      {t:"It drastically reduces costly late-stage redesigns", c:true}, 
      {t:"It ensures manufacturability is addressed early", c:true}, 
      {t:"It requires significantly longer lead times", c:false}
    ],
    exp: "<b>Concept: Modern Management</b><br>By having manufacturing engineers review CAD models during the conceptual phase, the company avoids designing parts that are physically impossible to build."
  },
  {
    q: "The GKS acronym 'SCR' represents:",
    opts: [
      {t:"System Coordinates Real", c:true}, 
      {t:"Continuous 3D world space coordinates", c:true}, 
      {t:"Device-independent geometric data before scaling", c:true}, 
      {t:"System Coordinates Normalized", c:false}
    ],
    exp: "<b>Concept: GKS Pipeline</b><br>SCR (System Coordinates Real) is the actual mathematical world-space coordinates before they are normalized to a 0-1 scale."
  },
  {
    q: "The 'internal factors' that determine an enterprise's overall adaptability include:",
    opts: [
      {t:"The modernity of the internal technology stack", c:true}, 
      {t:"The agility of the management structure", c:true}, 
      {t:"Corporate decision-making hierarchy", c:true}, 
      {t:"Sudden shifts in international trade laws", c:false}
    ],
    exp: "<b>Concept: Enterprise Management</b><br>Internal factors are things the company directly controls. Trade laws, competitors, and market demands are external factors."
  },
  {
    q: "Transitioning a GKS workstation to 'Workstation Active' enables it to:",
    opts: [
      {t:"Actively receive graphical output primitives", c:true}, 
      {t:"Render incoming data to the display screen", c:true}, 
      {t:"Fully hook into the active GKS pipeline", c:true}, 
      {t:"Permanently lock all open segments", c:false}
    ],
    exp: "<b>Concept: GKS States</b><br>When a workstation is merely 'Open', it is powered on but sitting in standby. It must be transitioned to 'Workstation Active' to actually listen to the pipeline and begin drawing."
  },
  {
    q: "Geometric scaling transformations alter a segment by:",
    opts: [
      {t:"Applying a multiplicative factor to coordinate matrices", c:true}, 
      {t:"Fundamentally changing the object's physical size", c:true}, 
      {t:"Linearly sliding points through Cartesian space", c:false}, 
      {t:"Orbiting coordinate points around a central axis", c:false}
    ],
    exp: "<b>Concept: Geometric Transformations</b><br>Scaling mathematically stretches or shrinks the object. Translation slides it linearly, and Rotation orbits it."
  },
  {
    q: "Feature Recognition in a CAPP system involves:",
    opts: [
      {t:"Scanning pure topological CAD geometry", c:true}, 
      {t:"Logically identifying distinct manufacturing features", c:true}, 
      {t:"Translating abstract geometry into semantic meaning", c:true}, 
      {t:"Manual typing of descriptive alphanumeric tags", c:false}
    ],
    exp: "<b>Concept: CAPP & Feature Recognition</b><br>Algorithms scan the dumb faces and edges of a CAD model to detect topological patterns, automatically tagging a cylindrical void as a semantic 'machinable hole'."
  },
  {
    q: "Which of the following are examples of synthetic curves?",
    opts: [
      {t:"Bezier curve", c:true}, 
      {t:"B-spline curve", c:true}, 
      {t:"Perfect circle", c:false}, 
      {t:"Parabola", c:false}
    ],
    exp: "<b>Concept: Curves</b><br>Bezier and B-splines are synthetic curves generated by control points. Circles and parabolas are analytical curves defined by simple equations."
  },
  {
    q: "Constructive Solid Geometry (CSG) utilizes which of the following Boolean operations?",
    opts: [
      {t:"Union", c:true}, 
      {t:"Subtraction", c:true}, 
      {t:"Intersection", c:true}, 
      {t:"Extrusion", c:false}
    ],
    exp: "<b>Concept: CSG</b><br>CSG exclusively uses the Boolean operations Union, Subtraction, and Intersection to combine primitive shapes. Extrusion is a sweeping operation."
  },
  {
    q: "Industry 4.0 is characterized by the use of:",
    opts: [
      {t:"Cyber-Physical Systems (CPS)", c:true}, 
      {t:"Internet of Things (IoT)", c:true}, 
      {t:"Cloud Computing", c:true}, 
      {t:"Steam-powered mechanization", c:false}
    ],
    exp: "<b>Concept: Industry 4.0</b><br>Industry 4.0 revolves around digital integration (CPS, IoT, Cloud). Steam power was the First Industrial Revolution."
  },
  {
    q: "According to the prescriptive design methodology, the primary phases include:",
    opts: [
      {t:"Problem Definition", c:true}, 
      {t:"Conceptual Design", c:true}, 
      {t:"Detail Design", c:true}, 
      {t:"Manufacturing", c:false}
    ],
    exp: "<b>Concept: Prescriptive Design</b><br>The three core phases are Problem Definition, Conceptual Design, and Detail Design. Manufacturing occurs after the design phase."
  }
];
