import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group text-white bg-red-500 dark:bg-red-800 w-[8rem] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-100 hover:bg-red-700 dark:hover:bg-red-950 active:scale-105 transition-all"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 boder-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
