export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="6" fill="#EEF2F7"/>
      <path d="M10 17 C14 12, 20 12, 22 17 C24 22, 30 22, 34 17"
        stroke="#1A3A5C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M10 22 C14 17, 20 17, 22 22 C24 27, 30 27, 34 22"
        stroke="#1A3A5C" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M10 27 C14 22, 20 22, 22 27 C24 32, 30 32, 34 27"
        stroke="#2ECC9A" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M30 20 L34 17 L34 22"
        stroke="#2ECC9A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}
