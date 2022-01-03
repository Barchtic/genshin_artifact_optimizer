import { rowPhysical, rowRock, rowsAir } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";


const skill = charactersData["wulang"].skill;

const rowsA = [
    { key: "dmg1", chs: "Damage 1" },
    { key: "dmg2", chs: "Damage 2" },
    { key: "dmg3", chs: "Damage 3" },
    { key: "dmg4", chs: "Damage 4" },
];

const rowsB1 = [
    { key: "bDmg1", chs: "Charge Attack" },
]

const rowsB2 = [
    { key: "bDmg2", chs: "Fully Aimed Charge Attack" },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = [];
    for (let row of rowsA) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        a.push(rowPhysical(attribute, configObject, enemy, row.chs, "a", base));
    }

    let b1 = [];
    for (let row of rowsB1) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        b1.push(rowPhysical(attribute, configObject, enemy, row.chs, "b", base));
    }

    let b2 = [];
    for (let row of rowsB2) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        b2.push(rowRock(attribute, configObject, enemy, row.chs, "b", base));
    }

    let air = [];
    for (let row of rowsAir) {
        const atk = attribute.attack();
        const base = atk * skill.a[row.key][c.skill1 - 1];
        air.push(rowPhysical(attribute, configObject, enemy, row.chs, "air", base));
    }
    

    return {
        a, b1, b2, air,
    }
}