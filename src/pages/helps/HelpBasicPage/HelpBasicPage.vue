<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>Help</el-breadcrumb-item>
            <el-breadcrumb-item>Basic Usage</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="18">
                <h1>1. Add Artifacts</h1>
                <p>Click the "Add Artifact" button, enter the details of the Artifact in the pop-up dialog box, you can manually add a single Artifact.</p>
                <img src="./img1.png">

                <p>Click the "Import JSON" button to import artifacts in batches from json. json is a format for representing data. For details, please refer to </p>
                <p> <a href="https://www.json.org/json-zh.html" target="_blank"> JSON official website </a></p>
                <p>The artifacts here will be the core data of the entire application, and the configuration and potential calculation depend on the artifacts imported</p>
                <p>At present, there are third-party automatic artifacts export tools compatible with this site：</p>
                <router-link to="/help/export-tools">Summary of export tools</router-link>

                <h1>2. Calculating</h1>
                <p>Select the "Character Calculator" panel.</p>
                <p>Select the character, character parameters (level, constellations, etc.), weapons, weapon parameters, targets, target parameters and other configurations in sequence, and finally click "Start Calculating" to calculate.</p>
                <img src="./img2.png">


                <h1>3. Presets</h1>
                <p>Click the "Save as preset" button to save all the currently set character, character parameters, weapons, weapon parameters, targets, target parameters and other parameters.</p>
                <p>Click the "Apply Preset" button to apply the saved preset to avoid re-entering parameters.</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "HelpBasicPage",
}
</script>