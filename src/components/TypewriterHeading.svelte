<script>
  // Typewriter heading island (Svelte 5 runes). Types its text in when it
  // scrolls into view (IntersectionObserver, fires once), and respects
  // prefers-reduced-motion by showing the full text immediately.
  //
  // Props:
  //   text     — the heading text to reveal
  //   eyebrow  — optional small label rendered above the heading
  //   as       — heading tag to render (default "h2")
  //   id       — optional id for the heading (so a section can aria-labelledby it)
  //   speed    — ms per character (default 28)
  let { text = '', eyebrow = '', as = 'h2', id = undefined, speed = 28 } = $props();

  let node = $state(null);
  // Start with the FULL text so the SSR / no-JS snapshot contains real content
  // (SEO + assistive tech see the heading before hydration). The client clears
  // it post-hydration to replay the typing effect.
  let shown = $state(text);
  let done = $state(false);

  function type() {
    let i = 0;
    const tick = () => {
      i += 1;
      shown = text.slice(0, i);
      if (i < text.length) {
        setTimeout(tick, speed);
      } else {
        done = true;
      }
    };
    tick();
  }

  $effect(() => {
    if (!node) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion: keep the full text already shown, no animation, no caret.
    if (reduce) {
      shown = text;
      done = true;
      return;
    }

    // Animated path: clear now (post-hydration) so typing starts from empty,
    // then reveal when the heading scrolls into view.
    shown = '';
    done = false;

    if (typeof IntersectionObserver === 'undefined') {
      type();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            type();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  });
</script>

<div class="tw-heading" bind:this={node}>
  {#if eyebrow}
    <span class="tw-eyebrow">{eyebrow}</span>
  {/if}
  <!-- aria-label carries the full text for assistive tech; the visible span
       reveals progressively. The caret hides once typing finishes. -->
  <svelte:element this={as} {id} class="tw-title" aria-label={text}>
    <span aria-hidden="true">{shown}</span>{#if !done}<span
        class="tw-caret"
        aria-hidden="true"></span>{/if}
  </svelte:element>
</div>
