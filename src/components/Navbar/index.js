"use client";
import { useGlobal } from "../../common/context/";

const Navbar = () => {
  const { dispatch } = useGlobal();

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center border-b border-border bg-surface/80 backdrop-blur-md">
      
      <h1 className="text-xl font-bold text-primary ">
        Product Board
      </h1>

      <div className="flex gap-3">
        <button 
          onClick={() => dispatch({ type: "OPEN_LOGIN" })}
          className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
        >
          Login
        </button>
        
        <button 
          onClick={() => dispatch({ type: "OPEN_SIGNUP" })}
          className="btn-primary text-sm shadow-lg shadow-primary/20"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};
export default Navbar;