<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Help</el-breadcrumb-item>
            <el-breadcrumb-item>FAQ</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="18">
                <h1>1. What is the target function?</h1>
                <p>A set of artifacts can produce a panel, the target function is to map various configurations of panels, weapons, characters, etc., to a value</p>
                <p>Different target functions are the core characteristics of this site, and there are big differences between roles, and the equipment can not be generalized at all. Therefore, this site provides a variety of equipment targets, that is, target functions. For example, you can choose the maximum expected output of Walnut’s E skill, because Walnut has the characteristic of transforming health into attack power, and you can also choose Noelles’s Q skill to maximize output because Noel has the characteristic of defensive conversion attack.</p>
                <h1>2. What is the maximum value of the set result?</h1>
                <p>The essence of the target function is to map weapons, roles, and panels to a value. By enumerating all the combinations of artifacts, the maximum value selected is the final maximum value</p>
                <p>However, the maximum value is not the expected output, because it is only used for the ratio, so many constants that do not affect the assembly result, such as monster resistance, etc., are not included. Therefore, the maximum value of the same objective function can be compared with each other. The maximum value between different target functions is not comparable</p>
                <h1>3. Are special effects like shimenawas 4 counted?</h1>
                <p>Some target functions are included, such as Engrave the clear-cut all the miscellaneous, and some irrelevant roles and functions are not included.</p>
                <h1>4. Are passives like xianling counted?</h1>
                <p>Same as above</p>
                <h1>5. Why is there a discrepancy between the calculations and in the game?</h1>
                <p>Because all the values displayed in the game are not exact values (after rounding), small deviations are normal. If there are large deviations, it may be a bug. If possible, please leave feedback </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "FAQPage",
}
</script>