"use client";
import { useGlobal } from "../../common/context";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { state, dispatch } = useGlobal();
  const isLoggedin = state.isLoggedin;
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center border-b border-border bg-surface/80 backdrop-blur-md">
      <h1 className="text-xl font-bold text-primary ">Product Board</h1>

      {!isLoggedin && (
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
      )}

      {isLoggedin && (
        <button
          onClick={() => {
            dispatch({ type: "LOGGED_OUT" });
            deleteCookie("user", { path: "/" });
            router.push("/");
          }}
          className="btn-primary text-sm shadow-lg shadow-primary/20"
        >
          Logout
        </button>
      )}
    </nav>
  );
};
export default Navbar;
