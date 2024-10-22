import { CheckCircle, Home, ShoppingBag, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Confirmation = () => {
  const [sessionId, setSessionId] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Get session_id from URL
    const queryParams = new URLSearchParams(window.location.search);
    const session_id = queryParams.get("session_id");
    if (session_id) {
      setSessionId(session_id);
    }

    // Entrance animation
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div
        className={`max-w-lg w-full transition-all duration-700 transform ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-blue-50 p-3">
                <ShoppingBag className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              {sessionId ? "Order Confirmed!" : "Oops!"}
            </h1>

            <p className="text-gray-500 text-center mb-8">
              {sessionId
                ? "Thank you for your trust. Your order has been processed successfully."
                : "There seems to be a problem with your order."}
            </p>

            {sessionId ? (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold text-green-800">
                    Order Successful
                  </h3>
                </div>
                <div className="mt-2 text-green-700">
                  Session ID:{" "}
                  <span className="font-mono font-medium break-all">
                    {sessionId}
                  </span>
                </div>
              </div>
            ) : (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <h3 className="font-semibold text-red-800">
                    Processing Error
                  </h3>
                </div>
                <p className="mt-2 text-red-700">
                  Please try again or contact our support team.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>

              <Link
                to="/help"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Need Help?
              </Link>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
