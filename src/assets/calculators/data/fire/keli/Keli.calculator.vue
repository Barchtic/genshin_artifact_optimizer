<template>
    <div>
        <el-radio-group
            v-model="showSkill"
            size="small"
            style="margin: 16px 0"
        >
            <el-radio-button label="a">Normal Attack</el-radio-button>
            <el-radio-button label="e">Elemental Skill</el-radio-button>
            <el-radio-button label="q">Elemental Burst</el-radio-button>
        </el-radio-group>

        <div v-show="showSkill === 'a'">
            <el-switch
                v-model="config.spark"
                active-text="Bursting Spark Charge Attack"
                class="mb-16"
            ></el-switch>
            
            <common-table-fire
                :data="keliA.a"
                class="mb-16"
            ></common-table-fire>
            <common-table-fire
                :data="keliA.b"
                class="mb-16"
            ></common-table-fire>
            <common-table-fire
                :data="keliA.air"
            ></common-table-fire>
        </div>

        <common-table-fire
            v-show="showSkill === 'e'"
            :data="keliE"
        ></common-table-fire>

        <common-table-fire
            v-show="showSkill === 'q'"
            :data="keliQ"
        ></common-table-fire>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import keliA from "./keli_a";
import keliE from "./keli_e";
import keliQ from "./keli_q";

import CommonTableFire from '../../../CommonTableFire.vue';

export default {
    name: "Keli.calculator",
    components: {
        CommonTableFire
    },
    props: {
        enemy: {
            type: Object,
            default: function () {
                return new Enemy("hilichurl", 90);
            }
        },
        configObject: {
            type: Object,
        },
        artifacts: {
            type: Object,
        }
    },
    data() {
        return {
            showSkill: "a",
            config: {
                spark: false,
            }
        }
    },
    computed: {
        keliA() {
            return keliA(this.artifacts, this.configObject, this.enemy, this.config);
        },

        keliE() {
            return keliE(this.artifacts, this.configObject, this.enemy);
        },

        keliQ() {
            return keliQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>