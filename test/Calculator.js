var assert = require('chai').assert;
var calc = require('../modules/calculator/index.js');

var testesMetodoInFixToPosFix = [
	{ inFix: "2+2", posFix: ["2", "2", "+"], expected: 4 },
	{ inFix: "2-1", posFix: ["2", "1", "-"], expected: 1 },
	{ inFix: "1-2", posFix: ["1", "2", "-"], expected: -1 },
	{ inFix: "2*3", posFix: ["2", "3", "*"], expected: 6 },
	{ inFix: "6/2", posFix: ["6", "2", "/"], expected: 3 },
	{ inFix: "1/2", posFix: ["1", "2", "/"], expected: 0.5 },
	{ inFix: "20+5*2", posFix: ["20", "5", "2", "*", "+"], expected: 30 },
	{ inFix: "(20+5)*2", posFix: ["20", "5", "+", "2", "*"], expected: 50 },
	{ inFix: "(20+5)*(10/5)", posFix: ["20", "5", "+", "10", "5", "/", "*"], expected: 50 },
	{ inFix: "((20+5)*(10/5))-25", posFix: ["20", "5", "+", "10", "5", "/", "*", "25", "-"], expected: 25 },
	{ inFix: "10%2", posFix: ["10", "2", "%"], expected: 0 },
	{ inFix: "11%2", posFix: ["11", "2", "%"], expected: 1 },
	{ inFix: "4%3", posFix: ["4", "3", "%"], expected: 1 },
	{ inFix: "(8+8)%(50/8)", posFix: ["8", "8", "+", "50", "8", "/", "%"], expected: 3.5 },
	{ inFix: "150-6*800+300", posFix: ["150", "6", "800", "*", "-", "300", "+"], expected: -4350 },
	{ inFix: "(150-6)*800+300", posFix: ["150", "6", "-", "800", "*", "300", "+"], expected: 115500 },
	{ inFix: "(150-6)*(800+300)", posFix: ["150", "6", "-", "800", "300", "+", "*"], expected: 158400 },	
	{ inFix: "12^2", posFix: ["12", "2", "^"], expected: 144 },
	{ inFix: "12^2+2", posFix: ["12", "2", "^", "2", "+"], expected: 146 },
	{ inFix: "12^2-2", posFix: ["12", "2", "^", "2", "-"], expected: 142 }
];

function _Fn(tstInFixToPosFix) {
	describe('Expression Test \"' + tstInFixToPosFix.inFix + '\"', function () {		
		it("The inFix expression \"" + tstInFixToPosFix.inFix + "\" must be converted to the postFix expression " + JSON.stringify(tstInFixToPosFix.posFix), function () {
			assert.equal(JSON.stringify(tstInFixToPosFix.posFix), JSON.stringify(calc.InfixToPosFix(tstInFixToPosFix.inFix)));
		});

		it("\"" + tstInFixToPosFix.inFix + "\" must be equal to " + tstInFixToPosFix.expected, function () {
			let result = calc.Calc(tstInFixToPosFix.inFix);			
			assert.equal(tstInFixToPosFix.expected, result);			
		});
	});
}

describe('Calculator', function () {
	do {
		_Fn(testesMetodoInFixToPosFix.shift());
	} while (testesMetodoInFixToPosFix.length > 0)
});