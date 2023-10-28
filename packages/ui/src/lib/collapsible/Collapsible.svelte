<script>
  import {createCollapsible} from "@melt-ui/svelte";
  import {slide} from "svelte/transition";
  import {writable} from "svelte/store";

  /** @type {string} Specify the label of the collapsible element. */
  export let label;

  /** @type {boolean} Whether the collapsible is open or not. */
  export let expanded = true;

  const expandedStore = writable(expanded);

  const {
    elements: {root, content, trigger},
    states: {open}
  } = createCollapsible({
    open: expandedStore
  });
</script>

<div
  {...$root}
  use:root
  class="cui--collapsible-wrapper"
>
  <button
    {...$trigger}
    use:trigger
    class="cui--collapsible-trigger"
    class:expanded={$open}
  >
    {label}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8297 11.29L10.5897 7.05001C10.4967 6.95628 10.3861 6.88189 10.2643 6.83112C10.1424 6.78035 10.0117 6.75421 9.8797 6.75421C9.74769 6.75421 9.61698 6.78035 9.49512 6.83112C9.37326 6.88189 9.26266 6.95628 9.1697 7.05001C8.98345 7.23737 8.87891 7.49082 8.87891 7.75501C8.87891 8.0192 8.98345 8.27265 9.1697 8.46001L12.7097 12L9.1697 15.54C8.98345 15.7274 8.87891 15.9808 8.87891 16.245C8.87891 16.5092 8.98345 16.7626 9.1697 16.95C9.26314 17.0427 9.37395 17.116 9.49579 17.1658C9.61763 17.2155 9.74809 17.2408 9.8797 17.24C10.0113 17.2408 10.1418 17.2155 10.2636 17.1658C10.3854 17.116 10.4963 17.0427 10.5897 16.95L14.8297 12.71C14.9234 12.617 14.9978 12.5064 15.0486 12.3846C15.0994 12.2627 15.1255 12.132 15.1255 12C15.1255 11.868 15.0994 11.7373 15.0486 11.6154C14.9978 11.4936 14.9234 11.383 14.8297 11.29Z"
        fill="black"
      />
    </svg>
  </button>

  {#if $open}
    <div
      {...$content}
      use:content
      transition:slide
      class:cui--collapsible-content={true}
    >
      <slot />
    </div>
  {/if}
</div>

<style>
  .cui--collapsible-wrapper {
    width: 100%;
  }

  .cui--collapsible-trigger {
    display: flex;
    width: 100%;
    padding: var(--size-spacing-1, 8px) 6px;
    flex-direction: row;
    align-items: center;
    gap: var(--size-spacing-2, 16px);
    border-radius: var(--size-radius-0, 0px);
    border: unset;
    outline: unset;
    background: transparent;
    color: #000;

    /* Body/Body-2/Bold */
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
  }

  .cui--collapsible-trigger svg {
    transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
    transform: rotate(0deg);
  }

  .cui--collapsible-trigger.expanded svg {
    transform: rotate(90deg);
  }

  .cui--collapsible-content {
    padding: 0 6px;
  }
</style>
