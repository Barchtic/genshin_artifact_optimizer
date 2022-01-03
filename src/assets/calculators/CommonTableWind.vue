<template>
    <el-table
            :data="data"
            size="small"
            stripe
        >
            <el-table-column
                label="Skills"
                property="chs"
                width="200"
            ></el-table-column>
            <el-table-column
                label="Anemo Damage"
                width="200"
            >
                <template slot-scope="scope">
                    <damage-display :damage="scope.row.wind"></damage-display>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
import DamageDisplay from "@c/display/DamageDisplay";

export default {
    name: "CommonTableWind",
    components: {
        DamageDisplay,
    },
    props: ["data"],
}
</script>