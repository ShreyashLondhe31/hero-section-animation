import React from "react";

interface CarVisualProps {
  className?: string;
}

export default function CarVisual({ className = "" }: CarVisualProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 900 280"
        width="900"
        height="280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[850px] drop-shadow-2xl"
        aria-label="Porsche 911 GT3 sports car side view vector"
        role="img"
      >
        {/* Ground shadow plane */}
        <ellipse cx="450" cy="246" rx="420" ry="12" fill="#000000" fillOpacity="0.45" />

        {/* Flipped group so sports car faces right in the direction of motion */}
        <g transform="translate(900, 0) scale(-1, 1)">
        <path
          d="M 68 215 
             C 74 210, 88 198, 102 188
             C 120 176, 142 166, 172 165
             C 210 164, 252 168, 282 172
             C 320 152, 380 108, 442 98
             C 512 86, 610 94, 680 128
             C 730 152, 770 174, 804 186
             C 830 195, 846 206, 852 216
             C 854 220, 850 226, 840 228
             C 824 230, 800 230, 772 230
             C 768 206, 746 186, 718 186
             C 688 186, 664 208, 662 230
             L 282 230
             C 280 206, 258 186, 230 186
             C 200 186, 178 208, 176 230
             L 86 230
             C 72 230, 64 224, 68 215 Z"
          fill="#1c212b"
          stroke="#4b5563"
          strokeWidth="3"
        />

        {/* Aerodynamic Rear Wing */}
        <path
          d="M 788 152 L 848 150 C 856 150, 860 156, 854 162 L 836 172 L 782 172 Z"
          fill="#11151c"
          stroke="#9ca3af"
          strokeWidth="2"
        />
        <line x1="808" y1="172" x2="804" y2="194" stroke="#6b7280" strokeWidth="4" />
        <line x1="832" y1="172" x2="826" y2="198" stroke="#6b7280" strokeWidth="4" />

        {/* Roofline and Greenhouse Windows */}
        <path
          d="M 334 168
             C 362 136, 404 108, 452 104
             C 512 98, 592 106, 650 138
             C 668 148, 678 160, 682 168
             Z"
          fill="#0c0f14"
          stroke="#374151"
          strokeWidth="2.5"
        />
        {/* Window B-Pillar divider */}
        <path
          d="M 488 106 L 492 168"
          stroke="#262c36"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Quarter window divider */}
        <path
          d="M 596 116 L 608 168"
          stroke="#262c36"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Window Highlights */}
        <path
          d="M 352 160 C 378 134, 412 114, 452 110 L 480 110 L 480 162 L 352 162 Z"
          fill="#151b24"
        />
        <path
          d="M 502 112 C 538 112, 574 120, 612 138 L 602 162 L 502 162 Z"
          fill="#151b24"
        />

        {/* Side Mirror */}
        <path
          d="M 346 166 C 342 160, 350 154, 362 154 L 378 156 C 382 158, 384 164, 378 168 L 360 170 Z"
          fill="#11151c"
          stroke="#6b7280"
          strokeWidth="2"
        />

        {/* Body character lines */}
        <path
          d="M 174 182 C 240 180, 420 182, 664 182"
          stroke="#374151"
          strokeWidth="1.5"
        />
        <path
          d="M 284 196 C 360 198, 540 198, 658 196"
          stroke="#2d3542"
          strokeWidth="2"
        />

        {/* Door line */}
        <path
          d="M 334 168 L 320 228"
          stroke="#2d3542"
          strokeWidth="2"
        />
        <path
          d="M 494 168 L 488 228"
          stroke="#2d3542"
          strokeWidth="2"
        />
        {/* Door handle */}
        <rect x="440" y="178" width="22" height="4" rx="2" fill="#4b5563" />

        {/* Headlight lens housing */}
        <path
          d="M 102 188 C 114 182, 134 178, 148 184 L 140 192 C 122 190, 108 192, 102 188 Z"
          fill="#e2e8f0"
          opacity="0.9"
        />

        {/* Taillight assembly */}
        <path
          d="M 836 190 C 846 196, 848 202, 846 206 L 826 206 C 826 200, 830 194, 836 190 Z"
          fill="#ef4444"
        />
        <line x1="846" y1="200" x2="800" y2="200" stroke="#ef4444" strokeWidth="2.5" />

        {/* Front Wheel Arch */}
        <path
          d="M 166 230 C 166 194, 194 166, 230 166 C 266 166, 294 194, 294 230"
          stroke="#11141a"
          strokeWidth="10"
          fill="none"
        />
        {/* Rear Wheel Arch */}
        <path
          d="M 654 230 C 654 194, 682 166, 718 166 C 754 166, 782 194, 782 230"
          stroke="#11141a"
          strokeWidth="10"
          fill="none"
        />

        {/* Front Wheel */}
        <g id="front-wheel">
          {/* Tire */}
          <circle cx="230" cy="228" r="48" fill="#15171c" stroke="#2a2e38" strokeWidth="5" />
          {/* Rim base */}
          <circle cx="230" cy="228" r="34" fill="#0f1115" stroke="#4b5563" strokeWidth="3" />
          {/* Brake Rotor */}
          <circle cx="230" cy="228" r="24" fill="#2d333f" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
          {/* Brake Caliper (Amber accent) */}
          <rect x="238" y="210" width="8" height="20" rx="3" fill="#f59e0b" />
          {/* Rim Spokes */}
          <line x1="230" y1="196" x2="230" y2="260" stroke="#9ca3af" strokeWidth="3" />
          <line x1="198" y1="228" x2="262" y2="228" stroke="#9ca3af" strokeWidth="3" />
          <line x1="207" y1="205" x2="253" y2="251" stroke="#9ca3af" strokeWidth="2.5" />
          <line x1="207" y1="251" x2="253" y2="205" stroke="#9ca3af" strokeWidth="2.5" />
          {/* Center Hub */}
          <circle cx="230" cy="228" r="8" fill="#11151c" stroke="#d1d5db" strokeWidth="2" />
        </g>

        {/* Rear Wheel */}
        <g id="rear-wheel">
          {/* Tire */}
          <circle cx="718" cy="228" r="48" fill="#15171c" stroke="#2a2e38" strokeWidth="5" />
          {/* Rim base */}
          <circle cx="718" cy="228" r="34" fill="#0f1115" stroke="#4b5563" strokeWidth="3" />
          {/* Brake Rotor */}
          <circle cx="718" cy="228" r="24" fill="#2d333f" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
          {/* Brake Caliper (Amber accent) */}
          <rect x="726" y="210" width="8" height="20" rx="3" fill="#f59e0b" />
          {/* Rim Spokes */}
          <line x1="718" y1="196" x2="718" y2="260" stroke="#9ca3af" strokeWidth="3" />
          <line x1="686" y1="228" x2="750" y2="228" stroke="#9ca3af" strokeWidth="3" />
          <line x1="695" y1="205" x2="741" y2="251" stroke="#9ca3af" strokeWidth="2.5" />
          <line x1="695" y1="251" x2="741" y2="205" stroke="#9ca3af" strokeWidth="2.5" />
          {/* Center Hub */}
          <circle cx="718" cy="228" r="8" fill="#11151c" stroke="#d1d5db" strokeWidth="2" />
        </g>

        {/* Exhaust tips */}
        <ellipse cx="850" cy="226" rx="4" ry="5" fill="#374151" stroke="#9ca3af" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
