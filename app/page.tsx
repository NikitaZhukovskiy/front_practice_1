const IMG = {
  hero: "/pic1.jpg",
  vivaldi: "/pic3.jpg",
  opera: "/pic2.jpg",
  hall: "/pic3.jpg",
  news1: "/pic4.jpg",
  news2: "/pic5.jpg",
  tour: "/pic6.jpg",
};

const serif = "font-garamond";
const sans = "font-fira";

const NAV = ["Афиша", "Заказ билетов", "Контакты", "История дворца", "Галерея", "Планы залов"];

const EVENTS = [
  {
    day: 3,
    month: "июня",
    img: IMG.vivaldi,
    title: "Антонио Вивальди. Времена года",
    desc: "Посвящение Фрэнку Синатре.",
    genre: "Джаз",
    time: "19:00",
    age: "6+",
  },
  {
    day: 30,
    month: "июня",
    img: IMG.opera,
    title: "Опера VS Оперетта",
    desc: "Санкт-Петербургский камерный оркестр Olympic Orchestra",
    genre: "Классика",
  },
];

const NEWS = [
  {
    img: IMG.news1,
    title: "Переносы / Отмена мероприятий",
    text: "11.04.2023 г. в 19.00 час. - концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.",
  },
  {
    img: IMG.news2,
    title: "Переносы / Отмена мероприятий",
    text: "11.04.2023 г. в 19.00 час. - концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.",
  },
];

const ANNOUNCES = Array.from({ length: 4 }, () => ({ day: 3, month: "июня", title: "«ВЕК имени СИНАТРЫ»" }));

const ACTIVE_DAYS = [2, 5, 7];

const CalendarIcon = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <rect x="8" y="2" width="3" height="6" rx="1" />
    <rect x="21" y="2" width="3" height="6" rx="1" />
    <path d="M3 7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v4H3V7Zm0 6h26v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V13Zm4 3v3h3v-3H7Zm5 0v3h3v-3h-3Zm5 0v3h3v-3h-3Zm5 0v3h3v-3h-3ZM7 21v3h3v-3H7Zm5 0v3h3v-3h-3Zm5 0v3h3v-3h-3Zm5 0v3h3v-3h-3Z" />
  </svg>
);

const NoteIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#b3b3b3]" fill="currentColor" aria-hidden="true">
    <path d="M9 3v11.3A3.5 3.5 0 1 0 11 17.5V8l9-2v6.3a3.5 3.5 0 1 0 2 3.2V1L9 3Z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#b3b3b3]" fill="currentColor" aria-hidden="true">
    <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm1 11.4 4 2.4-1 1.7-5-3V6h2v6.4Z" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#b3b3b3]" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="7" r="5" />
    <path d="M2 23c0-5.5 4.5-9 10-9s10 3.5 10 9H2Z" />
  </svg>
);

const Chevron = ({ dir = "left" }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
  </svg>
);


const Logo = () => (
  <a href="/" className={`${serif} text-[11px] font-semibold uppercase tracking-tight text-white`}>
    Сайт концертно - экскурсионных программ
  </a>
);

const SectionHeader = ({ title, link }) => (
  <div className="flex flex-wrap items-center justify-between gap-4">
    <h2 className={`${serif} text-[40px] font-semibold leading-none text-[#1c1c1c]`}>{title}</h2>
    {link && (
      <a href="#" className="flex items-center gap-8 text-[#1c1c1c] hover:opacity-80">
        <CalendarIcon className="h-8 w-8 text-[#10b094]" />
        <span className={`${serif} text-xl font-semibold`}>{link}</span>
      </a>
    )}
  </div>
);

const Meta = ({ icon, children }) => (
  <span className="flex items-center gap-3 text-xs text-[#555]">
    {icon}
    {children}
  </span>
);


const Header = () => (
  <header className="bg-[#1c1c1c]">
    <div className="mx-auto flex h-[78px] max-w-[1000px] items-center justify-between px-4">
      <Logo />
      <nav className="hidden lg:block">
        <ul className={`${sans} flex items-center text-xs font-medium text-white`}>
          {NAV.map((item, i) => (
            <li key={item} className="flex items-center">
              {i > 0 && <span className="mx-4 h-1.5 w-1.5 rotate-45 bg-white" />}
              <a href="#" className="hover:text-[#10b094]">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="mx-auto mt-12 grid max-w-[1000px] gap-5 px-4 md:grid-cols-[2fr_1fr]">
    <img src={IMG.hero} alt="Сцена театра" className="aspect-[650/377] w-full rounded-lg object-cover" />
    <div className="flex flex-col gap-3">
      {[
        { img: IMG.opera, title: "Опера VS Оперетта" },
        { img: IMG.hall, title: "Антонио Вивальди. Времена года" },
      ].map((e) => (
        <a key={e.title} href="#" className="flex items-center gap-4 rounded-lg bg-[#e2e2e2] p-3 hover:bg-[#d9d9d9]">
          <img src={e.img} alt="" className="h-[60px] w-[60px] shrink-0 rounded object-cover" />
          <span className={`${sans} text-xs font-bold text-[#1c1c1c]`}>{e.title}</span>
        </a>
      ))}
    </div>
  </section>
);

const Afisha = () => (
  <section className="mx-auto mt-36 max-w-[1000px] px-4">
    <div className="px-2.5">
      <SectionHeader title="Афиша" link="Все мероприятия" />
    </div>

    <div className="mt-20 flex flex-col gap-16">
      {EVENTS.map((e) => (
        <article
          key={e.title}
          className="grid items-center gap-6 rounded-xl bg-[#e2e2e2] p-6 md:grid-cols-[100px_243px_1fr_auto] md:gap-12 md:py-6 md:pl-12 md:pr-12"
        >
          <div className={`${serif} text-center font-semibold text-[#444]`}>
            <div className="text-5xl leading-none">{e.day}</div>
            <div className="mt-2 text-xl">{e.month}</div>
          </div>

          <img src={e.img} alt={e.title} className="aspect-[243/182] w-full rounded-lg object-cover" />

          <div className={sans}>
            <h3 className={`${serif} text-2xl font-bold leading-snug text-[#1c1c1c]`}>{e.title}</h3>
            <p className="mt-3 max-w-[290px] text-xs leading-relaxed text-[#555]">{e.desc}</p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              {e.genre && <Meta icon={<NoteIcon />}>{e.genre}</Meta>}
              {e.time && <Meta icon={<ClockIcon />}>{e.time}</Meta>}
              {e.age && <Meta icon={<UserIcon />}>{e.age}</Meta>}
            </div>
          </div>

          <a
            href="#"
            className={`${sans} justify-self-start rounded-full bg-[#10b094] px-6 py-3 text-xs font-bold text-white hover:bg-[#0d9a81] md:justify-self-auto`}
          >
            Заказать билет
          </a>
        </article>
      ))}
    </div>
  </section>
);

const NewsAndTours = () => (
  <section className="mx-auto mt-24 grid max-w-[1000px] gap-12 px-4 lg:grid-cols-[1fr_400px] lg:gap-24">
    <div>
      <h2 className={`${serif} pt-4 text-[40px] font-semibold leading-none text-[#1c1c1c]`}>Новости</h2>
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {NEWS.map((n, i) => (
          <article key={i}>
            <img src={n.img} alt="" className="aspect-[232/155] w-full rounded-lg object-cover" />
            <h3 className={`${serif} mt-6 text-xl font-bold leading-snug text-[#1c1c1c]`}>{n.title}</h3>
            <p className={`${sans} mt-4 text-xs leading-relaxed text-[#555]`}>{n.text}</p>
          </article>
        ))}
      </div>
    </div>

    <aside className="overflow-hidden rounded-lg bg-[#e2e2e2]">
      <div className="relative">
        <img src={IMG.tour} alt="" className="aspect-[400/228] w-full object-cover" />
        <h3 className={`${serif} absolute bottom-6 left-5 text-2xl font-semibold text-white`}>Обзорные экскурсии</h3>
      </div>
      <div className="flex justify-between gap-4 p-5">
        <div className="flex flex-col justify-between">
          <span className={`${serif} text-2xl font-bold text-[#1c1c1c]`}>Июль</span>
          <div className="flex gap-2">
            {["left", "right"].map((d) => (
              <button
                key={d}
                type="button"
                aria-label={d === "left" ? "Предыдущий месяц" : "Следующий месяц"}
                className="grid h-9 w-9 place-items-center rounded bg-[#10b094] text-white hover:bg-[#0d9a81]"
              >
                <Chevron dir={d} />
              </button>
            ))}
          </div>
        </div>
        <div className={`${sans} grid grid-cols-7 gap-1`}>
          {Array.from({ length: 35 }, (_, i) => {
            const day = (i % 7) + 1;
            const active = ACTIVE_DAYS.includes(day);
            return (
              <button
                key={i}
                type="button"
                className={`grid h-[30px] w-[30px] place-items-center text-[11px] text-white ${
                  active ? "bg-[#10b094] hover:bg-[#0d9a81]" : "bg-[#a8a8a8]"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  </section>
);

const Announces = () => (
  <section className="mx-auto mt-32 max-w-[1000px] px-4 pb-28">
    <SectionHeader title="Краткие анонсы" link="Все мероприятия" />
    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {ANNOUNCES.map((a, i) => (
        <a key={i} href="#" className="flex items-center gap-5 hover:opacity-85">
          <div className={`${serif} grid h-[76px] w-[76px] shrink-0 place-content-center rounded-md bg-[#10b094] text-center font-semibold text-white`}>
            <span className="text-2xl leading-none">{a.day}</span>
            <span className="text-xs">{a.month}</span>
          </div>
          <span className={`${sans} text-[10px] font-bold text-[#1c1c1c]`}>{a.title}</span>
        </a>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className={`${sans} bg-[#1c1c1c] text-white`}>
    <div className="mx-auto grid max-w-[1000px] gap-10 px-4 pb-12 pt-12 md:grid-cols-3">
      <div>
        <Logo />
      </div>
      <div>
        <h4 className={`${serif} text-lg font-semibold`}>Мероприятия</h4>
        <ul className="mt-6 flex gap-5 text-xs">
          {["Экскурсии", "Концерты", "Афиша"].map((l) => (
            <li key={l}>
              <a href="#" className="hover:text-[#10b094]">{l}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className={`${serif} text-lg font-semibold`}>Контакты</h4>
        <ul className="mt-6 space-y-5 text-xs">
          <li>г. Санкт-Петербург, Невский пр., д. 1</li>
          <li>
            <a href="mailto:text@mail.ru" className="underline hover:text-[#10b094]">text@mail.ru</a>
          </li>
          <li>
            <a href="tel:+78121234567" className="hover:text-[#10b094]">(812) 123-45-67</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mx-auto max-w-[1000px] px-4">
      <div className="border-t border-[#555] py-6 text-center text-xs text-[#9a9a9a]">Сайт ко</div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className={`${sans} min-h-screen bg-[#eeeeee]`}>
      <Header />
      <main>
        <Hero />
        <Afisha />
        <NewsAndTours />
        <Announces />
      </main>
      <Footer />
    </div>
  );
}
