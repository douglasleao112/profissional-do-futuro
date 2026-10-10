# Profissional do Futuro

Área de membros em HTML, CSS e JavaScript, com identidade azul, materiais, agentes de IA, networking e instalação como PWA.

## Executar localmente

Sirva a pasta por um servidor HTTP. Por exemplo, com Python instalado:

```sh
python -m http.server 8087
```

Abra http://localhost:8087. Para hospedagem, publique esta pasta em um serviço de sites estáticos com HTTPS.

## Conteúdos

- Boas-vindas e grupo de networking.
- IA para atendimento e prospecção no Instagram e WhatsApp.
- CRM WhatsApp.
- Material e agente GPT de followup.
- Dashboard financeiro.
- Parabéns e agendamento de diagnóstico individual.

O menu contém Suporte, Grupo e Sair. O diagnóstico aparece a cada duas trocas de módulo e também ao clicar na logo do topo.

## Acesso temporário

O email `admin@admin.com` libera o acesso pelo frontend. A configuração `TEMP_FRONTEND_LOGIN` em `index.html` deve ser removida quando a autenticação pelo backend e webhook do checkout for implementada. Atualmente essa integração nova ainda não existe; outros emails seguem a validação anterior via Apps Script.

## PWA

O aplicativo inclui `manifest.webmanifest`, ícones, service worker e botão de instalação. A página e os recursos locais essenciais têm fallback offline; serviços externos dependem de internet. A instalação está disponível em navegadores compatíveis sobre HTTPS ou localhost.
