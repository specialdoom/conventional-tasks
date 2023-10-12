<script lang="ts"></script>

<div class="cui--layout">
  <aside class="cui--side">Sidebar</aside>
  <main class="cui--content">
    <slot />
  </main>
</div>

<style>
  .cui--layout {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    height: 100vh;
    background: #eaeef6;
  }

  .cui--layout > * {
    grid-column: col-start / span 12;
  }

  @media (min-width: 500px) {
    .cui--side {
      grid-column: col-start / span 12;
      grid-row: 1 / 6;
    }

    .cui--content {
      grid-column: col-start / span 12;
      grid-row: 2 / 6;
    }
  }

  @media (min-width: 700px) {
    .cui--content {
      grid-column: col-start 3 / span 10;
    }

    .cui--side {
      grid-column: col-start / span 2;
    }
  }
</style>
