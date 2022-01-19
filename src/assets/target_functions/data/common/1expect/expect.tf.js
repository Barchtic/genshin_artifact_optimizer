import badge from "@asset/badges/fire_slime.png";
import config from "./Expect.tcfg";

export default {
    name: "expect",
    chs: "Average Damage",
    recommend: true,
    description: [
        "Average Damage for Specific Talent "
    ],
    formula: "ATK * (1 + Elemental Damage Bonus / Physical Damage Bonus + Normal Attack/ Charge Attack / Elemental Skill/ Elemental Damage Bonus) * (1 + Crit Rate of Corresponding Skill * Crit Damage of Corresponding Skill)",
    tags: [
        "Average",
    ],
    "for": "common",
    config,
    badge,
}