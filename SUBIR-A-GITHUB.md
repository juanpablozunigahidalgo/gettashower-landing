# Cómo subir el sitio a GitHub y publicarlo

## 1. Subir el código a GitHub

En la carpeta del proyecto (gettashower-landing), abre la terminal y ejecuta:

```bash
# Ver estado
git status

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Subir landing GettaShower"

# Subir a GitHub (usa "main" o "master" según la rama de tu repo)
git push origin main
```

Si tu rama se llama `master` en lugar de `main`:
```bash
git push origin master
```

Si es la primera vez que conectas este proyecto con GitHub:

```bash
# Añadir el remoto (sustituye TU_USUARIO y TU_REPO por tu usuario y nombre del repo)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Luego push
git push -u origin main
```

---

## 2. Activar GitHub Pages en el repositorio

1. Entra en tu repo en GitHub (ej. `github.com/TU_USUARIO/gettashower-landing`).
2. Ve a **Settings** → **Pages** (menú izquierdo).
3. En **Source** elige **GitHub Actions** (no "Deploy from a branch").
4. Guarda si hace falta.

---

## 3. Qué hace el proyecto al hacer push

- Tienes un workflow en `.github/workflows/deploy.yml` que:
  - Se ejecuta en cada **push** a la rama **master** (o la que tengas por defecto).
  - Instala dependencias, ejecuta `npm run export` (Next.js genera la web estática en `out`).
  - Sube ese resultado a GitHub Pages.

- En **Settings → Pages** debe estar seleccionado **GitHub Actions** como origen.

---

## 4. Ver el resultado

- Tras el primer push, en la pestaña **Actions** del repo verás el workflow "Deploy to GitHub Pages".
- Cuando termine en verde, la web estará en:
  - `https://TU_USUARIO.github.io/TU_REPO/`
  - o en el dominio que tengas configurado en Pages.

---

## Resumen rápido

1. `git add .` → `git commit -m "mensaje"` → `git push origin main` (o `master`).
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Esperar a que termine el workflow en **Actions** y abrir la URL de Pages.
