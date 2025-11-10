# 🏗️ Архитектура деплоя Avalon Checker

## 📐 Схема решения

```
┌─────────────────────────────────────────────────────────────┐
│                     ВАША ЛОКАЛЬНАЯ МАШИНА                    │
│                                                               │
│  📁 avalon-checker-website/                                  │
│    ├── src/config/release.ts    ← Конфиг URL релиза         │
│    ├── src/pages/Download.tsx   ← Страница скачивания       │
│    └── public/release/*.exe     ← ⚠️ Удалить после загрузки │
│                                                               │
│                          ↓ git push                           │
└─────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                        🐙 GITHUB                              │
│                                                               │
│  📦 Repository: avalon-checker-website                       │
│    ├── Код сайта (React + Vite)                             │
│    └── .github/workflows/deploy-vercel.yml                  │
│                          ↓                                    │
│  🏷️ GitHub Releases                                         │
│    └── v3.0.0/                                               │
│        └── AvalonChecker-Setup-3.0.0.exe (600 MB)           │
│            ↓                                                  │
│     📊 CDN (быстрая раздача файлов)                         │
│                                                               │
│                          ↓ Auto-deploy                        │
└─────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                       ▲ VERCEL                                │
│                                                               │
│  🚀 Production Deploy                                        │
│    ├── Build: npm run build                                  │
│    ├── Output: dist/ (~0.5 MB)                              │
│    ├── CDN: Global edge network                             │
│    └── Domain: avalon-checker.vercel.app                    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                    👥 КОНЕЧНЫЕ ПОЛЬЗОВАТЕЛИ                   │
│                                                               │
│  🌐 Заходят на сайт                                          │
│    └── avalon-checker.vercel.app                            │
│                          ↓                                    │
│  📄 Видят страницу /download                                 │
│    └── Кнопка "Скачать Avalon Checker 3.0.0"               │
│                          ↓                                    │
│  ⬇️ Клик на кнопку                                           │
│    └── Перенаправление на GitHub Release                    │
│                          ↓                                    │
│  💾 Скачивание начинается                                    │
│    └── AvalonChecker-Setup-3.0.0.exe (600 MB)               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Процесс обновления

```
Новая версия 3.1.0
        ↓
1. Создать GitHub Release
   - Tag: v3.1.0
   - Upload: AvalonChecker-Setup-3.1.0.exe
        ↓
2. Обновить src/config/release.ts
   - version: '3.1.0'
   - RELEASE_URL: новый URL
        ↓
3. git commit & git push
        ↓
4. GitHub Actions → Vercel Deploy
        ↓
5. Сайт обновлен автоматически! 🎉
```

---

## 📊 Разделение ответственности

| Компонент | Хостинг | Размер | Назначение |
|-----------|---------|--------|------------|
| **Веб-сайт** | Vercel | ~0.5 MB | UI, информация, навигация |
| **Exe файл** | GitHub Releases | ~600 MB | Дистрибутив приложения |
| **Код** | GitHub Repository | ~2 MB | Исходники, версионность |
| **CI/CD** | GitHub Actions | - | Автоматизация деплоя |

---

## ⚡ Почему эта архитектура оптимальна

### Преимущества Vercel для сайта:
✅ Глобальный CDN  
✅ Автоматический HTTPS  
✅ Мгновенные деплои  
✅ Бесплатный план (Hobby)  
✅ Отличная производительность  

### Преимущества GitHub Releases для exe:
✅ Бесплатный хостинг  
✅ Высокая скорость  
✅ Версионность  
✅ Статистика скачиваний  
✅ Лимит до 2 GB на файл  

### Синергия:
🔗 Сайт ссылается на GitHub Release  
🔄 Легко обновлять через git  
📈 Масштабируемо  
💰 Полностью бесплатно  

---

## 🛡️ Безопасность

```
Vercel (сайт)
├── HTTPS by default
├── Security headers (vercel.json)
├── DDoS protection
└── Edge Functions

GitHub Releases (exe)
├── Checksum validation
├── HTTPS download
├── Version tracking
└── Integrity checks
```

---

## 📈 Масштабируемость

| Метрика | Лимит | Примечание |
|---------|-------|------------|
| Vercel Bandwidth | 100 GB/месяц | Hobby план |
| Vercel Builds | 100 часов/месяц | Достаточно |
| GitHub Bandwidth | Неограничено* | *Fair use policy |
| GitHub Storage | 500 MB repo | exe не в repo! |
| GitHub Releases | 2 GB/файл | 600 MB OK |

---

## 🔧 Технологический стек

```yaml
Frontend:
  Framework: React 19
  Builder: Vite 7
  Styling: TailwindCSS
  Animations: Framer Motion
  Icons: Lucide React

Hosting:
  Website: Vercel
  Downloads: GitHub Releases
  CDN: Vercel Edge + GitHub CDN

CI/CD:
  Automation: GitHub Actions
  Deploy: Vercel CLI

Конфигурация:
  - vercel.json (настройки хостинга)
  - .vercelignore (исключения)
  - release.ts (версии и URL)
```

---

## 🎯 Итог

Эта архитектура обеспечивает:

1. ⚡ **Скорость** - Глобальный CDN для сайта и файлов
2. 💰 **Экономию** - Всё полностью бесплатно
3. 🔄 **Простоту** - Один push для обновления
4. 📊 **Надежность** - Промышленная инфраструктура
5. 🚀 **Масштабируемость** - Готово к росту аудитории

**Perfect for your use case! 🎉**
