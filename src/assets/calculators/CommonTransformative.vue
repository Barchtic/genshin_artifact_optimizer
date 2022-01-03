<template>
    <el-table
            :data="data"
            size="small"
            stripe
        >
            <el-table-column
                label="Reaction Type"
                property="title"
            ></el-table-column>
            <el-table-column
                label="Damage"
            >
                <template slot-scope="scope">
                    {{ scope.row.dmg.toFixed(1) }}
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
export default {
    name: "CommonTransformative",
    props: ["data"],
}
</script>