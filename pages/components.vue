<template>
  <TheLayout>
    <BaseTab
      :tab="tab"
      :currentTab="currentTab"
      @click="changeTab"/>

    <section v-if="currentTab === 0">
      <BaseKeyVisual
        :kvImgSrc="kvImgSrc"
        :kvMoImgSrc="kvMoImgSrc"/>

      <BaseButton
        color="black"
        @click="ModalCookieToggle">
        쿠키 모달 열기
      </BaseButton>

      <ModalCookie
        v-if="isModalCookie"
        @close="ModalCookieToggle"/>
    </section>

    <section v-if="currentTab === 1">
      <div class="accordion">
        <BaseAccordion>
          <h3 slot="title">첫번째 제목</h3>
          <p slot="content">
            내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다.
          </p>
        </BaseAccordion>

        <BaseAccordion>
          <h3 slot="title">두번째 제목</h3>
          <p slot="content">
            내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다.
          </p>
        </BaseAccordion>

        <BaseAccordion>
          <h3 slot="title">세번째 제목</h3>
          <p slot="content">
            내용입니다. 내용입니다. 내용입니다.
            내용입니다. 내용입니다. 내용입니다.
          </p>
        </BaseAccordion>
      </div>

      <div class="select">
        <BaseSelect
          :options="selectList"
          :defaultValue="selectValue1"
          v-model="selectValue1"/>

        <BaseSelect
          shape="black"
          :options="selectList"
          :defaultValue="selectValue2"
          v-model="selectValue2"/>
      </div>
    </section>
  </TheLayout>
</template>

<script>
import TheLayout from '@/components/layout/TheLayout'
import BaseAccordion from '@/components/base/BaseAccordion'
import BaseButton from '@/components/base/BaseButton'
import BaseKeyVisual from '@/components/base/BaseKeyVisual'
import BaseSelect from '@/components/base/BaseSelect'
import ModalCookie from '@/components/modal/ModalCookie'

export default {
  name: 'Sub',

  components: {
    TheLayout,
    BaseAccordion,
    BaseButton,
    BaseKeyVisual,
    BaseSelect,
    ModalCookie
  },

  data() {
    return {
      // Modal
      isModalCookie: false,

      // Key visual
      kvImgSrc: require('@/static/image/kv.jpg'),
      kvMoImgSrc: require('@/static/image/kv.jpg'),

      // Tab
      currentTab: 0,
      tab: [
        { name: '탭 1' },
        { name: '탭 2' }
      ],

      // Select
      selectValue1: '',
      selectValue2: '',

      selectList: [
        {
          name: '1번'
        },
        {
          name: '2번'
        },
        {
          name: '3번'
        },
        {
          name: '4번'
        },
        {
          name: '5번'
        }
      ]
    }
  },

  methods: {
    changeTab(key) {
      this.currentTab = key
    },

    ModalCookieToggle() {
      this.isModalCookie = !this.isModalCookie
    }
  }
}
</script>

<style lang="scss" scoped>
.base-key-visual {
  width: 30%;
  margin-bottom: 20px;
}

.accordion {
  border: 1px solid #ddd;

  .base-accordion::v-deep {
    &:last-child {
      .title {
        border-bottom: 0;
      }
    }
  }
}

.select {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  margin-top: 20px;
}
</style>
