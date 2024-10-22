import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";

import { useState } from "react";

export const NeedHelp = () => {
  const [selectedMethod, setSelectedMethod] = useState("chat");

  const contactMethods = {
    chat: {
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      icon: MessageCircle,
    },
    phone: {
      title: "Phone Support",
      description: "Call us directly",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      content: "+1 (888) 123-4567",
      icon: Phone,
    },
    email: {
      title: "Email Support",
      description: "Write to our team",
      availability: "Response within 24 hours",
      action: "Send Email",
      content: "support@example.com",
      icon: Mail,
    },
  };

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Need Help?</h1>
            <p className="text-blue-100">
              We're here to help! Choose your preferred contact method below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="p-6 grid gap-6 md:grid-cols-3">
            {Object.entries(contactMethods).map(([key, method]) => (
              <div
                key={key}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedMethod === key
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-200"
                }`}
                onClick={() => setSelectedMethod(key)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <method.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">{method.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  {method.availability}
                </div>
                {method.content && (
                  <p className="font-mono text-blue-600 mb-4">
                    {method.content}
                  </p>
                )}
                <button className="w-full py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  {method.action}
                </button>
              </div>
            ))}
          </div>

          {/* Social Media & Hours */}
          <div className="border-t bg-gray-50">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                    <br />
                    Saturday: 10:00 AM - 4:00 PM EST
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <Icon className="w-5 h-5 text-gray-600" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="p-4 bg-blue-600 text-white text-center text-sm">
            For urgent matters outside business hours, please email us at{" "}
            <a href="mailto:urgent@example.com" className="underline">
              urgent@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
