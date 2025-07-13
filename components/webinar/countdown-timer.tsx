"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO string format
  className?: string;
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`flex items-center justify-center gap-4 ${className || ""}`}>
      <div className="flex flex-col items-center">
        <div className="bg-card text-card-foreground rounded-md px-3 py-2 min-w-[60px] text-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.days}</span>
        </div>
        <span className="text-xs mt-1 text-muted-foreground">Jours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-card text-card-foreground rounded-md px-3 py-2 min-w-[60px] text-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.hours}</span>
        </div>
        <span className="text-xs mt-1 text-muted-foreground">Heures</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-card text-card-foreground rounded-md px-3 py-2 min-w-[60px] text-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        </div>
        <span className="text-xs mt-1 text-muted-foreground">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-card text-card-foreground rounded-md px-3 py-2 min-w-[60px] text-center shadow-md">
          <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        </div>
        <span className="text-xs mt-1 text-muted-foreground">Secondes</span>
      </div>
    </div>
  );
}
