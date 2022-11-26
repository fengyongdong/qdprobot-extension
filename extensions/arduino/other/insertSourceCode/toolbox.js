/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_INSERTSOURCECODE_CATEGORY}" id="INSERTSOURCECODE_CATEGORY" colour="#5B5B5B" secondaryColour="#3C3C3C">
    <block type="insertSourceCode_commandBlock" id="insertSourceCode_commandBlock"></block>
    <block type="insertSourceCode_roundBlock" id="insertSourceCode_roundBlock"></block>
    <block type="insertSourceCode_booleanBlock" id="insertSourceCode_booleanBlock"></block>
    <block type="insertSourceCode_insertInIncludeArea" id="insertSourceCode_insertInIncludeArea"></block>
    <block type="insertSourceCode_insertInDefineArea" id="insertSourceCode_insertInDefineArea"></block>
</category>`;
}

exports = addToolbox;
