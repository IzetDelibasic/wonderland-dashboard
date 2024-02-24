<template>
    <button
      @click="handleClick"
      :title="title"
      type="button"
      :class="['px-6 lg:px-0 py-2 rounded-3xl shadow-md group', className]"
      style="display: flex; align-items: center; justify-content: center"
    >
      <template v-if="onlyIcon && Icon">
        <IconComponent :class="[iconClassName, 'text-20px']" />
      </template>
      <template v-else-if="!onlyIcon && !Icon">
        <span :class="[titleClassName, 'text-17px']">{{ title }}</span>
      </template>
      <template v-else>
        <span :class="[titleClassName, 'text-17px']">{{ title }}</span>
        <IconComponent :class="[iconClassName, 'text-20px']" />
      </template>
      <slot v-if="children" />
    </button>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    props: {
      title: String,
      Icon: Function,
      onlyIcon: Boolean,
      iconClassName: String,
      titleClassName: String,
      className: String,
      href: String,
    },
    setup(props) {
      const router = useRouter();
  
      const handleClick = () => {
        if (props.href) {
          router.push(props.href);
        }
      };
  
      const IconComponent = typeof props.Icon === 'function' ? props.Icon : null;
  
      return {
        handleClick,
        IconComponent,
      };
    },
  };
  </script>
  