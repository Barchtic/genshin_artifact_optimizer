import { rowsAir, rowPhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";

const skill = charactersData["shenhe"].skill;

const rowsA = [
    { key: "dmg1", chs: "Normal Attack 1" },
    { key: "dmg2", chs: "Normal Attack 2" },
    { key: "dmg3", chs: "Normal Attack 3" },
    { key: "dmg41", chs: "Normal Attack 4-1" },
    { key: "dmg42", chs: "Normal Attack 4-2" },
    { key: "dmg5", chs: "Normal Attack 5" },
];

const rowsB = [
    { key: "bDmg1", chs: "Charge Attack" },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let a = [];
    for (let { key, chs } of rowsA) {
        const atk = attribute.attack();
        const base = atk * skill.a[key][c.skill1 - 1];
        a.push(rowPhysical(attribute, configObject, enemy, chs, "a", base));
    }

    let b = [];
    for (let { key, chs } of rowsB) {
        const atk = attribute.attack();
        const base = atk * skill.a[key][c.skill1 - 1];
        b.push(rowPhysical(attribute, configObject, enemy, chs, "b", base));
    }

    let air = [];
    for (let { key, chs } of rowsAir) {
        const atk = attribute.attack();
        const base = atk * skill.a[key][c.skill1 - 1];
        air.push(rowPhysical(attribute, configObject, enemy, chs, "air", base));
    }

    return {
        a, b, air,
    }
}