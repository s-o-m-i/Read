import { Hand } from "lucide-react";

const round = (value: number) => Math.round(value * 100) / 100;

function beadLoop(cx: number, cy: number, radius: number, count: number, beadRadius: number, fill: string) {
  return Array.from({ length: count }, (_, index) => {
    const angle = Math.PI / 2 + (index / count) * Math.PI * 2;
    return (
      <circle
        key={index}
        cx={round(cx + radius * Math.cos(angle))}
        cy={round(cy + radius * Math.sin(angle))}
        r={beadRadius}
        fill={fill}
      />
    );
  });
}

function Tassel({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g stroke={color} strokeLinecap="round">
      <rect x={x - 4.5} y={y} width={9} height={17} rx={4.5} fill={color} stroke="none" />
      {[-9, -5, -1.5, 1.5, 5, 9].map((offset) => (
        <line key={offset} x1={x} y1={y + 17} x2={x + offset} y2={y + 48} strokeWidth={1.6} />
      ))}
    </g>
  );
}

export function BeadStrandsIllustration() {
  return (
    <svg viewBox="0 0 560 340" role="img" aria-labelledby="bead-strands-title" className="h-auto w-full text-[var(--ink)]">
      <title id="bead-strands-title">Two traditional Tasbih strings drawn side by side: one with 33 beads and one with 99 beads</title>
      <defs>
        <radialGradient id="bead-wood" cx="35%" cy="32%" r="70%">
          <stop offset="0" stopColor="#E2B47A" />
          <stop offset="1" stopColor="#7A4A22" />
        </radialGradient>
        <radialGradient id="bead-amber" cx="35%" cy="32%" r="70%">
          <stop offset="0" stopColor="#F2DDA8" />
          <stop offset="1" stopColor="#A67C35" />
        </radialGradient>
      </defs>
      <circle cx={150} cy={140} r={78} fill="none" stroke="#7A4A22" strokeOpacity={0.35} />
      {beadLoop(150, 140, 78, 33, 6.6, "url(#bead-wood)")}
      <Tassel x={150} y={225} color="#7A4A22" />
      <circle cx={400} cy={140} r={112} fill="none" stroke="#A67C35" strokeOpacity={0.35} />
      {beadLoop(400, 140, 112, 99, 3.3, "url(#bead-amber)")}
      <Tassel x={400} y={256} color="#A67C35" />
      <text x={150} y={326} textAnchor="middle" fill="currentColor" fontSize={16} fontWeight={600}>33 beads</text>
      <text x={400} y={326} textAnchor="middle" fill="currentColor" fontSize={16} fontWeight={600}>99 beads</text>
    </svg>
  );
}

export function BeadRingDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" aria-hidden className={className}>
      <circle cx={150} cy={150} r={128} fill="none" stroke="#C9A961" strokeOpacity={0.25} />
      {beadLoop(150, 150, 128, 33, 5.5, "#C9A961")}
    </svg>
  );
}

export function BeadsArt() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden className="h-28 w-auto">
      <defs>
        <radialGradient id="art-wood" cx="35%" cy="32%" r="70%">
          <stop offset="0" stopColor="#E2B47A" />
          <stop offset="1" stopColor="#7A4A22" />
        </radialGradient>
      </defs>
      {beadLoop(80, 48, 36, 33, 3.4, "url(#art-wood)")}
      <rect x={76} y={88} width={8} height={12} rx={4} fill="#7A4A22" />
      <g stroke="#7A4A22" strokeWidth={1.4} strokeLinecap="round">
        <line x1={80} y1={100} x2={74} y2={116} />
        <line x1={80} y1={100} x2={80} y2={117} />
        <line x1={80} y1={100} x2={86} y2={116} />
      </g>
    </svg>
  );
}

export function DeviceArt() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden className="h-28 w-auto">
      <rect x={52} y={8} width={56} height={104} rx={28} className="fill-[#0B2545] dark:fill-[#1c3d6b]" />
      <rect x={62} y={26} width={36} height={20} rx={5} fill="#DCE7DF" />
      <g fill="#0B2545" opacity={0.75}>
        <rect x={67} y={31} width={6} height={10} rx={1} />
        <rect x={77} y={31} width={6} height={10} rx={1} />
        <rect x={87} y={31} width={6} height={10} rx={1} />
      </g>
      <circle cx={80} cy={74} r={15} fill="#E3C77F" />
      <circle cx={97} cy={97} r={4.5} fill="#E3C77F" opacity={0.7} />
    </svg>
  );
}

export function RingArt() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden className="h-28 w-auto">
      <circle cx={80} cy={70} r={32} fill="none" strokeWidth={11} className="stroke-[#3D6B57] dark:stroke-[#8CC3A8]" />
      <rect x={58} y={16} width={44} height={28} rx={10} className="fill-[#0B2545] dark:fill-[#1c3d6b]" />
      <rect x={65} y={22} width={30} height={16} rx={4} fill="#DCE7DF" />
      <circle cx={108} cy={30} r={4} fill="#E3C77F" />
    </svg>
  );
}

export function FingerArt() {
  return <Hand aria-hidden size={92} strokeWidth={1.25} className="text-[var(--sage)]" />;
}

export function BrowserArt() {
  return (
    <svg viewBox="0 0 160 120" aria-hidden className="h-28 w-auto">
      <rect x={18} y={12} width={124} height={92} rx={12} className="fill-[var(--bg-elevated)] stroke-[var(--line)]" strokeWidth={2} />
      <line x1={18} y1={32} x2={142} y2={32} className="stroke-[var(--line)]" strokeWidth={2} />
      <circle cx={32} cy={22} r={3} fill="#C9A961" />
      <circle cx={42} cy={22} r={3} fill="#C9A961" opacity={0.6} />
      <circle cx={52} cy={22} r={3} fill="#C9A961" opacity={0.35} />
      <circle cx={80} cy={68} r={22} fill="none" stroke="#C9A961" strokeWidth={3} strokeDasharray="90 200" strokeLinecap="round" transform="rotate(-90 80 68)" />
      <circle cx={80} cy={68} r={14} className="fill-[#0B2545] dark:fill-[#e3c77f]" />
      <path d="M80 62v12M74 68h12" stroke="#FCFAF5" strokeWidth={2.4} strokeLinecap="round" className="dark:stroke-[#071832]" />
    </svg>
  );
}
