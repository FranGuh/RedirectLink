<script>
  import { Book, Camera, Store, FileUser, Mic, Palette, AudioLines } from '@lucide/svelte';

  // Map iconify lucide slugs to the Svelte icon components actually used here.
  // Note: @lucide/svelte v1 dropped the brand icons (github/instagram/linkedin),
  // and none of the island's content (trigger + projects) uses them anyway —
  // those still render fine on the Astro side via @iconify-json/lucide. The
  // `{#if icons[slug]}` guards below skip any slug that isn't mapped.
  const icons = {
    'lucide:book': Book,
    'lucide:camera': Camera,
    'lucide:store': Store,
    'lucide:file-user': FileUser,
    'lucide:mic': Mic,
    'lucide:palette': Palette,
    'lucide:audio-lines': AudioLines,
  };

  let { triggerText, triggerIcon, about, projects, labels, historyHref } = $props();

  let isOpen = $state(false);
  let container = $state(null);

  function open() {
    isOpen = true;
  }

  function close() {
    isOpen = false;
  }

  $effect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key === 'Tab') {
        if (!container) return;
        const focusable = container.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    // Focus the first focusable element (the close button), NOT the container
    // itself. Focusing the container left activeElement off the trap's first/last
    // edges, so the very first Shift+Tab escaped the modal.
    const initial = container?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (initial ?? container)?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  });
</script>

<div class="LinkButton">
  <button type="button" class="LinkButton__trigger" onclick={open}>
    {#if icons[triggerIcon]}
      {@const C = icons[triggerIcon]}
      <C class="LinkButton__icon" />
    {/if}
    {triggerText}
  </button>
</div>

{#if isOpen}
  <div class="modal-overlay">
    <!-- Real <button> backdrop: keyboard-accessible by design, so no a11y
         warning and no svelte-ignore needed. Sits behind the dialog; clicking
         the dimmed area closes. tabindex=-1 keeps it out of the tab order
         (Escape and the ✕ button already cover keyboard close). -->
      <button
      type="button"
      class="modal-backdrop"
      tabindex="-1"
      aria-label={labels.close}
      onclick={close}
    ></button>
    <div
      class="modal-container"
      bind:this={container}
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div class="modal-content">
        <button class="modal-btn" onclick={close} aria-label={labels.close}>
          ✕
        </button>

        <h2 id="modal-title">{about.title}</h2>

        {#each about.paragraphs as p}
          <!-- Trusted local content: `about.paragraphs` is a build-time
               constant from i18n dictionaries containing only hand-authored <b>
               markup, so {@html} is safe here (no user input). -->
          <p>{@html p}</p>
        {/each}

        <a class="modal-history-link" href={historyHref}>
          {labels.historyLink}
        </a>

        <h3 class="modal-section-title">{labels.projectsTitle}</h3>
        <div class="project-grid">
          {#each projects as project}
            <!-- href||undefined: an empty href would open a duplicate tab.
                 With no href the <a> renders as a styled card, not a broken
                 link. -->
            <a
              class="project-card"
              href={project.href || undefined}
              target={project.href ? '_blank' : undefined}
              rel={project.href ? 'noopener noreferrer' : undefined}
            >
              <img
                class="project-card__img"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
              <span class="project-card__label">
                {#if icons[project.icon]}
                  {@const C = icons[project.icon]}
                  <C class="project-card__icon" />
                {/if}
                {project.name}
              </span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
