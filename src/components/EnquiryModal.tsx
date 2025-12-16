import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import AppInquiryForm from "./Enquiry";

const EnquiryModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full max-w-md sm:max-w-lg bg-[#12141C] border border-white/10 rounded-2xl p-6 sm:p-8 mx-auto  max-h-[100vh] overflow-auto"
        // mx-auto → horizontal center
        // my-10 → top & bottom spacing
        // max-h-[90vh] + overflow-auto → content scroll if too tall
      >
        {/* <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-gradient">
            Get Free Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-400 mb-6">
            Build a powerful mobile app or web solution with our expert development team.
          </DialogDescription>
        </DialogHeader> */}

        {/* Form */}
        <AppInquiryForm isModal />
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
