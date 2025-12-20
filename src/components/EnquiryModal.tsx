// EnquiryModal.tsx
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AppInquiryForm from "./Enquiry";

const EnquiryModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full max-w-md sm:max-w-lg bg-[#12141C] border border-white/10 rounded-2xl p-6 sm:p-8 mx-auto max-h-[100vh] overflow-auto"
      >
        {/* Form */}
        <AppInquiryForm
          isModal={true}
          onSuccess={() => onOpenChange(false)} // ✅ form submit ke baad modal close
        />
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
