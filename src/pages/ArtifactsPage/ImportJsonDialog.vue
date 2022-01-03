<template>
    <el-dialog
        title="Import JSON"
        :visible.sync="visible"
        width="80%"
        :before-close="handleClose"
        @opened="handleOpened"
    >
        <h3 class="text">Big guys are welcome to develop third-party export tools, please refer to the json interface:<a target="_blank" href="https://wormtql.gitbook.io/mona-uranai/">Documentation</a></h3>
        <p></p>
        <el-input
            ref="field"
            type="textarea"
            placeholder="Input JSON"
            v-model="json"
            :rows="5"
        >
        </el-input>
        <p v-if="supportFileReader">*Support drag and drop files</p>

        <div class="buttons">
            <!-- <el-button
                type="primary"
                class="confirm-button"
                @click="handleOverwrite"
                style="margin-left: 20px"
            >
                覆盖导入<i class="el-icon-document-delete"></i>
            </el-button> -->
            <el-button
                type="primary"
                class="confirm-button"
                @click="handleAppend"
                style="margin-left: 20px"
            >
                Import<i class="el-icon-document-add"></i>
            </el-button>
            <el-button class="cancel-button" @click="handleClose">Cancel</el-button>
        </div>
    </el-dialog>
</template>

<script>
import checkImportJson from "@util/checkImportJson";

let supportFileReader = !!window.FileReader;

export default {
    name: "ImportJsonDialog",
    props: {
        visible: {
            type: Boolean,
        }
    },
    data: function () {
        return {
            json: "",
        }
    },
    created() {
        this.supportFileReader = supportFileReader;
    },
    methods: {
        handleOpened() {
            if (!supportFileReader) {
                return;
            }

            let ele = this.$refs.field.$el;
            ele.ondrop = e => {
                e.preventDefault();

                let df = e.dataTransfer;
                if (df.length === 0) {
                    return;
                }

                let file = df.files[0];
                let fileReader = new FileReader();

                fileReader.onload = (readResult) => {
                    this.json = readResult.target.result;
                };
                fileReader.readAsText(file);
            };
            // console.log(ele);
        },

        handleClose() {
            let ele = this.$refs.field.$el;
            ele.ondrop = null;

            this.$emit("close");
        },

        appendArtifacts() {
            let { artifacts, invalidCount } = checkImportJson(this.json);
            if (invalidCount > 0) {
                this.$message({
                    type: "warning",
                    message: `There are ${invalidCount} artifacts that cannot be identified, and these artifacts have been ignored`
                });
            }

            this.$store.commit("artifacts/appendArtifactsCheckHash", artifacts);
        },

        // setLoading() {
        //     const loading = this.$loading({
        //         lock: true,
        //         text: "处理中",
        //         spinner: "el-icon-loading",
        //         background: "rgba(0, 0, 0, 0.7)",
        //     });

        //     return loading;
        // },

        // append clicked
        handleAppend() {
            if (this.json) {
                // const loading = this.setLoading();
                this.appendArtifacts();
                // loading.close();
            }
            
            this.$emit("close");
        },

        // overwrite clicked
        async handleOverwrite() {
            if (this.json) {
                // this.setLoading();

                // this.$store.commit("artifacts/removeAllArtifacts");

                this.appendArtifacts();

                // loading.close();

                // this.$nextTick(() => {
                    
                // })

                
            }

            this.$emit("close");
        }
    }
}
</script>

<style scoped>
.buttons {
    margin-top: 32px;
    display: flex;
    flex-direction: row-reverse;
}

.text {
    margin: 0;
}
</style>