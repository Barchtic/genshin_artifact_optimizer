<template>
    <div>
        <!-- <common-table-transformative

        ></common-table-transformative> -->

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
                :data="fengyuanwanyeA.a"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="fengyuanwanyeA.b"
                class="mb-16"
            ></common-table-physical>
            <common-table-physical
                :data="fengyuanwanyeA.air"
                class="mb-16"
            ></common-table-physical>

            <p style="font-size: 14px">Pungling Attack: Midare Razan</p>
            <common-table-wind
                :data="fengyuanwanyeA.air2"
            ></common-table-wind>
        </div>

        <div v-show="showSkill === 'e'">
            <common-table-wind
                :data="fengyuanwanyeE.e"
            ></common-table-wind>
        </div>

        <div v-show="showSkill === 'q'">
            <common-table-wind
                :data="fengyuanwanyeQ.q"
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

            <common-table-water :data="fengyuanwanyeQ.water" v-show="element === 'water'"></common-table-water>
            <common-table-fire :data="fengyuanwanyeQ.fire" v-show="element === 'fire'"></common-table-fire>
            <common-table-thunder :data="fengyuanwanyeQ.thunder" v-show="element === 'thunder'"></common-table-thunder>
            <common-table-ice :data="fengyuanwanyeQ.ice" v-show="element === 'ice'"></common-table-ice>
        </div>
    </div>
</template>

<script>
import Enemy from "@asset/enemies/enemy";
import fengyuanwanyeA from "./fengyuanwanye_a";
import fengyuanwanyeE from "./fengyuanwanye_e";
import fengyuanwanyeQ from "./fengyuanwanye_q";

import CommonTablePhysical from "../../../CommonTablePhysical";
import CommonTableWind from "../../../CommonTableWind";
import CommonTableWater from "../../../CommonTableWater";
import CommonTableThunder from "../../../CommonTableThunder";
import CommonTableIce from "../../../CommonTableIce";
import CommonTableFire from "../../../CommonTableFire";
// import CommonTableTransformative from "../../../CommonTransformative";

export default {
    name: "Fengyuanwanye.calculator",
    components: {
        CommonTablePhysical,
        CommonTableWind,
        CommonTableWater,
        CommonTableThunder,
        CommonTableIce,
        CommonTableFire,
        // CommonTableTransformative,
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
        fengyuanwanyeA() {
            return fengyuanwanyeA(this.artifacts, this.configObject, this.enemy);
        },

        fengyuanwanyeE() {
            return fengyuanwanyeE(this.artifacts, this.configObject, this.enemy);
        },

        fengyuanwanyeQ() {
            return fengyuanwanyeQ(this.artifacts, this.configObject, this.enemy);
        }
    }
}
</script>