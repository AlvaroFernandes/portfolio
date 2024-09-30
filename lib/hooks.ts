import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";



export const useSectionInView = (sectionName:SectionName, threshold = 0.75) => {
    const { ref, inView } = useInView({
    threshold: threshold,
  }); 
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return{
    ref
  }
}
