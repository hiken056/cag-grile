const customPoolPart2 = [
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
    q: "The Descriptive model of engineering design is characterized by:",
    opts: [
      {t:"Observing how design actually happens in practice", c:true}, 
      {t:"Acknowledging highly iterative, messy workflows", c:true}, 
      {t:"Engineers jumping rapidly between phases", c:true}, 
      {t:"A strict, idealized, linear algorithmic workflow", c:false}
    ],
    exp: "<b>Concept: Design Methodology</b><br>Prescriptive 'prescribes' a strict textbook workflow. Descriptive 'describes' the chaotic reality of human engineers jumping back and forth in rapid, non-linear cycles."
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
    exp: "<b>Concept: Modern Management</b><br>In volatile global markets, rigid long-term plans fail. Continuous learning ensures the enterprise constantly evolves its processes to improve quality incrementally."
  },
  {
    q: "The Object-Oriented software paradigm (Data + Operations = Object) relies on:",
    opts: [
      {t:"Encapsulation of attributes and methods", c:true}, 
      {t:"Combining variables and functions into one entity", c:true}, 
      {t:"Strictly isolating data storage from logic", c:false}, 
      {t:"Legacy Procedural Programming languages", c:false}
    ],
    exp: "<b>Concept: Software Architecture</b><br>OOP encapsulates raw Data and the Operations (methods) that act upon it into a single intelligent 'Object', avoiding the separation seen in older procedural systems."
  },
  {
    q: "Which of the following describes Discrete Event manufacturing?",
    opts: [
      {t:"Producing distinct, countable items", c:true}, 
      {t:"Assembling complex automobiles", c:true}, 
      {t:"Triggering actions based on sequential events", c:true}, 
      {t:"Pumping crude oil continuously", c:false}
    ],
    exp: "<b>Concept: Production Types</b><br>Discrete manufacturing produces distinct items (cars, phones). Continuous manufacturing deals with fluids and gasses that never stop flowing."
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
    q: "The Knowledge Base in an Artificial Intelligence Expert System stores:",
    opts: [
      {t:"Static geometric facts", c:true}, 
      {t:"Historical manufacturing records", c:true}, 
      {t:"Raw, uncompiled heuristics and rules", c:true}, 
      {t:"The active IF-THEN deduction processor", c:false}
    ],
    exp: "<b>Concept: Expert Systems (AI)</b><br>The Knowledge Base holds the dumb facts and raw rules. The Inference Engine is the active processor that applies those rules to solve problems."
  },
  {
    q: "In a CIM facility, the FMS (Flexible Manufacturing System) is responsible for:",
    opts: [
      {t:"Executing complex subtractive machining operations", c:true}, 
      {t:"Adapting rapidly to different product designs", c:true}, 
      {t:"Utilizing reconfigurable CNC workstations", c:true}, 
      {t:"Operating robotic warehouse cranes", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>The FMS is the actual 'factory' part that cuts the metal. It uses highly adaptable CNC machines. Warehouse cranes belong to the ASRS."
  },
  {
    q: "Why does Parametric Modeling dramatically accelerate mechanical design?",
    opts: [
      {t:"It uses mathematical constraints to govern shape", c:true}, 
      {t:"Changing one dimension updates all dependent geometry", c:true}, 
      {t:"It writes C++ code for microcontrollers", c:false}, 
      {t:"It prevents the drawing of complex splines", c:false}
    ],
    exp: "<b>Concept: Parametric Modeling</b><br>Parametric design uses variables and constraints. Updating a variable forces the CAD engine to recalculate everything, saving thousands of hours of manual redrawing."
  },
  {
    q: "An 'Extrusion' operation in 3D modeling involves:",
    opts: [
      {t:"A closed 2D geometric profile", c:true}, 
      {t:"A strictly linear, straight trajectory", c:true}, 
      {t:"Preserving the exact 2D cross-section uniformly", c:true}, 
      {t:"Revolving a profile around a central axis", c:false}
    ],
    exp: "<b>Concept: Sweeping Operations</b><br>Extrusion pulls a flat 2D shape along a perfectly straight line to give it volume, keeping the cross-section perfectly uniform. Revolving creates cylindrical shapes."
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
    q: "A Piping and Instrumentation Diagram (P&ID) differs from a 3D structural model because:",
    opts: [
      {t:"It serves strictly as a 2D logical schematic", c:true}, 
      {t:"It maps the functional flow of process fluids", c:true}, 
      {t:"It ignores real-world spatial distances", c:true}, 
      {t:"It calculates precise physical weight", c:false}
    ],
    exp: "<b>Concept: Industrial Schematics</b><br>A P&ID is a logical flow diagram, much like a subway map. It uses abstract symbols and completely ignores true physical distances or 3D weight."
  },
  {
    q: "The 'Detail Design' step in the prescriptive design phase is responsible for:",
    opts: [
      {t:"Finalizing millimeter-perfect geometric dimensions", c:true}, 
      {t:"Establishing manufacturing material specifications", c:true}, 
      {t:"Creating watertight 3D solid CAD models", c:true}, 
      {t:"Brainstorming wildly different abstract concepts", c:false}
    ],
    exp: "<b>Concept: Prescriptive Design</b><br>Detail Design is the final step where the concrete CAD models, precise tolerances, and blueprints are rigorously engineered. Brainstorming is the Conceptual phase."
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
    q: "Automated Guided Vehicle Systems (AGVS) navigate factory floors using:",
    opts: [
      {t:"Magnetic strips", c:true}, 
      {t:"Laser guidance", c:true}, 
      {t:"AI vision systems", c:true}, 
      {t:"G-code subtractive toolpaths", c:false}
    ],
    exp: "<b>Concept: Factory Hardware</b><br>AGVS consists of mobile robotic carts that use tape, lasers, or vision to navigate. G-code is for CNC milling machines, not transport carts."
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
    q: "In an AI Expert System, the Inference Engine:",
    opts: [
      {t:"Applies logical IF-THEN rules", c:true}, 
      {t:"Deduces actionable solutions from raw data", c:true}, 
      {t:"Acts as the active algorithmic processor", c:true}, 
      {t:"Stores permanent historical manufacturing records", c:false}
    ],
    exp: "<b>Concept: Expert Systems (AI)</b><br>The Inference Engine is the active code algorithm that solves complex problems. The permanent records are stored in the separate Knowledge Base."
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
    q: "Through-Hole Technology (THT) in electronics involves:",
    opts: [
      {t:"Components with physical wire leads", c:true}, 
      {t:"Inserting leads through drilled fiberglass holes", c:true}, 
      {t:"Soldering leads on the opposite side of the board", c:true}, 
      {t:"Achieving massively higher component density than SMD", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>THT is highly robust but requires physical holes to be drilled, which severely limits how densely components can be packed compared to modern Surface Mount Devices (SMD)."
  },
  {
    q: "Surface Mount Device (SMD) technology offers which manufacturing advantages?",
    opts: [
      {t:"Drastically reduced drilling costs", c:true}, 
      {t:"Components can be packed on both PCB surfaces", c:true}, 
      {t:"Extreme miniaturization of modern devices", c:true}, 
      {t:"Much easier manual soldering for human technicians", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>SMDs eliminate drilling and allow both sides of the board to be covered in microscopic chips. However, their tiny size makes manual hand-soldering incredibly difficult."
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
    q: "Which of the following are true about Homogeneous Coordinates in CAD?",
    opts: [
      {t:"They introduce a dummy 4th coordinate 'W'", c:true}, 
      {t:"They utilize a 1x4 matrix for 3D points", c:true}, 
      {t:"They allow translation via matrix multiplication", c:true}, 
      {t:"They perfectly convert 3D solids into 2D isometric drafting", c:false}
    ],
    exp: "<b>Concept: Computer Graphics Math</b><br>By adding the dummy 'W' coordinate, homogeneous coordinates allow computers to perform Translation (normally addition) as a Multiplication operation, speeding up rendering immensely."
  }
];
