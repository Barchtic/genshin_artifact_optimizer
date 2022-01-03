import { commonConfigRate } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "modaoxulun",
    chs: "魔导绪论",
    url: tn,
    star: 3,
    type: "book",
    config: () => commonConfigRate("魔导绪论"),
    effect: "止水息雷：对处于水元素或雷元素影响下的敌人，造成的伤害提高12%/15%/18%/21%/24%。"
}