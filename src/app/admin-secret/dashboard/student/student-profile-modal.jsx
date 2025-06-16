"use client"
import { useState } from "react"
import { X, User, GraduationCap, Mail, Award, TrendingUp, BookOpen, Clock } from "lucide-react"

const StudentInfoModal = ({ setModalType }) => {
  const [activeTab, setActiveTab] = useState("personal")
  const [data, setData] = useState({
    firstName: "James",
    lastName: "Stone",
    indexNo: "B202210014",
    institutionalEmail: "jamesstones@ktu.edu.gh",
    program: "BTech Biomedical Engineering",
    middleName: "Kweku",
  })

  const handleCloseModal = () => {
    setModalType("")
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white w-full h-full overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">James Stone</h1>
                <p className="text-blue-100 text-lg">Index: B202210014</p>
                <p className="text-blue-100">BTech Biomedical Engineering</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Grade: A</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">GPA: 4.0</span>
                </div>
              </div>
            </div>
            <button onClick={handleCloseModal} className="text-white hover:text-gray-300 transition-colors">
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-gray-100 px-6">
          <div className="flex space-x-1">
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "personal"
                  ? "bg-white text-blue-600 border-t-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              <User className="w-4 h-4 inline mr-2" />
              Personal Information
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === "academic"
                  ? "bg-white text-blue-600 border-t-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("academic")}
            >
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Academic Information
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-gray-50 min-h-screen">
          {activeTab === "personal" ? (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-600" />
                  Personal Details
                </h2>

                {/* Student Avatar Section */}
                <div className="flex justify-center mb-8">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="300px"
                      height="300px"
                      viewBox="2 2 880 1972"
                      version="1.1"
                      preserveAspectRatio="xMidYMid meet"
                      className="rounded-full"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(59, 130, 246)"
                        d="M171.715,120.550 C177.737,113.750 169.166,101.490 166.284,83.137 C165.236,76.468 162.144,56.778 171.715,39.690 C174.897,34.9 184.699,26.851 204.303,12.536 C217.265,3.71 224.6,0.768 230.857,1.70 C236.232,2.514 236.294,6.9 242.926,7.708 C252.23,10.39 255.562,4.401 263.444,7.105 C268.280,8.764 267.333,11.18 275.514,16.156 C281.663,20.18 283.716,19.698 289.394,22.794 C290.637,23.471 300.45,28.700 305.688,36.673 C310.705,43.759 311.44,50.649 311.723,64.431 C312.715,84.561 313.385,98.152 306.292,109.85 C305.5,111.68 301.610,115.820 303.275,118.740 C304.676,121.197 308.294,119.956 311.120,121.757 C320.415,127.681 314.376,162.218 301.464,165.807 C299.29,166.484 296.411,166.43 294.222,168.221 C291.275,171.152 292.986,174.971 291.808,180.289 C289.959,188.647 283.468,189.467 280.342,196.582 C276.931,204.346 280.486,212.866 282.756,218.306 C292.338,241.271 322.77,261.208 356.381,279.856 C390.871,298.605 394.354,296.686 405.867,307.614 C427.15,327.687 434.327,352.256 438.455,366.750 C449.847,406.750 436.838,417.675 447.507,466.919 C452.888,491.757 456.494,490.347 462.594,517.608 C470.136,551.312 469.842,576.788 469.836,601.485 C469.814,680.58 475.64,719.575 472.250,736.653 C471.532,741.11 469.601,751.505 470.439,765.618 C471.328,780.578 474.637,787.983 477.78,800.617 C480.937,820.597 479.332,836.619 478.284,847.81 C476.821,861.689 472.557,904.263 449.921,912.855 C445.484,914.539 438.530,915.605 436.644,912.855 C434.464,909.676 442.264,903.738 448.714,891.735 C450.465,888.477 462.265,865.863 453.542,850.98 C451.137,845.752 446.539,840.782 443.283,841.650 C439.130,842.757 438.296,853.50 437.851,858.546 C436.774,871.851 440.3,878.99 436.41,882.80 C434.578,883.550 431.869,884.978 426.385,884.494 L423.971,860.960 L428.799,797.80 L423.368,752.342 L405.867,668.465 L403.453,630.449 L378.710,580.968 C378.710,580.968 370.865,555.624 372.675,530.883 C374.486,506.142 372.72,476.574 372.72,476.574 L360.2,477.178 C360.2,477.178 359.398,582.778 355.174,600.881 C350.950,618.984 353.967,678.120 353.967,678.120 C353.967,678.120 374.486,805.444 372.72,859.150 C369.658,912.855 348.536,999.749 348.536,999.749 L345.518,1029.921 C345.518,1029.921 346.122,1157.848 349.139,1177.761 C352.157,1197.675 341.897,1264.656 341.897,1264.656 L304.481,1388.359 C304.481,1388.359 293.619,1490.942 306.292,1509.649 C318.965,1528.355 319.568,1553.699 319.568,1553.699 C319.568,1553.699 262.238,1597.750 258.13,1546.458 C253.789,1495.166 254.392,1370.859 254.392,1370.859 L252.582,1266.466 C252.582,1266.466 251.375,1229.53 251.978,1206.726 C252.582,1184.399 268.272,1116.815 261.634,1091.471 C254.996,1066.127 241.116,1014.835 244.133,993.111 C247.151,971.388 244.133,909.838 244.133,909.838 L236.288,887.511 L236.288,909.838 L226.632,1054.58 C226.632,1054.58 212.149,1102.936 213.959,1109.574 C215.769,1116.211 233.874,1211.554 229.650,1242.328 C225.425,1273.104 223.615,1446.288 223.615,1446.288 L221.201,1544.648 C221.201,1544.648 223.11,1566.371 200.79,1567.578 C177.147,1568.785 148.783,1566.371 155.421,1548.268 C162.59,1530.165 175.940,1488.529 175.940,1488.529 C175.940,1488.529 177.147,1402.238 176.543,1393.186 C175.940,1384.135 150.593,1317.154 150.593,1317.154 C150.593,1317.154 121.23,1251.984 126.454,1193.451 C131.885,1134.918 131.282,1026.904 131.282,1026.904 C131.282,1026.904 108.350,908.631 110.160,883.890 C111.971,859.150 107.746,795.186 116.798,746.308 C125.851,697.430 130.678,672.86 130.678,672.86 C131.419,641.323 129.869,616.412 128.264,599.71 C126.573,580.787 124.847,571.201 122.230,545.969 C119.607,520.686 118.192,499.964 117.402,486.229 C116.999,483.212 116.597,480.195 116.195,477.178 C112.103,474.571 106.842,471.790 104.729,473.557 C101.865,475.952 106.379,485.363 108.350,490.453 C113.789,504.502 111.446,518.314 106.539,545.366 C102.649,566.811 99.798,570.485 85.417,619.588 C78.115,644.521 74.430,657.181 72.744,666.655 C68.279,691.753 70.825,697.697 65.502,722.171 C60.560,744.897 57.509,743.703 54.36,763.204 C49.334,789.608 51.263,812.365 51.622,816.306 C52.964,831.29 55.734,842.260 54.640,862.770 C53.649,881.329 50.773,883.542 49.208,883.890 C46.223,884.556 41.735,879.832 40.156,874.839 C37.879,867.639 43.24,864.218 41.363,856.133 C40.130,850.133 35.605,843.789 31.707,844.64 C27.512,844.360 23.982,852.328 23.258,859.150 C22.456,866.712 25.192,872.17 35.932,894.752 C41.961,907.517 43.229,910.354 41.966,911.648 C39.135,914.552 25.155,908.66 16.17,898.373 C4.904,886.585 1.888,871.49 0.930,847.81 C0.406,813.637 3.243,788.317 4.550,778.290 C6.990,759.579 6.975,733.632 6.964,681.741 C6.943,580.372 -2.887,535.941 17.827,506.142 C20.234,502.680 27.462,493.74 31.104,478.385 C35.906,459.17 31.306,443.598 29.293,433.731 C22.336,399.619 32.147,362.472 44.984,339.595 C66.261,301.679 107.386,282.417 117.402,278.45 C130.883,272.161 143.826,268.888 163.266,256.322 C180.323,245.296 192.866,236.930 196.458,221.926 C198.789,212.189 195.598,202.159 189.216,182.100 C187.522,176.776 185.371,171.78 180.164,166.411 C175.434,162.171 173.25,163.123 168.698,159.773 C158.543,151.910 154.863,133.548 161.456,125.981 C164.934,121.989 168.509,124.170 171.715,120.550 Z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Full Name</h3>
                      <p className="text-lg font-semibold text-gray-900">
                        {data.firstName} {data.middleName || " "} {data.lastName}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Index Number</h3>
                      <p className="text-lg font-semibold text-gray-900">{data.indexNo}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Institutional Email</h3>
                      <p className="text-lg text-blue-600">{data.institutionalEmail || "jamesstones@ktu.edu.gh"}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Programme</h3>
                      <p className="text-lg font-semibold text-gray-900">
                        {data.program || "BTech Biomedical Engineering"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">First Name</h3>
                      <p className="text-lg font-semibold text-gray-900">{data.firstName}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Middle Name</h3>
                      <p className="text-lg font-semibold text-gray-900">{data.middleName || "-"}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Last Name</h3>
                      <p className="text-lg font-semibold text-gray-900">{data.lastName}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Assigned Lecturer</h3>
                      <p className="text-lg text-blue-600">kaden.bourne@ktu.edu.gh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Academic Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">GPA</p>
                      <p className="text-2xl font-bold text-gray-900">4.0</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">CGPA</p>
                      <p className="text-2xl font-bold text-gray-900">3.8</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Performance</p>
                      <p className="text-2xl font-bold text-gray-900">80%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-4">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Attendance</p>
                      <p className="text-2xl font-bold text-gray-900">20%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Performance Rating</span>
                      <span className="text-sm font-medium text-gray-900">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Attendance Rate</span>
                      <span className="text-sm font-medium text-gray-900">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course History */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Course History
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course Code
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lecturer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">fr1234</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">HumanBlood</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. Agelina Asare</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            200
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Current Courses */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                  Current Courses
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course Code
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Course Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lecturer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">en_112</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">BiomedLaboratory</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. Aduman Hubert</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            300
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Assigned Lecturer */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-600" />
                  Assigned Lecturer
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Assigned Lecturer</p>
                    <p className="text-blue-600">kaden.bourne@ktu.edu.gh</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentInfoModal
