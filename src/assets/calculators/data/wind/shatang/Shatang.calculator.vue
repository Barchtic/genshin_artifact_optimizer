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
            <common-table-wind
                :data="shatangA.a"
                class="mb-16"
            ></common-table-wind>
            <common-table-wind
                :data="shatangA.b"
                class="mb-16"
            ></common-table-wind>
            <common-table-wind
                :data="shatangA.air"
            ></common-table-wind>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-wind
                :data="shatangE"
            ></common-table-wind>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-wind
                :data="shatangQ.q"
            ></common-table-wind>
            <el-radio-group
                v-model="element"
                size="small"
                style="margin: 16px 0"
            >
                <el-radio-button label="water">Hydro</el-radio-button>
                <el-radio-button label="fire">Pyro</el-radio-button>
                <el-radio-button label="thunder">Electro</el-radio-button>
                <el-radio-button label="ice">Cryo</el-radio-button>
            </el-radio-group>

            <common-table-water :data="shatangQ.water" v-show="element === 'water'"></common-table-water>
            <common-table-fire :data="shatangQ.fire" v-show="element === 'fire'"></common-table-fire>
            <common-table-thunder :data="shatangQ.thunder" v-show="element === 'thunder'"></common-table-thunder>
            <common-table-ice :data="shatangQ.ice" v-show="element === 'ice'"></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import shatangA from "./shatang_a";
import shatangE from "./shatang_e";
import shatangQ from "./shatang_q";

import CommonTableWind from "../../../CommonTableWind";
import CommonTableWater from "../../../CommonTableWater";
import CommonTableThunder from "../../../CommonTableThunder";
import CommonTableIce from "../../../CommonTableIce";
import CommonTableFire from "../../../CommonTableFire";

export default {
    name: "Shatang.calculator",
    components: {
        CommonTableWind,
        CommonTableWater,
        CommonTableThunder,
        CommonTableIce,
        CommonTableFire,
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
            element: "water",
        }
    },
    computed: {
        shatangA() {
            return shatangA(this.artifacts, this.configObject, this.enemy);
        },

        shatangE() {
            return shatangE(this.artifacts, this.configObject, this.enemy);
        },

        shatangQ() {
            return shatangQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>