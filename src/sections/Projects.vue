<template>
<section id="projects" :class="{ visible }">
    <span class="offset">0</span>
    <h3>projects</h3>
</section>
</template>


<script>
export default {
    name: 'Projects',
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

#projects {

}

</style>
