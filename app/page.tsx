import Countdown from "@/app/_components/Countdown";

const FESTIVAL_TARGET_ISO = "2026-07-31T00:00:00+02:00";

function TopCloud() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[18vw] -top-[9vw] h-[clamp(13rem,28vw,24rem)] w-[clamp(24rem,66vw,60rem)] blur-[16px] drop-shadow-[0_0_30px_rgba(255,255,255,0.34)]"
    >
      <span className="absolute left-[2%] top-[10%] h-[42%] w-[28%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[16%] top-[0%] h-[58%] w-[34%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[38%] top-[2%] h-[56%] w-[34%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[60%] top-[10%] h-[46%] w-[24%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[18%] top-[34%] h-[48%] w-[26%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[42%] top-[38%] h-[46%] w-[28%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[14%] top-[36%] h-[26%] w-[58%] rounded-[999px] bg-[#f7f5f1]" />
    </div>
  );
}

function BottomCloud() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-[10vw] bottom-[8vh] h-[clamp(12rem,28vw,22rem)] w-[clamp(16rem,42vw,34rem)] blur-[16px] drop-shadow-[0_0_30px_rgba(255,255,255,0.34)]"
    >
      <span className="absolute left-[4%] bottom-[8%] h-[30%] w-[28%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[16%] bottom-[18%] h-[40%] w-[30%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[34%] bottom-[22%] h-[48%] w-[34%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[58%] bottom-[18%] h-[44%] w-[30%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[74%] bottom-[6%] h-[30%] w-[20%] rounded-full bg-[#f7f5f1]" />
      <span className="absolute left-[18%] bottom-[4%] h-[30%] w-[56%] rounded-[999px] bg-[#f7f5f1]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#58a9f0]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_30%,rgba(43,114,182,0.05)_100%)]"
      />
      <TopCloud />
      <BottomCloud />
      <Countdown targetIso={FESTIVAL_TARGET_ISO} />
    </main>
  );
}
