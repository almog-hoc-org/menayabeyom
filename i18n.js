/* ============================================================
   Menaya BeYom — bilingual (HE/EN) engine + light interactions
   ============================================================ */
(function () {
  "use strict";

  const STRINGS = {
    en: {
      "brand.name": "Menaya BeYom",
      "brand.sub": "One stock. Every day.",

      "nav.today": "Today’s Stock",
      "nav.format": "The Format",
      "nav.archive": "Archive",
      "nav.join": "Join",
      "nav.cta": "See today",

      "hero.eyebrow": "Daily equity intelligence",
      "hero.title.1": "One stock idea.",
      "hero.title.2": "Every single day.",
      "hero.lede": "Not market noise. Not a 40-page report. One focused analysis a day — clear thesis, key numbers, the real risk, and a disciplined bottom line.",
      "hero.cta.primary": "See today’s stock",
      "hero.cta.secondary": "Join the daily list",
      "hero.point.1": "One idea, not a firehose",
      "hero.point.2": "Structured every time",
      "hero.point.3": "Tracked after publishing",
      "hero.visual.sector": "Semiconductors",
      "hero.visual.thesis": "Thesis",
      "hero.visual.risk": "Risk",
      "hero.visual.line": "Bottom line",
      "hero.visual.today": "Today",
      "hero.visual.note": "Published 06:30 · read in 3 min",

      "trust.1": "Research-style analysis",
      "trust.2": "Numbers first",
      "trust.3": "Risk named, not hidden",
      "trust.4": "Hebrew & English",

      "today.eyebrow": "Today’s stock",
      "today.title": "One idea, fully structured",
      "today.lede": "A sample of the daily card. Same shape every day, so you always know where to look.",

      "card.company": "Meridian Logistics",
      "card.exchange": "NASDAQ",
      "card.sector": "Industrials — Freight & Logistics",
      "card.price": "Price",
      "card.mcap": "Market cap",
      "card.date": "Published",
      "card.datevalue": "Jul 5, 2026",
      "card.thesisLabel": "Thesis",
      "card.thesis.1": "Margins inflected positive after two years of network rebuild.",
      "card.thesis.2": "Contracted volume backlog covers ~70% of FY26 revenue.",
      "card.thesis.3": "Debt refinanced through 2029 — no near-term wall.",
      "card.thesis.4": "Trades at 11× forward earnings vs peers at 16–18×.",
      "card.thesis.5": "Insider buying in the last two quarters.",
      "card.whyLabel": "Why now",
      "card.why": "A new long-haul contract lands next quarter and management guided to the first free-cash-flow-positive year since the rebuild. The market is still pricing the old story.",
      "card.numbersLabel": "Key numbers",
      "card.n.pe": "Fwd P/E",
      "card.n.rev": "Rev growth",
      "card.n.margin": "Op. margin",
      "card.n.fcf": "FCF yield",
      "card.n.debt": "Net debt/EBITDA",
      "card.n.roic": "ROIC",
      "card.riskLabel": "Main risk",
      "card.risk": "A freight-rate downturn would hit the thesis directly — the margin recovery depends on pricing holding. Watch spot rates and the Q3 contract renewal.",
      "card.bottomLabel": "Bottom line",
      "card.bottom": "Cheap for a reason that may be resolving. Interesting at this price — sized as a position, not a bet.",
      "card.microDisclaimer": "Illustrative example with placeholder data. Not investment advice.",

      "badge.interesting": "Interesting",
      "badge.watchlist": "Watchlist",
      "badge.expensive": "Too expensive",
      "badge.highrisk": "High risk",

      "format.eyebrow": "The format",
      "format.title": "Six parts. The same every day.",
      "format.lede": "Discipline is the product. You read the same structure daily, so nothing important gets skipped.",
      "format.1.t": "Thesis",
      "format.1.d": "Why this stock, in 3–5 sharp bullets. The whole argument at a glance.",
      "format.2.t": "Numbers",
      "format.2.d": "Valuation, growth, margins, balance sheet. The figures that decide it.",
      "format.3.t": "Catalyst",
      "format.3.d": "Why now, not someday. The event or shift that closes the gap.",
      "format.4.t": "Risk",
      "format.4.d": "The one thing that breaks the thesis — named, not buried.",
      "format.5.t": "Bottom line",
      "format.5.d": "A clear verdict: Interesting, Watchlist, Too expensive, or High risk.",
      "format.6.t": "Follow-up",
      "format.6.d": "We track what we published. Right and wrong, both stay on the record.",

      "archive.eyebrow": "Archive",
      "archive.title": "Every idea, on the record",
      "archive.lede": "A preview of past days. Each one keeps its call and its tracked performance.",
      "archive.h.date": "Date",
      "archive.h.ticker": "Ticker",
      "archive.h.thesis": "One-line thesis",
      "archive.h.status": "Status",
      "archive.h.perf": "Since",
      "archive.r1.date": "Jul 4",
      "archive.r1.thesis": "Software margins re-rating as cloud costs peak.",
      "archive.r2.date": "Jul 3",
      "archive.r2.thesis": "Balance sheet fixed, market still pricing the old risk.",
      "archive.r3.date": "Jul 2",
      "archive.r3.thesis": "Great story, but priced for perfection at 40× sales.",
      "archive.r4.date": "Jul 1",
      "archive.r4.thesis": "Turnaround real, but leverage makes it a high-risk call.",
      "archive.r5.date": "Jun 30",
      "archive.r5.thesis": "Pricing power intact; a quiet compounder at a fair price.",
      "archive.note": "Performance figures are illustrative placeholders. Past results do not predict future returns.",

      "join.eyebrow": "The daily list",
      "join.title": "Get one stock idea every day",
      "join.lede": "One email each morning. The full card — thesis, numbers, risk, bottom line. No noise, unsubscribe anytime.",
      "join.b1": "Delivered before the open",
      "join.b2": "3-minute read, structured",
      "join.b3": "Also on WhatsApp / Telegram",
      "join.emailLabel": "Email address",
      "join.emailPh": "you@example.com",
      "join.channelsLabel": "Also send me on",
      "join.whatsapp": "WhatsApp",
      "join.telegram": "Telegram",
      "join.submit": "Get one stock idea every day",
      "join.note": "No spam. One idea a day. Unsubscribe in one click.",
      "join.success": "You’re on the list. Watch your inbox tomorrow morning.",

      "disclaimer.text": "This content is for informational and educational purposes only and does not constitute investment advice. Investors should do their own research and consider consulting a licensed advisor.",

      "footer.tag": "One focused stock idea, every day.",
      "footer.copy": "© 2026 Menaya BeYom. All rights reserved.",
      "footer.fine": "Not investment advice. Markets involve risk of loss."
    },

    he: {
      "brand.name": "מניה ביום",
      "brand.sub": "מניה אחת. כל יום.",

      "nav.today": "מניית היום",
      "nav.format": "הפורמט",
      "nav.archive": "ארכיון",
      "nav.join": "הצטרפות",
      "nav.cta": "למניית היום",

      "hero.eyebrow": "אינטליגנציה יומית על מניות",
      "hero.title.1": "מניה אחת.",
      "hero.title.2": "כל יום מחדש.",
      "hero.lede": "לא רעש מהשוק. לא דוח בן 40 עמודים. ניתוח ממוקד אחד ביום — תזה ברורה, מספרים עיקריים, הסיכון האמיתי, ושורה תחתונה ממושמעת.",
      "hero.cta.primary": "למניית היום",
      "hero.cta.secondary": "הצטרפות לעדכון היומי",
      "hero.point.1": "רעיון אחד, לא מבול",
      "hero.point.2": "מובנה בכל פעם",
      "hero.point.3": "מלווה גם אחרי הפרסום",
      "hero.visual.sector": "מוליכים למחצה",
      "hero.visual.thesis": "תזה",
      "hero.visual.risk": "סיכון",
      "hero.visual.line": "שורה תחתונה",
      "hero.visual.today": "היום",
      "hero.visual.note": "פורסם 06:30 · קריאה של 3 דקות",

      "trust.1": "ניתוח בסגנון מחקר",
      "trust.2": "קודם המספרים",
      "trust.3": "הסיכון מוצג, לא מוסתר",
      "trust.4": "עברית ואנגלית",

      "today.eyebrow": "מניית היום",
      "today.title": "רעיון אחד, מובנה עד הסוף",
      "today.lede": "דוגמה לכרטיס היומי. אותו מבנה בכל יום — כך תמיד יודעים איפה להסתכל.",

      "card.company": "מרידיאן לוגיסטיקה",
      "card.exchange": "נאסד\"ק",
      "card.sector": "תעשייה — הובלה ולוגיסטיקה",
      "card.price": "מחיר",
      "card.mcap": "שווי שוק",
      "card.date": "פורסם",
      "card.datevalue": "5 ביולי 2026",
      "card.thesisLabel": "תזה",
      "card.thesis.1": "המרווחים התהפכו לחיוב אחרי שנתיים של בנייה מחדש של הרשת.",
      "card.thesis.2": "צבר ההזמנות מכסה כ‑70% מהכנסות 2026.",
      "card.thesis.3": "החוב מוחזר עד 2029 — אין קיר פירעון בטווח הקרוב.",
      "card.thesis.4": "נסחרת ב‑11 מכפיל רווח קדימה מול 16–18 בענף.",
      "card.thesis.5": "רכישות של בעלי עניין בשני הרבעונים האחרונים.",
      "card.whyLabel": "למה עכשיו",
      "card.why": "חוזה הובלה חדש נכנס ברבעון הבא, וההנהלה מדריכה לשנה הראשונה עם תזרים חופשי חיובי מאז הבנייה מחדש. השוק עדיין מתמחר את הסיפור הישן.",
      "card.numbersLabel": "מספרים עיקריים",
      "card.n.pe": "מכפיל רווח קדימה",
      "card.n.rev": "צמיחת הכנסות",
      "card.n.margin": "מרווח תפעולי",
      "card.n.fcf": "תשואת FCF",
      "card.n.debt": "חוב נטו/EBITDA",
      "card.n.roic": "ROIC",
      "card.riskLabel": "הסיכון המרכזי",
      "card.risk": "ירידה בתעריפי ההובלה תפגע ישירות בתזה — התאוששות המרווח תלויה בשמירה על התמחור. שווה לעקוב אחרי מחירי הספוט וחידוש החוזה ברבעון השלישי.",
      "card.bottomLabel": "שורה תחתונה",
      "card.bottom": "זולה מסיבה שאולי הולכת ומתבררת. מעניינת במחיר הזה — בגודל של פוזיציה, לא של הימור.",
      "card.microDisclaimer": "דוגמה להמחשה עם נתונים פיקטיביים. אין באמור ייעוץ השקעות.",

      "badge.interesting": "מעניינת",
      "badge.watchlist": "למעקב",
      "badge.expensive": "יקרה מדי",
      "badge.highrisk": "סיכון גבוה",

      "format.eyebrow": "הפורמט",
      "format.title": "שישה חלקים. אותו דבר בכל יום.",
      "format.lede": "המשמעת היא המוצר. קוראים את אותו מבנה כל יום, כך ששום דבר חשוב לא נשמט.",
      "format.1.t": "תזה",
      "format.1.d": "למה המניה הזו, ב‑3 עד 5 נקודות חדות. כל הטיעון במבט אחד.",
      "format.2.t": "מספרים",
      "format.2.d": "תמחור, צמיחה, מרווחים ומאזן. המספרים שמכריעים.",
      "format.3.t": "זרז",
      "format.3.d": "למה עכשיו, לא מתישהו. האירוע או השינוי שסוגר את הפער.",
      "format.4.t": "סיכון",
      "format.4.d": "הדבר האחד שיכול לשבור את התזה — מצוין במפורש, לא קבור.",
      "format.5.t": "שורה תחתונה",
      "format.5.d": "מסקנה ברורה: מעניינת, למעקב, יקרה מדי או סיכון גבוה.",
      "format.6.t": "מעקב",
      "format.6.d": "עוקבים אחרי מה שפרסמנו. גם צדקנו וגם טעינו — הכל נשאר מתועד.",

      "archive.eyebrow": "ארכיון",
      "archive.title": "כל רעיון, מתועד",
      "archive.lede": "הצצה לימים הקודמים. כל אחד שומר על ההמלצה ועל המעקב אחרי הביצועים.",
      "archive.h.date": "תאריך",
      "archive.h.ticker": "סימול",
      "archive.h.thesis": "תזה במשפט",
      "archive.h.status": "סטטוס",
      "archive.h.perf": "מאז",
      "archive.r1.date": "4 ביולי",
      "archive.r1.thesis": "מרווחי התוכנה בתמחור מחדש כשעלויות הענן מגיעות לשיא.",
      "archive.r2.date": "3 ביולי",
      "archive.r2.thesis": "המאזן תוקן, השוק עדיין מתמחר את הסיכון הישן.",
      "archive.r3.date": "2 ביולי",
      "archive.r3.thesis": "סיפור מצוין, אבל מתומחר לשלמות ב‑40 מכפיל מכירות.",
      "archive.r4.date": "1 ביולי",
      "archive.r4.thesis": "המפנה אמיתי, אבל המינוף הופך את זה להמלצה בסיכון גבוה.",
      "archive.r5.date": "30 ביוני",
      "archive.r5.thesis": "כוח התמחור נשמר; מכונת צמיחה שקטה במחיר הוגן.",
      "archive.note": "נתוני הביצועים הם דוגמאות להמחשה. ביצועי עבר אינם מנבאים תשואה עתידית.",

      "join.eyebrow": "העדכון היומי",
      "join.title": "קבלו מניה אחת ביום",
      "join.lede": "מייל אחד בכל בוקר. הכרטיס המלא — תזה, מספרים, סיכון ושורה תחתונה. בלי רעש, אפשר להסיר בכל רגע.",
      "join.b1": "מגיע לפני פתיחת המסחר",
      "join.b2": "קריאה של 3 דקות, מובנית",
      "join.b3": "גם בוואטסאפ / טלגרם",
      "join.emailLabel": "כתובת אימייל",
      "join.emailPh": "you@example.com",
      "join.channelsLabel": "שלחו לי גם ב",
      "join.whatsapp": "וואטסאפ",
      "join.telegram": "טלגרם",
      "join.submit": "קבלו מניה אחת ביום",
      "join.note": "בלי ספאם. רעיון אחד ביום. הסרה בלחיצה אחת.",
      "join.success": "נרשמתם לרשימה. חכו למייל מחר בבוקר.",

      "disclaimer.text": "התוכן נועד למטרות מידע ולימוד בלבד ואינו מהווה ייעוץ השקעות. על המשקיעים לבצע מחקר עצמאי ולשקול התייעצות עם יועץ מורשה.",

      "footer.tag": "רעיון מניה ממוקד אחד, כל יום.",
      "footer.copy": "© 2026 מניה ביום. כל הזכויות שמורות.",
      "footer.fine": "אין באמור ייעוץ השקעות. בשוק ההון קיים סיכון להפסד."
    }
  };

  const html = document.documentElement;

  function apply(lang) {
    const dict = STRINGS[lang] || STRINGS.en;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "he" ? "rtl" : "ltr");

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Attribute translations (e.g. placeholder)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      const attr = el.getAttribute("data-i18n-attr");
      const key = el.getAttribute("data-i18n-" + attr);
      if (key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });

    // <title>
    document.title = lang === "he"
      ? "מניה ביום — מניה אחת, כל יום"
      : "Menaya BeYom — One stock idea, every day";

    // Toggle active button
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("mby-lang", lang); } catch (e) {}
  }

  // Language switch buttons
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-lang"));
    });
  });

  // Initial language: saved → browser → default en
  let initial = "en";
  try {
    const saved = localStorage.getItem("mby-lang");
    if (saved === "he" || saved === "en") initial = saved;
    else if ((navigator.language || "").toLowerCase().startsWith("he")) initial = "he";
  } catch (e) {}
  apply(initial);

  // ---- Newsletter form (demo, no backend) ----
  const form = document.getElementById("joinForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (!email.value || !email.checkValidity()) {
        email.focus();
        email.reportValidity();
        return;
      }
      const success = document.getElementById("formSuccess");
      form.querySelectorAll("input, button, fieldset, .form-note").forEach(function (el) {
        if (el !== success) el.style.display = "none";
      });
      if (success) success.hidden = false;
    });
  }

  // ---- Scroll reveal ----
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(
      ".section-head, .stock-card, .format-step, .archive-table, .join-card, .hero-copy, .hero-visual"
    ).forEach(function (el) { io.observe(el); });
  }
})();
