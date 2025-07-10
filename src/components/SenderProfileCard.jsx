import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaCircle,
} from "react-icons/fa";

const senderProfiles = {
  1: {
    name: "John Doe",
    email: "john.doe@example.com",
    lastSeen: "Online",
    status: "Active",
    joinDate: "January 15, 2022",
    about: "Project manager at Tech Corp. Working on the new product launch.",
    lastMessage: "We need to finalize it by tomorrow.",
  },
  2: {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    lastSeen: "2 hours ago",
    status: "Active",
    joinDate: "March 22, 2021",
    about:
      "UX Designer specializing in mobile applications. Passionate about creating intuitive user experiences.",
    lastMessage:
      "Can we reschedule to 3 PM? I have a doctor's appointment in the morning.",
  },
  3: {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    lastSeen: "Yesterday",
    status: "Active",
    joinDate: "November 5, 2020",
    about:
      "Lead developer for the backend services team. Focused on building scalable architectures.",
    lastMessage: "New project kickoff is scheduled for next Monday at 10 AM",
  },
};

export default function SenderProfileCard() {
  const { senderId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBlocked, setIsBlocked] = useState();
  const [isReported, setIsReported] = useState();
  useEffect(() => {
    console.log("Fetching profile for senderId:", senderId);

    const timer = setTimeout(() => {
      try {
        const data = senderProfiles[senderId];

        if (!data) {
          const errorMsg = `Profile not found for ID: ${senderId}`;
          console.error(errorMsg);
          setError(errorMsg);
          navigate("/chat");
          return;
        }

        setProfile(data);
        setError(null);
      } catch (err) {
        console.error("Error loading profile:", err);
        setError("Failed to load profile data");
        navigate("/chat");
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [senderId, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="text-red-500 mb-6 text-lg font-medium">{error}</div>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600
            hover:to-blue-700 transition-all flex items-center gap-2 mx-auto shadow-md hover:shadow-lg"
          >
            <FaArrowLeft /> Back to Chats
          </button>
        </div>
      </div>
    );
  }
  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-gray-500">No profile data available</div>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 relative">
      <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-2xl">
        {/* Header with Back Button */}
        <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-600 relative">
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/90 hover:bg-white transition-all shadow-md"
            aria-label="Go back"
          >
            <FaArrowLeft className="text-gray-800" />
          </button>
        </div>

        {/* Profile Header */}
        <div className="px-6 pb-6 relative">
          <div className="flex justify-center -mt-16 mb-4">
            <div
              className="h-32 w-32 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-indigo-600 flex
            items-center justify-center text-white text-5xl font-bold shadow-lg"
            >
              {profile.name.charAt(0)}
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              {profile.name}
            </h2>
            <div className="flex items-center justify-center gap-2">
              {profile.lastSeen === "Online" ? (
                <>
                  <FaCircle className="text-green-500 text-xs animate-pulse" />
                  <span className="text-green-600 font-medium">Online</span>
                </>
              ) : (
                <>
                  <FaCircle className="text-gray-500 text-xs animate-pulse" />
                  <span className="text-gray-500 font-medium">Offline</span>
                </>
              )}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaUser className="text-blue-500" /> About
            </h3>
            <p className="text-gray-600 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
              {profile.about}
            </p>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-medium text-gray-500 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-blue-400" /> Email
              </h4>
              <Link
                to={`https://mail.google.com/mail/u/0/#inbox?compose=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-gray-800 font-medium">{profile.email}</p>
              </Link>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="font-medium text-gray-500 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-400" /> Member since
              </h4>
              <p className="text-gray-800 font-medium">{profile.joinDate}</p>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to={`/chat/${senderId}`} className="w-full">
              <button
                className="w-full flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
              hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Send Message
              </button>
            </Link>
            <div className="w-full">
              <button
                className="w-full flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
              hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                onClick={() => setIsReported(true)}
              >
                <FaEnvelope /> Report
              </button>
            </div>
            <div className="w-full">
              <button
                className="w-full flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
              hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                onClick={() => setIsBlocked(true)}
              >
                <FaEnvelope /> Block
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Block User Modal */}
      {isBlocked && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="p-6">
              <h1 className="mb-4 text-2xl font-bold text-gray-800">
                Block{" "}
                {profile.name}
                ?
              </h1>
              <p className="mb-4 text-gray-600">
                Please select a reason for blocking:
              </p>

              <div className="space-y-3">
                {[
                  "Not Interested",
                  "Spam",
                  "Too many messages",
                  "No reason",
                ].map((reason) => (
                  <label
                    key={reason}
                    className="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition-all hover:border-indigo-500 hover:bg-indigo-50"
                  >
                    <input
                      type="radio"
                      name="block-reason"
                      value={reason}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-3 text-gray-700">{reason}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsBlocked(false)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
                  onClick={() => setIsBlocked(false)}
                >
                  Confirm Block
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isReported && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-scaleIn">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Report to Livemesh
                  </h1>
                  <p className="text-gray-600 mt-1">
                    The person won't be notified about your report or block
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-gray-500 font-medium">
                  What's wrong with this account?
                </p>
                <select
                  className="w-full outline-0 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  <option>Spam or fake account</option>
                  <option>Inappropriate profile info</option>
                  <option>Harassment or bullying</option>
                  <option>Something else</option>
                </select>

                <textarea
                  className="w-full outline-0 resize-none px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  maxLength={200}
                  rows={5}
                  placeholder="Additional details (optional)"
                />
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={() => setIsReported(false)}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setIsReported(false)}
                    className="px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Report
                  </button>
                  <button
                    onClick={() => setIsReported(false)}
                    className="px-6 py-3 bg-red-700 text-white rounded-xl font-medium hover:bg-red-800 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                    Report & Block
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
