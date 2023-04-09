import { useEffect, useRef } from "react";

export function useFactorialWorker(onAnswer) {
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker("./public/worker.js");
    workerRef.current.onmessage = onAnswer;
    // workerRef.current.onerror = onAnswer;

    return () => workerRef.current.terminate();
  }, [onAnswer]);

  function addToQueue(num) {
    workerRef.current.postMessage(num);
  }
  return { addToQueue, worker: workerRef.current };
}
