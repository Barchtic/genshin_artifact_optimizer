<template>
    <el-table
            :data="data"
            size="medium"
            style="color: #fcba03;"
            stripe
        >
            <el-table-column
                label="Skill"
                property="chs"
                width="300"
            ></el-table-column>
            <el-table-column
                label="Geo Damage"
                width="200"
            >
                <template slot-scope="scope">
                    <damage-display :damage="scope.row.rock"></damage-display>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
import DamageDisplay from "@c/display/DamageDisplay";

export default {
    name: "CommonTableRock",
    components: {
        DamageDisplay,
    },
    props: ["data"],
}
</script>
<style>
damage-display{
    background: wheat;
}
</style>