<template>
  <BaseModal @close="$emit('close')">
    <h3 slot="title">Modal</h3>
    <p slot="content">모달입니다.</p>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/base/BaseModal'

export default {
  name: 'ModalCookie',

  components: {
    BaseModal
  }
}
</script>
