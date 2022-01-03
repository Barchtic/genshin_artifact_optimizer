import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "zongshichangjian",
    chs: "宗室长剑",
    url: tn,
    star: 4,
    type: "sword",
    config: () => commonConfigLevel("宗室长剑", 5),
    effect: "专注：攻击造成伤害时，暴击率提升8%/10%/12%/14%/16%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。",
}