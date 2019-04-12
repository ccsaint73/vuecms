<template>
    <div class="table">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item >首页</el-breadcrumb-item>
            <el-breadcrumb-item >表格</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="table-box">
            <div class="table-box-content">
            <el-table
            :data="tableData"
            fixed
            style="width: 100%">
                
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column
                    width="100"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            </div>

            <el-pagination
            background
            @current-change="handleChange"
            layout="prev, pager, next"
            :current-page.sync="currentPage"
            :total="1000">
            </el-pagination>
        </div>

        <el-dialog
            title="提示"
            :visible.sync="visible"
            width="300"
            :before-close="handleClose">
            
            <el-form :label-position="'left'" label-width="60px">
                <el-form-item label="姓名">
                    <el-input type="text" v-model="currentItem.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input type="text" v-model="currentItem.age" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="text" v-model="currentItem.address" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取 消</el-button>
                <el-button type="primary" @click="handleConfirm">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[],
            currentItem: {},
            visible:false,
            currentPage:1
        }
    },
    created(){
        for(var i = 1; i < 10; i ++) {
            var obj = {
                name:'李狗蛋',
                age:i,
                address:'北京市'
            }

            this.tableData.push(obj);
        }
    },
    methods: {
        handleClick(item) {
            this.visible = true;

            this.currentItem = item;
        },
        handleDelete(item) {
            console.log(item)
        },
        handleClose(){
            this.visible = false;
        },
        handleConfirm(){
            this.visible = false;
        },
        handleChange(v){
            console.log(v);
            var i = 1;

            this.tableData.forEach((item)=>{
                item.age = v * i;
            })
        }
    }
}
</script>

<style>
    .table-box{
        height: 100%;
    }

    .table-box-content {
        border:1px solid #EEEEEE;
        height: 380px;
        overflow-y: auto;
    }

    .table .el-breadcrumb {
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .table {
        height: 100%;
        position: relative;
        box-sizing: border-box;
        padding: 30px 0px 44px 0px;
    }

    .table-box .cell {
        text-align: center;
    }

    .el-pagination{
        position: absolute;
        bottom: 0px;
        right: 0px;
    }

</style>
