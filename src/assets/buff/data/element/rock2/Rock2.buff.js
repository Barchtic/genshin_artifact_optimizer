import badge from "@asset/badges/geo.png";

export default {
    name: "rock2",
    chs: "Geo Elemental Resonance - Enduring Rock",
    badge,
    genre: "resonance",
    getStandardConfig() {
        return {
            type: "bonus",
            value: 0.15,
        }
    }
}