<script>
  import {createAvatar} from "@melt-ui/svelte";

  /** @type {string} Specify the initials of the avatar. */
  export let initials = "CT";

  /** @type {import('./types.js').AvatarSize} Specify the size of the avatar.*/
  export let size = "M";

  /** @type {string} Specify the src of the avatar. */
  export let src = "";

  const {
    elements: {image, fallback}
  } = createAvatar({
    src
  });
</script>

<div>
  <img
    {...$image}
    use:image
    alt="Avatar"
    class="cui--avatar__{size}"
    class:cui--avatar={true}
  />
  <span
    {...$fallback}
    use:fallback
    class="cui--avatar__{size}"
    class:cui--avatar={true}
  >
    {initials}
  </span>
</div>

<style>
  .cui--avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #000;
  }

  .cui--avatar__S {
    width: 16px;
    height: 16px;
  }

  .cui--avatar__M {
    width: 24px;
    height: 24px;
  }

  .cui--avatar__L {
    width: 32px;
    height: 32px;
  }

  .cui--avatar__XL {
    width: 48px;
    height: 48px;
  }
</style>
