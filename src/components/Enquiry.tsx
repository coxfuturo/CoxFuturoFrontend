import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AppInquiryForm = ({ isModal = false }) => {
  const Wrapper = ({ children }) =>
    isModal ? (
      <>{children}</>
    ) : (
      <section className="py-16 bg-gradient-to-b from-[#12141C] to-crypto-blue">
        <div className="container mx-auto px-4 max-w-2xl">
          {children}
        </div>
      </section>
    );

  return (
    <Wrapper>
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
          Transform Your Business
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Build a powerful mobile app with our expert development team.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="Enter your name"
            className="h-10 bg-white/10 border-white/20 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            E-Mail ID
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-10 bg-white/10 border-white/20 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Contact Number
          </label>
          <Input
            type="tel"
            placeholder="Enter your contact number"
            className="h-10 bg-white/10 border-white/20 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="text-xs text-gray-300 mb-1 block">
            Message
          </label>
          <Textarea
            placeholder="Describe your idea"
            rows={3}
            className="bg-white/10 border-white/20 text-sm text-white placeholder:text-gray-400"
          />
        </div>

        <Button
          type="submit"
          size="sm"
          className="w-full bg-crypto-purple hover:bg-crypto-dark-purple text-white h-10"
        >
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default AppInquiryForm;
