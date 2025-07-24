<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { teekConfigContext, clockIcon } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { watch, nextTick, provide } from "vue";
import { useRibbon } from "../composables/useRibbon";
import { useRuntime } from "../composables/useRuntime";
import ContributeChart from "./ContributeChart.vue";

const { frontmatter } = useData();

// 页脚运行时间
const { start: startRuntime, stop: stopRuntime } = useRuntime("2021-10-19", {
  prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>小破站已运行 `,
});

watch(
  frontmatter,
  async newVal => {
    await nextTick();
    if (newVal.layout === "home") startRuntime();
    else stopRuntime();
  },
  { immediate: true }
);

// 彩带背景  clickReRender为true表示鼠标点击就会重新渲染
const { start: startRibbon, stop: stopRibbon } = useRibbon({ immediate: false, clickReRender: false });

provide(teekConfigContext, {
  themeEnhance: {
    layoutSwitch: {
      switchModeDone: mode => {
        if (mode === "original") startRibbon();
        else stopRibbon();
      },
    },
  },
});
</script>

<template>
  <Teek.Layout>
    <template #teek-archives-top-before>
      <ContributeChart />
    </template>
  </Teek.Layout>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
  margin-bottom: 20px;

  .tk-my__avatar.circle-rotate {
    margin-top: 200px;
  }
}
</style>
