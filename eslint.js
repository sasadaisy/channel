module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "jquery": true
    },
    "extends": [// "eslint:recommended",
        // "eslint-config-airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 5
    }, 
	/*
    * 全局变量，可以自行增加
    * */
    "globals": {
        "locale": true,
        "moment": true,
        "ucd": true,
        "iemp": true,
        "cloneWithoutFunction": true,
        "gisEvent": true,
        "Ext": true,
        "Son": true,
        "SONFramework": true
    },
    "rules": {
        "semi": "off",
        // 第二批整改
        "no-console": "off",
        // 构造器函数必须大写字母开头，非构造器函数必须小写字母开头
        "new-cap": 2,
        // var声明会被提升至该作用域的顶部，所以变量声明应该在作用域顶部，第三批整改
        "vars-on-top": 0,
        // 建议ES6语法才启用该规则，如果使用ES5建议屏蔽该规则。
        "camelcase": 2,
        // 给if、for、do、while、switch等语句的执行体加大括号{}
        "curly": 2,
        // 在使用长方法链时进行缩进。同时使用前面加点 . 强调这是方法调用而不是新语句。
        "dot-location": 2,
        // 在花括号前放一个空格
        "block-spacing": [2, "never"],
        // 规则15 控制一行的宽度，不要超过120个字符
        "max-len": [2, 120, {
            "comments": 120,
            "ignoreUrls": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        // 控制文件的长度，最好不要超过500行
        "max-lines": [1, {
            "max": 500,
            "skipBlankLines": true,
            "skipComments": true
        }],
        // 字符串使用单引号优于双引号，不整改
        "quotes": [0, "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        // 不要把方法的入参当做工作变量/临时变量，除非特别需要
        "no-param-reassign": [2, {"props": true}],
        // 方法的参数个数不宜过多，具体多少个？
        "max-params": [1, 10],
        // 有替代方案时禁止使用eval方法
        "no-eval": 2,
        // 禁止使用with() {}
        "no-with": 2,
        // 声明变量必须加上var关键字，第二批整改
        "block-scoped-var": 2,
        // 使用Javascript字面量而不是封装基本类
        "no-new-wrappers": 1,
        // 在函数内部使用”use strict”，第三批整改
        "strict": [0, "function"],
        // 判断相等时使用 === 和 !== ，而不是 == 和 !=，第二批整改
        "eqeqeq": 0,
        // 不要写复杂的表达式
        "no-unexpected-multiline": 2,
        // 在switch语句的每一个case、和default中都放置一条break语句，有意落空需要增加注释falls through
        "no-fallthrough": 2,
        // 对于if-else if（后续可能有多个else if）类型的条件判断，最后必须包含一个else分支。第三批整改
        "no-lonely-if": 0,
        // 统一采取4空格缩进
        "indent": [1, 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1,
            "outerIIFEBody": 1,
            "MemberExpression": 1,
            "FunctionDeclaration": {
                "body": 1,
                "parameters": 1
            },
            "CallExpression": {
                "arguments": 1
            }
        }],
        "id-length": [1, {
            "min": 4,
            "properties": "never",
            "exceptions": ["vm", "i", "j", "fdn", "dn", "ne", "$q", "_", "prs", "d3", "ol", "gis", "reg", "d", "e",
                "svg", "x", "y", "key", "obj", "id", "num", "cmd", "PRS", "me", "opt"]
        }],
		// 要求 switch 语句中有 default 分支
        "default-case": 2,
        "consistent-return": [2, {
            "treatUndefinedAsUnspecified": true
        }],
		// 注释应与其描述代码位置相邻，放在所注释代码上方或右方，并与代码采用同样缩进
        "line-comment-position": [1, {
            "position": "above",
            "applyDefaultPatterns": true
        }],
		// 注释和上面代码块要有空行，注释的//和注释内容要有一个空格
        "lines-around-comment": [2, {
            "beforeBlockComment": true,
            "afterBlockComment": false,
            "allowBlockStart": true,
            "allowBlockEnd": false,
            "allowObjectStart": true,
            "allowObjectEnd": false,
            "allowArrayStart": true,
            "allowArrayEnd": false,
			"allowClassStart": true,
			"allowClassEnd": false,
			"beforeLineComment": true,
			"afterLineComment": false
        }],
		// 强制对多行注释使用特定风格
		"multiline-comment-style": [2, "bare-block"],
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-else-return": 2,
        "no-eq-null": 2,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-implicit-globals": 2,
        "no-new": 2,
        "no-proto": 2,
        "no-return-assign": 2,
        "no-throw-literal": 2,
        "no-useless-escape": 2,
        "no-undef-init": 2,
        "no-undef": 2,
        "no-undefined": 2,
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "after-used"
        }],
        "no-array-constructor": 2,
        "no-bitwise": [2, {
            "int32Hint": true
        }],
        "no-multiple-empty-lines": [2, {
            "max": 2,
            "maxEOF": 1,
            "maxBOF": 0
        }],
		// 强制在代码块中使用一致的大括号风格
        "brace-style": [2, "1tbs", {
            "allowSingleLine": true
        }],
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "func-names": [2, "never"],
        "func-call-spacing": [2, "never"],
        "id-match": [2, "^[_|$|a-z|A-Z]", {
            "properties": true,
            "onlyDeclarations": true
        }],
        "key-spacing": [2, {
            "mode": "strict"
        }],
		// 在控制语句（if、while 等）的小括号前放一个空格。在函数调用及声明中，不在函数的参数列表前加空格
        "keyword-spacing": [2, {
            "overrides": {
                "as": {
                    "before": false,
                    "after": true
                },
                "async": {
                    "before": false,
                    "after": true
                },
                "await": {
                    "before": false,
                    "after": true
                },
                "break": {
                    "before": false,
                    "after": true
                },
                "case": {
                    "before": false,
                    "after": true
                },
                "catch": {
                    "before": true,
                    "after": true
                },
                "class": {
                    "before": false,
                    "after": true
                },
                "const": {
                    "before": false,
                    "after": true
                },
                "continue": {
                    "before": false,
                    "after": true
                },
                "debugger": {
                    "before": false,
                    "after": true
                },
                "default": {
                    "before": false,
                    "after": true
                },
                "delete": {
                    "before": false,
                    "after": true
                },
                "do": {
                    "before": false,
                    "after": true
                },
                "else": {
                    "before": true,
                    "after": true
                },
                "export": {
                    "before": false,
                    "after": true
                },
                "extends": {
                    "before": false,
                    "after": true
                },
                "finally": {
                    "before": false,
                    "after": true
                },
                "for": {
                    "before": false,
                    "after": true
                },
                "from": {
                    "before": true,
                    "after": true
                },
                "function": {
                    "before": false,
                    "after": true
                },
                "get": {
                    "before": false,
                    "after": true
                },
                "if": {
                    "before": false,
                    "after": true
                },
                "import": {
                    "before": false,
                    "after": true
                },
                "in": {
                    "before": false,
                    "after": true
                },
                "instanceof": {
                    "before": true,
                    "after": true
                },
                "let": {
                    "before": false,
                    "after": true
                },
                "new": {
                    "before": false,
                    "after": true
                },
                "of": {
                    "before": false,
                    "after": true
                },
                "return": {
                    "before": false,
                    "after": true
                },
                "set": {
                    "before": false,
                    "after": true
                },
                "static": {
                    "before": false,
                    "after": true
                },
                "super": {
                    "before": false,
                    "after": true
                },
                "switch": {
                    "before": false,
                    "after": true
                },
                "this": {
                    "before": false,
                    "after": true
                },
                "throw": {
                    "before": false,
                    "after": true
                },
                "try": {
                    "before": false,
                    "after": true
                },
                "typeof": {
                    "before": false,
                    "after": true
                },
                "var": {
                    "before": false,
                    "after": true
                },
                "void": {
                    "before": false,
                    "after": true
                },
                "while": {
                    "before": false,
                    "after": true
                },
                "with": {
                    "before": false,
                    "after": true
                }
            }
        }], 
        "no-new-object": 2,
        "no-tabs": 2,
        "no-trailing-spaces": [2, {
            "skipBlankLines": false
        }],
        "no-whitespace-before-property": 2,
        "object-curly-spacing": [0, //M: { Component }允许
            "never"],
        "one-var-declaration-per-line": [2, "initializations"],
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }], 
        "space-in-parens": [2, "never"], 
		// 在不同的概念间（关键字、变量、操作符等）增加空格，以便清楚区分概念
        "space-infix-ops": ["error", {
            "int32Hint": false
        }],
        "space-unary-ops": 2,
        "spaced-comment": [1, "always"],
        "wrap-regex": 2,
        "arrow-spacing": [2, {
            "before": true,
            "after": true
        }], 
		// 禁止除法操作符显式的出现在正则表达式开始的位置
        "no-div-regex": 2, 
		// 禁止扩展原生类型
        "no-extend-native": 2, 
		// 禁止数字字面量中使用前导和末尾小数点
        "no-floating-decimal": 2,  
		// 禁止在循环中出现 function 声明和表达式
        "no-loop-func": 1, 
		// 禁止对原生对象赋值
        "no-native-reassign": 2, 
		// 禁止使用 var 多次声明同一变量
        "no-redeclare": 2, 
		// 禁止自我赋值
        "no-self-assign": 2, 
		// 禁止自身比较
        "no-self-compare": 2, 
		//禁止使用 空格 和 tab 混合缩进
        "no-mixed-spaces-and-tabs": 2, 
		//禁止修改类声明的变量
        "no-class-assign": 2, 
		//禁止修改 const 声明的变量
        "no-const-assign": 2, 
		//禁止类成员中出现重复的名称
        "no-dupe-class-members": 2, 
		//禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-this-before-super": 2, 
		//禁止删除变量
        "no-delete-var": 2, 
		// 禁止 function 定义中出现重名参数
        "no-dupe-args": 2, 
		//禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2, 
		//禁止出现重复的 case 标签
        "no-duplicate-case": 2, 
		//禁止出现空语句块
        "no-empty": 2, 
		//禁止在正则表达式中使用空字符集
        "no-empty-character-class": 2,  
		//禁止对 function 声明重新赋值
        "no-func-assign": 2, 
		//要求使用 isNaN() 检查 NaN
        "use-isnan": 2, 
		//强制 typeof 表达式与有效的字符串进行比较
        "valid-typeof": 2,
        "arrow-body-style": 2,
        "space-before-function-paren": 0,
        "function-paren-newline": 1
    }
};
