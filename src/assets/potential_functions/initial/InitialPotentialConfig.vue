<template>
    <div>
        <el-alert
            title="If you use the model initial score, the recommendation is that you can keep the embryo of the artifact with a score of 3 to 3.1 and above. This score is a C-position artifact that initially has two quality subordinate words and the right main attributes, or a secondary artifact with three quality subordinate words."
            :closable="false"
            type="warning"
            class="hint"
        ></el-alert>
        <el-alert
            title="Known defects: lack of judgment for the main attribute, such as the very best double explosion of large attack embryo will give the highest rating of attack C (even in the case of the main attribute of life)"
            :closable="false"
            type="warning"
            class="hint"
        ></el-alert>
        <div class="config-item">
            <h3 class="config-title">Scoring mechanism application occasions</h3>
            <p style="color: #909399; font-size: 13px">
                This scoring mechanism is mainly used to determine the potential of artifacts at artifacts level 0, so as to reserve a certain number of artifacts of good quality for the subsequent characters that may be drawn (or new).
                For example, I don't have an Abbey, and I'm not sure if I'll draw an Abbey in the future (I may also draw other characters with defense as a core attribute), but I have a batch of defense hourglasses, and I still want to keep a certain number of "basic artifacts (refer to the above-mentioned swipe stage)" embryos that can be upgraded in the future, so as to avoid drawing (or skewing) artifacts with poorer quality subordinate words, and to avoid the death of the best embryos.
                Suitable for the crowd.
                <ui>
                    <li>The agonist, wavering between several sacred artifacts that cannot be quantified for comparison.</li>
                    <li>Students who already have or are used to swiping "more" embryos and then processing them in a uniform manner need a standard to help filter them quickly.</li>
                    <li>have certain expectations for the various roles that may appear in the future and want to lock embryos to see if they pull up when the time comes.</li>
                </ui>
            </p>
            <p style="margin: 0">
                In summary: no resources or no desire to upgrade every artifacts to level 20 and then look at the traveler
            </p>
        </div>
        <div class="config-item">
            <h3 class="config-title">NGA Original Posting Address</h3>
            <a href="https://ngabbs.com/read.php?tid=26432895" target="_blank" class="el-button no-deco">All role full play artifacts embryo score + role positioning list</a>
        </div>
        <div class="config-item">
            <h3 class="config-title">Model assignment formula</h3>
            <img :src="formula" class="image">
        </div>
        <div class="config-item">
            <h3 class="config-title" style="margin-bottom: 0">Algorithm author: @MeaccaLua</h3>
        </div>
    </div>

</template>

<script>
import formula from "@asset/images/initial-formula.jpeg";

export default {
    name: 'InitialPotentialConfig',
    created: function () {
        this.formula = formula
    },
    data: function() {
        return {
            initialMode: true,
        };
    },
};
</script>

<style scoped>
.hint {
    margin-bottom: 16px;
}
</style>
