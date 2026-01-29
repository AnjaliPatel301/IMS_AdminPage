import { useState } from "react";
import { Bell, Eye, Upload, Download , ExternalLink } from "lucide-react";
import { CiShare1 } from "react-icons/ci";

export default function CertificateDashboard() {
  const [status, setStatus] = useState("Eligible"); 
  const [generated, setGenerated] = useState(false);

  const verificationId = "ABCD1-EFGH2";

  const handleGenerate = () => {
    if (status === "Eligible") {
      setGenerated(true);
      alert("Certificate Generated Successfully!");
    }
  };

  const handleDownload = () => {
    alert("PDF Download Started (demo)");
  };

  const handleVerification = () => {
    alert(`Verifying Certificate ID: ${verificationId}`);
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
    
      <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-[14px] px-4  gap-4">
          <div>
            <h1 className="text-lg sm:text-md font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="text-md  text-gray-500">
              Good Morning, Rahul
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4  w-full lg:w-auto">
            <div className="flex items-center gap-4">
           
            <Bell className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
            <div className="h-9 w-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
              SI
            </div>
            </div>
          </div>
        </div>
     <div className="p-6">
       <h2 className="text-sm font-medium mb-3">Certificate</h2>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div className="bg-white border border-blue-100 rounded-lg p-5">
          <div className="h-56 rounded-lg flex items-center justify-center text-white text-3xl font-medium
            bg-gradient-to-b from-[#4259C1] via-[#E4D2D1] to-[#F39327]">
            Certificate
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
            🔒 <span>Verification ID: <b>{verificationId}</b></span>
          </div>
        </div>

        <div className="bg-white border-2 gap-2 border-blue-100 rounded-lg p-5 px-6">
          <h3 className="font-medium mb-3">Certificate Status</h3>

          <div className="flex gap-2 mb-5">
            <button
              onClick={() => setStatus("Not Eligible")}
              className={`px-3 py-1 rounded-full text-xs border
                ${status === "Not Eligible"
                  ? "bg-gray-300 text-gray-700"
                  : "bg-gray-100"}`}
            >
              Not Eligible
            </button>

            <button
              onClick={() => setStatus("Eligible")}
              className={`px-3 py-1 rounded-full text-xs border
                ${status === "Eligible"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100"}`}
            >
              Eligible
            </button> 

            <button
              onClick={handleGenerate}
              disabled={status !== "Eligible"}
              className={`px-3 py-1 rounded-full text-xs border
                ${generated
                  ? "bg-blue-100 text-blue-700"
                  : "bg-white hover:bg-blue-50"}
                ${status !== "Eligible" && "opacity-50 cursor-not-allowed"}`}
            >
              Generate
            </button>
          </div>

     
          <button
            onClick={handleDownload}
            disabled={!generated}
            className={`w-full py-3  rounded-md text-white gap-1 flex justify-center font-medium mb-3
              ${generated
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-600 cursor-not-allowed"}`}
          >
          <Download />Download Pdf
          </button>

          <button
            onClick={handleVerification}
            className="w-full text-sm flex pt-3  justify-center gap-1 text-blue-600 hover:underline mb-4"
          >
           <CiShare1 className="text-lg " /> View Verification
          </button>

       
          <p className="text-xs pt-5 text-gray-500 leading-relaxed">
            This certificate can be verified using the unique Verification ID
            below and a public blockchain ledger for enhanced trust and
            authenticity.
          </p>
        </div>
      </div>

     </div>

    </div>
  );
}
