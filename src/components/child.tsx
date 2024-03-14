import { useEffect } from "react";

interface PropsType {
    counter: number;
    currentTimer: ReturnType<typeof setTimeout>
}

function Child({ counter, currentTimer }: PropsType) {
    useEffect(() => {
      if (counter < 5) return;
      clearInterval(currentTimer);
    }, [counter, currentTimer]);
  
    return null;
  }

  export default Child;