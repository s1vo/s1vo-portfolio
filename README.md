# Михаил Сивоконь — портфолио

React 18 + TypeScript + Vite 5, React Router 7, plain CSS (CSS Modules + токены). Node 22 (`.nvmrc`), npm.

## Команды

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production-сборка в dist/
npm run preview
npm run lint
npm run typecheck
```

## Маршруты

| URL | Страница |
| --- | --- |
| `/` | Главная |
| `/projects/:slug` | Кейс (`infrastructure-platform`, `corporate-platform-modernization`, `geoinformation-platform`, `government-services-portal`, `telegram-bot`) |
| `/resume` | Резюме, кнопка «Печать / PDF» вызывает системную печать |
| любой другой | 404 |

Это SPA: хостинг должен отдавать `index.html` на все пути (SPA fallback). Для Vercel/Netlify это настройка rewrite `/* → /index.html`; конфиг платформы добавляйте после выбора хостинга. Meta-теги обновляются на клиенте, отдельные социальные превью для внутренних маршрутов потребуют пререндеринга.

## Где что менять

- Тексты, проекты, контакты, стек: `src/data/portfolio.ts`. PDF резюме: поле `resumePdfUrl` (сейчас `null`, кнопка «Резюме» ведёт на `/resume`).
- Цвета, шрифты, размеры: `src/styles/tokens.css`. Базовые стили и кнопки: `src/styles/global.css`. Печать: `src/styles/print.css`.
- Иллюстрации: `public/images/*.png`, размеры прописаны в `src/data/portfolio.ts`.

## Иллюстрации

Четыре изображения вырезаны из растрового макета 1024 px (hero 520×372, кейсы 625×205 / 190×190 / 215×190). Это временные ресурсы низкого разрешения: на экранах 1440+ и retina они мягче, чем нужно. Иллюстрации портальных сервисов и Telegram-бота (`project-portal.svg`, `project-bot.svg`) сгенерированы как изометрические композиции в той же палитре и тоже подлежат замене. Для финала нужны отдельные исходники: hero ≈1600×1400, инфраструктура ≈1800×800, остальные ≈900×800, формат WebP.
