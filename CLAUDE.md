# portfile — React/Vite портфолио

## Агенты (`.claude/agents/`)
- `designer` — арт-директор. Зови ПЕРЕД вёрсткой новой страницы/секции/редизайна: отдаёт бриф, токены, вайрфреймы, критику по скриншотам.
- `frontend` — senior frontend. Реализует план `designer`, сам проверяет в браузере (скриншоты, Lighthouse, a11y), сам прогоняет анти-шаблонный чеклист.

Стандартный поток для любого визуального изменения: `designer` → `frontend` → показать пользователю скриншоты. Для мелких правок CSS (цвет, отступ) — сразу `frontend`.

## Стек
React 18 + Vite, plain CSS с токенами в `src/styles.css`, `lucide-react`. Без Tailwind/UI-китов. `npm run dev` / `build` / `lint`.
