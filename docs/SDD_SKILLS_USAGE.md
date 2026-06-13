# SDD / Skills Usage

This project has Conductor SDD skills installed in:

```text
.agents/skills/
```

## Required Memory Step

Before any SDD work, recover project memory from Engram:

```text
Use Engram memory for project redirectlink. First call mem_context, then mem_search if needed, and treat the recovered memories as constraints.
```

## Available Conductor Skills

- `conductor-setup`: initialize the Conductor project structure.
- `conductor-newTrack`: create a new feature/bugfix/refactor track.
- `conductor-implement`: implement a selected track after the spec and tasks are clear.
- `conductor-status`: inspect current tracks and progress.
- `conductor-review`: review a track before closing it.
- `conductor-revert`: revert a track only when explicitly requested.

## Dream Team Agents

| Agent | Model | Role |
|-------|-------|------|
| AgentPrincipal | qwen3.6-plus | Orchestrator, delegates, supervises, manages branches/tickets |
| AgentUIUXExpert | openai/gpt-5.5 | UI/UX design, accessibility, user experience |
| AgentArquitecto | opencode-go/deepseek-v4-pro | Architecture decisions, security audits, code quality |
| AgentQA | opencode-go/glm-5 | Testing, edge cases, acceptance criteria |
| AgentPerformance | opencode-go/minimax-m2.7 | Performance optimization, resilience, idempotency |
| AgentResearch | google/gemini-2.5-pro | Research, precedents, consistency with past decisions |
| KimiBuildWorker | opencode-go/kimi-k2.6 | Build execution, compilation, CI |
| JuniorQwen | opencode-go/mimo-v2.5-pro | Build fixes, regression diagnosis, hotfixes |

## Recommended Flow

```text
Recover Engram context for redirectlink, then use conductor-newTrack to create the spec, plan, tasks, risks, and acceptance criteria before coding.
```

```text
Use conductor-implement to implement the approved track one task at a time.
```

```text
Use conductor-review to verify the implementation against the spec, acceptance criteria, Engram memory, and project rules.
```

## Terminal Engram Examples

```powershell
E:\Job\bin\engram.exe context redirectlink
E:\Job\bin\engram.exe search "consulta" --project redirectlink
E:\Job\bin\engram.exe save "RedirectLink decision" "Decision/details here." --type decision --project redirectlink
```

## Workflow Phases

### 1. Planning Phase
- Auditor (AgentPrincipal) presents quick questions
- Consults with all agents
- Agents agree, propose doubts, ask necessary questions
- User confirms requirements and edge cases
- All agents document agreements
- Auditor supervises documentation completeness

### 2. Implementation Phase
- Auditor delegates tickets to agents
- Agents implement their specialized areas
- Build Worker executes builds
- Build Fixer handles any build issues

### 3. Review Phase
- All agents review the work together
- New issues are reported and documented
- All agents review the branch
- Documentation is updated
- Future key issues are commented and documented

### 4. Feedback Phase
- Results are presented to user
- Wait for user feedback before proceeding

## Quality Requirements

- Resilience tests required
- Idempotency tests required
- No bugs or poor design in generated product
- Prepared for all edge cases

## Pre-Commit Checklist

- Scan for sensitive information (API keys, tokens, credentials)
- Audit code with Dream Team agents
- Generate documentation
- Create tickets for tracking
- Notify user when complete
