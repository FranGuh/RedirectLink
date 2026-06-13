# RedirectLink Agent Guide

## Dream Team - Agent Configuration

| Rol | Nombre | Modelo | Responsabilidad |
|-----|--------|--------|-----------------|
| Principal | AgentPrincipal | qwen3.6-plus | Orquestador, delega, supervisa, gestiona branches/tickets |
| UI/UX Expert | AgentUIUXExpert | openai/gpt-5.5 | Diseño de interfaz, experiencia de usuario, accesibilidad |
| Arquitectura & Seguridad | AgentArquitecto | opencode-go/deepseek-v4-pro | Decisiones de arquitectura, auditorías de seguridad, calidad de código |
| QA & Producto | AgentQA | opencode-go/glm-5 | Testing, edge cases, experiencia de usuario, criterios de aceptación |
| Performance & Resiliencia | AgentPerformance | opencode-go/minimax-m2.7 | Optimización de rendimiento, memoria, resiliencia, idempotencia |
| Research & Trazabilidad | AgentResearch | google/gemini-2.5-pro | Investigación, precedentes, consistencia con decisiones previas |
| Build Worker | KimiBuildWorker | opencode-go/kimi-k2.6 | Ejecución de builds, compilación, CI |
| Build Fixer | JuniorQwen | opencode-go/mimo-v2.5-pro | Fixes de builds, diagnóstico de regresiones, hotfixes |

## Memory First

- Before planning or coding, recover Engram context for project `redirectlink` with `mem_context` first, then `mem_search` when needed.
- Treat recovered memories and local docs as constraints.
- Save meaningful decisions, discoveries, bug fixes, and completed-track summaries back to Engram with `mem_save` or `mem_session_summary`.

## Project Context

- **What**: RedirectLink is a frontend React application for managing link redirection.
- **Stack**: React 19, Vite 6.2, ESLint 9, Lucide React icons, Vercel Analytics.
- **Product Goals**: Fast, reliable link redirection with analytics tracking.
- **Non-Goals**: Backend functionality, authentication, complex state management.
- **Structure**: Flat project structure - all source code in `src/`, config files at root.

## SDD / Skills Workflow

- Use Conductor skills in `.agents/skills/` for spec-driven work.
- For new features or ambiguous changes, start with `conductor-setup` if the Conductor structure is missing, then use `conductor-newTrack` before implementation.
- Use `conductor-implement` only after the track/spec/tasks are clear.
- Use `conductor-status` to inspect active tracks, `conductor-review` before closing work, and `conductor-revert` only when the user explicitly asks to undo a track.
- Keep tiny fixes direct when a full SDD track would add unnecessary process.

## Agent Workflow Protocol

### Auditor Role (AgentPrincipal)
- **Only supervises, does not code or implement**
- Delegates tasks to specialized agents
- Reviews issues reported by delegate agents
- Documents findings and presents use cases via multiple-choice questions when context is unclear
- Manages branches and tickets
- Reports status to user, waits for feedback

### Workflow Phases

1. **Planning Phase**
   - Auditor presents quick questions
   - Consults with all agents
   - Agents agree, propose doubts, ask necessary questions
   - User confirms requirements and edge cases
   - All agents document agreements
   - Auditor supervises documentation completeness

2. **Implementation Phase**
   - Auditor delegates tickets to agents
   - Agents implement their specialized areas
   - Build Worker executes builds
   - Build Fixer handles any build issues

3. **Review Phase**
   - All agents review the work together
   - New issues are reported and documented
   - All agents review the branch
   - Documentation is updated
   - Future key issues are commented and documented

4. **Feedback Phase**
   - Results are presented to user
   - Wait for user feedback before proceeding

## Quality Requirements

- Resilience tests required
- Idempotency tests required
- No bugs or poor design in generated product
- Prepared for all edge cases

## Worktree Safety

- Do not revert or overwrite existing changes unless explicitly requested.
- Do not commit unless the user explicitly asks.
- Do not expose or commit secrets, `.env`, tokens, or credentials.
- Audit for sensitive information before any git operations.

## Pre-Commit Checklist

- Scan for sensitive information (API keys, tokens, credentials)
- Audit code with Dream Team agents
- Generate documentation
- Create tickets for tracking
- Notify user when complete
