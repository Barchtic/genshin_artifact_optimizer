import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "sifengyuandian",
    chs: "四风原典",
    url: tn,
    star: 5,
    type: "book",
    config: () => commonConfigLevel("四风原典", 4),
    effect: "无边际的眷顾：移动速度提高10%；在场上每4秒获得8%/10%/12%/14%/16%元素伤害加成。该效果最多叠加4层，角色倒下或离场后清空。"
}