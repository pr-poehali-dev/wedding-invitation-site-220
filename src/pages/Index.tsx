import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/423e311a-814f-46d1-98ca-01426ad7d26f/files/e4de7eae-6402-4be0-9707-205f1eb34082.jpg';

const nav = [
  { id: 'details', label: 'Дата и место' },
  { id: 'rsvp', label: 'Подтверждение' },
  { id: 'contacts', label: 'Контакты' },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-4 py-2">
    <span className="h-px w-14 bg-border" />
    <Icon name="Heart" size={16} className="text-accent" />
    <span className="h-px w-14 bg-border" />
  </div>
);

export default function Index() {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl tracking-wide"
          >
            А <span className="text-accent">&</span> М
          </button>
          <div className="flex gap-6 sm:gap-8">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-xs uppercase tracking-luxe text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="relative z-10 px-6 text-center">
          <p className="animate-fade-in text-xs uppercase tracking-luxe text-muted-foreground">
            Мы приглашаем вас
          </p>
          <h1 className="mt-8 animate-fade-up font-display text-6xl font-light leading-none sm:text-8xl">
            Никита
            <span className="my-2 block text-3xl text-accent sm:text-4xl">&</span>
            Наташа
          </h1>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <Divider />
            <p className="mt-2 font-display text-2xl italic text-muted-foreground">
              18 сентября 2026
            </p>
          </div>
          <button
            onClick={() => scrollTo('details')}
            className="mt-14 animate-fade-in text-muted-foreground transition-transform hover:translate-y-1"
            style={{ animationDelay: '0.6s' }}
          >
            <Icon name="ChevronDown" size={28} />
          </button>
        </div>
      </header>

      {/* Details */}
      <section id="details" className="mx-auto max-w-4xl px-6 py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-luxe text-accent">Когда и где</p>
          <h2 className="mt-4 font-display text-5xl font-light">Дата и место</h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {[
            {
              icon: 'Church',
              title: 'Церемония',
              time: '15:00',
              place: 'Центральный ЗАГС',
              addr: 'ул. Свердлова, д. 5',
            },
            {
              icon: 'Wine',
              title: 'Банкет',
              time: '17:00',
              place: 'Ресторан «Модерн»',
              addr: 'ул. Пушкина, д. 5',
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-border bg-card p-10 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <Icon name={c.icon} size={24} className="text-accent" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-light">{c.title}</h3>
              <p className="mt-2 font-display text-4xl text-accent">{c.time}</p>
              <p className="mt-4 font-medium">{c.place}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.addr}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Divider />
          <p className="mx-auto mt-6 max-w-md text-center text-muted-foreground">
            Будем рады видеть вас в этот особенный день. Просим подтвердить своё
            присутствие до 1 августа.
          </p>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="bg-secondary/40 py-28">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-luxe text-accent">Ваш ответ</p>
            <h2 className="mt-4 font-display text-5xl font-light">Подтверждение</h2>
            <p className="mt-4 text-muted-foreground">
              Пожалуйста, заполните форму — это поможет нам всё подготовить
            </p>
          </div>

          <form className="mt-12 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Ваше имя и фамилия" className="h-12 bg-card" />

            <div className="flex gap-4">
              {[
                { key: 'yes', label: 'Буду рад(а)', icon: 'Check' },
                { key: 'no', label: 'Не смогу', icon: 'X' },
              ].map((o) => (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setAttending(o.key as 'yes' | 'no')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-md border py-3 text-sm transition-colors ${
                    attending === o.key
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-card hover:border-accent'
                  }`}
                >
                  <Icon name={o.icon} size={16} />
                  {o.label}
                </button>
              ))}
            </div>

            <Textarea
              placeholder="Пожелания по меню или комментарий (необязательно)"
              className="min-h-24 bg-card"
            />

            <Button className="h-12 w-full text-sm uppercase tracking-luxe">
              Отправить ответ
            </Button>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="mx-auto max-w-4xl px-6 py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-luxe text-accent">Остались вопросы?</p>
          <h2 className="mt-4 font-display text-5xl font-light">Контакты</h2>
          <p className="mt-4 text-muted-foreground">
            Свяжитесь с организаторами по любым вопросам и уточнениям
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {[
            { name: 'Никита', role: 'Жених', phone: '+7 999 785-75-06' },
            { name: 'Наташа', role: 'Невеста', phone: '+7 980 743-34-65' },
          ].map((p) => (
            <div key={p.name} className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Icon name="User" size={20} className="text-accent" />
              </div>
              <h3 className="mt-4 font-display text-2xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.role}</p>
              <a
                href={`tel:${p.phone.replace(/\s/g, '')}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
              >
                <Icon name="Phone" size={15} />
                {p.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-14 text-center">
        <p className="font-display text-3xl font-light">
          Никита <span className="text-accent">&</span> Наташа
        </p>
        <p className="mt-3 text-xs uppercase tracking-luxe text-muted-foreground">
          18 · 09 · 2026
        </p>
      </footer>
    </div>
  );
}