import badge from "@asset/badges/fire_slime.png";
import config from "./Max.tcfg";

export default {
    name: "max",
    chs: "Maximum Damage",
    description: [
        "Highest Damage Without Taking Into Account Crit Rate"
    ],
    formula: "ATK * (1 + Elemental Damage Bonus / Physical Damage Bonus + Normal Attack/ Charge Attack / Elemental Skill/ Elemental Damage Bonus) * (1 + Crit Damage of Corresponding Skill)",
    tags: [
        "Maximum Damage",
    ],
    "for": "common",
    config,
    badge,
}