// LICENSE : MIT
'use strict';
const optionator = require('optionator');
module.exports = optionator({
    prepend: 'textlint [options] file.md [file.txt] [dir]',
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true,
    options: [
        {heading: 'Options'},
        {
            option: 'help',
            alias: 'h',
            type: 'Boolean',
            description: 'Show help.'
        },
        {
            option: 'config',
            alias: 'c',
            type: 'path::String',
            description: 'Use configuration from this file or sharable config.',
            example: '--config /path/to/.textlintrc'
        },
        {
            option: 'plugin',
            type: '[String]',
            description: 'Specify plugins',
            example: '--plugin plugin-name'
        },
        {
            option: 'rule',
            type: '[path::String]',
            description: 'Set rule package name'
        },
        {
            option: 'preset',
            type: '[path::String]',
            description: 'Set preset package name and load rules from preset package.'
        },
        {
            option: 'rulesdir',
            type: '[path::String]',
            description: 'Set rules from this directory and set all default rules to off.'
        },
        {
            option: 'format',
            alias: 'f',
            type: 'String',
            description: 'Use a specific output format.',
            example: '--format pretty-error'
        },
        {
            option: 'version',
            alias: 'v',
            type: 'Boolean',
            description: 'Outputs the version number.'
        },
        {
            option: 'color',
            type: 'Boolean',
            default: 'true',
            description: 'Disable color in piped output.'
        },
        {
            option: 'output-file',
            alias: 'o',
            type: 'path::String',
            description: 'Enable report to be written to a file.'
        },
        {
            option: 'quiet',
            type: 'Boolean',
            default: 'false',
            description: 'Report errors only.'
        },
        {
            heading: "Using stdin"
        },
        {
            option: 'stdin',
            type: 'Boolean',
            default: 'false',
            description: 'Lint text provided on <STDIN>.'
        },
        {
            option: "stdin-filename",
            type: "String",
            description: "Specify filename to process STDIN as",
            example: 'cat ./README.md | textlint --stdin --stdin-filename README.md'
        }
    ]
});
