# Portfolio Website 🌟

Сучасний портфоліо-сайт, створений з використанням найновіших веб-технологій.

## 🚀 Технології

- **[Next.js 15](https://nextjs.org/)** - React фреймворк з Turbopack
- **[React 19](https://react.dev/)** - Бібліотека для створення UI
- **[TypeScript](https://www.typescriptlang.org/)** - Типізована надбудова JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS фреймворк
- **[Lucide React](https://lucide.dev/)** - Іконки
- **[pnpm](https://pnpm.io/)** - Швидкий менеджер пакетів

## ✨ Особливості

- 🎨 Сучасний, респонсивний дизайн
- 🌙 Підтримка темної/світлої теми
- ⚡ Швидка збірка з Turbopack
- 📱 Мобільна адаптація
- ♿ Доступність (a11y)
- 🎯 SEO оптимізація
- 🔧 TypeScript для надійності коду

## 🛠 Встановлення

1. Клонуйте репозиторій:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Встановіть залежності:

```bash
pnpm install
```

3. Запустіть dev сервер:

```bash
pnpm dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## 📝 Доступні скрипти

```bash
# Розробка
pnpm dev          # Запуск dev сервера з Turbopack

# Збірка
pnpm build        # Створення production збірки
pnpm start        # Запуск production сервера

# Якість коду
pnpm lint         # Запуск ESLint
pnpm lint:fix     # Виправлення помилок ESLint
pnpm type-check   # Перевірка типів TypeScript
pnpm format       # Форматування коду з Prettier
pnpm format:check # Перевірка форматування
```

## 🏗 Структура проекту

```
portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # React компоненти
│   │   ├── ui/            # UI компоненти
│   │   └── ...
│   ├── globals.css        # Глобальні стилі
│   ├── layout.tsx         # Основний layout
│   └── page.tsx           # Головна сторінка
├── lib/                   # Утилітарні функції
├── types/                 # TypeScript типи
├── public/                # Статичні файли
└── ...
```

## 🎨 Кастомізація

### Теми

Проект підтримує світлу, темну та системну теми. Налаштування знаходяться в:

- `app/components/ThemeProvider.tsx`
- `app/globals.css`

### Стилі

Використовується Tailwind CSS v4 з кастомними CSS змінними для дизайн-системи.

### Компоненти

Всі UI компоненти знаходяться в `app/components/ui/` та можуть бути легко кастомізовані.

## 📱 Секції сайту

- **Hero** - Привітання та основна інформація
- **About** - Про мене та навички
- **Projects** - Портфоліо проектів
- **Skills** - Технічні навички
- **Contact** - Контактна інформація

## 🚀 Деплоймент

### Vercel (рекомендовано)

```bash
# Встановіть Vercel CLI
npm i -g vercel

# Деплой
vercel
```

### Інші платформи

Проект підтримує деплоймент на будь-якій платформі, що підтримує Node.js:

- Netlify
- Railway
- Digital Ocean
- AWS

## 🤝 Внесок

Будь ласка, відкривайте Issues або Pull Requests для покращення проекту.

## 📄 Ліцензія

MIT License - дивіться [LICENSE](LICENSE) файл для деталей.

## 📧 Контакт

**Юрій Ребрик**

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

Зроблено з ❤️ та Next.js
