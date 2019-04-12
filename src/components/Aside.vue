<template>
    <el-menu mode="vertical" :default-active="key" :router="isRouter">
        
        <el-menu-item index="/home/index">
            <i class="el-icon-location"></i>
			<span>首页</span>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-date"></i>
                <span>UI</span>
            </template>

            <el-menu-item index="/home/button">
                <i class="el-icon-star-on"></i>
                <span>按钮</span>
            </el-menu-item>
            <el-menu-item index="/home/table">
                <i class="el-icon-circle-check"></i>
                <span>表格</span>
            </el-menu-item>
            <el-menu-item index="/home/form">
                <i class="el-icon-service"></i>
                <span>表单</span>
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="/home/setting">
            <i class="el-icon-setting"></i>
			<span>设置</span>
        </el-menu-item>
    </el-menu>    
</template>

<script>
export default {
    data(){
        return {
            isRouter:true,
            key:'/home/index'
        }
    }
}
</script>

<style>

</style>
