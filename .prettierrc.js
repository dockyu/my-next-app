module.exports = {
    printWidth: 100, //一行的字符數，如果超過會進行換行，默認爲80
    tabWidth: 4, // 一個 tab 代表幾個空格數，默認爲 2 個
    useTabs: false, //是否使用 tab 進行縮進，默認爲false，表示用空格進行縮減
    singleQuote: true, // 字符串是否使用單引號，默認爲 false，使用雙引號
    semi: true, // 行尾是否使用分號，默認爲true
    trailingComma: "none", // 是否使用尾逗號
    htmlWhitespaceSensitivity: "strict", // HTML空白敏感度
    bracketSpacing: true, // 對象大括號直接是否有空格，默認爲 true，效果：{ a: 1 }
    proseWrap: "never", // 換行設置
};