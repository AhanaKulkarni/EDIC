import { motion } from "framer-motion";
import { Calendar, User, Building, Mail, Phone, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import tcetLogo from "@assets/Untitled design (19)_1750940056489.png";
import edicLogo from "@assets/EDIC LOGO_1750940056488.png";

interface Equipment {
  id: string;
  name: string;
  description: string;
  quantity: number;
  labName: string;
  labLocation: string;
}

interface StudentInfo {
  name: string;
  email: string;
  branch: string;
  year: string;
  rollNo?: string;
  phone?: string;
}

interface InvoiceProps {
  equipment: Equipment[];
  studentInfo: StudentInfo;
  purpose: string;
  timeline: string;
  onClose: () => void;
}

export function EquipmentInvoice({ equipment, studentInfo, purpose, timeline, onClose }: InvoiceProps) {
  const invoiceNumber = `TCET-EDIC-${Date.now().toString().slice(-6)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
      >
        {/* Print Controls */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center print:hidden">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Equipment Request Invoice</h2>
          <div className="flex space-x-2">
            <Button onClick={handlePrint} variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </div>

        {/* Invoice Content */}
        <div className="p-4 bg-white text-black text-xs" id="invoice-content">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img src={tcetLogo} alt="TCET Logo" className="h-12 w-auto" />
              <img src={edicLogo} alt="EDIC Logo" className="h-12 w-auto" />
            </div>
            <div className="text-right">
              <h1 className="text-lg font-bold text-blue-600">EQUIPMENT REQUEST</h1>
              <p className="text-xs text-gray-600">Thakur College of Engineering & Technology</p>
              <p className="text-xs text-gray-600">Entrepreneurship Development and Innovation Cell</p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Request Details</h3>
              <div className="space-y-1">
                <div className="flex">
                  <span className="font-medium w-20">Invoice No:</span>
                  <span>{invoiceNumber}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-20">Date:</span>
                  <span>{currentDate}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-20">Timeline:</span>
                  <span>{timeline}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Student Information</h3>
              <div className="space-y-1">
                <div className="flex">
                  <span className="font-medium w-16">Name:</span>
                  <span>{studentInfo.name}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-16">Email:</span>
                  <span>{studentInfo.email}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-16">Branch:</span>
                  <span>{studentInfo.branch}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-16">Year:</span>
                  <span>{studentInfo.year}</span>
                </div>
                {studentInfo.rollNo && (
                  <div className="flex">
                    <span className="font-medium w-20">Roll No:</span>
                    <span>{studentInfo.rollNo}</span>
                  </div>
                )}
                {studentInfo.phone && (
                  <div className="flex">
                    <span className="font-medium w-20">Phone:</span>
                    <span>{studentInfo.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Purpose of Request</h3>
            <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded border">{purpose}</p>
          </div>

          {/* Equipment Table */}
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Requested Equipment</h3>
            <table className="w-full border border-gray-300 text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1 text-left font-medium">Sr. No.</th>
                  <th className="border border-gray-300 px-2 py-1 text-left font-medium">Equipment Name</th>
                  <th className="border border-gray-300 px-2 py-1 text-left font-medium">Description</th>
                  <th className="border border-gray-300 px-2 py-1 text-left font-medium">Laboratory</th>
                  <th className="border border-gray-300 px-2 py-1 text-left font-medium">Location</th>
                  <th className="border border-gray-300 px-2 py-1 text-center font-medium">Qty</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item, index) => (
                  <tr key={item.id}>
                    <td className="border border-gray-300 px-2 py-1">{index + 1}</td>
                    <td className="border border-gray-300 px-2 py-1 font-medium">{item.name}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.description}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.labName}</td>
                    <td className="border border-gray-300 px-2 py-1">{item.labLocation}</td>
                    <td className="border border-gray-300 px-2 py-1 text-center">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Terms and Conditions</h3>
            <ul className="text-xs text-gray-700 space-y-0 list-disc list-inside">
              <li>All equipment must be returned in the same condition as received</li>
              <li>Student is responsible for any damage or loss of equipment</li>
              <li>Equipment usage is subject to lab availability and faculty supervision</li>
              <li>This request is subject to approval by the respective department head</li>
            </ul>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <div className="h-8 mb-1"></div>
              <div className="border-t border-gray-400 pt-1">
                <p className="font-semibold text-xs">Mr. Ashish Dwivedi</p>
                <p className="text-xs text-gray-600">Faculty Coordinator</p>
                <p className="text-xs text-gray-600">TCET EDIC</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="h-8 mb-1"></div>
              <div className="border-t border-gray-400 pt-1">
                <p className="font-semibold text-xs">Dr. Vinitkumar Dongre</p>
                <p className="text-xs text-gray-600">Dean R&D</p>
                <p className="text-xs text-gray-600">Approval Authority</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-3 pt-2 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              This is a computer-generated document. For queries, contact EDIC at edic@tcetmumbai.in
            </p>
          </div>
        </div>
      </motion.div>


    </div>
  );
}