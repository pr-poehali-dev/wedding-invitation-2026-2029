import { useEffect, useState } from "react";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/bd4b2521-98ec-4536-a1d6-59156f77a632/bucket/a4a07c76-e7c8-4e6e-87f6-c949bb962d17.jpg";

const GOLD = "#B8972A";
const DARK = "#1C1410";
const CREAM = "#FAF7F0";
const BG = "#F0EBE0";

const OrnamentLine = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 600 90"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
    aria-hidden="true"
    style={flip ? { transform: "scaleY(-1)" } : undefined}
  >
    <g stroke={GOLD} strokeWidth="0.7" fill="none" opacity="0.8">
      <polygon points="300,6 318,28 300,50 282,28" fill={GOLD} fillOpacity="0.1" strokeWidth="1" />
      <circle cx="300" cy="28" r="3" fill={GOLD} opacity="0.65" />
      <line x1="0" y1="45" x2="238" y2="45" />
      <line x1="362" y1="45" x2="600" y2="45" />
      <line x1="0" y1="42" x2="195" y2="42" strokeWidth="0.35" opacity="0.45" />
      <line x1="405" y1="42" x2="600" y2="42" strokeWidth="0.35" opacity="0.45" />
      <circle cx="218" cy="45" r="7" />
      <circle cx="218" cy="45" r="3.5" fill={GOLD} fillOpacity="0.2" />
      <circle cx="218" cy="45" r="1.4" fill={GOLD} />
      <line x1="209" y1="45" x2="188" y2="28" strokeWidth="0.55" />
      <line x1="209" y1="45" x2="188" y2="62" strokeWidth="0.55" />
      <path d="M165,28 Q155,20 148,26 Q142,32 150,38 Q158,44 163,36" strokeWidth="0.65" opacity="0.75" />
      <path d="M165,62 Q155,70 148,64 Q142,58 150,52 Q158,46 163,54" strokeWidth="0.65" opacity="0.75" />
      <circle cx="188" cy="28" r="2.2" fill={GOLD} fillOpacity="0.35" />
      <circle cx="188" cy="62" r="2.2" fill={GOLD} fillOpacity="0.35" />
      <line x1="100" y1="45" x2="125" y2="45" />
      <line x1="55" y1="45" x2="82" y2="45" opacity="0.55" />
      <circle cx="87" cy="45" r="1.8" fill={GOLD} fillOpacity="0.4" />
      <circle cx="382" cy="45" r="7" />
      <circle cx="382" cy="45" r="3.5" fill={GOLD} fillOpacity="0.2" />
      <circle cx="382" cy="45" r="1.4" fill={GOLD} />
      <line x1="391" y1="45" x2="412" y2="28" strokeWidth="0.55" />
      <line x1="391" y1="45" x2="412" y2="62" strokeWidth="0.55" />
      <path d="M435,28 Q445,20 452,26 Q458,32 450,38 Q442,44 437,36" strokeWidth="0.65" opacity="0.75" />
      <path d="M435,62 Q445,70 452,64 Q458,58 450,52 Q442,46 437,54" strokeWidth="0.65" opacity="0.75" />
      <circle cx="412" cy="28" r="2.2" fill={GOLD} fillOpacity="0.35" />
      <circle cx="412" cy="62" r="2.2" fill={GOLD} fillOpacity="0.35" />
      <line x1="475" y1="45" x2="500" y2="45" />
      <line x1="518" y1="45" x2="545" y2="45" opacity="0.55" />
      <circle cx="513" cy="45" r="1.8" fill={GOLD} fillOpacity="0.4" />
      <path d="M238,45 Q258,33 280,42" strokeWidth="0.75" />
      <path d="M238,45 Q258,57 280,48" strokeWidth="0.75" />
      <path d="M362,45 Q342,33 320,42" strokeWidth="0.75" />
      <path d="M362,45 Q342,57 320,48" strokeWidth="0.75" />
      <ellipse cx="256" cy="37" rx="7" ry="3.5" transform="rotate(-18,256,37)" fill={GOLD} fillOpacity="0.12" stroke={GOLD} strokeWidth="0.5" />
      <ellipse cx="256" cy="53" rx="7" ry="3.5" transform="rotate(18,256,53)" fill={GOLD} fillOpacity="0.12" stroke={GOLD} strokeWidth="0.5" />
      <ellipse cx="344" cy="37" rx="7" ry="3.5" transform="rotate(18,344,37)" fill={GOLD} fillOpacity="0.12" stroke={GOLD} strokeWidth="0.5" />
      <ellipse cx="344" cy="53" rx="7" ry="3.5" transform="rotate(-18,344,53)" fill={GOLD} fillOpacity="0.12" stroke={GOLD} strokeWidth="0.5" />
    </g>
  </svg>
);

const CornerOrnament = ({ flip }: { flip?: string }) => (
  <svg
    viewBox="0 0 80 80"
    className="w-[72px] h-[72px]"
    style={flip ? { transform: flip } : undefined}
    aria-hidden="true"
  >
    <g stroke={GOLD} strokeWidth="0.8" fill="none" opacity="0.7">
      <line x1="5" y1="5" x2="58" y2="5" strokeWidth="1.1" />
      <line x1="5" y1="5" x2="5" y2="58" strokeWidth="1.1" />
      <line x1="5" y1="13" x2="46" y2="13" strokeWidth="0.4" opacity="0.55" />
      <line x1="13" y1="5" x2="13" y2="46" strokeWidth="0.4" opacity="0.55" />
      <path d="M5,5 Q24,8 27,27 Q8,24 5,5Z" fill={GOLD} fillOpacity="0.07" stroke={GOLD} strokeWidth="0.65" />
      <circle cx="5" cy="5" r="2.8" fill={GOLD} fillOpacity="0.5" />
      <circle cx="58" cy="5" r="1.8" fill={GOLD} fillOpacity="0.28" />
      <circle cx="5" cy="58" r="1.8" fill={GOLD} fillOpacity="0.28" />
      <path d="M17,5 Q23,14 17,23" strokeWidth="0.55" opacity="0.65" />
      <path d="M5,17 Q14,23 23,17" strokeWidth="0.55" opacity="0.65" />
      <ellipse cx="29" cy="11" rx="5" ry="2.8" transform="rotate(-28,29,11)" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="0.45" />
      <ellipse cx="11" cy="29" rx="5" ry="2.8" transform="rotate(62,11,29)" fill={GOLD} fillOpacity="0.1" stroke={GOLD} strokeWidth="0.45" />
    </g>
  </svg>
);

const StarDivider = () => (
  <div className="flex items-center gap-3 my-0.5">
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.45 }} />
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill={GOLD} opacity="0.65" />
    </svg>
    <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.45 }} />
  </div>
);

const RadioGroup = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="mb-5">
    <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
      {label}
    </p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="transition-all duration-200"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.08em",
              padding: "6px 14px",
              border: `1px solid ${active ? GOLD : "rgba(184,151,42,0.35)"}`,
              background: active ? GOLD : "transparent",
              color: active ? CREAM : "rgba(28,20,16,0.65)",
              cursor: "pointer",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  </div>
);

const CheckGroup = ({
  label,
  options,
  values,
  onChange,
}: {
  label: string;
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) => {
  const toggle = (opt: string) =>
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);
  return (
    <div className="mb-5">
      <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = values.includes(opt);
          return (
            <button
              key={opt}
              onClick={() => toggle(opt)}
              className="transition-all duration-200"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                padding: "6px 14px",
                border: `1px solid ${active ? GOLD : "rgba(184,151,42,0.35)"}`,
                background: active ? GOLD : "transparent",
                color: active ? CREAM : "rgba(28,20,16,0.65)",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TimelineItem = ({
  time,
  title,
  subtitle,
  address,
  delay,
}: {
  time: string;
  title: string;
  subtitle?: string;
  address?: string;
  delay: number;
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="flex gap-5 items-start transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
    >
      <div className="flex flex-col items-center pt-1">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ border: `1px solid ${GOLD}`, background: "rgba(245,240,225,0.5)" }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
        </div>
        <div className="w-px flex-1 mt-1 min-h-5" style={{ background: `linear-gradient(to bottom, rgba(184,151,42,0.35), transparent)` }} />
      </div>
      <div className="pb-5">
        <p className="text-[9px] font-medium tracking-[0.25em] uppercase mb-0.5" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
          {time}
        </p>
        <p className="text-[1.1rem] font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: DARK }}>
          {title}
        </p>
        {subtitle && (
          <p className="text-[11px] mt-0.5" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.52)" }}>
            {subtitle}
          </p>
        )}
        {address && (
          <p className="text-[10px] mt-1 leading-relaxed italic" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.42)" }}>
            {address}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const [transfer, setTransfer] = useState("");
  const [food, setFood] = useState("");
  const [alcohol, setAlcohol] = useState<string[]>([]);
  const [child, setChild] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const fi = (delay: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
  });

  const canSubmit = Boolean(transfer && food && child);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-10" style={{ background: BG }}>
      {/* Фоновый паттерн */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8972A' fill-opacity='0.035'%3E%3Cpolygon points='40,6 43,28 65,28 47,41 54,63 40,50 26,63 33,41 15,28 37,28'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-lg w-full" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 80ms" }}>
        <div
          className="relative"
          style={{
            background: CREAM,
            border: `1px solid rgba(184,151,42,0.25)`,
            boxShadow: `0 0 80px rgba(184,151,42,0.09), 0 28px 80px rgba(0,0,0,0.12)`,
          }}
        >
          {/* Угловые орнаменты */}
          <div className="absolute top-0 left-0 pointer-events-none"><CornerOrnament /></div>
          <div className="absolute top-0 right-0 pointer-events-none"><CornerOrnament flip="scaleX(-1)" /></div>
          <div className="absolute bottom-0 left-0 pointer-events-none"><CornerOrnament flip="scaleY(-1)" /></div>
          <div className="absolute bottom-0 right-0 pointer-events-none"><CornerOrnament flip="scale(-1,-1)" /></div>
          <div className="absolute inset-[18px] pointer-events-none" style={{ border: `1px solid rgba(184,151,42,0.13)` }} />

          <div className="px-9 pt-11 pb-10 relative">

            {/* Верхний орнамент */}
            <div className="-mx-3 mb-1" style={fi(280)}>
              <OrnamentLine />
            </div>

            {/* Приветствие */}
            <div className="text-center mb-6" style={fi(450)}>
              <p className="text-[8.5px] tracking-[0.42em] uppercase mb-5" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
                С радостью приглашаем вас разделить наш праздник
              </p>

              {/* Фото */}
              <div
                className="relative mx-auto mb-6 overflow-hidden"
                style={{
                  width: 200,
                  height: 230,
                  border: `1px solid rgba(184,151,42,0.4)`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.2), inset 0 0 0 3px rgba(250,247,240,0.5)`,
                }}
              >
                <img src={PHOTO_URL} alt="Виктория и Антон" className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-10" style={{ background: `linear-gradient(to top, rgba(250,247,240,0.5), transparent)` }} />
              </div>

              {/* Имена */}
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400, fontSize: "2.75rem", color: DARK, lineHeight: 1 }}>
                Виктория
              </p>
              <p className="text-base tracking-[0.35em] my-2" style={{ fontFamily: "'Playfair Display', serif", color: "rgba(184,151,42,0.7)" }}>
                ✦ &amp; ✦
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400, fontSize: "2.75rem", color: DARK, lineHeight: 1 }}>
                Антон
              </p>
              <p className="text-[8.5px] tracking-[0.32em] uppercase mt-4" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.36)" }}>
                просят вас о незабываемом присутствии
              </p>
            </div>

            <StarDivider />

            {/* Дата */}
            <div className="text-center my-6" style={fi(620)}>
              <p className="text-[8.5px] tracking-[0.38em] uppercase mb-3" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
                торжество состоится
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "5.5rem", fontWeight: 400, color: DARK, lineHeight: 1 }}>
                  25
                </span>
                <div className="text-left">
                  <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.5)" }}>
                    июля
                  </p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", fontWeight: 400, color: DARK, lineHeight: 1.15 }}>
                    2026
                  </p>
                </div>
              </div>
              <p className="text-[8.5px] tracking-[0.28em] uppercase mt-2" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.36)" }}>
                Санкт‑Петербург
              </p>
            </div>

            <StarDivider />

            {/* Программа */}
            <div className="mt-7 mb-3" style={fi(800)}>
              <p className="text-[8.5px] tracking-[0.4em] uppercase text-center mb-6" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
                программа торжества
              </p>
              <TimelineItem time="14:40" title="Регистрация брака" subtitle="Церемония бракосочетания" address="Дворец бракосочетания №1, Английская набережная, 28" delay={900} />
              <TimelineItem time="16:00" title="Торжественная часть" subtitle="Сбор гостей и начало банкета" address="Ресторан «Viniti», Фурштатская, 52" delay={1080} />
              <TimelineItem time="21:00" title="Окончание банкета" subtitle="Прощальный вечер" delay={1260} />
            </div>

            <StarDivider />

            {/* Опросы */}
            <div className="mt-7 mb-3" style={fi(1000)}>
              <p className="text-[8.5px] tracking-[0.4em] uppercase text-center mb-6" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
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
                    <p className="text-[8.5px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Raleway', sans-serif", color: GOLD }}>
                      подтверждение присутствия
                    </p>
                    <p className="text-sm leading-relaxed mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(28,20,16,0.6)" }}>
                      Просим подтвердить ваше присутствие до 10 июля 2026 года
                    </p>
                    <button
                      onClick={() => canSubmit && setSubmitted(true)}
                      className="transition-all duration-300"
                      style={{
                        background: canSubmit ? DARK : "rgba(28,20,16,0.22)",
                        color: CREAM,
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        padding: "13px 36px",
                        border: "none",
                        cursor: canSubmit ? "pointer" : "not-allowed",
                      }}
                    >
                      Подтвердить присутствие
                    </button>
                    {!canSubmit && (
                      <p className="text-[9px] mt-2" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.32)" }}>
                        Пожалуйста, ответьте на все вопросы выше
                      </p>
                    )}
                    <p className="text-[9px] mt-4 mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(28,20,16,0.35)" }}>
                      или по телефону
                    </p>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: GOLD }}>
                      +7 (900) 000-00-00
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.6rem", color: GOLD }} className="mb-3">
                    Спасибо!
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(28,20,16,0.6)" }}>
                    Мы получили ваши предпочтения.<br />
                    Ждём вас с нетерпением!
                  </p>
                </div>
              )}
            </div>

            {/* Нижний орнамент */}
            <div className="-mx-3 mt-6" style={fi(1200)}>
              <OrnamentLine flip />
            </div>

            {/* Благодарность */}
            <div className="text-center mt-2" style={fi(1400)}>
              <p className="text-[13px] leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(28,20,16,0.42)" }}>
                Мы безмерно благодарны за то, что вы разделите<br />
                этот особенный день вместе с нами
              </p>
              <p className="text-[8px] tracking-[0.32em] uppercase mt-3" style={{ fontFamily: "'Raleway', sans-serif", color: "rgba(184,151,42,0.5)" }}>
                с любовью, Виктория &amp; Антон
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
