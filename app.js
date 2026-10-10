// Birthday Gift Site — app.js
// Motion layer: scroll reveals, letter "unfold", gallery parallax,
// a gentle marquee ticker, and sparkling entrance particles.
// No framework, no deps.

(() => {
  "use strict";

  // ── 1. Scroll reveals ──
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("in");
      }
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ── 2. Letter "unfold" on the letter page ──
  const letterPaper = document.querySelector(".letter-paper");
  const unfoldEntry = document.getElementById("unfoldEntry");
  if (letterPaper && unfoldEntry) {
    let folded = true;
    const unfold = () => {
      if (folded) {
        letterPaper.style.transition =
          "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.8s";
        letterPaper.style.transform = "rotate(-2deg) translateY(6px)";
        unfoldEntry.style.opacity = "0";
        unfoldEntry.style.transform = "translateY(8px)";
        setTimeout(() => {
          unfoldEntry.classList.add("show");
        }, 300);
        folded = false;
      }
    };
    const io2 = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            unfold();
            io2.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    io2.observe(letterPaper);
  }

  // ── 3. Gallery carousel: native scroll-snap, drag-aware ──
  const grid = document.querySelector(".gallery-grid");
  if (grid) {
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
    const cards = Array.from(grid.querySelectorAll(".photo-card"));
    cards.forEach((c) => {
      c.style.scrollSnapAlign = "start";
      const img = c.querySelector("img");
      if (img) {
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";
        img.style.transition = "transform var(--duration-soft) var(--ease-soft)";
      }
      const cap = c.querySelector("figcaption");
      if (cap) {
        cap.style.textAlign = "center";
        cap.querySelector("strong")?.setAttribute("style", "display:block; font-family: var(--font-serif);");
        cap.querySelector("span")?.setAttribute("style", "color: var(--taupe); font-size: 0.85rem;");
      }
    });
    // subtle parallax on scroll
    let ticking = false;
    let lastY = 0;
    window.addEventListener("scroll", () => {
      lastY = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cards = grid.querySelectorAll(".photo-card");
          cards.forEach((c, i) => {
            const base = i * 8;
            const lift = Math.min(lastY * 0.04, 12);
            c.style.transform = `translateY(${base - lift}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── 4. Video scroller (swipeable carousel of the couple's clips) ──
  const vrow = document.querySelector(".video-row");
  if (vrow) {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.gap = "var(--space-3)";
    wrap.style.overflowX = "auto";
    wrap.style.scrollSnapType = "x mandatory";
    wrap.style.webkitOverflowScrolling = "touch";
    const card = vrow.querySelector(".video-card");
    if (card) {
      card.style.width = "100%";
      card.style.maxWidth = "640px";
      card.style.height = "auto";
      card.style.aspectRatio = "16 / 9";
      card.style.scrollSnapAlign = "start";
      card.style.borderRadius = "var(--radius)";
      card.style.border = "none";
      card.style.background = "#000";
      card.style.boxShadow = "0 8px 28px rgba(60,30,20,0.14)";
      card.style.transition =
        "transform var(--duration-soft) var(--ease-soft), box-shadow var(--duration-soft) var(--ease-soft)";
      // hover/touch: gentle zoom + rose glow
      const onIn = () => {
        card.style.transform = "scale(1.015)";
        card.style.boxShadow = "0 12px 32px rgba(123,45,67,0.18)";
      };
      const onOut = () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 8px 28px rgba(60,30,20,0.14)";
      };
      card.addEventListener("mouseenter", onIn);
      card.addEventListener("mouseleave", onOut);
      card.addEventListener("touchstart", onIn);
      card.addEventListener("touchend", onOut);
      const cap = vrow.querySelector(".video-cap");
      if (cap) cap.style.textAlign = "center";
    }
    wrap.appendChild(vrow);
    vrow.parentNode?.replaceChild(wrap, vrow);
  }

  // ── 5. Marquee ticker (decorative romantic motion) ──
  const ticker = document.querySelector(".marquee-track");
  if (ticker) {
    ticker.style.animationDuration = "36s";
    ticker.style.animationTimingFunction = "linear";
    ticker.addEventListener("mouseenter", () => {
      ticker.style.animationPlayState = "paused";
    });
    ticker.addEventListener("mouseleave", () => {
      ticker.style.animationPlayState = "running";
    });
  }

  // ── 6. Sparkling entrance particles ──
  const sparkleCount = 14;
  for (let i = 0; i < sparkleCount; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = (Math.random() * 100) + "%";
    s.style.top = (Math.random() * 80 + 10) + "%";
    s.style.width = (Math.random() * 4 + 2) + "px";
    s.style.height = s.style.width;
    s.style.animationDelay = (Math.random() * 7) + "s";
    s.style.animationDuration = (4 + Math.random() * 6) + "s";
    s.style.background = ["var(--gold)", "var(--rose)", "#E3B06A"][
      Math.floor(Math.random() * 3)
    ];
    document.body.appendChild(s);
  }

  // ── 7. Song player: no extra logic — the YouTube embed handles playback.
  //     The "Direct link" below the player is the shareable, permanent address.

  // ── 8. Keyboard: arrow navigation inside the gallery carousel ──
  const galleries = Array.from(document.querySelectorAll(".gallery-grid"));
  galleries.forEach((g) => {
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "list");
    g.setAttribute("aria-label", "Photo gallery you can scroll");
  });

  // ── 9. Graceful fallbacks: missing media stays pretty, no console errors. ──

  console.log("🎂 Birthday gift site loaded. Scroll, swipe, play.");
})();
