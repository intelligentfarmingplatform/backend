<template>
    <div class="frame">
          <router-view/>
    </div>
</template>

<script>
export default {
    name:'Product'
}
</script>

<style lang="scss" scoped>
    .frame{
        padding: 14px;
        flex-wrap: wrap;
    }
</style>