<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Help</el-breadcrumb-item>
            <el-breadcrumb-item>FAQ</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="18">
                <h1>Target Function FAQ</h1>  
                <h1>1. What is the target function?</h1>
                <p>A set of artifacts can produce a calculation panel, the target function is to map various configurations of artifacts, weapons, characters, etc., to a value</p>
                <p>Different target functions are the core characteristics of this site, and there are big differences between characters, and the equipment can not be generalized at all. Therefore, this site provides a variety of equipment targets, that is, target functions. For example, you can choose the maximum expected output of Hu Tao's E skill, because Hu Tao has the characteristic of transforming HP into ATK, and you can also choose Noelle’s Q skill to maximize output because Noelle has the characteristic of DEF conversion to ATK.</p>
                <h1>2. What is the maximum value of the set result?</h1>
                <p>The essence of the target function is to map weapons, characters, and artifacts to a value. By enumerating all the combinations of artifacts, the maximum value selected is the final maximum value</p>
                <p>However, the maximum value is not the expected output, because it is only used for the ratio, so many constants that do not affect the assembly result, such as monster resistance, etc., are not included. Therefore, the maximum value of the same objective function can be compared with each other. The maximum value between different target functions is not comparable</p>
                <h1>3. Are special effects like 4 piece shimenawas take into account?</h1>
                <p>Some target functions are included, such as shimenawas, and some irrelevant sets and functions are not included.</p>
                <h1>4. Are passives like Xiangling's counted?</h1>
                <p>Same as above</p>
                <h1>5. Why is there a discrepancy between the calculations and in the game?</h1>
                <p>Because all the values displayed in the game are not exact values (after rounding), small deviations are normal. If there are large deviations, it may be a bug. If possible, please submit bug report in discord server </p>
            <br>
            <h1>Artifact Potential FAQ</h1>    
            <h1>1. What Does It Do?</h1>
            <p>Artifact rater will give your artifacts a score based on what stats you’re prioritizing or using the built-in features. This can be useful for comparing artifacts without needing to calculate. It is also a more accurate way of measuring how good an artifact is, along with it being MUCH more accurate than other sorts of measurement such as CV (Crit Value, crit rate*2+crit damage).</p>
            <h1>Tips</h1>
            <p>It takes crit rate as a decimal, such as 0.05 = 5% crit rate. Crit damage is just a whole number so add as you feel. The “Hu Tao” option and “Noelle” option are just HP scaling and DEF scaling, prioritizing those stats.</p>
            <h1>2. Regular Output</h1>
            <p>Regular output is probably what you will use when giving to score to your characters. The default one is 35 crit rate to 100 crit damage, but if your character is using a crit weapon, you can change the stats accordingly. When comparing your artifacts, we are assuming you are using the default 35 crit rate to crit damage. </p>
            <p>Below Average below 400 score</p>
            <p>Average  400-1000 score</p>
            <p>Good 1000-2000 score</p>
            <h1>3. Valid Entry</h1>
            <p>Valid entry is for those who feel the need to be extra and prioritize stats by giving them more “weight”. Weight is a measurement of how much something is worth, in this case, 0 is worth nothing and can go up to whatever you want. For example, if I love flat defence (I Don’t and for legal reasons, this is a joke) I can make crit rate worth 0, crit damage worth 1, and flat defence worth 2, it will value flat defence over crit damage over crit rate.</p>
            <h1>4. Hu Tao/Noelle</h1>
            <p>These options are just to give scores for HP/DEF scaling characters such as HP and Defence. Nothing much for these, but just gives more value for HP subs on pieces.</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "FAQPage",
}
</script>