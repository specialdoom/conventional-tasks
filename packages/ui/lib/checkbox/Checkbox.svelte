<script>
  import {randomType} from "./utils.js";
  export let checked = false;
  export let disabled = false;
  export let error = false;
  export let label = "";

  let type = randomType();
  let hover = false;
</script>

<label
  class="cui--checkbox-wrapper"
  {...$$restProps}
>
  <input
    tabindex="-1"
    type="checkbox"
    bind:checked
    {disabled}
  />
  <button
    tabindex={disabled ? -1 : 0}
    role="checkbox"
    aria-checked={checked}
    class:checked
    class:disabled
    class:error
    class="cui--checkbox cui--{type}"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
    on:focus={() => (hover = true)}
  >
    {#if checked || hover}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.7099 7.20998C18.617 7.11625 18.5064 7.04186 18.3845 6.99109C18.2627 6.94032 18.132 6.91418 17.9999 6.91418C17.8679 6.91418 17.7372 6.94032 17.6154 6.99109C17.4935 7.04186 17.3829 7.11625 17.29 7.20998L9.83995 14.67L6.70995 11.53C6.61343 11.4367 6.49949 11.3634 6.37463 11.3142C6.24978 11.265 6.11645 11.2409 5.98227 11.2432C5.84809 11.2455 5.71568 11.2743 5.5926 11.3278C5.46953 11.3812 5.35819 11.4585 5.26495 11.555C5.17171 11.6515 5.0984 11.7654 5.04919 11.8903C4.99999 12.0152 4.97586 12.1485 4.97818 12.2827C4.9805 12.4168 5.00923 12.5493 5.06272 12.6723C5.11622 12.7954 5.19343 12.9067 5.28995 13L9.12995 16.84C9.22291 16.9337 9.33351 17.0081 9.45537 17.0589C9.57723 17.1096 9.70794 17.1358 9.83995 17.1358C9.97196 17.1358 10.1027 17.1096 10.2245 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.7099 8.67998C18.8115 8.58634 18.8925 8.47269 18.9479 8.34619C19.0033 8.21969 19.0319 8.08308 19.0319 7.94498C19.0319 7.80688 19.0033 7.67028 18.9479 7.54378C18.8925 7.41728 18.8115 7.30363 18.7099 7.20998Z"
          fill="black"
        />
      </svg>
    {/if}
  </button>
  {#if label}
    <div class="proi-checkbox-label">
      {label}
    </div>
  {/if}
</label>

<style>
  .cui--checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  }

  .cui--checkbox {
    box-sizing: border-box;
    background: transparent;
    height: 24px;
    width: 24px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 2px solid #000;
    cursor: pointer;
  }

  .cui--1.checked {
    background: var(--color-decorative-pink-70, #ffc6e7);
  }

  .cui--2.checked {
    background: var(--color-decorative-yellow-70, #fff29b);
  }

  .cui--3.checked {
    background: var(--color-decorative-green-70, #afface);
  }

  .cui--4.checked {
    background: var(--color-decorative-blue-70, #b3f6ff);
  }

  .cui--5.checked {
    background: var(--color-decorative-purple-70, #d9beff);
  }

  .proi-checkbox.disabled {
    background: var(--pi-bg-disabled, #d6d6d6);
    border: unset;
  }

  .proi-checkbox.error {
    border: 2px solid var(--pi-border-error, #e35226);
  }

  .proi-checkbox.error.checked {
    background: var(--pi-bg-error, #e35226);
  }

  .cui--checkbox-wrapper {
    position: relative;
    cursor: pointer;
  }

  .cui--checkbox-wrapper input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .proi-checkbox.disabled ~ .proi-checkbox-label {
    color: var(--pi-text-disabled, #adadad);
  }

  .proi-checkbox-label {
    font-size: 16px;
    line-height: 18px;
  }
</style>
