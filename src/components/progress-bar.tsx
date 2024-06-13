"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressDemoProps {
  initialValue: number;
}

export function ProgressBar({ initialValue }: ProgressDemoProps) {
  const [progress, setProgress] = React.useState(initialValue);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} style={{ width: 200, height: 20 }} />;
}
