"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LoadingScreen from "@/app/components/global/loading_animation";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Book,
  Calendar,
  GraduationCap,
  Home,
  Globe,
  Heart,
  Building,
  Badge,
  Clock,
  FileText,
  Edit,
  Download,
  Shield,
  Award,
} from "lucide-react";
import { FetchStudentBioDetails } from "@/server/fetch_student_bio";
import { checkAuthorisationServerSide } from "@/server/check_authorisation_serside_action";
import MinorLoadingAnimation from "@/app/components/global/mini_loading_animation";
import ProfileImage from "@/app/components/global/profile_image";
import { student } from "@/sanity/schema/student";
import { useRouter } from "next/navigation";


const Information = () => {
  const param = useParams();
  const Id = param.id;
  const [globalLoading, setGlobalLoading] = useState(true);
  const [studentData, setStudentData] = useState({});
  const [error, setError] = useState({});
  const router = useRouter();

    useEffect(() => {
      const fetchAuthorisation = async () => {
        try {
          const isAuthorised = await checkAuthorisationServerSide();
          if (isAuthorised && isAuthorised.authorised) {
            setGlobalLoading(false);
          } else {
            router.push("/");
          }
        } catch (error) {
          console.error("Error fetching authorization:", error);
          router.push("/"); // Redirect to login if error occurs
        }
      };
  
      fetchAuthorisation();
    }, []);
    

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const student_indexNo = localStorage.getItem("student_index")
        const fetch_student_info_response = await FetchStudentBioDetails(student_indexNo)
        if(fetch_student_info_response.type === "success"){
          setStudentData(fetch_student_info_response.data)
        }
      } catch (err) {
        console.error("Fetching Student Information Error: ", err);
        setError({
          ["Failed"]: "An error occurred while fetching student information.",
        });
      }
    };

    fetchStudentInfo();
  }, [Id]);

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Safe access to student data properties
  const safeGet = (obj, path, defaultValue = "N/A") => {
    try {
      const result = path.split(".").reduce((o, p) => o[p], obj);
      if (result === null || result === undefined || result === "") return defaultValue;
      return result;
    } catch (e) {
      return defaultValue;
    }
  };

  if (globalLoading) {
    return (
      <div className="absolute top-0 h-screen w-screen">
        <LoadingScreen />
      </div>
    );
  }

  // Check if there's an error
  if (Object.keys(error).length > 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md border-red-200 bg-red-50 p-6 rounded-md">
          <div className="flex items-center gap-3 text-red-700">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="font-bold">Error Loading Profile</p>
              <p className="text-sm">{Object.values(error)[0]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fullName =
    `${safeGet(studentData, "firstName", "")} ${safeGet(studentData, "middleName", "")} ${safeGet(studentData, "lastName", "")}`.trim();
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .substring(0, 2);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Professional Header Section */}
      <div className="bg-gradient-to-r from-[#2541B2] to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Picture Section */}
            <div className="relative">
              <div className="h-40 w-40 border-4 border-white rounded-full overflow-hidden shadow-xl">
                <ProfileImage account_type={studentData._type}/>
                <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Student Information */}
            <div className="text-center lg:text-left flex-1">
              <div className="mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">{studentData ? fullName :(
                  <div className="h-full w-full ">
                    <MinorLoadingAnimation/>
                  </div>
                )}</h1>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 text-blue-100 text-lg">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Badge className="h-5 w-5" />
                    <span className="font-semibold">ID: {safeGet(studentData, "indexNo")}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>{safeGet(studentData, "program")}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Award className="h-5 w-5" />
                    <span>Level {safeGet(studentData, "currentLevel")}</span>
                  </div>
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                  Active Student
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Biomedical Department
                </div>
                <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {safeGet(studentData, "hall")} Hall
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-white text-[#2541B2] hover:bg-blue-50 font-semibold flex items-center justify-center p-2 rounded-md">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#2541B2] flex items-center justify-center p-2 rounded-md">
                <Download className="h-4 w-4 mr-2" />
                Download Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Academic Information */}
        <div className="shadow-xl border-0 overflow-hidden rounded-md">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
            <h2 className="flex items-center gap-3 text-xl">
              <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              Academic Information
            </h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Book className="h-4 w-4" />
                  Program of Study
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "program")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Award className="h-4 w-4" />
                  Current Level
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "currentLevel")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Badge className="h-4 w-4" />
                  Entry Level
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "entryLevel")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <FileText className="h-4 w-4" />
                  Entry Mode
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "entryMode")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  Date of Admission
                </div>
                <p className="font-bold text-slate-900 text-lg">
                  {formatDate(safeGet(studentData, "dateOfAdmission"))}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Clock className="h-4 w-4" />
                  Expected Completion
                </div>
                <p className="font-bold text-slate-900 text-lg">
                  {formatDate(safeGet(studentData, "dateOfCompletion"))}
                </p>
              </div>

              <div className="space-y-3 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Building className="h-4 w-4" />
                  Hall of Residence
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "hall")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="shadow-xl border-0 overflow-hidden rounded-md">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4">
            <h2 className="flex items-center gap-3 text-xl">
              <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                <User  className="h-5 w-5" />
              </div>
              Personal Information
            </h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <User  className="h-4 w-4" />
                  Gender
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "gender")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  Date of Birth
                </div>
                <p className="font-bold text-slate-900 text-lg">{formatDate(safeGet(studentData, "dateOfBirth"))}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  Place of Birth
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "placeOfBirth")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Building className="h-4 w-4" />
                  City of Birth
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "cityOfBirth")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Globe className="h-4 w-4" />
                  Nationality
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "nationality")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Home className="h-4 w-4" />
                  Hometown
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "hometown")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Heart className="h-4 w-4" />
                  Marital Status
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "maritalStatus")}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Building className="h-4 w-4" />
                  Religion
                </div>
                <p className="font-bold text-slate-900 text-lg">{safeGet(studentData, "religion")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="shadow-xl border-0 overflow-hidden rounded-md">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
            <h2 className="flex items-center gap-3 text-xl">
              <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              Contact Information
            </h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  Residential Address
                </div>
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                  <p className="font-bold text-slate-900 text-lg leading-relaxed">
                    {safeGet(studentData, "addressLine")}
                    {safeGet(studentData, "addressLine2") !== "N/A" && (
                      <>
                        <br />
                        {safeGet(studentData, "addressLine2")}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Quick Actions */}
        <div className="shadow-xl border-0 overflow-hidden rounded-md">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
            <h2 className="flex items-center gap-3 text-xl">
              <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              Quick Actions
            </h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <button className="h-auto p-6 flex flex-col gap-3 border border-blue-200 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Edit className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-slate-900">Update Profile</span>
                  <p className="text-xs text-slate-500 mt-1">Edit personal information</p>
                </div>
              </button>

              <button className="h-auto p-6 flex flex-col gap-3 border border-green-200 rounded-md hover:bg-green-50 hover:border-green-300 transition-all duration-200 group">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-slate-900">Academic Records</span>
                  <p className="text-xs text-slate-500 mt-1">View transcripts & grades</p>
                </div>
              </button>

              <button className="h-auto p-6 flex flex-col gap-3 border border-purple-200 rounded-md hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 group">
                <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Download className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-slate-900">Download Documents</span>
                  <p className="text-xs text-slate-500 mt-1">Get official documents</p>
                </div>
              </button>

              <button className="h-auto p-6 flex flex-col gap-3 border border-orange-200 rounded-md hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 group">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-center">
                  <span className="font-bold text-slate-900">Contact Support</span>
                  <p className="text-xs text-slate-500 mt-1">Get help with your account</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
