# 🧹 Очистка файлов Vercel

## Файлы которые нужно удалить

Теперь, когда проект настроен на Netlify, удалите старые файлы Vercel:

### Через Проводник Windows:

1. **vercel.json**
   ```
   d:\Test\CascadeProjects\2048\avalon-checker-website\vercel.json
   ```

2. **. vercelignore** (если существует)
   ```
   d:\Test\CascadeProjects\2048\avalon-checker-website\.vercelignore
   ```

3. **VERCEL_DEPLOY_GUIDE.md**
   ```
   d:\Test\CascadeProjects\2048\avalon-checker-website\VERCEL_DEPLOY_GUIDE.md
   ```

4. **deploy-vercel.yml** (в папке workflows)
   ```
   d:\Test\CascadeProjects\2048\avalon-checker-website\.github\workflows\deploy-vercel.yml
   ```

### Через PowerShell (если предпочитаете):

```powershell
cd d:\Test\CascadeProjects\2048\avalon-checker-website

# Удаляем файлы Vercel
Remove-Item "vercel.json" -ErrorAction SilentlyContinue
Remove-Item ".vercelignore" -ErrorAction SilentlyContinue
Remove-Item "VERCEL_DEPLOY_GUIDE.md" -ErrorAction SilentlyContinue
Remove-Item ".github\workflows\deploy-vercel.yml" -ErrorAction SilentlyContinue

# Удаляем пустую папку workflows если она пустая
if ((Get-ChildItem ".github\workflows" -ErrorAction SilentlyContinue).Count -eq 0) {
    Remove-Item ".github\workflows" -ErrorAction SilentlyContinue
}

Write-Host "✅ Файлы Vercel удалены!" -ForegroundColor Green
```

---

## ✅ После удаления

Закоммитьте изменения:

```powershell
git add .
git commit -m "Remove Vercel files, switch to Netlify"
git push
```

---

## 📝 Что остаётся для Netlify

После очистки у вас останутся только нужные файлы:

- ✅ `netlify.toml` - конфигурация Netlify
- ✅ `.netlifyignore` - игнорирование файлов
- ✅ `NETLIFY_DEPLOY_GUIDE.md` - полная инструкция
- ✅ `NETLIFY_NO_CLI.md` - инструкция без CLI
- ✅ `DEPLOY_RU.md` - краткая инструкция
- ✅ `README_DEPLOY.md` - главный README

---

**После очистки можете удалить и этот файл (CLEANUP_VERCEL.md)!**
