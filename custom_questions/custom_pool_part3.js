const customPoolPart3 = [
  {
    q: "Which operations are specifically excluded from Constructive Solid Geometry (CSG)?",
    opts: [
      {t:"Extrusion (sweeping)", c:true}, 
      {t:"Skinning (lofting)", c:true}, 
      {t:"Revolving around an axis", c:true}, 
      {t:"Boolean Union", c:false}
    ],
    exp: "<b>Concept: CSG vs Sweeping</b><br>CSG strictly uses Boolean math (Union, Subtraction, Intersection) on solid primitives. Sweeping (extrusion, revolving) and skinning are entirely different B-Rep volume generation techniques."
  },
  {
    q: "A true 3D Solid Model explicitly contains:",
    opts: [
      {t:"Internal volumetric data", c:true}, 
      {t:"Information distinguishing 'inside' from 'outside'", c:true}, 
      {t:"Mass property definitions", c:true}, 
      {t:"Only 2D planar projection data", c:false}
    ],
    exp: "<b>Concept: Solid Models</b><br>Unlike 2D drafting or 3D wireframes, solid models define a watertight volume, allowing the computer to understand the inside versus outside, enabling mass and collision calculations."
  },
  {
    q: "The abbreviation 'CAPP' stands for:",
    opts: [
      {t:"Computer-Aided Process Planning", c:true}, 
      {t:"Computer-Assisted Part Programming", c:false}, 
      {t:"Calculated Automated Production Planning", c:false}, 
      {t:"Cyber-Assisted Process Parsing", c:false}
    ],
    exp: "<b>Concept: Acronyms</b><br>CAPP stands for Computer-Aided Process Planning. It serves as the vital bridge between CAD (design) and CAM (manufacturing)."
  },
  {
    q: "Which entities are considered 3D primitives in a CSG system?",
    opts: [
      {t:"Cylinder", c:true}, 
      {t:"Sphere", c:true}, 
      {t:"Rectangular Block", c:true}, 
      {t:"2D Spline curve", c:false}
    ],
    exp: "<b>Concept: CSG Primitives</b><br>CSG uses fundamental 3D volumetric building blocks. A 2D spline curve has no volume and is therefore not a solid primitive."
  },
  {
    q: "In PCB manufacturing, the exact arrangement of copper pads for a component is called a:",
    opts: [
      {t:"Footprint", c:true}, 
      {t:"Land pattern", c:true}, 
      {t:"Logical schematic symbol", c:false}, 
      {t:"Boolean intersection", c:false}
    ],
    exp: "<b>Concept: PCB Design</b><br>The footprint (also known as a land pattern) is the exact physical layout of the copper pads that match the pins of the real-world microchip."
  },
  {
    q: "Which of the following describes a Parallel (Isometric) projection?",
    opts: [
      {t:"Projection rays are perfectly parallel", c:true}, 
      {t:"The focal point is at an infinite distance", c:true}, 
      {t:"It preserves scale regardless of depth", c:true}, 
      {t:"It inherently creates perspective distortion", c:false}
    ],
    exp: "<b>Concept: Projections</b><br>Parallel projections (like Isometric) have an infinite focal distance. Rays don't converge, so objects don't shrink in the distance (no perspective distortion)."
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
    exp: "<b>Concept: 3D Modeling Types</b><br>Wireframes are just 'sticks' in 3D space with no faces. They are visually ambiguous because you can't tell which line is in front of the other. B-Rep models provide the watertight shell."
  },
  {
    q: "In an FMS (Flexible Manufacturing System), the local 'Edge' control algorithm:",
    opts: [
      {t:"Processes real-time sensor feedback", c:true}, 
      {t:"Executes microsecond movement decisions", c:true}, 
      {t:"Acts as the brain of the robotic workcell", c:true}, 
      {t:"Relies entirely on cloud latency", c:false}
    ],
    exp: "<b>Concept: Cyber-Physical Systems</b><br>Local Edge controllers must process sensor data instantly (in microseconds) to prevent robotic collisions, so they cannot rely on slow cloud server latency."
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
    exp: "<b>Concept: Design Knowledge</b><br>Standards ensure that an M8 bolt manufactured in Germany will perfectly fit an M8 nut manufactured in Japan. They deal with engineering specs, not aesthetics."
  },
  {
    q: "Which of the following correctly describes 'Surface Mount Device' (SMD) technology?",
    opts: [
      {t:"Components are densely packed", c:true}, 
      {t:"Enables extreme miniaturization", c:true}, 
      {t:"Eliminates expensive PCB drilling", c:true}, 
      {t:"Requires physical wire leads passing through holes", c:false}
    ],
    exp: "<b>Concept: Electronic Manufacturing</b><br>SMD parts are glued/soldered directly to the surface, eliminating drilling and allowing parts to be placed on both sides of the board. THT requires the wire leads."
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
    exp: "<b>Concept: Computer Integrated Manufacturing</b><br>CIM ensures that all software systems talk to each other perfectly via a shared database, breaking down traditional departmental software silos."
  },
  {
    q: "Parametric CAD systems allow designers to:",
    opts: [
      {t:"Utilize mathematical constraints", c:true}, 
      {t:"Alter a single dimension to update the entire model", c:true}, 
      {t:"Maintain logical relationships (e.g., tangency)", c:true}, 
      {t:"Automatically compile C++ microcontroller code", c:false}
    ],
    exp: "<b>Concept: Parametric Modeling</b><br>Parametric design uses variables and constraints. Updating a variable forces the CAD engine to automatically recalculate and stretch the part based on its logical rules."
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
    exp: "<b>Concept: Industrial Schematics</b><br>A P&ID is a logical flow diagram. It uses standard abstract symbols to show how pipes connect, but completely ignores true physical dimensions or 3D scale."
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
  }
];
