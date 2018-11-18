<template>
<section id="skills" :class="{ visible }">
    <span class="offset">0</span>
    <h3>skills</h3>
</section>
</template>


<script>
export default {
    name: 'Skills',
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
    },
}
</script>


<style lang="less" scoped>
@import "../styles/variables.less";
@import "../styles/section.less";

#skills {
    background-color: blanchedalmond;
}

</style>
