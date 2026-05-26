import { useEffect, useState } from "react";

const OrnamentTop = () => (
  <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <g stroke="#B8972A" strokeWidth="0.7" fill="none" opacity="0.85">
      <polygon points="300,8 320,30 300,52 280,30" fill="#B8972A" fillOpacity="0.12" stroke="#B8972A" strokeWidth="1"/>
      <polygon points="300,14 316,30 300,46 284,30" fill="none" stroke="#B8972A" strokeWidth="0.5"/>
      <circle cx="300" cy="30" r="3" fill="#B8972A" opacity="0.7"/>
      <line x1="0" y1="60" x2="240" y2="60"/>
      <line x1="360" y1="60" x2="600" y2="60"/>
      <line x1="0" y1="57" x2="200" y2="57" strokeWidth="0.4" opacity="0.5"/>
      <line x1="400" y1="57" x2="600" y2="57" strokeWidth="0.4" opacity="0.5"/>
      <circle cx="220" cy="60" r="4" fill="#B8972A" fillOpacity="0.2"/>
      <circle cx="220" cy="60" r="7"/>
      <circle cx="220" cy="60" r="1.5" fill="#B8972A"/>
      <line x1="210" y1="60" x2="190" y2="40" strokeWidth="0.6"/>
      <line x1="210" y1="60" x2="190" y2="80" strokeWidth="0.6"/>
      <circle cx="190" cy="40" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <circle cx="190" cy="80" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <line x1="185" y1="40" x2="165" y2="30" strokeWidth="0.5" opacity="0.7"/>
      <line x1="185" y1="80" x2="165" y2="90" strokeWidth="0.5" opacity="0.7"/>
      <path d="M165,30 Q155,22 148,28 Q142,34 150,40 Q158,46 162,38" strokeWidth="0.7" opacity="0.8"/>
      <path d="M165,90 Q155,98 148,92 Q142,86 150,80 Q158,74 162,82" strokeWidth="0.7" opacity="0.8"/>
      <circle cx="130" cy="60" r="2" fill="#B8972A" fillOpacity="0.5"/>
      <line x1="90" y1="60" x2="120" y2="60"/>
      <line x1="50" y1="60" x2="80" y2="60" opacity="0.6"/>
      <circle cx="85" cy="60" r="1.5" fill="#B8972A" fillOpacity="0.4"/>
      <circle cx="380" cy="60" r="4" fill="#B8972A" fillOpacity="0.2"/>
      <circle cx="380" cy="60" r="7"/>
      <circle cx="380" cy="60" r="1.5" fill="#B8972A"/>
      <line x1="390" y1="60" x2="410" y2="40" strokeWidth="0.6"/>
      <line x1="390" y1="60" x2="410" y2="80" strokeWidth="0.6"/>
      <circle cx="410" cy="40" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <circle cx="410" cy="80" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <line x1="415" y1="40" x2="435" y2="30" strokeWidth="0.5" opacity="0.7"/>
      <line x1="415" y1="80" x2="435" y2="90" strokeWidth="0.5" opacity="0.7"/>
      <path d="M435,30 Q445,22 452,28 Q458,34 450,40 Q442,46 438,38" strokeWidth="0.7" opacity="0.8"/>
      <path d="M435,90 Q445,98 452,92 Q458,86 450,80 Q442,74 438,82" strokeWidth="0.7" opacity="0.8"/>
      <circle cx="470" cy="60" r="2" fill="#B8972A" fillOpacity="0.5"/>
      <line x1="480" y1="60" x2="510" y2="60"/>
      <line x1="520" y1="60" x2="550" y2="60" opacity="0.6"/>
      <circle cx="515" cy="60" r="1.5" fill="#B8972A" fillOpacity="0.4"/>
      <path d="M240,60 Q260,45 280,55" strokeWidth="0.8"/>
      <path d="M240,60 Q260,75 280,65" strokeWidth="0.8"/>
      <path d="M360,60 Q340,45 320,55" strokeWidth="0.8"/>
      <path d="M360,60 Q340,75 320,65" strokeWidth="0.8"/>
      <ellipse cx="257" cy="50" rx="7" ry="4" transform="rotate(-20,257,50)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
      <ellipse cx="257" cy="70" rx="7" ry="4" transform="rotate(20,257,70)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
      <ellipse cx="343" cy="50" rx="7" ry="4" transform="rotate(20,343,50)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
      <ellipse cx="343" cy="70" rx="7" ry="4" transform="rotate(-20,343,70)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
    </g>
  </svg>
);

const OrnamentBottom = () => (
  <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true" style={{ transform: "scaleY(-1)" }}>
    <g stroke="#B8972A" strokeWidth="0.7" fill="none" opacity="0.85">
      <polygon points="300,8 320,30 300,52 280,30" fill="#B8972A" fillOpacity="0.12" stroke="#B8972A" strokeWidth="1"/>
      <polygon points="300,14 316,30 300,46 284,30" fill="none" stroke="#B8972A" strokeWidth="0.5"/>
      <circle cx="300" cy="30" r="3" fill="#B8972A" opacity="0.7"/>
      <line x1="0" y1="60" x2="240" y2="60"/>
      <line x1="360" y1="60" x2="600" y2="60"/>
      <line x1="0" y1="57" x2="200" y2="57" strokeWidth="0.4" opacity="0.5"/>
      <line x1="400" y1="57" x2="600" y2="57" strokeWidth="0.4" opacity="0.5"/>
      <circle cx="220" cy="60" r="4" fill="#B8972A" fillOpacity="0.2"/>
      <circle cx="220" cy="60" r="7"/>
      <circle cx="220" cy="60" r="1.5" fill="#B8972A"/>
      <line x1="210" y1="60" x2="190" y2="40" strokeWidth="0.6"/>
      <line x1="210" y1="60" x2="190" y2="80" strokeWidth="0.6"/>
      <circle cx="190" cy="40" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <circle cx="190" cy="80" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <line x1="185" y1="40" x2="165" y2="30" strokeWidth="0.5" opacity="0.7"/>
      <line x1="185" y1="80" x2="165" y2="90" strokeWidth="0.5" opacity="0.7"/>
      <path d="M165,30 Q155,22 148,28 Q142,34 150,40 Q158,46 162,38" strokeWidth="0.7" opacity="0.8"/>
      <path d="M165,90 Q155,98 148,92 Q142,86 150,80 Q158,74 162,82" strokeWidth="0.7" opacity="0.8"/>
      <circle cx="130" cy="60" r="2" fill="#B8972A" fillOpacity="0.5"/>
      <line x1="90" y1="60" x2="120" y2="60"/>
      <line x1="50" y1="60" x2="80" y2="60" opacity="0.6"/>
      <circle cx="85" cy="60" r="1.5" fill="#B8972A" fillOpacity="0.4"/>
      <circle cx="380" cy="60" r="4" fill="#B8972A" fillOpacity="0.2"/>
      <circle cx="380" cy="60" r="7"/>
      <circle cx="380" cy="60" r="1.5" fill="#B8972A"/>
      <line x1="390" y1="60" x2="410" y2="40" strokeWidth="0.6"/>
      <line x1="390" y1="60" x2="410" y2="80" strokeWidth="0.6"/>
      <circle cx="410" cy="40" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <circle cx="410" cy="80" r="2.5" fill="#B8972A" fillOpacity="0.4"/>
      <line x1="415" y1="40" x2="435" y2="30" strokeWidth="0.5" opacity="0.7"/>
      <line x1="415" y1="80" x2="435" y2="90" strokeWidth="0.5" opacity="0.7"/>
      <path d="M435,30 Q445,22 452,28 Q458,34 450,40 Q442,46 438,38" strokeWidth="0.7" opacity="0.8"/>
      <path d="M435,90 Q445,98 452,92 Q458,86 450,80 Q442,74 438,82" strokeWidth="0.7" opacity="0.8"/>
      <circle cx="470" cy="60" r="2" fill="#B8972A" fillOpacity="0.5"/>
      <line x1="480" y1="60" x2="510" y2="60"/>
      <line x1="520" y1="60" x2="550" y2="60" opacity="0.6"/>
      <circle cx="515" cy="60" r="1.5" fill="#B8972A" fillOpacity="0.4"/>
      <path d="M240,60 Q260,45 280,55" strokeWidth="0.8"/>
      <path d="M240,60 Q260,75 280,65" strokeWidth="0.8"/>
      <path d="M360,60 Q340,45 320,55" strokeWidth="0.8"/>
      <path d="M360,60 Q340,75 320,65" strokeWidth="0.8"/>
      <ellipse cx="257" cy="50" rx="7" ry="4" transform="rotate(-20,257,50)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
      <ellipse cx="257" cy="70" rx="7" ry="4" transform="rotate(20,257,70)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
      <ellipse cx="343" cy="50" rx="7" ry="4" transform="rotate(20,343,50)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
      <ellipse cx="343" cy="70" rx="7" ry="4" transform="rotate(-20,343,70)" fill="#B8972A" fillOpacity="0.15" stroke="#B8972A" strokeWidth="0.6"/>
    </g>
  </svg>
);

const CornerOrnament = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className={`w-20 h-20 ${className ?? ""}`} aria-hidden="true">
    <g stroke="#B8972A" strokeWidth="0.8" fill="none" opacity="0.75">
      <line x1="5" y1="5" x2="60" y2="5" strokeWidth="1"/>
      <line x1="5" y1="5" x2="5" y2="60" strokeWidth="1"/>
      <line x1="5" y1="12" x2="50" y2="12" strokeWidth="0.5" opacity="0.6"/>
      <line x1="12" y1="5" x2="12" y2="50" strokeWidth="0.5" opacity="0.6"/>
      <path d="M5,5 Q25,8 28,28 Q8,25 5,5Z" fill="#B8972A" fillOpacity="0.06" stroke="#B8972A" strokeWidth="0.7"/>
      <path d="M20,20 Q30,22 32,32 Q22,30 20,20Z" fill="#B8972A" fillOpacity="0.1"/>
      <circle cx="5" cy="5" r="3" fill="#B8972A" fillOpacity="0.5"/>
      <circle cx="60" cy="5" r="2" fill="#B8972A" fillOpacity="0.3"/>
      <circle cx="5" cy="60" r="2" fill="#B8972A" fillOpacity="0.3"/>
      <path d="M18,5 Q25,15 18,25" strokeWidth="0.6" opacity="0.7"/>
      <path d="M5,18 Q15,25 25,18" strokeWidth="0.6" opacity="0.7"/>
      <ellipse cx="30" cy="12" rx="5" ry="3" transform="rotate(-30,30,12)" fill="#B8972A" fillOpacity="0.1" stroke="#B8972A" strokeWidth="0.5"/>
      <ellipse cx="12" cy="30" rx="5" ry="3" transform="rotate(60,12,30)" fill="#B8972A" fillOpacity="0.1" stroke="#B8972A" strokeWidth="0.5"/>
    </g>
  </svg>
);

const GoldDivider = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #B8972A)", opacity: 0.5 }} />
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 14,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 10,9" fill="#B8972A" opacity="0.7"/>
    </svg>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #B8972A)", opacity: 0.5 }} />
  </div>
);

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
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(18px)" }}
    >
      <div className="flex flex-col items-center pt-1">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ border: "1px solid #B8972A", background: "rgba(245,240,225,0.5)" }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: "#B8972A" }} />
        </div>
        <div className="w-px flex-1 mt-1 min-h-6" style={{ background: "linear-gradient(to bottom, rgba(184,151,42,0.4), transparent)" }} />
      </div>
      <div className="pb-6">
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif", color: "#B8972A" }}>
          {time}
        </p>
        <p className="text-xl font-semibold leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1C1410" }}>
          {title}
        </p>
        {subtitle && (
          <p className="text-xs mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(28,20,16,0.55)" }}>
            {subtitle}
          </p>
        )}
        {address && (
          <p className="text-[11px] mt-1 leading-relaxed italic" style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(28,20,16,0.45)" }}>
            {address}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 py-10"
      style={{ background: "#F0EBE0" }}
    >
      {/* Тонкий фоновый паттерн */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B8972A' fill-opacity='0.04'%3E%3Cpolygon points='40,6 43,28 65,28 47,41 54,63 40,50 26,63 33,41 15,28 37,28'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Карточка */}
      <div
        className="relative max-w-lg w-full transition-all duration-1000"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(32px)",
        }}
      >
        <div
          className="relative"
          style={{
            background: "#FAF7F0",
            border: "1px solid rgba(184,151,42,0.28)",
            boxShadow: "0 0 70px rgba(184,151,42,0.1), 0 24px 70px rgba(0,0,0,0.13)",
          }}
        >
          {/* Угловые орнаменты */}
          <div className="absolute top-0 left-0 pointer-events-none">
            <CornerOrnament />
          </div>
          <div className="absolute top-0 right-0 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
            <CornerOrnament />
          </div>
          <div className="absolute bottom-0 left-0 pointer-events-none" style={{ transform: "scaleY(-1)" }}>
            <CornerOrnament />
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none" style={{ transform: "scale(-1,-1)" }}>
            <CornerOrnament />
          </div>

          {/* Внутренняя рамка */}
          <div
            className="absolute inset-5 pointer-events-none"
            style={{ border: "1px solid rgba(184,151,42,0.15)" }}
          />

          <div className="px-10 pt-12 pb-10 relative">

            {/* Верхний орнамент */}
            <div
              className="-mx-4 mb-2 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transitionDelay: "300ms" }}
            >
              <OrnamentTop />
            </div>

            {/* Приветствие и имена */}
            <div
              className="text-center mb-8 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transitionDelay: "500ms" }}
            >
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#B8972A" }}
              >
                С радостью приглашаем вас разделить наш праздник
              </p>
              <p
                className="text-5xl leading-none mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#1C1410" }}
              >
                Алексей
              </p>
              <p
                className="text-lg tracking-widest my-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(184,151,42,0.75)" }}
              >
                ✦ &amp; ✦
              </p>
              <p
                className="text-5xl leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, color: "#1C1410" }}
              >
                Мария
              </p>
              <p
                className="text-[9px] tracking-[0.3em] uppercase mt-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(28,20,16,0.38)" }}
              >
                просят вас о незабываемом присутствии
              </p>
            </div>

            <GoldDivider />

            {/* Дата */}
            <div
              className="text-center my-7 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transitionDelay: "700ms" }}
            >
              <p
                className="text-[9px] tracking-[0.35em] uppercase mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#B8972A" }}
              >
                торжество состоится
              </p>
              <div className="flex items-baseline justify-center gap-3">
                <span
                  className="leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", fontWeight: 300, color: "#1C1410" }}
                >
                  25
                </span>
                <div className="text-left">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(28,20,16,0.55)" }}
                  >
                    июля
                  </p>
                  <p
                    className="text-2xl leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#1C1410" }}
                  >
                    2026
                  </p>
                </div>
              </div>
              <p
                className="text-[9px] tracking-[0.25em] uppercase mt-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(28,20,16,0.38)" }}
              >
                Санкт‑Петербург
              </p>
            </div>

            <GoldDivider />

            {/* Программа */}
            <div
              className="mt-8 mb-4 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transitionDelay: "900ms" }}
            >
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-center mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#B8972A" }}
              >
                программа торжества
              </p>

              <TimelineItem
                time="14:40"
                title="Регистрация брака"
                subtitle="Церемония бракосочетания"
                address="Дворец бракосочетания №1, Английская набережная, 28"
                delay={1000}
              />
              <TimelineItem
                time="16:00"
                title="Торжественная часть"
                subtitle="Сбор гостей и начало банкета"
                address="Ресторан «Viniti», Фурштатская, 52"
                delay={1200}
              />
              <TimelineItem
                time="21:00"
                title="Окончание банкета"
                subtitle="Прощальный вечер"
                delay={1400}
              />
            </div>

            <GoldDivider />

            {/* Контакты и подтверждение */}
            <div
              className="text-center mt-7 mb-4 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)", transitionDelay: "1400ms" }}
            >
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "#B8972A" }}
              >
                подтверждение присутствия
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(28,20,16,0.65)" }}
              >
                Просим подтвердить ваше присутствие до 10 июля 2026 года
              </p>
              <button
                className="inline-flex items-center gap-2 transition-all duration-300 hover:opacity-75"
                style={{
                  background: "#1C1410",
                  color: "#FAF7F0",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "12px 32px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Подтвердить присутствие
              </button>
              <p
                className="text-[9px] mt-4 mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(28,20,16,0.38)" }}
              >
                или свяжитесь с нами по телефону
              </p>
              <p
                className="text-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#B8972A" }}
              >
                +7 (900) 000-00-00
              </p>
            </div>

            {/* Нижний орнамент */}
            <div
              className="-mx-4 mt-6 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transitionDelay: "1500ms" }}
            >
              <OrnamentBottom />
            </div>

            {/* Благодарность */}
            <div
              className="text-center mt-2 transition-all duration-1000"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)", transitionDelay: "1600ms" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(28,20,16,0.45)" }}
              >
                Мы безмерно благодарны за то, что вы разделите<br />
                этот особенный день вместе с нами
              </p>
              <p
                className="text-[8px] tracking-[0.3em] uppercase mt-3"
                style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(184,151,42,0.55)" }}
              >
                с любовью, Алексей &amp; Мария
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
