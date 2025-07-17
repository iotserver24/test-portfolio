import { MadeWithVibeStacks } from "@/components/made-with-vibestacks";
import Portfolio from "./Portfolio"; // Import the new Portfolio component

const Index = () => {
  return (
    <>
      <Portfolio /> {/* Render the Portfolio component */}
      <MadeWithVibeStacks />
    </>
  );
};

export default Index;