<template>
<section id="skills" :class="{ visible }">
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

}

</style>
