<script lang="ts"></script>

<div class="cui--layout">
  <aside class="cui--side">
    <svg
      width="20"
      height="20"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="68"
        height="68"
        fill="black"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <rect
        x="2"
        y="2"
        width="68"
        height="68"
        fill="#00FF75"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M58 24L34 48L18 32"
        stroke="black"
        stroke-width="8"
      />
    </svg>
    convetional-tasks
  </aside>
  <main class="cui--content">
    <slot />
  </main>
</div>

<style>
  .cui--layout {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    height: 100vh;
    background: #fffbf4;
  }

  .cui--layout > * {
    grid-column: col-start / span 12;
  }

  .cui--content {
    grid-column: col-start 3 / span 12;
    padding: 12px;
    box-sizing: border-box;
  }

  .cui--side {
    grid-column: col-start / span 2;
    border-right: 2px solid #000;
    padding: 12px;
    box-sizing: border-box;
  }

  @media (max-width: 500px) {
    .cui--layout {
      grid-template-columns: repeat(4, [col-start] 1fr);
    }

    .cui--layout > * {
      grid-column: col-start / span 4;
    }

    .cui--side {
      grid-row: 1 / 1;
      border-bottom: 2px solid #000;
      border-right: unset;
      display: flex;
      width: 100%;
      align-items: center;
    }

    .cui--content {
      grid-row: 2 / 12;
    }
  }

  @media (max-width: 700px) and (min-width: 500px) {
    .cui--layout {
      grid-template-columns: repeat(8, [col-start] 1fr);
    }

    .cui--content {
      grid-column: col-start 3 / span 8;
    }

    .cui--side {
      grid-column: col-start / span 2;
    }
  }
</style>
