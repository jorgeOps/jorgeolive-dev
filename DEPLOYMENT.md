# Guía de Despliegue en Vercel

## 🚀 Despliegue Rápido

### Opción 1: Despliegue con Vercel CLI (Recomendado)

1. **Instalar Vercel CLI** (si no la tienes):
   ```bash
   npm install -g vercel
   ```

2. **Login en Vercel**:
   ```bash
   vercel login
   ```

3. **Desplegar**:
   ```bash
   vercel
   ```
   
   Sigue las instrucciones:
   - Set up and deploy? → **Y**
   - Which scope? → Selecciona tu cuenta
   - Link to existing project? → **N**
   - What's your project's name? → `portfolio-web` (o el nombre que prefieras)
   - In which directory is your code located? → `./`
   - Want to modify these settings? → **N**

4. **Despliegue a Producción**:
   ```bash
   vercel --prod
   ```

### Opción 2: Despliegue desde GitHub

1. **Crear repositorio en GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio web"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/portfolio-web.git
   git push -u origin main
   ```

2. **Conectar con Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New..." → "Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

## ⚙️ Configuración en Vercel

### Build Settings (Auto-detectados)

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Variables de Entorno (Opcional)

Si necesitas configurar variables de entorno:

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Environment Variables
3. Añade las variables necesarias

Ejemplo:
```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### Dominio Personalizado

1. En el dashboard de Vercel:
   - Settings → Domains
   - Add Domain
   - Ingresa tu dominio personalizado
   - Sigue las instrucciones para configurar DNS

2. **Configurar DNS** (en tu proveedor de dominio):
   
   **Opción A - Con dominio raíz (ejemplo.com):**
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   ```
   
   **Opción B - Con subdominio (www.ejemplo.com):**
   ```
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

## 🔄 Actualizaciones Automáticas

Una vez conectado con GitHub:

- **Push a `main`** → Despliegue automático a producción
- **Push a otras ramas** → Preview deployment

## 📊 Monitoreo

### Analytics de Vercel

En el dashboard:
- **Analytics** → Visualiza tráfico y métricas
- **Speed Insights** → Rendimiento de tu sitio
- **Logs** → Revisa logs en tiempo real

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
# Limpia caché y reinstala
rm -rf node_modules .next
npm install
npm run build
```

### Error de Build en Vercel
1. Verifica que todas las dependencias estén en `package.json`
2. Asegúrate que el build funciona localmente: `npm run build`
3. Revisa los logs en el dashboard de Vercel

### Problema con Imágenes
- Las imágenes deben estar en `/public`
- Verifica que los dominios estén en `next.config.js` → `images.domains`

## 📝 Checklist Pre-Deploy

- [ ] Build exitoso localmente (`npm run build`)
- [ ] Sin errores de TypeScript
- [ ] Sin errores de ESLint
- [ ] Todas las páginas cargan correctamente
- [ ] Traducciones funcionando (ES/EN)
- [ ] Links externos abriendo correctamente
- [ ] Responsive en móvil, tablet y desktop
- [ ] Previews de proyectos cargando

## 🎯 Post-Deploy

1. **Verifica todas las rutas**:
   - `/es` → Home español
   - `/en` → Home inglés
   - `/es/services` → Servicios
   - `/en/services` → Services
   - `/es/contact` → Contacto
   - `/en/contact` → Contact

2. **Comprueba rendimiento**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

3. **SEO**:
   - Verifica meta tags
   - Comprueba `robots.txt`
   - Configura Google Search Console

## 📞 Soporte

Si tienes problemas:
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**¡Listo!** Tu portfolio estará disponible en `https://tu-proyecto.vercel.app` 🎉
