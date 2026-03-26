"use client";

import { useEffect, useMemo, useState } from "react";

const SECOND_IN_MS = 1_000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;

type Props = {
  targetIso: string;
};

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  mode: "countdown" | "placeholder" | "complete";
};

function getCountdownState(
  targetIso: string,
  now: number | null,
): CountdownState {
  const normalizedTarget = targetIso.trim();

  if (!normalizedTarget) {
    return {
      days: "--",
      hours: "--",
      minutes: "--",
      seconds: "--",
      mode: "placeholder",
    };
  }

  const targetTime = Date.parse(normalizedTarget);

  if (!Number.isFinite(targetTime)) {
    return {
      days: "--",
      hours: "--",
      minutes: "--",
      seconds: "--",
      mode: "placeholder",
    };
  }

  if (now === null) {
    return {
      days: "--",
      hours: "--",
      minutes: "--",
      seconds: "--",
      mode: "countdown",
    };
  }

  if (targetTime <= now) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      mode: "complete",
    };
  }

  const remainingTime = targetTime - now;
  const days = Math.floor(remainingTime / DAY_IN_MS);
  const hours = Math.floor((remainingTime % DAY_IN_MS) / HOUR_IN_MS);
  const minutes = Math.floor((remainingTime % HOUR_IN_MS) / MINUTE_IN_MS);
  const seconds = Math.floor((remainingTime % MINUTE_IN_MS) / SECOND_IN_MS);

  return {
    days: String(days),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    mode: "countdown",
  };
}

export default function Countdown({ targetIso }: Props) {
  const trimmedTarget = targetIso.trim();
  const targetTime = useMemo(
    () => (trimmedTarget ? Date.parse(trimmedTarget) : null),
    [trimmedTarget],
  );
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    if (targetTime === null || !Number.isFinite(targetTime)) {
      return;
    }

    let timeoutId = 0;

    const scheduleTick = () => {
      const currentTime = Date.now();
      setNow(currentTime);

      const delayUntilNextSecond =
        SECOND_IN_MS - (currentTime % SECOND_IN_MS) || SECOND_IN_MS;

      timeoutId = window.setTimeout(scheduleTick, delayUntilNextSecond);
    };

    timeoutId = window.setTimeout(scheduleTick, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [targetTime]);

  const countdownState = getCountdownState(targetIso, now);
  const displayValue = [
    countdownState.days,
    countdownState.hours,
    countdownState.minutes,
    countdownState.seconds,
  ].join(".");
  const ariaLabel = `${countdownState.days} Tage, ${countdownState.hours} Stunden, ${countdownState.minutes} Minuten, ${countdownState.seconds} Sekunden`;
  const opacityClass =
    countdownState.mode === "placeholder"
      ? "opacity-40"
      : countdownState.mode === "complete"
        ? "opacity-90"
        : "";

  return (
    <p
      className={[
        "absolute bottom-[clamp(0.8rem,1.8vw,1.5rem)] left-[clamp(0.7rem,1.4vw,1.35rem)] z-[2] m-0 whitespace-nowrap text-[clamp(1.55rem,6.6vw,4.9rem)] leading-[0.92] tracking-[-0.065em] text-[rgba(255,250,246,0.96)] [font-family:Inter,'Helvetica_Neue',Arial,sans-serif] font-normal [font-variation-settings:'wght'_400] [font-variant-numeric:lining-nums_tabular-nums] [text-shadow:0_0_18px_rgba(255,255,255,0.22)]",
        opacityClass,
      ].join(" ")}
      aria-label={ariaLabel}
    >
      {displayValue}
    </p>
  );
}
