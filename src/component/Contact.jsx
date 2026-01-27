
import { Mail, MessageCircleMore, MapPinned } from "lucide-react";

const Contact = () => {

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Let's <span className="text-indigo-500">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have an idea, opportunity, or just want to say hi? I'm always open
            to meaningful conversations.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left - Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <a className="group bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500 transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 text-xl">
                <Mail />
              </div>
              <div>
                <h3 className="font-semibold">Email Me</h3>
                <p className="text-gray-400 text-sm">prsenapati595@email.com</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a className="group bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 flex items-center gap-4 hover:border-green-500 transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/20 text-green-400 text-xl">
                <MessageCircleMore />
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-gray-400 text-sm">Chat instantly with me</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 text-xl">
                <MapPinned />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400 text-sm">India</p>
              </div>
            </div>
          </div>
          {/* contact form */}

          <div className="max-w-2xl w-full bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-10 shadow-2xl text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-indigo-500 mb-4">
              Let's Connect 
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Have a project, question, or opportunity? Fill out the form and
              I'll get back to you.
            </p>

            {/* Contact Card */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-800 rounded-2xl p-3 hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Quick Response
                </h3>
                <p className="text-gray-400 text-sm">
                  Your message will be received directly via Google Form.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-3 hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Secure & Simple
                </h3>
                <p className="text-gray-400 text-sm">
                  No login required. Easy and secure form submission.
                </p>
              </div>
            </div>

            {/* Google Form Button */}
            <a
              href="https://forms.gle/Wx5frjBH25rWim6q7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-md font-semibold text-white rounded-full bg-linear-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600
              hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Open Contact Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
