
<template>
    <el-table
            :data="data"
            size="medium"
            stripe
            style="color: #fcba03;"
        >
            <el-table-column
                label="Skill"
                property="chs"
                width="300"
                
            ></el-table-column>
            <el-table-column
                label="Physical Damage"
                width="200"
                
               
            >
                <template slot-scope="scope">
                    <damage-display :damage="scope.row.normal"></damage-display>
                </template>
            </el-table-column>
        </el-table>
</template>

<script>
import DamageDisplay from "@c/display/DamageDisplay";

export default {
    name: "CommonTablePhysical",
    components: {
        DamageDisplay,
    },
    props: ["data"],
}
</script>
