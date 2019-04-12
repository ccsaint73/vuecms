<template>
    <div class="home">
    <el-container>
        <el-header>
            CMS管理系统

            <el-dropdown class="fr" @command="handleDropdown">
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="change">切换账号</el-dropdown-item>
                    <el-dropdown-item divided command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
    
        <el-container>
            <el-aside width="200px">
                <Aside></Aside>
            </el-aside>
            <el-main>
                <router-view>
                </router-view>
            </el-main>
        </el-container>

        <el-footer>@copyright版权所有</el-footer>
    </el-container>
    </div>
</template>

<script>

import Aside from '@/components/Aside'

export default {
    data(){
        return {
            
        }
    },
    components: {
        Aside
    },
    methods:{
        handleDropdown(v){
            if(v == "logout"){
                localStorage.removeItem('user_id');
                
                this.$router.push('/login')
            }else {
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style>
.home {
    height: 100%;
}

.home .el-container{
    height: 100%;
}

.home .el-header {
    background-color: #2b2b2b;
    color:#ffffff;
    line-height: 60px;
    text-align: left;
}

.home .el-menu {
    height: 100%;
}

.home .el-footer {
    background-color: #2b2b2b;
    color:#ffffff;
    line-height: 60px;
    text-align: center;
}

.fr {
    float: right;
}

.el-dropdown-link {
    color: #ffffff;
}

</style>