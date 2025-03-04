import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Action = () => {
  return (
    <section className="py-20 bg-[#E6DA46]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#1E293B]">
          Get a ticket to New Manchester
        </h2>
        <p className="text-lg text-[#1E293B] font-medium text-center mb-8">
          Subscribe to our newsletter for exclusive content and updates.
        </p>
        <form className="max-w-md mx-auto flex">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow mr-2 bg-[#1E293B] text-white placeholder-white"
          />
          <Button
            type="submit"
            className="bg-[#1E293B] text-white hover:bg-[#293951]"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Action;
