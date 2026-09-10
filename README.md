# INVD Site

Site institucional da INVD Group, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

## Rotas

- `/` — página institucional
- `/base-digital` — página do produto Base Digital INVD
- `/diagnostico` — diagnóstico interativo para captação de leads

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Validação

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

## Integrações

O projeto utiliza Google Tag Manager, Meta Pixel, WhatsApp e o widget de checkout da Hotmart. Antes de alterar os respectivos identificadores ou URLs, confirme as configurações das contas de produção.
