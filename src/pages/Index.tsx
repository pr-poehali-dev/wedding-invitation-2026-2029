import { useEffect, useState } from "react";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/bd4b2521-98ec-4536-a1d6-59156f77a632/bucket/a4a07c76-e7c8-4e6e-87f6-c949bb962d17.jpg";

const GOLD = "#C9952A";
const DARK = "#1A0F0A";
const CREAM = "#FBF8F3";
const BG = "#E6DDD0";

/* ─── Шрифты ─── */
const F_SCRIPT = "'Caveat', cursive";
const F_SERIF = "'Cormorant Garamond', serif";
const F_SANS = "'Raleway', sans-serif";

/* ─── Палитра дресс-кода ─── */
const PALETTE = [
  { name: "Пудровый",     hex: "#E8C8C0" },
  { name: "Серебристый",  hex: "#C8CBCE" },
  { name: "Коричневый",   hex: "#7B5C48" },
  { name: "Бежевый",      hex: "#D9C9B0" },
  { name: "Пыльно-розовый", hex: "#C4929A" },
];

/* ═══ SVG Орнаменты ═══ */
const OrnamentLine = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true"
    style={flip ? { transform: "scaleY(-1)" } : undefined}>
    <g stroke={GOLD} strokeWidth="0.65" fill="none" opacity="0.75">
      <polygon points="300,5 316,24 300,43 284,24" fill={GOLD} fillOpacity="0.09" strokeWidth="0.9" />
      <circle cx="300" cy="24" r="2.5" fill={GOLD} opacity="0.6" />
      <line x1="0" y1="40" x2="240" y2="40" />
      <line x1="360" y1="40" x2="600" y2="40" />
      <line x1="0" y1="37.5" x2="200" y2="37.5" strokeWidth="0.3" opacity="0.4" />
      <line x1="400" y1="37.5" x2="600" y2="37.5" strokeWidth="0.3" opacity="0.4" />
      <circle cx="220" cy="40" r="6" />
      <circle cx="220" cy="40" r="2.8" fill={GOLD} fillOpacity="0.18" />
      <circle cx="220" cy="40" r="1.2" fill={GOLD} />
      <line x1="212" y1="40" x2="194" y2="26" strokeWidth="0.5" />
      <line x1="212" y1="40" x2="194" y2="54" strokeWidth="0.5" />
      <path d="M170,26 Q161,19 155,24 Q149,30 156,35 Q163,40 167,33" strokeWidth="0.6" opacity="0.7" />
      <path d="M170,54 Q161,61 155,56 Q149,50 156,45 Q163,40 167,47" strokeWidth="0.6" opacity="0.7" />
      <circle cx="194" cy="26" r="2" fill={GOLD} fillOpacity="0.3" />
      <circle cx="194" cy="54" r="2" fill={GOLD} fillOpacity="0.3" />
      <line x1="104" y1="40" x2="128" y2="40" />
      <line x1="60" y1="40" x2="85" y2="40" opacity="0.5" />
      <circle cx="90" cy="40" r="1.6" fill={GOLD} fillOpacity="0.38" />
      {/* правая сторона (зеркало) */}
      <circle cx="380" cy="40" r="6" />
      <circle cx="380" cy="40" r="2.8" fill={GOLD} fillOpacity="0.18" />
      <circle cx="380" cy="40" r="1.2" fill={GOLD} />
      <line x1="388" y1="40" x2="406" y2="26" strokeWidth="0.5" />
      <line x1="388" y1="40" x2="406" y2="54" strokeWidth="0.5" />
      <path d="M430,26 Q439,19 445,24 Q451,30 444,35 Q437,40 433,33" strokeWidth="0.6" opacity="0.7" />
      <path d="M430,54 Q439,61 445,56 Q451,50 444,45 Q437,40 433,47" strokeWidth="0.6" opacity="0.7" />
      <circle cx="406" cy="26" r="2" fill={GOLD} fillOpacity="0.3" />
      <circle cx="406" cy="54" r="2" fill={GOLD} fillOpacity="0.3" />
      <line x1="496" y1="40" x2="472" y2="40" />
      <line x1="540" y1="40" x2="515" y2="40" opacity="0.5" />
      <circle cx="510" cy="40" r="1.6" fill={GOLD} fillOpacity="0.38" />
      {/* листья */}
      <path d="M240,40 Q258,30 278,38" strokeWidth="0.7" />
      <path d="M240,40 Q258,50 278,42" strokeWidth="0.7" />
      <path d="M360,40 Q342,30 322,38" strokeWidth="0.7" />
      <path d="M360,40 Q342,50 322,42" strokeWidth="0.7" />
      <ellipse cx="257" cy="33" rx="6.5" ry="3" transform="rotate(-18,257,33)" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="0.45" />
      <ellipse cx="257" cy="47" rx="6.5" ry="3" transform="rotate(18,257,47)" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="0.45" />
      <ellipse cx="343" cy="33" rx="6.5" ry="3" transform="rotate(18,343,33)" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="0.45" />
      <ellipse cx="343" cy="47" rx="6.5" ry="3" transform="rotate(-18,343,47)" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="0.45" />
    </g>
  </svg>
);

const CornerOrnament = ({ flip }: { flip?: string }) => (
  <svg viewBox="0 0 80 80" className="w-[68px] h-[68px]"
    style={flip ? { transform: flip } : undefined} aria-hidden="true">
    <g stroke={GOLD} strokeWidth="0.75" fill="none" opacity="0.65">
      <line x1="5" y1="5" x2="56" y2="5" strokeWidth="1.05" />
      <line x1="5" y1="5" x2="5" y2="56" strokeWidth="1.05" />
      <line x1="5" y1="12" x2="44" y2="12" strokeWidth="0.35" opacity="0.5" />
      <line x1="12" y1="5" x2="12" y2="44" strokeWidth="0.35" opacity="0.5" />
      <path d="M5,5 Q22,8 25,25 Q8,22 5,5Z" fill={GOLD} fillOpacity="0.065" stroke={GOLD} strokeWidth="0.6" />
      <circle cx="5" cy="5" r="2.6" fill={GOLD} fillOpacity="0.48" />
      <circle cx="56" cy="5" r="1.6" fill={GOLD} fillOpacity="0.26" />
      <circle cx="5" cy="56" r="1.6" fill={GOLD} fillOpacity="0.26" />
      <path d="M16,5 Q22,13 16,21" strokeWidth="0.5" opacity="0.6" />
      <path d="M5,16 Q13,22 21,16" strokeWidth="0.5" opacity="0.6" />
    </g>
  </svg>
);

const StarDivider = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.4 }} />
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill={GOLD} opacity="0.6" />
    </svg>
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.4 }} />
  </div>
);

/* ─── Опрос: одиночный выбор ─── */
const RadioGroup = ({ label, options, value, onChange }: {
  label: string; options: string[]; value: string; onChange: (v: string) => void;
}) => (
  <div className="mb-5">
    <p className="text-[9px] tracking-[0.28em] uppercase mb-2.5" style={{ fontFamily: F_SANS, color: GOLD }}>{label}</p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button key={opt} onClick={() => onChange(opt)} className="transition-all duration-200"
            style={{
              fontFamily: F_SANS, fontSize: "11px", letterSpacing: "0.07em",
              padding: "6px 15px",
              border: `1px solid ${active ? GOLD : "rgba(184,151,42,0.32)"}`,
              background: active ? GOLD : "transparent",
              color: active ? CREAM : "rgba(42,31,26,0.62)",
              cursor: "pointer",
            }}>
            {opt}
          </button>
        );
      })}
    </div>
  </div>
);

/* ─── Опрос: множественный выбор ─── */
const CheckGroup = ({ label, options, values, onChange }: {
  label: string; options: string[]; values: string[]; onChange: (v: string[]) => void;
}) => {
  const toggle = (opt: string) =>
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);
  return (
    <div className="mb-5">
      <p className="text-[9px] tracking-[0.28em] uppercase mb-2.5" style={{ fontFamily: F_SANS, color: GOLD }}>{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt);
          return (
            <button key={opt} onClick={() => toggle(opt)} className="transition-all duration-200"
              style={{
                fontFamily: F_SANS, fontSize: "11px", letterSpacing: "0.07em",
                padding: "6px 15px",
                border: `1px solid ${active ? GOLD : "rgba(184,151,42,0.32)"}`,
                background: active ? GOLD : "transparent",
                color: active ? CREAM : "rgba(42,31,26,0.62)",
                cursor: "pointer",
              }}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ─── Шаг программы ─── */
const TimelineItem = ({ time, title, subtitle, address, delay }: {
  time: string; title: string; subtitle?: string; address?: string; delay: number;
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className="flex gap-4 items-start transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(14px)" }}>
      <div className="flex flex-col items-center pt-[3px]">
        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ border: `1px solid ${GOLD}`, background: "rgba(245,242,236,0.5)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
        </div>
        <div className="w-px flex-1 mt-1 min-h-4" style={{ background: `linear-gradient(to bottom, rgba(184,151,42,0.3), transparent)` }} />
      </div>
      <div className="pb-4">
        <p className="text-[9px] font-medium tracking-[0.22em] uppercase mb-0.5" style={{ fontFamily: F_SANS, color: GOLD }}>{time}</p>
        <p className="font-semibold leading-tight" style={{ fontFamily: F_SERIF, fontSize: "1.05rem", color: DARK }}>{title}</p>
        {subtitle && <p className="text-[11px] mt-0.5" style={{ fontFamily: F_SANS, color: "rgba(26,15,10,0.68)" }}>{subtitle}</p>}
        {address && <p className="text-[10px] mt-0.5 leading-relaxed italic" style={{ fontFamily: F_SANS, color: "rgba(26,15,10,0.55)" }}>{address}</p>}
      </div>
    </div>
  );
};

/* ═══════════════════════════ MAIN ═══════════════════════════ */
export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const [transfer, setTransfer] = useState("");
  const [food, setFood] = useState("");
  const [alcohol, setAlcohol] = useState<string[]>([]);
  const [child, setChild] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fi = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
  });

  const canSubmit = Boolean(transfer && food && child);

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-10" style={{ background: BG }}>
      {/* Фон-паттерн */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8972A' fill-opacity='0.03'%3E%3Cpolygon points='40,6 43,28 65,28 47,41 54,63 40,50 26,63 33,41 15,28 37,28'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
      }} />

      <div className="relative max-w-lg w-full" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 60ms" }}>
        <div className="relative" style={{
          background: CREAM,
          border: `1px solid rgba(184,151,42,0.22)`,
          boxShadow: `0 0 80px rgba(184,151,42,0.08), 0 30px 80px rgba(0,0,0,0.11)`,
        }}>
          {/* Угловые орнаменты */}
          <div className="absolute top-0 left-0 pointer-events-none"><CornerOrnament /></div>
          <div className="absolute top-0 right-0 pointer-events-none"><CornerOrnament flip="scaleX(-1)" /></div>
          <div className="absolute bottom-0 left-0 pointer-events-none"><CornerOrnament flip="scaleY(-1)" /></div>
          <div className="absolute bottom-0 right-0 pointer-events-none"><CornerOrnament flip="scale(-1,-1)" /></div>
          <div className="absolute inset-[16px] pointer-events-none" style={{ border: `1px solid rgba(184,151,42,0.11)` }} />

          <div className="px-9 pt-10 pb-9 relative">

            {/* ── Верхний орнамент ── */}
            <div className="-mx-3 mb-1" style={fi(240)}><OrnamentLine /></div>

            {/* ── Шапка: приглашение + фото + имена ── */}
            <div className="text-center mb-6" style={fi(400)}>
              <p className="text-[8px] tracking-[0.45em] uppercase mb-5"
                style={{ fontFamily: F_SANS, color: GOLD }}>
                С радостью приглашаем вас разделить наш праздник
              </p>

              {/* Фото */}
              <div className="relative mx-auto mb-5 overflow-hidden"
                style={{
                  width: 196, height: 224,
                  border: `1px solid rgba(184,151,42,0.38)`,
                  boxShadow: `0 12px 44px rgba(0,0,0,0.18), inset 0 0 0 3px rgba(250,247,242,0.55)`,
                }}>
                <img src={PHOTO_URL} alt="Виктория и Антон" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-10"
                  style={{ background: `linear-gradient(to top, rgba(250,247,242,0.5), transparent)` }} />
              </div>

              {/* Имена — рукописный Caveat */}
              <p style={{ fontFamily: F_SCRIPT, fontSize: "3.5rem", fontWeight: 700, color: DARK, lineHeight: 1 }}>
                Виктория
              </p>
              <p className="tracking-[0.3em] my-2" style={{ fontFamily: F_SERIF, fontSize: "1rem", color: GOLD }}>
                ✦ &amp; ✦
              </p>
              <p style={{ fontFamily: F_SCRIPT, fontSize: "3.5rem", fontWeight: 700, color: DARK, lineHeight: 1 }}>
                Антон
              </p>
              <p className="text-[8px] tracking-[0.32em] uppercase mt-4"
                style={{ fontFamily: F_SANS, color: "rgba(26,15,10,0.5)" }}>
                просят вас о незабываемом присутствии
              </p>
            </div>

            <StarDivider />

            {/* ── Дата ── */}
            <div className="text-center my-6" style={fi(560)}>
              <p className="text-[8px] tracking-[0.38em] uppercase mb-3" style={{ fontFamily: F_SANS, color: GOLD }}>
                торжество состоится
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <span style={{ fontFamily: F_SCRIPT, fontSize: "5.8rem", fontWeight: 700, color: DARK, lineHeight: 1 }}>25</span>
                <div className="text-left">
                  <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: F_SANS, color: "rgba(26,15,10,0.6)" }}>июля</p>
                  <p style={{ fontFamily: F_SCRIPT, fontSize: "1.8rem", fontWeight: 700, color: DARK, lineHeight: 1.1 }}>2026</p>
                </div>
              </div>
              <p className="text-[8px] tracking-[0.28em] uppercase mt-2" style={{ fontFamily: F_SANS, color: "rgba(42,31,26,0.34)" }}>
                Санкт‑Петербург
              </p>
            </div>

            <StarDivider />

            {/* ── Программа ── */}
            <div className="mt-6 mb-2" style={fi(720)}>
              <p className="text-[8px] tracking-[0.4em] uppercase text-center mb-5" style={{ fontFamily: F_SANS, color: GOLD }}>
                программа торжества
              </p>
              <TimelineItem time="14:40" title="Регистрация брака" subtitle="Церемония бракосочетания" address="Дворец бракосочетания №1, Английская набережная, 28" delay={820} />
              <TimelineItem time="15:30" title="Сбор гостей. Фуршет" address="Ресторан «Viniti», Фурштатская, 52" delay={960} />
              <TimelineItem time="16:00" title="Торжественная часть" subtitle="Начало банкета" delay={1100} />
              <TimelineItem time="21:00" title="Окончание банкета" subtitle="Прощальный вечер" delay={1240} />
            </div>

            <StarDivider />

            {/* ── Палитра дресс-кода ── */}
            <div className="mt-6 mb-2" style={fi(900)}>
              <p className="text-[8px] tracking-[0.4em] uppercase text-center mb-3" style={{ fontFamily: F_SANS, color: GOLD }}>
                цветовая гамма торжества
              </p>
              <p className="text-center text-[11px] leading-relaxed mb-5"
                style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(26,15,10,0.7)" }}>
                Мы не вводим дресс-код, но будем благодарны,<br />
                если вы будете придерживаться следующей гаммы:
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                {PALETTE.map(({ name, hex }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5">
                    <div
                      className="rounded-full shadow-md"
                      style={{
                        width: 52,
                        height: 52,
                        background: hex,
                        border: `2px solid rgba(184,151,42,0.28)`,
                        boxShadow: `0 4px 14px rgba(0,0,0,0.13), inset 0 1px 0 rgba(255,255,255,0.35)`,
                      }}
                    />
                    <p className="text-[9px] text-center leading-tight"
                      style={{ fontFamily: F_SANS, color: "rgba(42,31,26,0.5)", maxWidth: 56 }}>
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <StarDivider />

            {/* ── Опросы ── */}
            <div className="mt-6 mb-2" style={fi(1050)}>
              <p className="text-[8px] tracking-[0.4em] uppercase text-center mb-5" style={{ fontFamily: F_SANS, color: GOLD }}>
                для нас важны ваши предпочтения
              </p>

              {!submitted ? (
                <>
                  <RadioGroup
                    label="Нужен ли вам трансфер?"
                    options={["Да, нужен", "Нет, добираюсь сам"]}
                    value={transfer}
                    onChange={setTransfer}
                  />
                  <RadioGroup
                    label="Предпочтения по еде"
                    options={["Нет предпочтений", "Только рыба", "Только мясо", "Вегетарианец"]}
                    value={food}
                    onChange={setFood}
                  />
                  <CheckGroup
                    label="Алкогольные напитки (можно несколько)"
                    options={["Коньяк", "Вино сухое", "Вино полусладкое", "Вино белое", "Вино красное", "Виски", "Водка", "Шампанское"]}
                    values={alcohol}
                    onChange={setAlcohol}
                  />
                  <RadioGroup
                    label="Будет ли ребёнок на свадьбе?"
                    options={["Да", "Нет"]}
                    value={child}
                    onChange={setChild}
                  />

                  <StarDivider />

                  <div className="text-center mt-6">
                    <p className="text-[8px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: F_SANS, color: GOLD }}>
                      подтверждение присутствия
                    </p>
                    <p className="text-[13px] leading-relaxed mb-5"
                      style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(26,15,10,0.72)" }}>
                      Просим подтвердить ваше присутствие<br />до 10 июля 2026 года
                    </p>

                    <button
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className="relative overflow-hidden transition-all duration-300 group"
                      style={{
                        background: canSubmit ? DARK : "rgba(42,31,26,0.18)",
                        color: CREAM,
                        fontFamily: F_SANS,
                        fontSize: "10px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        padding: "14px 40px",
                        border: canSubmit ? `1px solid ${DARK}` : "1px solid rgba(42,31,26,0.15)",
                        cursor: canSubmit ? "pointer" : "not-allowed",
                        display: "inline-block",
                      }}
                    >
                      {canSubmit && (
                        <span
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: GOLD }}
                        />
                      )}
                      <span className="relative">Подтвердить присутствие</span>
                    </button>

                    {!canSubmit && (
                      <p className="text-[9px] mt-2.5" style={{ fontFamily: F_SANS, color: "rgba(42,31,26,0.3)" }}>
                        Пожалуйста, ответьте на все вопросы выше
                      </p>
                    )}

                    <p className="text-[9px] mt-5 mb-1" style={{ fontFamily: F_SANS, color: "rgba(42,31,26,0.33)" }}>
                      или по телефону
                    </p>
                    <p style={{ fontFamily: F_SCRIPT, fontSize: "1.5rem", fontWeight: 600, color: GOLD }}>
                      +7 (950) 226-84-43
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p style={{ fontFamily: F_SCRIPT, fontSize: "2.4rem", fontWeight: 600, color: GOLD }} className="mb-3">
                    Спасибо!
                  </p>
                  <p className="text-[13px] leading-relaxed"
                    style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(42,31,26,0.58)" }}>
                    Мы получили ваши предпочтения.<br />
                    Ждём вас с нетерпением!
                  </p>
                </div>
              )}
            </div>

            {/* ── Нижний орнамент ── */}
            <div className="-mx-3 mt-6" style={fi(1200)}><OrnamentLine flip /></div>

            {/* ── Благодарность ── */}
            <div className="text-center mt-2" style={fi(1360)}>
              <p className="text-[12px] leading-relaxed"
                style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(26,15,10,0.55)" }}>
                Мы безмерно благодарны за то, что вы разделите<br />
                этот особенный день вместе с нами
              </p>
              <p className="text-[8px] tracking-[0.3em] uppercase mt-3"
                style={{ fontFamily: F_SANS, color: "rgba(184,151,42,0.48)" }}>
                с любовью, Виктория &amp; Антон
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}