const projects = [
  {
    id: 1,
    title: "Gazimağusa Municipality Smart City Application",
    summary:
      "A mobile application created for Gazimağusa Municipality to make municipal information, services, and useful city resources more accessible through a single digital platform.",
    contribution:
      "During my internship, I worked on the application’s front-end and mobile interface, developing reusable React Native components and improving navigation, screen structure, responsiveness, and visual consistency.",
    outcome:
      "The project brought together multilingual support, live weather data, interactive galleries, service pages, and citizen-focused features within a clearer and more consistent application experience.",
    tech: "React Native, Expo, JavaScript, React Navigation, REST API Integration, i18n",
    github: "",
    demo: "",
    featured: true,
  },

  {
    id: 2,
    title: "Quadcopter Motion Control System",
    summary:
      "A Unity-based quadcopter simulation developed to explore motion control, numerical integration, and software execution under soft real-time constraints.",
    contribution:
      "My contribution focused on planning and conducting unit and integration tests across the physics, control, collision, and interface components, as well as evaluating and documenting the system’s results.",
    outcome:
      "The completed system coordinated simulation, user controls, and first- and third-person visualization while maintaining its targeted 20 Hz update cycle.",
    tech: "Unity, C#, Real-Time Systems, PID Control, Euler & RK4 Integration, Software Testing",
    github: "",
    demo: "",
    featured: true,
  },

  {
    id: 3,
    title: "DigiTerm-05 Incubator Controller",
    summary:
      "An embedded incubator-control prototype designed to regulate and monitor air and infant skin temperature through an Arduino-based controller and a high-level monitoring interface.",
    contribution:
      "My contribution focused on interpreting the design requirements, converting NTC thermistor readings through the Arduino’s ADC, calibrating sensor and system parameters, and supporting the testing and documentation of the integrated design.",
    outcome:
      "The simulated prototype brought together temperature sensing, proportional control, PWM heater regulation, safety alarms, LCD output, and UART-based communication with a Node-RED dashboard.",
    tech: "Arduino, Embedded C/C++, Proteus, Scilab/Xcos, Node-RED, UART Communication",
    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 4,
    title: "DES in ECB Mode of Operation",
    summary:
      "A cryptography project focused on applying the Data Encryption Standard to fixed-size data blocks using Electronic Codebook mode.",
    contribution:
      "My work involved implementing the encryption process at bit level, including the required permutations, key transformations, substitutions, and repeated Feistel rounds.",
    outcome:
      "The completed implementation demonstrated how plaintext is transformed across the DES pipeline and produced consistent encrypted output across the prepared test cases.",
    tech: "DES, ECB Mode, Cryptography, Bitwise Operations, Algorithm Design",
    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 5,
    title: "Website Testing – METU Northern Cyprus Campus",
    summary:
      "A software-testing project evaluating the METU Northern Cyprus Campus website from functional, usability, and interface-consistency perspectives.",
    contribution:
      "I prepared and executed structured test cases, examined navigation and interface behavior under different scenarios, and documented identified issues in organized bug reports.",
    outcome:
      "The evaluation produced a clear record of defects and usability observations, strengthening my practical understanding of systematic testing and evidence-based reporting.",
    tech: "Functional Testing, Usability Testing, Test Case Design, Bug Reporting",
    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 6,
    title: "Organized Waste Disposal System",
    summary:
      "A team-based system-design project exploring how waste-disposal activities and information flow could be coordinated through a structured software solution.",
    contribution:
      "My role combined lead programming and network design, with responsibility for planning communication between system components and coordinating the project’s core application logic.",
    outcome:
      "The project strengthened my experience in translating system requirements into a connected architecture while collaborating across technical responsibilities within a team.",
    tech: "System Design, Network Architecture, Application Logic",
    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 7,
    title: "Personal Portfolio Website",
    summary:
      "A responsive portfolio website created to present my technical background, projects, experience, and professional interests in one cohesive digital space.",
    contribution:
      "I designed and developed the site with reusable React components, data-driven project rendering, responsive layouts, and consistent interactive states across its sections.",
    outcome:
      "The result is a maintainable and continuously evolving portfolio that demonstrates both my current front-end skills and the progression of my software engineering work.",
    tech: "React, Vite, JavaScript, CSS, Responsive Web Design",
    github: "https://github.com/melisamhrbglu/melisa-portfolio",
    demo: "https://melisamhrbglu.github.io/melisa-portfolio/",
    featured: true,
  },

  {
    id: 8,
    title: "Online Second-Hand Book Shop",
    summary:
      "A browser-based shopping interface designed to make second-hand book listings easier to browse and explore.",
    contribution:
      "I developed the interface with product listings, filtering logic, interactive behavior, and reusable page elements using core web technologies.",
    outcome:
      "The project produced a functional front-end experience and strengthened my understanding of organizing dynamic content and user interactions in a web application.",
    tech: "JavaScript, HTML, CSS, Responsive UI",
    github: "",
    demo: "",
    featured: false,
  },

  {
    id: 9,
    title: "GPU-Accelerated Handwriting Recognition",
    summary:
      "An academic artificial intelligence project exploring GPU-accelerated model training and handwriting recognition using PyTorch and Hugging Face tools.",
    contribution:
      "I implemented and evaluated CNN training workflows on the MNIST dataset, compared CPU and GPU execution, and experimented with batching, mixed-precision training, profiling, and handwritten-text inference.",
    outcome:
      "The project provided practical experience in evaluating AI workloads and understanding how GPU execution and training optimizations affect processing speed, memory usage, and throughput.",
    tech:
      "Python, PyTorch, CUDA, CNN, MNIST, Hugging Face Transformers, TrOCR",
    github: "",
    demo: "",
    featured: false,
    category: "ai-coursework",
    course: "AING214",
  },

  {
  id: 10,
  title: "Smart Assistant Plugin System",
  summary:
    "A modular Python assistant system designed to register, configure, and execute commands dynamically through an extensible plugin architecture.",
  contribution:
    "I implemented a command registry using first-class and higher-order functions, added logging and authentication decorators, created preconfigured commands with partial application, and used a metaclass to automatically register and validate plugins.",
  outcome:
    "The completed system demonstrated how advanced Python features can be combined to create reusable commands, controlled execution behavior, and an architecture that can be extended with new assistant plugins.",
  tech:
    "Python, Functional Programming, Decorators, Higher-Order Functions, Partial Application, Metaclasses, Plugin Architecture",
  github: "",
  demo: "",
  featured: false,
  category: "ai-coursework",
  course: "AING214",
},

{
  id: 11,
  title: "Concurrent Disaster Response Simulation",
  summary:
    "A Python-based disaster-response simulation coordinating multiple specialized rescue robots through concurrent mission execution.",
  contribution:
    "I modeled fire, medical, and drone rescue operations, implemented custom object behavior through operator overloading, used multithreading to execute missions concurrently, and added custom exceptions to handle invalid energy levels and mission failures.",
  outcome:
    "The completed simulation coordinated simultaneous robot missions, maintained individual energy and status information, handled failures without crashing the system, and produced a final mission summary after all threads completed.",
  tech:
    "Python, Object-Oriented Programming, Multithreading, Operator Overloading, Exception Handling, Concurrent Programming",
  github: "",
  demo: "",
  featured: false,
  category: "ai-coursework",
  course: "AING214",
},

{
  id: 12,
  title: "TF-IDF News Search Engine",
  summary:
    "An interactive text-retrieval application designed to rank relevant news articles in response to a user’s search query.",
  contribution:
    "I prepared a sample of the AG News dataset, implemented text preprocessing and TF-IDF vectorization, calculated cosine similarity between queries and article vectors, and developed a top-k document retrieval workflow.",
  outcome:
    "The completed system returned ranked news articles with similarity scores and provided an interactive Streamlit interface for entering queries and controlling the number of displayed results.",
  tech:
    "Python, Pandas, Scikit-learn, TF-IDF, Cosine Similarity, Hugging Face Datasets, Streamlit",
  github: "",
  demo: "",
  featured: false,
  category: "ai-coursework",
  course: "AING364",
},

{
  id: 13,
  title: "Distributed PCA and K-Means Analytics",
  summary:
    "A distributed machine-learning workflow exploring dimensionality reduction and unsupervised clustering within a containerized Apache Spark environment.",
  contribution:
    "I applied PCA with different component counts, examined reconstruction and explained-variance behavior, performed K-Means clustering with multiple cluster configurations, and compared the resulting silhouette scores and centroids.",
  outcome:
    "The experiments demonstrated how Spark MLlib distributes machine-learning workloads and how PCA dimensions and cluster-count selection influence representation quality and clustering performance.",
  tech:
    "Python, PySpark, Apache Spark, Spark MLlib, PCA, K-Means, Docker, Unsupervised Learning",
  github: "",
  demo: "",
  featured: false,
  category: "ai-coursework",
  course: "AING364",
},

{
  id: 14,
  title: "QLoRA Fine-Tuned Language Model",
  summary:
    "A GPU-based language-model adaptation project using parameter-efficient fine-tuning to specialize a quantized open-source LLM on instruction-response data.",
  contribution:
    "I prepared and tokenized instruction data, loaded TinyLlama with 4-bit quantization, configured LoRA adapters, trained the model with Hugging Face tools, and evaluated its training and validation behavior through loss and perplexity.",
  outcome:
    "The completed workflow produced lightweight LoRA adapters, supported prompt-based inference with the fine-tuned model, and exposed the model through a local Gradio chat interface.",
  tech:
    "Python, PyTorch, Hugging Face Transformers, TinyLlama, QLoRA, PEFT, BitsAndBytes, CUDA, Gradio",
  github: "",
  demo: "",
  featured: false,
  category: "ai-coursework",
  course: "AING364",
},

];

export default projects;
