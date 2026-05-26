import { useEffect, useState } from "react";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/bd4b2521-98ec-4536-a1d6-59156f77a632/bucket/a4a07c76-e7c8-4e6e-87f6-c949bb962d17.jpg";
const FLOWERS_URL =
  "https://cdn.poehali.dev/projects/bd4b2521-98ec-4536-a1d6-59156f77a632/files/e01f9ff5-9624-45ce-945a-9b8a6272951f.jpg";

/* ── Цветовая схема ── */
const GREEN      = "#2C4A3E";   // тёмно-зелёный
const GREEN_MID  = "#3D6356";   // средний зелёный (акценты)
const GREEN_SOFT = "#4E7A68";   // мягкий зелёный (timeline)
const PINK       = "#FDF6F7";   // почти белый с розовым оттенком (фон карточки)
const PINK_MID   = "#E8B4BA";   // розовый (акцент / разделители)
const PINK_DARK  = "#C4858E";   // насыщенный розовый (кнопки)
const DARK       = "#1C2E27";   // почти чёрный с зелёным оттенком
const CREAM      = "#FBF8F5";
const BG         = "#F4F8F5";   // очень светлый фон страницы

const F_SCRIPT = "'Caveat', cursive";
const F_SERIF  = "'Cormorant Garamond', serif";
const F_SANS   = "'Raleway', sans-serif";

/* ─── Палитра дресс-кода ─── */
const PALETTE = [
  { name: "Пудровый",       hex: "#E8C8C0" },
  { name: "Серебристый",    hex: "#C8CBCE" },
  { name: "Коричневый",     hex: "#7B5C48" },
  { name: "Бежевый",        hex: "#D9C9B0" },
  { name: "Пыльно-розовый", hex: "#C4929A" },
];

/* ═══ Орнаментальная линия ═══ */
const OrnamentLine = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 600 70" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true"
    style={flip ? { transform: "scaleY(-1)" } : undefined}>
    <g stroke={GREEN_MID} strokeWidth="0.65" fill="none" opacity="0.6">
      <polygon points="300,5 314,22 300,39 286,22" fill={GREEN_MID} fillOpacity="0.12" strokeWidth="0.9" />
      <circle cx="300" cy="22" r="2.2" fill={GREEN_MID} opacity="0.55" />
      <line x1="0" y1="35" x2="242" y2="35" />
      <line x1="358" y1="35" x2="600" y2="35" />
      <circle cx="222" cy="35" r="5.5" />
      <circle cx="222" cy="35" r="2.2" fill={GREEN_MID} fillOpacity="0.2" />
      <circle cx="222" cy="35" r="1" fill={GREEN_MID} />
      <path d="M242,35 Q260,25 279,33" strokeWidth="0.7" />
      <path d="M242,35 Q260,45 279,37" strokeWidth="0.7" />
      <path d="M358,35 Q340,25 321,33" strokeWidth="0.7" />
      <path d="M358,35 Q340,45 321,37" strokeWidth="0.7" />
      <ellipse cx="258" cy="29" rx="6" ry="2.8" transform="rotate(-20,258,29)" fill={PINK_MID} fillOpacity="0.25" stroke={PINK_DARK} strokeWidth="0.4" />
      <ellipse cx="258" cy="41" rx="6" ry="2.8" transform="rotate(20,258,41)" fill={PINK_MID} fillOpacity="0.25" stroke={PINK_DARK} strokeWidth="0.4" />
      <ellipse cx="342" cy="29" rx="6" ry="2.8" transform="rotate(20,342,29)" fill={PINK_MID} fillOpacity="0.25" stroke={PINK_DARK} strokeWidth="0.4" />
      <ellipse cx="342" cy="41" rx="6" ry="2.8" transform="rotate(-20,342,41)" fill={PINK_MID} fillOpacity="0.25" stroke={PINK_DARK} strokeWidth="0.4" />
      <circle cx="378" cy="35" r="5.5" />
      <circle cx="378" cy="35" r="2.2" fill={GREEN_MID} fillOpacity="0.2" />
      <circle cx="378" cy="35" r="1" fill={GREEN_MID} />
      <line x1="150" y1="35" x2="170" y2="35" opacity="0.5" />
      <line x1="430" y1="35" x2="450" y2="35" opacity="0.5" />
    </g>
  </svg>
);

/* ═══ Угловой орнамент ═══ */
const CornerOrnament = ({ flip }: { flip?: string }) => (
  <svg viewBox="0 0 80 80" className="w-[70px] h-[70px]"
    style={flip ? { transform: flip } : undefined} aria-hidden="true">
    <g stroke={GREEN_MID} strokeWidth="0.8" fill="none" opacity="0.55">
      <line x1="5" y1="5" x2="58" y2="5" strokeWidth="1.1" />
      <line x1="5" y1="5" x2="5" y2="58" strokeWidth="1.1" />
      <line x1="5" y1="13" x2="45" y2="13" strokeWidth="0.35" opacity="0.5" />
      <line x1="13" y1="5" x2="13" y2="45" strokeWidth="0.35" opacity="0.5" />
      <path d="M5,5 Q24,9 27,27 Q9,24 5,5Z" fill={GREEN_MID} fillOpacity="0.1" stroke={GREEN_MID} strokeWidth="0.6" />
      <circle cx="5" cy="5" r="2.8" fill={GREEN_MID} fillOpacity="0.55" />
      <circle cx="58" cy="5" r="1.6" fill={PINK_DARK} fillOpacity="0.4" />
      <circle cx="5" cy="58" r="1.6" fill={PINK_DARK} fillOpacity="0.4" />
      <path d="M16,5 Q22,14 16,22" strokeWidth="0.5" opacity="0.6" />
      <path d="M5,16 Q14,22 22,16" strokeWidth="0.5" opacity="0.6" />
      {/* маленький цветок */}
      <circle cx="32" cy="10" r="3.5" stroke={PINK_DARK} strokeWidth="0.5" fill={PINK_MID} fillOpacity="0.35" />
      <circle cx="32" cy="10" r="1.2" fill={PINK_DARK} fillOpacity="0.45" />
      <circle cx="10" cy="32" r="3.5" stroke={PINK_DARK} strokeWidth="0.5" fill={PINK_MID} fillOpacity="0.35" />
      <circle cx="10" cy="32" r="1.2" fill={PINK_DARK} fillOpacity="0.45" />
    </g>
  </svg>
);

/* ═══ Разделитель ═══ */
const FlowerDivider = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${PINK_MID})`, opacity: 0.6 }} />
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" fill={PINK_DARK} opacity="0.7" />
      {[0,60,120,180,240,300].map(a => (
        <ellipse key={a} cx="12" cy="6" rx="2" ry="3.5"
          transform={`rotate(${a} 12 12)`}
          fill={PINK_MID} fillOpacity="0.75" />
      ))}
    </svg>
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${PINK_MID})`, opacity: 0.6 }} />
  </div>
);

/* ═══ Опросы ═══ */
const RadioGroup = ({ label, options, value, onChange }: {
  label: string; options: string[]; value: string; onChange: (v: string) => void;
}) => (
  <div className="mb-5">
    <p className="text-[9px] tracking-[0.28em] uppercase mb-2.5" style={{ fontFamily: F_SANS, color: GREEN_MID }}>{label}</p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button key={opt} onClick={() => onChange(opt)} className="transition-all duration-200"
            style={{
              fontFamily: F_SANS, fontSize: "11px", letterSpacing: "0.07em",
              padding: "6px 15px",
              border: `1px solid ${active ? GREEN : "rgba(44,74,62,0.3)"}`,
              background: active ? GREEN : "transparent",
              color: active ? CREAM : "rgba(28,46,39,0.65)",
              cursor: "pointer",
            }}>{opt}
          </button>
        );
      })}
    </div>
  </div>
);

const CheckGroup = ({ label, options, values, onChange }: {
  label: string; options: string[]; values: string[]; onChange: (v: string[]) => void;
}) => {
  const toggle = (opt: string) =>
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);
  return (
    <div className="mb-5">
      <p className="text-[9px] tracking-[0.28em] uppercase mb-2.5" style={{ fontFamily: F_SANS, color: GREEN_MID }}>{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt);
          return (
            <button key={opt} onClick={() => toggle(opt)} className="transition-all duration-200"
              style={{
                fontFamily: F_SANS, fontSize: "11px", letterSpacing: "0.07em",
                padding: "6px 15px",
                border: `1px solid ${active ? GREEN : "rgba(44,74,62,0.3)"}`,
                background: active ? GREEN : "transparent",
                color: active ? CREAM : "rgba(28,46,39,0.65)",
                cursor: "pointer",
              }}>{opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ═══ Timeline ═══ */
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
          style={{ border: `1px solid ${GREEN_SOFT}`, background: "rgba(242,214,216,0.35)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: PINK_DARK }} />
        </div>
        <div className="w-px flex-1 mt-1 min-h-4" style={{ background: `linear-gradient(to bottom, rgba(78,122,104,0.35), transparent)` }} />
      </div>
      <div className="pb-4">
        <p className="text-[9px] font-medium tracking-[0.22em] uppercase mb-0.5" style={{ fontFamily: F_SANS, color: GREEN_SOFT }}>{time}</p>
        <p className="font-semibold leading-tight" style={{ fontFamily: F_SERIF, fontSize: "1.05rem", color: DARK }}>{title}</p>
        {subtitle && <p className="text-[11px] mt-0.5" style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.82)" }}>{subtitle}</p>}
        {address && <p className="text-[10px] mt-0.5 leading-relaxed italic" style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.7)" }}>{address}</p>}
      </div>
    </div>
  );
};

/* ══════════════════════ MAIN ══════════════════════ */
export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const [child, setChild] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fi = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
  });

  const canSubmit = Boolean(child);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-10" style={{ background: BG }}>

      {/* Фоновый паттерн — нежные лепестки */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='50' cy='50' rx='8' ry='14' fill='%23E8B4BA' fill-opacity='0.07' transform='rotate(30 50 50)'/%3E%3Cellipse cx='50' cy='50' rx='8' ry='14' fill='%23E8B4BA' fill-opacity='0.07' transform='rotate(90 50 50)'/%3E%3Cellipse cx='50' cy='50' rx='8' ry='14' fill='%23E8B4BA' fill-opacity='0.07' transform='rotate(150 50 50)'/%3E%3C/svg%3E")`,
        backgroundSize: "100px 100px",
      }} />

      <div className="relative max-w-lg w-full" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 50ms" }}>
        <div className="relative" style={{
          background: PINK,
          border: `1px solid rgba(196,133,142,0.3)`,
          boxShadow: `0 0 60px rgba(44,74,62,0.1), 0 32px 80px rgba(0,0,0,0.13)`,
        }}>
          {/* Угловые орнаменты */}
          <div className="absolute top-0 left-0 pointer-events-none"><CornerOrnament /></div>
          <div className="absolute top-0 right-0 pointer-events-none"><CornerOrnament flip="scaleX(-1)" /></div>
          <div className="absolute bottom-0 left-0 pointer-events-none"><CornerOrnament flip="scaleY(-1)" /></div>
          <div className="absolute bottom-0 right-0 pointer-events-none"><CornerOrnament flip="scale(-1,-1)" /></div>
          {/* Внутренняя рамка */}
          <div className="absolute inset-[16px] pointer-events-none" style={{ border: `1px solid rgba(44,74,62,0.1)` }} />

          <div className="px-9 pt-10 pb-9 relative">

            {/* ── Цветы сверху ── */}
            <div className="-mx-9 -mt-10 mb-0 relative overflow-hidden pointer-events-none" style={fi(0)}>
              <img
                src={FLOWERS_URL}
                alt=""
                className="w-full"
                style={{ height: 200, objectFit: "cover", objectPosition: "center 30%", opacity: 0.88, mixBlendMode: "multiply" }}
              />
              {/* плавный переход к карточке */}
              <div className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: `linear-gradient(to bottom, transparent, ${PINK})` }} />
            </div>

            {/* ── Верхний орнамент ── */}
            <div className="-mx-3 mb-2" style={fi(200)}><OrnamentLine /></div>

            {/* ── Приветствие ── */}
            <div className="text-center mb-6" style={fi(320)}>
              <p className="mb-3" style={{ fontFamily: F_SCRIPT, fontSize: "1.9rem", fontWeight: 600, color: GREEN }}>
                Дорогой друг!
              </p>
              <p className="text-[13px] leading-[1.9] mb-4"
                style={{ fontFamily: F_SERIF, color: "rgba(28,46,39,0.92)" }}>
                Мы рады сообщить Вам, что{" "}
                <span style={{ fontFamily: F_SCRIPT, fontSize: "1.05rem", fontWeight: 600, color: PINK_DARK }}>25.07.2026</span>{" "}
                состоится<br />
                самое главное торжество в нашей жизни —<br />
                <em>день нашей свадьбы!</em>
              </p>
              <p className="text-[13px] leading-[1.9]"
                style={{ fontFamily: F_SERIF, color: "rgba(28,46,39,0.92)" }}>
                Приглашаем Вас разделить с нами<br />
                радость этого незабываемого дня.
              </p>
            </div>

            <FlowerDivider />

            {/* ── Фото + имена ── */}
            <div className="text-center my-6" style={fi(460)}>
              <p className="text-[8px] tracking-[0.45em] uppercase mb-5"
                style={{ fontFamily: F_SANS, color: GREEN_MID }}>
                С радостью приглашаем вас разделить наш праздник
              </p>

              {/* Фото */}
              <div className="relative mx-auto mb-5 overflow-hidden"
                style={{
                  width: 196, height: 224,
                  border: `2px solid rgba(196,133,142,0.45)`,
                  boxShadow: `0 12px 44px rgba(44,74,62,0.2), inset 0 0 0 3px rgba(251,248,245,0.5)`,
                }}>
                <img src={PHOTO_URL} alt="Виктория и Антон" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-10"
                  style={{ background: `linear-gradient(to top, rgba(242,214,216,0.5), transparent)` }} />
              </div>

              {/* Имена */}
              <p style={{ fontFamily: F_SCRIPT, fontSize: "3.5rem", fontWeight: 700, color: GREEN, lineHeight: 1 }}>
                Виктория
              </p>
              <p className="tracking-[0.3em] my-2" style={{ fontFamily: F_SERIF, fontSize: "1rem", color: PINK_DARK }}>
                ✦ &amp; ✦
              </p>
              <p style={{ fontFamily: F_SCRIPT, fontSize: "3.5rem", fontWeight: 700, color: GREEN, lineHeight: 1 }}>
                Антон
              </p>
              <p className="text-[8px] tracking-[0.32em] uppercase mt-4"
                style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.65)" }}>
                просят вас о незабываемом присутствии
              </p>
            </div>

            <FlowerDivider />

            {/* ── Дата ── */}
            <div className="text-center my-6" style={fi(600)}>
              <p className="text-[8px] tracking-[0.38em] uppercase mb-3" style={{ fontFamily: F_SANS, color: GREEN_MID }}>
                торжество состоится
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <span style={{ fontFamily: F_SCRIPT, fontSize: "5.8rem", fontWeight: 700, color: GREEN, lineHeight: 1 }}>25</span>
                <div className="text-left">
                  <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.55)" }}>июля</p>
                  <p style={{ fontFamily: F_SCRIPT, fontSize: "1.8rem", fontWeight: 700, color: GREEN, lineHeight: 1.1 }}>2026</p>
                </div>
              </div>
              <p className="text-[8px] tracking-[0.28em] uppercase mt-2" style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.62)" }}>
                Санкт‑Петербург
              </p>
            </div>

            <FlowerDivider />

            {/* ── Программа ── */}
            <div className="mt-6 mb-2" style={fi(740)}>
              <p className="text-[8px] tracking-[0.4em] uppercase text-center mb-5" style={{ fontFamily: F_SANS, color: GREEN_MID }}>
                программа торжества
              </p>
              <TimelineItem time="14:40" title="Регистрация брака" subtitle="Церемония бракосочетания" address="Дворец бракосочетания №1, Английская набережная, 28" delay={840} />
              <TimelineItem time="15:30" title="Сбор гостей. Фуршет" address="Ресторан «Viniti», Фурштатская, 52" delay={980} />
              <TimelineItem time="16:00" title="Торжественная часть" subtitle="Начало банкета" delay={1120} />
              <TimelineItem time="21:00" title="Окончание банкета" subtitle="Прощальный вечер" delay={1260} />
            </div>

            <FlowerDivider />

            {/* ── Палитра дресс-кода ── */}
            <div className="mt-6 mb-2" style={fi(900)}>
              <p className="text-[8px] tracking-[0.4em] uppercase text-center mb-3" style={{ fontFamily: F_SANS, color: GREEN_MID }}>
                цветовая гамма торжества
              </p>
              <p className="text-center text-[12px] leading-relaxed mb-5"
                style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(28,46,39,0.85)" }}>
                Мы не вводим дресс-код, но будем благодарны,<br />
                если вы будете придерживаться следующей гаммы:
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                {PALETTE.map(({ name, hex }) => (
                  <div key={name} className="flex flex-col items-center gap-1.5">
                    <div className="rounded-full"
                      style={{
                        width: 52, height: 52, background: hex,
                        border: `2px solid rgba(44,74,62,0.2)`,
                        boxShadow: `0 4px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4)`,
                      }} />
                    <p className="text-[9px] text-center leading-tight"
                      style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.52)", maxWidth: 56 }}>
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <FlowerDivider />

            {/* ── Опросы ── */}
            <div className="mt-6 mb-2" style={fi(1050)}>
              <p className="text-[8px] tracking-[0.4em] uppercase text-center mb-5" style={{ fontFamily: F_SANS, color: GREEN_MID }}>
                для нас важны ваши предпочтения
              </p>

              <p className="text-center text-[12px] leading-relaxed mb-5"
                style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(28,46,39,0.82)" }}>
                Пожалуйста, пройдите опрос — так нам легче будет<br />
                понять Ваши предпочтения по еде и алкоголю
              </p>

              {!submitted ? (
                <>
                  <RadioGroup label="Будет ли ребёнок на свадьбе?" options={["Да", "Нет"]} value={child} onChange={setChild} />

                  <FlowerDivider />

                  <div className="text-center mt-6">
                    <p className="text-[8px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: F_SANS, color: GREEN_MID }}>
                      подтверждение присутствия
                    </p>
                    <p className="text-[13px] leading-relaxed mb-5"
                      style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(28,46,39,0.85)" }}>
                      Просим подтвердить ваше присутствие<br />до 10 июля 2026 года
                    </p>

                    <button
                      onClick={() => canSubmit && setSubmitted(true)}
                      disabled={!canSubmit}
                      className="relative overflow-hidden transition-all duration-300 group"
                      style={{
                        background: canSubmit ? GREEN : "rgba(44,74,62,0.18)",
                        color: CREAM,
                        fontFamily: F_SANS,
                        fontSize: "10px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        padding: "14px 40px",
                        border: canSubmit ? `1px solid ${GREEN}` : "1px solid rgba(44,74,62,0.15)",
                        cursor: canSubmit ? "pointer" : "not-allowed",
                        display: "inline-block",
                      }}>
                      {canSubmit && (
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: PINK_DARK }} />
                      )}
                      <span className="relative">Подтвердить присутствие</span>
                    </button>

                    {!canSubmit && (
                      <p className="text-[9px] mt-2.5" style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.32)" }}>
                        Пожалуйста, ответьте на все вопросы выше
                      </p>
                    )}

                    <p className="text-[9px] mt-5 mb-1" style={{ fontFamily: F_SANS, color: "rgba(28,46,39,0.62)" }}>
                      или по телефону
                    </p>
                    <p style={{ fontFamily: F_SCRIPT, fontSize: "1.5rem", fontWeight: 600, color: GREEN }}>
                      +7 (950) 226-84-43
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p style={{ fontFamily: F_SCRIPT, fontSize: "2.4rem", fontWeight: 600, color: PINK_DARK }} className="mb-3">
                    Спасибо!
                  </p>
                  <p className="text-[13px] leading-relaxed"
                    style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(28,46,39,0.65)" }}>
                    Мы получили ваши предпочтения.<br />
                    Ждём вас с нетерпением!
                  </p>
                </div>
              )}
            </div>

            {/* ── Цветы снизу ── */}
            <div className="-mx-9 -mb-9 mt-6 relative overflow-hidden pointer-events-none" style={fi(1200)}>
              <div className="absolute top-0 left-0 right-0 h-16"
                style={{ background: `linear-gradient(to top, transparent, ${PINK})` }} />
              <img
                src={FLOWERS_URL}
                alt=""
                className="w-full"
                style={{ height: 160, objectFit: "cover", objectPosition: "center 70%", opacity: 0.82, mixBlendMode: "multiply", transform: "scaleX(-1)" }}
              />
            </div>

            {/* ── Нижний орнамент ── */}
            <div className="-mx-3 mt-2 relative z-10" style={fi(1200)}><OrnamentLine flip /></div>

            {/* ── Подпись ── */}
            <div className="text-center mt-2 relative z-10" style={fi(1350)}>
              <p className="text-[12px] leading-relaxed"
                style={{ fontFamily: F_SERIF, fontStyle: "italic", color: "rgba(28,46,39,0.75)" }}>
                Мы безмерно благодарны за то, что вы разделите<br />
                этот особенный день вместе с нами
              </p>
              <p className="text-[8px] tracking-[0.3em] uppercase mt-3"
                style={{ fontFamily: F_SANS, color: "rgba(44,74,62,0.68)" }}>
                с любовью, Виктория &amp; Антон
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}