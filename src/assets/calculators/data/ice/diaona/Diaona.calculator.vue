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
            <common-table-physical
                :data="diaonaA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="diaonaA.b1"
                class="mb-16"
            ></common-table-physical>
            <common-table-ice
                :data="diaonaA.b2"
                class="mb-16"
            ></common-table-ice>
            <common-table-physical
                :data="diaonaA.air"
            ></common-table-physical>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-ice
                :data="diaonaE.e"
            ></common-table-ice>
            <p class="single-item">Base Shield Damage Absorption: {{ diaonaE.shield }}</p>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-ice
                :data="diaonaQ.q"
            ></common-table-ice>
            <p class="single-item">Continuous Healing Value: {{ diaonaQ.cure }}</p>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import diaonaA from "./diaona_a";
import diaonaE from "./diaona_e";
import diaonaQ from "./diaona_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableIce from "../../../CommonTableIce";

export default {
    name: "Diaona.calculator",
    components: {
        CommonTablePhysical,
        CommonTableIce
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
        }
    },
    computed: {
        diaonaA() {
            return diaonaA(this.artifacts, this.configObject, this.enemy);
        },

        diaonaE() {
            return diaonaE(this.artifacts, this.configObject, this.enemy);
        },

        diaonaQ() {
            return diaonaQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>