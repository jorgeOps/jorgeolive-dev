# Configuración del Formulario de Contacto

El formulario de contacto está configurado para enviarte un email cada vez que alguien lo complete.

## 🚀 Setup Rápido

### 1. Crear cuenta en Resend (GRATIS)

1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta (es gratis hasta 100 emails/día, más que suficiente)
3. Verifica tu email

### 2. Obtener API Key

1. Una vez dentro, ve a **API Keys**: https://resend.com/api-keys
2. Click en **Create API Key**
3. Nombre: "Portfolio Contact Form"
4. Permissions: **Full Access** (para enviar emails)
5. Copia la clave (empieza con `re_...`)

### 3. Configurar Variables de Entorno

#### Para desarrollo local:

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
RESEND_API_KEY=re_tu_clave_api_aqui
```

#### Para producción (Vercel):

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_tu_clave_api_aqui`
   - **Environment**: Production, Preview, Development (todas)
4. Click **Save**
5. Redeploy tu proyecto para que tome las nuevas variables

### 4. Configurar tu Email de Destino

Edita el archivo `/src/app/api/contact/route.ts`:

```typescript
to: ['jorgeolive@example.com'], // ← Cambia esto por tu email real
```

Por ejemplo:
```typescript
to: ['tu-email@gmail.com'],
```

### 5. (Opcional) Configurar Dominio Verificado

Por defecto, los emails se envían desde `onboarding@resend.dev`. Para usar tu propio dominio:

1. En Resend, ve a **Domains**: https://resend.com/domains
2. Click **Add Domain**
3. Añade tu dominio (ej: `jorgeolive.com`)
4. Añade los registros DNS que te indican (MX, TXT, CNAME)
5. Espera la verificación (puede tardar unos minutos)

Una vez verificado, actualiza el `from` en `/src/app/api/contact/route.ts`:

```typescript
from: 'Contacto <contacto@jorgeolive.com>',
```

## ✅ Verificar que Funciona

### Prueba Local:

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a la página de contacto: http://localhost:3000/es/contact

3. Completa el formulario y envía

4. Deberías recibir un email en unos segundos

### Prueba en Producción:

1. Haz push de los cambios a GitHub
2. Vercel desplegará automáticamente
3. Ve a tu sitio: https://jorgeolive.com/es/contact
4. Completa y envía el formulario
5. Deberías recibir el email

## 📧 Formato del Email

Recibirás un email bonito con formato HTML que incluye:

- **Nombre** del contacto
- **Email** del contacto (clickeable para responder)
- **Negocio/Empresa** (si lo completó)
- **Mensaje** completo
- **Botón** para responder directamente

El email tiene diseño profesional con tus colores de marca (terracotta).

## 🔍 Troubleshooting

### No recibo emails:

1. **Verifica la API Key**:
   - Ve a Vercel → Settings → Environment Variables
   - Confirma que `RESEND_API_KEY` está configurada
   - Redeploy si acabas de añadirla

2. **Revisa los logs de Vercel**:
   - Vercel → Deployments → Última deployment → Functions
   - Busca errores en `/api/contact`

3. **Verifica el email de destino**:
   - Asegúrate de haber cambiado `jorgeolive@example.com` por tu email real

4. **Revisa spam**:
   - Los primeros emails pueden ir a spam
   - Márcalo como "No es spam" para futuros emails

### Email va a spam:

- Configura un dominio verificado (paso opcional arriba)
- Añade los registros SPF y DKIM que Resend te da
- Esto mejorará significativamente la deliverability

### Error 500 al enviar:

- Verifica que la API key esté configurada correctamente
- Revisa que el formato del email de destino sea válido
- Mira los logs de Vercel para más detalles

## 💰 Límites y Costos

**Plan Gratuito de Resend:**
- ✅ 100 emails por día (más que suficiente para un portfolio)
- ✅ 3,000 emails por mes
- ✅ Sin tarjeta de crédito requerida
- ✅ Soporte para dominios verificados

Si llegas al límite (poco probable), Resend tiene planes desde $20/mes para 50,000 emails.

## 🔐 Seguridad

- ✅ La API key está en variables de entorno (nunca en el código)
- ✅ Validación básica de campos requeridos
- ✅ Rate limiting automático de Next.js
- ✅ Sin exposición de datos sensibles

## 📝 Personalización

Puedes personalizar el template del email editando el HTML en `/src/app/api/contact/route.ts`.

El email actual incluye:
- Cabecera con gradiente de tus colores
- Campos bien organizados y legibles
- Botón de respuesta rápida
- Footer con branding

¡Listo! Tu formulario de contacto está completamente funcional. 🎉
