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
    building: "Main Building",
    department: "Applied Sciences",
    equipment: [
      {
        id: "chem-1",
        name: "Digital pH Meter",
        description: "Measures acidity and alkalinity of solutions with high precision",
        quantity: 5,
        status: "Available"
      },
      {
        id: "chem-2",
        name: "Spectrophotometer",
        description: "Analyzes light absorption to determine concentration of substances",
        quantity: 2,
        status: "Available"
      },
      {
        id: "chem-3",
        name: "Analytical Balance",
        description: "High-precision weighing instrument for chemical analysis",
        quantity: 8,
        status: "Available"
      },
      {
        id: "chem-4",
        name: "Fume Hood",
        description: "Ventilated enclosure for safe handling of hazardous chemicals",
        quantity: 4,
        status: "Available"
      },
      {
        id: "chem-5",
        name: "Rotary Evaporator",
        description: "Removes solvents from samples through evaporation under reduced pressure",
        quantity: 1,
        status: "In Use"
      }
    ]
  },
  {
    id: "physics-lab-1",
    name: "Physics Laboratory",
    floor: "First Floor",
    building: "Main Building",
    department: "Applied Sciences",
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
    name: "Computer Programming Lab",
    floor: "Second Floor",
    building: "IT Building",
    department: "Computer Engineering",
    equipment: [
      {
        id: "comp-1",
        name: "High-Performance Workstations",
        description: "Intel i7 processors with 16GB RAM for software development",
        quantity: 60,
        status: "Available"
      },
      {
        id: "comp-2",
        name: "Network Simulator",
        description: "Software for simulating network topologies and protocols",
        quantity: 5,
        status: "Available"
      },
      {
        id: "comp-3",
        name: "Development Boards (Arduino)",
        description: "Microcontroller boards for IoT and embedded system projects",
        quantity: 25,
        status: "Available"
      },
      {
        id: "comp-4",
        name: "Raspberry Pi Kits",
        description: "Single-board computers for prototyping and IoT applications",
        quantity: 20,
        status: "Available"
      }
    ]
  },
  {
    id: "mech-lab-1",
    name: "Mechanical Workshop",
    floor: "Ground Floor",
    building: "Workshop Building",
    department: "Mechanical Engineering",
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
    building: "Civil Block",
    department: "Civil Engineering",
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
    id: "ecs-lab-1",
    name: "Electronics & Communication Lab",
    floor: "Third Floor",
    building: "Main Building",
    department: "Electronics & Communication",
    equipment: [
      {
        id: "ecs-1",
        name: "Network Analyzer",
        description: "Analyzes electrical networks and RF/microwave components",
        quantity: 2,
        status: "Available"
      },
      {
        id: "ecs-2",
        name: "Signal Generator",
        description: "Generates various electrical signals for testing circuits",
        quantity: 6,
        status: "Available"
      },
      {
        id: "ecs-3",
        name: "Digital Storage Oscilloscope",
        description: "Advanced oscilloscope with digital signal processing capabilities",
        quantity: 8,
        status: "Available"
      },
      {
        id: "ecs-4",
        name: "PCB Prototyping Machine",
        description: "Creates printed circuit board prototypes for testing",
        quantity: 1,
        status: "Available"
      }
    ]
  },
  {
    id: "biotech-lab-1",
    name: "Biotechnology Laboratory",
    floor: "Second Floor",
    building: "Science Block",
    department: "Biotechnology",
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
  }
];

export default function LabResources() {
  const [openLabs, setOpenLabs] = useState<string[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>([]);

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
    </div>
  );
}