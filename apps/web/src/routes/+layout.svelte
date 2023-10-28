<script lang="ts">
</script>

<div class="cui--layout">
  <main class="cui--content">
    <slot />
  </main>
</div>

<style>
  .cui--layout {
    height: 100%;
    background: #fffbf4;
    width: 100%;
    min-height: 100vh;
  }

  /* width */
  :global(::-webkit-scrollbar) {
    width: 10px;
  }

  /* Track */
  :global(::-webkit-scrollbar-track) {
    border-radius: var(--size-radius-rounded, 1000px);
    border: 1px solid #000;
    background: var(--color-decorative-pink-90, #ffe2f3);
  }

  /* Handle */
  :global(::-webkit-scrollbar-thumb) {
    border-radius: var(--size-radius-rounded, 1000px);
    background: var(--color-brand-secondary, #000);
  }

  /* Handle on hover */
  :global(::-webkit-scrollbar-thumb:hover) {
    background: #555;
  }
</style>
