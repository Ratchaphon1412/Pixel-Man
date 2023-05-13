<template>
  <div class="flex flex-row justify-center items-center gap-1 mr-4">
    <img src="@/assets/images/logo/Blue.svg" :class="$attrs.class" />
    <img src="@/assets/images/logo/Yellow.svg" :class="$attrs.class" />
    <img src="@/assets/images/logo/Green.svg" :class="$attrs.class" />
    <img src="@/assets/images/logo/Red.svg" :class="$attrs.class" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>
