import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-6 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-all duration-300 bg-[#3A3A3A] bg-opacity-70 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="relative inline-block w-full max-w-2xl px-8 pt-8 pb-6 overflow-hidden text-left align-bottom transition-all transform bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl sm:my-8 sm:align-middle sm:p-0">
          {/* Header */}
          <div className="px-8 pt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-serif font-semibold text-[#3A3A3A]">{title}</h3>
                <div className="h-px w-16 bg-[#C8A24A] mt-3"></div>
              </div>
              <button
                onClick={onClose}
                className="text-[#3A3A3A]/50 hover:text-[#C8A24A] transition-all duration-300 p-2 rounded-full hover:bg-[#D8CFC4]/20"
                aria-label="Close modal"
              >
                <FaTimes size={22} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[50vh] overflow-y-auto px-8">
            <div className="pr-2">
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 pt-8 mt-8 border-t border-[#3A3A3A]/10">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#3A3A3A] hover:bg-[#3A3A3A]/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;