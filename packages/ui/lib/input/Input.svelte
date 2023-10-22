<!--
  @component
  Input component as a wrapper for the native input element.
  Contains scoped styling and props.

  - Usage:
  ```tsx
  <Input name="name" value="value" placeholder="placeholder" disabled />
  ```
-->
<script>
  /** @type {string} Specify the name of the input element. */
  export let name;

  /** @type {string} Specify the value of the input element. */
  export let value = "";

  /** @type {string} Specify the placeholder of the input element.*/
  export let placeholder = "";

  /** @type {string} Whether the input is disabled or not. */
  export let disabled = "";
</script>

<input
  class:cui--input={true}
  {name}
  {placeholder}
  {value}
  {disabled}
/>

<style>
  input.cui--input {
    box-sizing: border-box;
    border-radius: var(--size-radius-s, 8px);
    border: 1px solid var(--color-brand-secondary, #000);
    background: var(--color-base-white, #fff);
    border-radius: 8px;
    outline: none;
    padding: 12px;
    width: 100%;
  }
</style>
