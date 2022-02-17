import { getAttribute } from "@util/attribute";
import { charactersData } from "@asset/characters";
import {rowThunder} from "@asset/calculators/utils";


let skill = charactersData["bachongshenzi"].skill;

let rowsQ = [
    { key: "dmg1", chs: "Skill Damage" },
    { key: "dmg2", chs: "Tenk Thunderbolt Damage" },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs, configObject.artifactsConfig);

    let q = []
    for (let item of rowsQ) {
        let atk = attribute.attack()
        let base = atk * skill.q[item.key][c.skill3 - 1]
        q.push(rowThunder(attribute, configObject, enemy, item.chs, "q", base))
    }

    return {
        q
    }
}