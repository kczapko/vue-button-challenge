<template>
  <button :class="cssClass">
    <span v-if="startIcon" class="material-icons icon-start">{{ startIcon }}</span>
    <span><slot></slot></span>
    <span v-if="endIcon" class="material-icons icon-end">{{ endIcon }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      validator(val) {
        return ['outline', 'text'].includes(val);
      },
    },
    disableShadow: Boolean,
    startIcon: String,
    endIcon: String,
    size: {
      type: String,
      validator(val) {
        return ['sm', 'md', 'lg'].includes(val);
      },
      default: 'md',
    },
    color: {
      type: String,
      validator(val) {
        return ['default', 'primary', 'secondary', 'danger'].includes(val);
      },
      default: 'default',
    },
  },
  computed: {
    cssClass() {
      return {
        outline: this.variant === 'outline',
        text: this.variant === 'text',
        'no-shadow': this.disableShadow,
        [`size-${this.size}`]: ['sm', 'lg'].includes(this.size),
        [`color-${this.color}`]: ['primary', 'secondary', 'danger'].includes(this.color),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$default-background-color: #e0e0e0;
$default-background-color-hover: #aeaeae;
$default-text-color: #3f3f3f;
$default-text-color-disabled: #9e9e9e;
$default-box-shadow-color: rgba(51, 51, 51, 0.2);
$primary-background-color: #2962ff;
$primary-background-color-hover: #0039cb;
$primary-text-color: #fff;
$primary-box-shadow-color: rgba(41, 98, 255, 0.2);
$secondary-background-color: #459a64;
$secondary-background-color-hover: #1c713a;
$secondary-text-color: #fff;
$secondary-box-shadow-color: rgba(69, 162, 100, 0.2);
$danger-background-color: #d32f2f;
$danger-background-color-hover: #9a0007;
$danger-text-color: #fff;
$danger-box-shadow-color: rgba(211, 47, 47, 0.2);

@mixin button-color-variant($name, $bg-color, $bg-color-hover, $text-color, $shadow-color) {
  &.color-#{$name} {
    background-color: $bg-color;
    color: $text-color;
    box-shadow: 0 2px 3px $shadow-color;

    &:hover,
    &:focus {
      background-color: $bg-color-hover;
      box-shadow: 0 4px 6px $shadow-color;
    }

    &:disabled {
      color: adjust-color($bg-color, $alpha: -0.6);
      background-color: adjust-color($bg-color, $alpha: -0.8);
      box-shadow: none;
    }

    &.outline {
      background: #fff;
      color: adjust-color($bg-color, $hue: 20deg);
      border-color: adjust-color($bg-color, $hue: 20deg);

      &:hover,
      &:focus {
        background-color: adjust-color($bg-color, $alpha: -0.9);
      }

      &:disabled {
        color: adjust-color($bg-color, $alpha: -0.6);
        background-color: adjust-color($bg-color, $alpha: -0.9);
        border-color: adjust-color($bg-color, $alpha: -0.9);
      }
    }

    &.text {
      background: #fff;
      color: adjust-color($bg-color, $hue: 20deg);
      box-shadow: none;

      &:hover,
      &:focus {
        background-color: adjust-color($bg-color, $alpha: -0.9);
      }

      &:disabled {
        background: #fff;
        color: adjust-color($bg-color, $alpha: -0.6);
      }
    }
  }
}

.material-icons {
  font-size: 14px;
}

button {
  border-color: transparent;
  border-width: 1px;
  background-color: $default-background-color;
  font-family: 'Noto Sans', sans-serif;
  color: $default-text-color;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 3px $default-box-shadow-color;
  transition: all 250ms;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: $default-background-color-hover;
    box-shadow: 0 4px 6px $default-box-shadow-color;
  }

  &:disabled {
    cursor: default;
    color: $default-text-color-disabled;
    box-shadow: none;

    &:hover,
    &:focus {
      background-color: $default-background-color;
    }
  }

  &.outline {
    background-color: #fff;
    border-color: $default-background-color-hover;

    &:hover,
    &:focus {
      background-color: $default-background-color;
    }

    &:disabled {
      border-color: $default-background-color;
      background-color: $default-background-color;
    }
  }

  &.text {
    background-color: #fff;
    box-shadow: none;

    &:hover,
    &:focus {
      background-color: $default-background-color;
    }

    &:disabled {
      background-color: #fff;
    }
  }

  &.no-shadow {
    box-shadow: none !important;
  }

  &.size-sm {
    padding: 6px 12px;
  }

  &.size-lg {
    padding: 11px 22px;
  }

  .icon-start {
    margin-right: 8px;
  }

  .icon-end {
    margin-left: 8px;
  }

  @include button-color-variant(
    'primary',
    $primary-background-color,
    $primary-background-color-hover,
    $primary-text-color,
    $primary-box-shadow-color
  );

  @include button-color-variant(
    'secondary',
    $secondary-background-color,
    $secondary-background-color-hover,
    $secondary-text-color,
    $secondary-box-shadow-color
  );

  @include button-color-variant(
    'danger',
    $danger-background-color,
    $danger-background-color-hover,
    $danger-text-color,
    $danger-box-shadow-color
  );
}
</style>
