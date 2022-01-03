import { commonConfigLevel } from "../../../common/utils";
import tn from "./tn.png";

export default {
    name: "wanguozhuhaitupu",
    chs: "万国诸海图谱",
    url: tn,
    star: 4,
    type: "book",
    config: () => commonConfigLevel("万国诸海图谱", 2),
    effect: "注能之卷：触发元素反应后的10秒内，获得8%/10%/12%/14%/16%元素伤害加成，该效果最多可叠加2层"
}