export function getThemeClasses(dark) {
  return {
    /* ── surfaces ── */
    section: dark
      ? "bg-[#0e1017] border-[#1a1f2b]"
      : "bg-[#eceae4] border-[#ddd9d0]",
    sectionPlain: dark ? "bg-[#0b0d12]" : "bg-[#f5f3ef]",
    card: dark
      ? "border-[#252b38] bg-[#131720] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]"
      : "border-[#e3dfd6] bg-[#fefdfb] shadow-[0_8px_32px_-12px_rgba(28,25,23,0.1),0_0_0_1px_rgba(28,25,23,0.04)]",
    cardHover: dark
      ? "hover:border-[#f2b544]/35 hover:shadow-[0_16px_56px_-12px_rgba(242,181,68,0.15)] hover:-translate-y-1"
      : "hover:border-[#d4cfc4] hover:shadow-[0_16px_48px_-12px_rgba(28,25,23,0.16)] hover:-translate-y-1",
    cardInteractive: "transition-all duration-500 ease-out will-change-transform",

    /* ── typography ── */
    heading: dark ? "text-[#eef0f5]" : "text-[#1c1917]",
    titleGradient: dark
      ? "bg-gradient-to-br from-[#eef0f5] via-[#c8cdd8] to-[#8b93a7] bg-clip-text text-transparent"
      : "bg-gradient-to-br from-[#1c1917] via-[#44403c] to-[#78716c] bg-clip-text text-transparent",
    body: dark ? "text-[#d4d8e2]" : "text-[#44403c]",
    muted: dark ? "text-[#8b93a7]" : "text-[#78716c]",
    sectionLabel: dark ? "text-[#f2b544]/90" : "text-[#b45309]",
    sectionNumber: dark ? "text-[#3d4455]" : "text-[#d6d0c4]",
    accentLine: dark ? "bg-gradient-to-r from-[#5fd9c4]/60 to-transparent" : "bg-gradient-to-r from-[#0f766e]/50 to-transparent",
    subheading: dark ? "text-[#5fd9c4]" : "text-[#0f766e]",

    /* ── syntax highlighting ── */
    syntaxKeyword: dark ? "text-[#5fd9c4]" : "text-[#0f766e]",
    syntaxString: dark ? "text-[#f2b544]" : "text-[#b45309]",
    syntaxPrompt: dark ? "text-[#5fd9c4]" : "text-[#0f766e]",
    syntaxMarker: dark ? "text-[#f2b544]" : "text-[#b45309]",
    syntaxLive: dark ? "text-[#5fd9c4]" : "text-[#0f766e]",
    liveDot: dark ? "bg-[#5fd9c4]" : "bg-[#0f766e]",

    /* ── chrome & dividers ── */
    chrome: dark
      ? "border-[#252b38] bg-[#0a0c10]/60"
      : "border-[#e3dfd6] bg-[#f0ede8]/90",
    chromeText: dark ? "text-[#7a8296]" : "text-[#a8a29e]",
    divider: dark ? "border-[#252b38]" : "border-[#ebe7df]",

    /* ── tags & badges ── */
    tag: dark
      ? "text-[#7ee8d6] bg-[#5fd9c4]/10 border-[#5fd9c4]/25 hover:bg-[#5fd9c4]/15"
      : "text-[#0f766e] bg-[#ecfdf5] border-[#99f6e4] hover:bg-[#d1faf0]",
    badge: dark
      ? "text-[#7ee8d6] bg-[#131720]/90 backdrop-blur-sm border-[#5fd9c4]/25 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]"
      : "text-[#0f766e] bg-[#fefdfb]/90 backdrop-blur-sm border-[#99f6e4] shadow-[0_4px_16px_-4px_rgba(28,25,23,0.1)]",

    /* ── buttons & links ── */
    cta: dark
      ? "text-[#0b0d12] bg-[#f2b544] hover:bg-[#f5c569] hover:shadow-[0_8px_24px_-4px_rgba(242,181,68,0.45)] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_-2px_rgba(242,181,68,0.35)]"
      : "text-white bg-[#d97706] hover:bg-[#b45309] hover:shadow-[0_8px_24px_-4px_rgba(217,119,6,0.4)] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_-2px_rgba(217,119,6,0.3)]",
    ctaText: dark ? "text-[#0b0d12]/60" : "text-white/70",
    outlineBtn: dark
      ? "text-[#8b93a7] border-[#252b38] hover:border-[#5fd9c4]/40 hover:text-[#5fd9c4] hover:bg-[#5fd9c4]/5 hover:-translate-y-0.5 active:translate-y-0"
      : "text-[#57534e] border-[#d6d0c4] hover:border-[#0f766e]/50 hover:text-[#0f766e] hover:bg-[#ecfdf5]/60 hover:-translate-y-0.5 active:translate-y-0",
    social: dark
      ? "text-[#8b93a7] hover:text-[#5fd9c4] bg-[#131720] border-[#252b38] hover:border-[#5fd9c4]/30 hover:bg-[#5fd9c4]/5"
      : "text-[#78716c] hover:text-[#0f766e] bg-[#fefdfb] border-[#e3dfd6] hover:border-[#0f766e]/30 hover:bg-[#ecfdf5]/50",
    socialBtn: "w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md",

    /* ── media ── */
    profileBorder: dark
      ? "border-[#252b38] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
      : "border-[#e3dfd6] shadow-[0_8px_32px_-8px_rgba(28,25,23,0.12)]",
    imageWell: dark ? "bg-[#0a0c10]/80" : "bg-[#f0ede8]",
    imageBorder: dark ? "border-[#252b38]" : "border-[#e3dfd6]",
    imageOverlay: dark
      ? "from-[#0a0c10]/60 via-transparent to-transparent"
      : "from-[#f0ede8]/80 via-transparent to-transparent",

    /* ── status bar ── */
    statusBar: dark
      ? "bg-[#5fd9c4] text-[#0b0d12]"
      : "bg-[#0f766e] text-white",

    /* ── ambient ── */
    glowAmbient: dark ? "bg-[#f2b544]/[0.06]" : "bg-[#d97706]/[0.07]",
    glowWarm: dark ? "bg-[#f2b544]/20" : "bg-[#f59e0b]/15",
    glowCool: dark ? "bg-[#5fd9c4]/20" : "bg-[#14b8a6]/15",
    gridColor: dark ? "#3d4455" : "#c4bdb2",
    gridOpacity: dark ? "opacity-[0.06]" : "opacity-[0.35]",

    /* ── navbar ── */
    navScrolled: dark
      ? "backdrop-blur-xl bg-[#0b0d12]/88 border-[#252b38] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]"
      : "backdrop-blur-xl bg-[#fefdfb]/88 border-[#e3dfd6] shadow-[0_4px_24px_-4px_rgba(28,25,23,0.08)]",
    navLogo: dark ? "text-[#eef0f5]" : "text-[#1c1917]",
    navLink: dark
      ? "text-[#8b93a7] hover:text-[#5fd9c4]"
      : "text-[#57534e] hover:text-[#0f766e]",
    navLinkActive: dark
      ? "text-[#5fd9c4]"
      : "text-[#0f766e]",
    navHash: dark ? "text-[#4a5060]" : "text-[#a8a29e]",
    navHashHover: dark ? "group-hover:text-[#5fd9c4]" : "group-hover:text-[#0f766e]",
    navUnderline: dark ? "bg-[#5fd9c4]" : "bg-[#0f766e]",
    navToggle: dark
      ? "border-[#252b38] bg-[#131720]"
      : "border-[#d6d0c4] bg-[#f0ede8]",
    navToggleKnob: dark
      ? "bg-[#0b0d12] border-[#252b38]"
      : "bg-[#fefdfb] border-[#d6d0c4]",
    navIcon: dark ? "text-[#8b93a7]" : "text-[#57534e]",
    mobileMenu: dark
      ? "bg-[#0b0d12]/95 border-[#252b38]"
      : "bg-[#fefdfb]/95 border-[#e3dfd6]",
    mobileMenuLink: dark
      ? "border-[#252b38]/60 text-[#8b93a7] hover:text-[#5fd9c4] hover:bg-[#5fd9c4]/5"
      : "border-[#ebe7df] text-[#44403c] hover:text-[#0f766e] hover:bg-[#ecfdf5]/50",
    mobileMenuLinkActive: dark
      ? "text-[#5fd9c4] bg-[#5fd9c4]/8"
      : "text-[#0f766e] bg-[#ecfdf5]",

    /* ── ux chrome ── */
    progressBar: dark ? "bg-[#5fd9c4]" : "bg-[#0f766e]",
    backToTop: dark
      ? "bg-[#131720] border-[#252b38] text-[#5fd9c4] hover:bg-[#5fd9c4]/10 hover:border-[#5fd9c4]/40 shadow-lg"
      : "bg-[#fefdfb] border-[#e3dfd6] text-[#0f766e] hover:bg-[#ecfdf5] hover:border-[#0f766e]/40 shadow-lg",
    scrollHint: dark ? "text-[#8b93a7]" : "text-[#a8a29e]",

    /* ── footer ── */
    footer: dark
      ? "text-[#6b7280] bg-[#0b0d12] border-[#1a1f2b]"
      : "text-[#a8a29e] bg-[#eceae4] border-[#ddd9d0]",
    footerLink: dark
      ? "text-[#8b93a7] hover:text-[#5fd9c4]"
      : "text-[#78716c] hover:text-[#0f766e]",
  };
}
