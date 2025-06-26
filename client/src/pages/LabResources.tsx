import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Building, Wrench, FileText, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { EquipmentInvoice } from "@/components/EquipmentInvoice";

interface Equipment {
  id: string;
  name: string;
  description: string;
  quantity: number;
  status: "Available" | "In Use" | "Maintenance";
}

interface Lab {
  id: string;
  name: string;
  floor: string;
  building: string;
  department: string;
  equipment: Equipment[];
}

const labData: Lab[] = [
  {
    id: "chem-lab-1",
    name: "Chemistry Laboratory",
    floor: "Ground Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "chem-1",
        name: "Distillation Assembly",
        description: "Complete setup for separating liquid mixtures through distillation",
        quantity: 1,
        status: "Available"
      },
      {
        id: "chem-2",
        name: "Oil Bath with Magnetic Stirrer",
        description: "Heating bath with magnetic stirring for controlled temperature reactions",
        quantity: 1,
        status: "Available"
      },
      {
        id: "chem-3",
        name: "Weighing Balance",
        description: "Precision balance for accurate measurement of chemicals",
        quantity: 1,
        status: "Available"
      },
      {
        id: "chem-4",
        name: "Oven",
        description: "Laboratory oven for drying and heating samples",
        quantity: 1,
        status: "Available"
      },
      {
        id: "chem-5",
        name: "Ultrasound Bath",
        description: "Ultrasonic cleaning and degassing equipment",
        quantity: 1,
        status: "Available"
      },
      {
        id: "chem-6",
        name: "UV Apparatus",
        description: "Ultraviolet light equipment for photochemical reactions",
        quantity: 1,
        status: "Available"
      },
      {
        id: "chem-7",
        name: "Colorimeter",
        description: "Instrument for measuring color intensity and concentration",
        quantity: 4,
        status: "Available"
      }
    ]
  },
  {
    id: "physics-lab-1",
    name: "Physics Laboratory",
    floor: "First Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "phy-1",
        name: "Digital Oscilloscope",
        description: "Displays voltage signals as waveforms for circuit analysis",
        quantity: 10,
        status: "Available"
      },
      {
        id: "phy-2",
        name: "Function Generator",
        description: "Generates electrical waveforms for testing electronic circuits",
        quantity: 8,
        status: "Available"
      },
      {
        id: "phy-3",
        name: "Digital Multimeter",
        description: "Measures voltage, current, and resistance in electrical circuits",
        quantity: 15,
        status: "Available"
      },
      {
        id: "phy-4",
        name: "Power Supply Unit",
        description: "Provides stable DC voltage and current for experiments",
        quantity: 12,
        status: "Available"
      },
      {
        id: "phy-5",
        name: "Laser Interferometer",
        description: "Measures small displacements using laser interference patterns",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "comp-lab-1",
    name: "LAB 216",
    floor: "Second Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "comp-1",
        name: "Desktop Computers",
        description: "Programming workstations for software development and coding practice",
        quantity: 70,
        status: "Available"
      }
    ]
  },
  {
    id: "comp-lab-2",
    name: "LAB 315",
    floor: "Third Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "comp-2-1",
        name: "Desktop Computers",
        description: "Programming workstations for software development and coding practice",
        quantity: 28,
        status: "Available"
      },
      {
        id: "comp-2-2",
        name: "Projector",
        description: "Digital projector for presentations and demonstration purposes",
        quantity: 1,
        status: "Available"
      },
      {
        id: "comp-2-3",
        name: "Projector Screen",
        description: "Display screen for projector presentations and lectures",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "mech-lab-1",
    name: "Mechanical Workshop",
    floor: "Ground Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "mech-1",
        name: "CNC Lathe Machine",
        description: "Computer-controlled lathe for precision machining operations",
        quantity: 3,
        status: "Available"
      },
      {
        id: "mech-2",
        name: "3D Printer (FDM)",
        description: "Fused deposition modeling printer for rapid prototyping",
        quantity: 5,
        status: "Available"
      },
      {
        id: "mech-3",
        name: "Universal Testing Machine",
        description: "Tests tensile, compression, and bending strength of materials",
        quantity: 2,
        status: "Available"
      },
      {
        id: "mech-4",
        name: "Surface Roughness Tester",
        description: "Measures surface texture and roughness of machined parts",
        quantity: 1,
        status: "Maintenance"
      },
      {
        id: "mech-5",
        name: "Welding Equipment Set",
        description: "Arc welding, TIG welding, and MIG welding machines",
        quantity: 8,
        status: "Available"
      }
    ]
  },
  {
    id: "civil-lab-1",
    name: "Concrete Testing Laboratory",
    floor: "Ground Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "civil-1",
        name: "Compression Testing Machine",
        description: "Tests compressive strength of concrete cubes and cylinders",
        quantity: 2,
        status: "Available"
      },
      {
        id: "civil-2",
        name: "Slump Test Apparatus",
        description: "Measures workability and consistency of fresh concrete",
        quantity: 5,
        status: "Available"
      },
      {
        id: "civil-3",
        name: "Concrete Mixer",
        description: "Mixes cement, sand, aggregate, and water for concrete preparation",
        quantity: 3,
        status: "Available"
      },
      {
        id: "civil-4",
        name: "Vibrating Table",
        description: "Compacts concrete specimens for testing purposes",
        quantity: 2,
        status: "Available"
      }
    ]
  },
  {
    id: "extc-lab-1",
    name: "EXTC Lab 1 - Room 103",
    floor: "1st Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "extc-1-1",
        name: "Laboratory Equipment",
        description: "Electronics and Communication laboratory equipment",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "extc-lab-2-3",
    name: "EXTC Lab 2-3 - Room 104-105",
    floor: "1st Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "extc-2-3-1",
        name: "Laboratory Equipment",
        description: "Electronics and Communication laboratory equipment",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "extc-lab-8",
    name: "EXTC Lab 8 - Room 213",
    floor: "2nd Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "extc-8-1",
        name: "Laboratory Equipment",
        description: "Electronics and Communication laboratory equipment",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "extc-lab-9",
    name: "EXTC Lab 9 - Room 214",
    floor: "2nd Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "extc-9-1",
        name: "Laboratory Equipment",
        description: "Electronics and Communication laboratory equipment",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "biotech-lab-1",
    name: "Biotechnology Laboratory",
    floor: "Second Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "bio-1",
        name: "Autoclave",
        description: "Sterilizes laboratory equipment using high-pressure steam",
        quantity: 3,
        status: "Available"
      },
      {
        id: "bio-2",
        name: "Laminar Air Flow Hood",
        description: "Provides sterile work environment for cell culture",
        quantity: 4,
        status: "Available"
      },
      {
        id: "bio-3",
        name: "Centrifuge",
        description: "Separates particles based on density using centrifugal force",
        quantity: 6,
        status: "Available"
      },
      {
        id: "bio-4",
        name: "PCR Machine",
        description: "Amplifies DNA sequences for genetic analysis",
        quantity: 2,
        status: "Available"
      },
      {
        id: "bio-5",
        name: "Gel Electrophoresis Unit",
        description: "Separates DNA/RNA fragments by size for analysis",
        quantity: 8,
        status: "Available"
      }
    ]
  },
  {
    id: "it-lab-1",
    name: "Information Technology Lab",
    floor: "Third Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "it-1",
        name: "Network Switches (Cisco)",
        description: "Managed network switches for networking experiments",
        quantity: 12,
        status: "Available"
      },
      {
        id: "it-2",
        name: "Servers (Dell PowerEdge)",
        description: "High-performance servers for database and web applications",
        quantity: 4,
        status: "Available"
      },
      {
        id: "it-3",
        name: "Virtual Reality Headsets",
        description: "VR development and testing equipment for immersive applications",
        quantity: 6,
        status: "Available"
      },
      {
        id: "it-4",
        name: "GPU Workstations",
        description: "High-end graphics processing units for AI/ML development",
        quantity: 8,
        status: "Available"
      }
    ]
  },
  {
    id: "aids-lab-1",
    name: "AI & Data Science Laboratory",
    floor: "Fourth Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "aids-1",
        name: "Deep Learning Workstations",
        description: "NVIDIA RTX equipped systems for deep learning research",
        quantity: 15,
        status: "Available"
      },
      {
        id: "aids-2",
        name: "Data Analytics Software Suite",
        description: "Licensed software including MATLAB, SAS, and R Studio",
        quantity: 50,
        status: "Available"
      },
      {
        id: "aids-3",
        name: "Edge Computing Devices",
        description: "Raspberry Pi and Jetson Nano for edge AI deployment",
        quantity: 20,
        status: "Available"
      },
      {
        id: "aids-4",
        name: "High-Speed Data Storage",
        description: "NAS systems for big data storage and processing",
        quantity: 3,
        status: "Available"
      }
    ]
  },
  {
    id: "aiml-lab-1",
    name: "AI & Machine Learning Lab",
    floor: "Fourth Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "aiml-1",
        name: "TensorFlow Development Environment",
        description: "Pre-configured systems with TensorFlow and PyTorch frameworks",
        quantity: 25,
        status: "Available"
      },
      {
        id: "aiml-2",
        name: "Computer Vision Cameras",
        description: "High-resolution cameras for computer vision projects",
        quantity: 10,
        status: "Available"
      },
      {
        id: "aiml-3",
        name: "Neural Network Accelerators",
        description: "Specialized hardware for neural network computation",
        quantity: 8,
        status: "Available"
      },
      {
        id: "aiml-4",
        name: "Robotic Process Automation Tools",
        description: "Software and hardware for RPA development and testing",
        quantity: 12,
        status: "Available"
      }
    ]
  },
  {
    id: "iot-lab-1",
    name: "Internet of Things Laboratory",
    floor: "Second Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "iot-1",
        name: "IoT Development Kits",
        description: "ESP32, Arduino, and NodeMCU for IoT prototyping",
        quantity: 40,
        status: "Available"
      },
      {
        id: "iot-2",
        name: "Sensor Modules",
        description: "Various sensors for temperature, humidity, motion detection",
        quantity: 100,
        status: "Available"
      },
      {
        id: "iot-3",
        name: "LoRaWAN Gateway",
        description: "Long-range wireless communication gateway for IoT networks",
        quantity: 2,
        status: "Available"
      },
      {
        id: "iot-4",
        name: "Cloud Platform Access",
        description: "AWS IoT, Azure IoT Hub, and Google Cloud IoT subscriptions",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "env-lab-1",
    name: "Environmental Engineering Lab",
    floor: "Ground Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "env-1",
        name: "Water Quality Testing Kit",
        description: "Complete kit for testing pH, DO, BOD, COD in water samples",
        quantity: 8,
        status: "Available"
      },
      {
        id: "env-2",
        name: "Air Quality Monitors",
        description: "Digital monitors for measuring air pollution parameters",
        quantity: 5,
        status: "Available"
      },
      {
        id: "env-3",
        name: "Soil Testing Equipment",
        description: "Tools for soil composition and contamination analysis",
        quantity: 12,
        status: "Available"
      },
      {
        id: "env-4",
        name: "Waste Treatment Models",
        description: "Scale models for studying waste treatment processes",
        quantity: 3,
        status: "Available"
      }
    ]
  },
  {
    id: "auto-lab-1",
    name: "Automobile Engineering Lab",
    floor: "Ground Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "auto-1",
        name: "Engine Test Bed",
        description: "Complete setup for testing internal combustion engines",
        quantity: 2,
        status: "Available"
      },
      {
        id: "auto-2",
        name: "Chassis Dynamometer",
        description: "Equipment for testing vehicle performance and emissions",
        quantity: 1,
        status: "Maintenance"
      },
      {
        id: "auto-3",
        name: "Transmission Testing Unit",
        description: "Setup for analyzing gear box and transmission systems",
        quantity: 3,
        status: "Available"
      },
      {
        id: "auto-4",
        name: "Brake Testing Equipment",
        description: "Tools for testing and analyzing braking systems",
        quantity: 4,
        status: "Available"
      }
    ]
  },
  {
    id: "thermal-lab-1",
    name: "Thermal Engineering Laboratory",
    floor: "First Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "thermal-1",
        name: "Heat Exchanger Test Rig",
        description: "Equipment for studying heat transfer in various heat exchangers",
        quantity: 3,
        status: "Available"
      },
      {
        id: "thermal-2",
        name: "Refrigeration Test Setup",
        description: "Complete refrigeration cycle demonstration and testing unit",
        quantity: 2,
        status: "Available"
      },
      {
        id: "thermal-3",
        name: "Boiler Model",
        description: "Working model of steam boiler for thermodynamics studies",
        quantity: 1,
        status: "Available"
      },
      {
        id: "thermal-4",
        name: "Gas Turbine Simulator",
        description: "Computer-controlled gas turbine performance simulator",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "vlsi-lab-1",
    name: "VLSI Design Laboratory",
    floor: "Third Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "vlsi-1",
        name: "FPGA Development Boards",
        description: "Xilinx and Intel FPGA boards for digital design projects",
        quantity: 20,
        status: "Available"
      },
      {
        id: "vlsi-2",
        name: "IC Design Software",
        description: "Cadence, Synopsys, and Mentor Graphics EDA tools",
        quantity: 30,
        status: "Available"
      },
      {
        id: "vlsi-3",
        name: "Logic Analyzers",
        description: "High-speed logic analyzers for digital circuit debugging",
        quantity: 8,
        status: "Available"
      },
      {
        id: "vlsi-4",
        name: "Semiconductor Parameter Analyzer",
        description: "Equipment for characterizing semiconductor devices",
        quantity: 2,
        status: "Available"
      }
    ]
  },
  {
    id: "micro-lab-1",
    name: "Microprocessor Laboratory",
    floor: "Second Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "micro-1",
        name: "Microprocessor Trainer Kits",
        description: "8085, 8086, and ARM development trainer kits",
        quantity: 30,
        status: "Available"
      },
      {
        id: "micro-2",
        name: "Embedded Development Boards",
        description: "Various microcontroller development platforms",
        quantity: 25,
        status: "Available"
      },
      {
        id: "micro-3",
        name: "In-Circuit Emulators",
        description: "Tools for real-time debugging of embedded systems",
        quantity: 10,
        status: "Available"
      },
      {
        id: "micro-4",
        name: "Digital Signal Processors",
        description: "DSP development kits for signal processing applications",
        quantity: 15,
        status: "Available"
      }
    ]
  },
  {
    id: "survey-lab-1",
    name: "Surveying Laboratory",
    floor: "Ground Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "survey-1",
        name: "Total Station",
        description: "Electronic surveying instrument for precise measurements",
        quantity: 6,
        status: "Available"
      },
      {
        id: "survey-2",
        name: "GPS Equipment",
        description: "Global positioning system for accurate location mapping",
        quantity: 4,
        status: "Available"
      },
      {
        id: "survey-3",
        name: "Theodolite",
        description: "Precision instrument for measuring angles in surveying",
        quantity: 12,
        status: "Available"
      },
      {
        id: "survey-4",
        name: "Digital Level",
        description: "Electronic leveling instrument for height measurements",
        quantity: 8,
        status: "Available"
      }
    ]
  },
  {
    id: "struct-lab-1",
    name: "Structural Engineering Lab",
    floor: "First Floor",
    building: "",
    department: "",
    equipment: [
      {
        id: "struct-1",
        name: "Universal Loading Frame",
        description: "Testing frame for structural member testing under various loads",
        quantity: 2,
        status: "Available"
      },
      {
        id: "struct-2",
        name: "Beam Testing Machine",
        description: "Equipment for testing flexural strength of concrete beams",
        quantity: 1,
        status: "Available"
      },
      {
        id: "struct-3",
        name: "Column Testing Setup",
        description: "Machine for testing compressive strength of columns",
        quantity: 1,
        status: "Available"
      },
      {
        id: "struct-4",
        name: "Strain Gauge Data Logger",
        description: "Digital system for recording strain measurements",
        quantity: 5,
        status: "Available"
      }
    ]
  }
];

export default function LabResources() {
  const [openLabs, setOpenLabs] = useState<string[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>([]);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [requestForm, setRequestForm] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    rollNo: "",
    phone: "",
    purpose: "",
    timeline: ""
  });

  const toggleLab = (labId: string) => {
    setOpenLabs(prev => 
      prev.includes(labId) 
        ? prev.filter(id => id !== labId)
        : [...prev, labId]
    );
  };

  const addToSelection = (equipment: Equipment, lab: Lab) => {
    const equipmentWithLab = { ...equipment, labName: lab.name, labLocation: `${lab.floor}, ${lab.building}` };
    setSelectedEquipment(prev => [...prev, equipmentWithLab as any]);
  };

  const removeFromSelection = (equipmentId: string) => {
    setSelectedEquipment(prev => prev.filter(eq => eq.id !== equipmentId));
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEquipment.length === 0) return;
    setShowInvoice(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "In Use":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Maintenance":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-blue-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Laboratory Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore all available laboratory equipment and resources across TCET departments
          </motion.p>
        </div>
      </section>

      {/* Lab Resources */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Labs List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Available Laboratories ({labData.length})
              </h2>
              
              {labData.map((lab) => (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <Collapsible 
                    open={openLabs.includes(lab.id)} 
                    onOpenChange={() => toggleLab(lab.id)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="p-6 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-primary/10 text-primary rounded-lg">
                              <Building className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {lab.name}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                                <span className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {lab.floor}, {lab.building}
                                </span>
                                <span>{lab.department}</span>
                                <Badge variant="outline">
                                  {lab.equipment.length} Equipment
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {openLabs.includes(lab.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="p-6 bg-white dark:bg-gray-900">
                        <div className="grid grid-cols-1 gap-4">
                          {lab.equipment.map((equipment) => (
                            <div
                              key={equipment.id}
                              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <Wrench className="h-5 w-5 text-gray-400" />
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                      {equipment.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                      {equipment.description}
                                    </p>
                                    <div className="flex items-center space-x-3 mt-2">
                                      <Badge 
                                        className={getStatusColor(equipment.status)}
                                      >
                                        {equipment.status}
                                      </Badge>
                                      <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Qty: {equipment.quantity}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {equipment.status === "Available" && (
                                  <Button
                                    size="sm"
                                    onClick={() => addToSelection(equipment, lab)}
                                    disabled={selectedEquipment.some(eq => eq.id === equipment.id)}
                                  >
                                    {selectedEquipment.some(eq => eq.id === equipment.id) ? "Added" : "Add to Request"}
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>

            {/* Selected Equipment Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Selected Equipment ({selectedEquipment.length})
                  </h3>
                  
                  {selectedEquipment.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      No equipment selected. Browse labs and add equipment to create a resource request.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {selectedEquipment.map((equipment) => (
                        <div
                          key={equipment.id}
                          className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                {equipment.name}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {(equipment as any).labName} - {(equipment as any).labLocation}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromSelection(equipment.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <Button 
                        className="w-full mt-4"
                        disabled={selectedEquipment.length === 0}
                        onClick={() => setShowRequestForm(true)}
                      >
                        Create Resource Request
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Equipment Request Form</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Fill in your details to generate an equipment request invoice
              </p>
            </div>
            
            <form onSubmit={handleRequestSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={requestForm.name}
                    onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={requestForm.email}
                    onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                    placeholder="your.email@tcetmumbai.in"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Branch *
                  </label>
                  <Select 
                    value={requestForm.branch} 
                    onValueChange={(value) => setRequestForm({ ...requestForm, branch: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Engineering">Computer Engineering</SelectItem>
                      <SelectItem value="Information Technology">Information Technology</SelectItem>
                      <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                      <SelectItem value="AI & Data Science">AI & Data Science</SelectItem>
                      <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                      <SelectItem value="IoT">Internet of Things</SelectItem>
                      <SelectItem value="Biotechnology">Biotechnology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Academic Year *
                  </label>
                  <Select 
                    value={requestForm.year} 
                    onValueChange={(value) => setRequestForm({ ...requestForm, year: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FE">First Year (FE)</SelectItem>
                      <SelectItem value="SE">Second Year (SE)</SelectItem>
                      <SelectItem value="TE">Third Year (TE)</SelectItem>
                      <SelectItem value="BE">Final Year (BE)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Roll Number
                  </label>
                  <Input
                    value={requestForm.rollNo}
                    onChange={(e) => setRequestForm({ ...requestForm, rollNo: e.target.value })}
                    placeholder="Enter your roll number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <Input
                    value={requestForm.phone}
                    onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Timeline *
                </label>
                <Select 
                  value={requestForm.timeline} 
                  onValueChange={(value) => setRequestForm({ ...requestForm, timeline: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need the equipment?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Immediate (1-2 days)">Immediate (1-2 days)</SelectItem>
                    <SelectItem value="This week">This week</SelectItem>
                    <SelectItem value="Next week">Next week</SelectItem>
                    <SelectItem value="Within 2 weeks">Within 2 weeks</SelectItem>
                    <SelectItem value="Within a month">Within a month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Purpose of Request *
                </label>
                <Textarea
                  required
                  value={requestForm.purpose}
                  onChange={(e) => setRequestForm({ ...requestForm, purpose: e.target.value })}
                  placeholder="Describe the purpose for which you need this equipment (project, research, assignment, etc.)"
                  rows={4}
                />
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Selected Equipment ({selectedEquipment.length} items)
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 max-h-32 overflow-y-auto">
                  {selectedEquipment.map((equipment) => (
                    <div key={equipment.id} className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                      • {equipment.name} - {(equipment as any).labName}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowRequestForm(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!requestForm.name || !requestForm.email || !requestForm.branch || !requestForm.year || !requestForm.timeline || !requestForm.purpose}
                >
                  Generate Invoice
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Equipment Invoice Modal */}
      {showInvoice && (
        <EquipmentInvoice
          equipment={selectedEquipment as any}
          studentInfo={{
            name: requestForm.name,
            email: requestForm.email,
            branch: requestForm.branch,
            year: requestForm.year,
            rollNo: requestForm.rollNo,
            phone: requestForm.phone,
          }}
          purpose={requestForm.purpose}
          timeline={requestForm.timeline}
          onClose={() => {
            setShowInvoice(false);
            setShowRequestForm(false);
            setSelectedEquipment([]);
            setRequestForm({
              name: "",
              email: "",
              branch: "",
              year: "",
              rollNo: "",
              phone: "",
              purpose: "",
              timeline: ""
            });
          }}
        />
      )}
    </div>
  );
}