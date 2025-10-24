# tatneft-test

Вывод температурных данных в трёх локациях (из location.ts). Для изменения масштаба используйте ползунок (графики автоматически переключаются на почасовые/дневные).

Запуск локально:  ```npm run dev```

[Онлайн версия на GitHub Pages](https://zylvve.github.io/tatneft-test/)

Структура проекта:
- components/ - основные React компоненты и стили для них
- services/ - сервисы для работы с API
- styles/ - глобальные стили
- types/ - типы, используемые глобально
- utils/ - методы-утилиты

Стэк:
- React
- Typescript
- [CSS-модули](https://github.com/css-modules/css-modules)
- [Vite](https://vite.dev/) - для сборки проекта
- [Material UI](https://mui.com/) - для графиков и слайдера
- [React Query](https://tanstack.com/query/latest) - для работы с API
