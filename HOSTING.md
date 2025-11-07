# 🚀 Деплой на бесплатный хостинг

## ⭐ Netlify - САМЫЙ ПРОСТОЙ СПОСОБ (5 минут)

### Шаг 1: Регистрация
```
https://app.netlify.com/signup
```
Войдите через GitHub

### Шаг 2: Деплой
1. Нажмите **"Add new site"** → **"Import an existing project"**
2. Выберите **GitHub** → найдите репозиторий `avalon-checker-website`
3. Настройки:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Нажмите **"Deploy site"**

### Шаг 3: Готово!
Ваш сайт: `https://random-name.netlify.app`

### Шаг 4: Переименовать (опционально)
1. Site settings → Domain management
2. Кликните на домен → Options → Edit site name
3. Введите: `avalon-checker`
4. Новый URL: `https://avalon-checker.netlify.app`

---

## 📋 Другие БЕСПЛАТНЫЕ хостинги

### Vercel
```
https://vercel.com/signup
```
- Точно так же, как Netlify
- New Project → Import → Deploy

### Cloudflare Pages
```
https://pages.cloudflare.com/
```
- Неограниченный трафик
- Глобальный CDN

### GitHub Pages (если нужен контроль)
Уже настроено через GitHub Actions (`.github/workflows/deploy.yml`)
1. Зайдите в Settings → Pages
2. Source: GitHub Actions
3. Готово!

---

## ✅ Что уже настроено

- ✅ Security headers (`netlify.toml`, `vercel.json`)
- ✅ SEO (Open Graph, Twitter Cards, JSON-LD)
- ✅ Sitemap (`public/sitemap.xml`)
- ✅ robots.txt
- ✅ Автоматический HTTPS
- ✅ CDN

**Просто нажмите Deploy и всё заработает!** 🎉
