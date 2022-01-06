<template>
    <el-table
            :data="data"
            size="medium"
            style="color: #fcba03;"
            stripe
        >
            <el-table-column
                label="Reaction Type"
                property="title"
                width="300"
            ></el-table-column>
            <el-table-column
                label="Damage"
                width="200"
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
