<template>
  <div
    class="modal"
    :style="props.modal.display ? 'display:block' : 'display:none'"
    tabindex="-1"
    role="dialog"
    :key="props.modal.key"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ props.modal.title }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <component
            :is="props.modal.component"
            :data="props.modal.data"
            @func="props.modal.func($event)"
            @close="$emit('close')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  modal: {
    display: Boolean,
    title: String,
    key: String,
    component: Object,
    data: Object,
    func: Function,
  },
});
</script>

<style scoped></style>
