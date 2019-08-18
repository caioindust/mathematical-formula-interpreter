var myCalculator = function () {
	var mCalc = {
		debug: false
	};

	var mUtil = {
		Priority: function (entrada, pilha) {
			var pontoEntrada = 0;
			var pontoPilha = 0;

			if (entrada === "^") {
				pontoEntrada = 1;
			} else if (entrada === "*" || entrada === "/" || entrada === "%") {
				pontoEntrada = 2;
			} else if (entrada === "+" || entrada === "-") {
				pontoEntrada = 1;
			} else if (entrada === "(") {
				pontoEntrada = 4;
			}

			if (pilha === "^") {
				pontoPilha = 1;
			} else if (pilha === "*" || pilha == "/" || entrada === "%") {
				pontoPilha = 2;
			} else if (pilha === "+" || pilha == "-") {
				pontoPilha = 1;
			} else if (pilha === "(") {
				pontoPilha = 0;
			}

			this.log(["Entrada", pontoEntrada, entrada], ["Pilha", pontoPilha, pilha], pontoEntrada > pontoPilha)

			return (pontoEntrada > pontoPilha);
		},
		log: function () {
			if (mCalc.debug) {
				var args = Array.prototype.slice.call(arguments);
				console.log(args);
			}
		}
	};

	mCalc.Exec = function (expression) {
		return eval(expression);
	};

	mCalc.Calc = function (expression) {
		var pilhaPoxfix = this.InfixToPosFix(expression);
		mUtil.log(pilhaPoxfix);
		var pilhaCalc = [];

		do {
			var p = pilhaPoxfix.shift();
			if (isNaN(p)) {
				var v2 = pilhaCalc.pop();
				var v1 = pilhaCalc.pop();

				mUtil.log(v1 + p + v2, pilhaCalc);

				if (p === '^') {
					p = Math.pow(v1,v2);
				} else {
					p = eval(v1 + p + v2);
				}
			}
			pilhaCalc.push(p);

			mUtil.log(p, pilhaCalc);
		}
		while (pilhaPoxfix.length > 0);

		return pilhaCalc[0];
	}

	mCalc.InfixToPosFix = function (expression) {
		expression = expression.replace(/\s/ig, "");

		var arrayInitial = expression.split("");
		var pilhaFinal = [];
		var pilhaOperadores = [];
		var leitura, leituraOpPilha;

		pilhaOperadores.push('(');

		var readNumber = "";

		do {
			leitura = arrayInitial.shift();

			if (!isNaN(leitura)) {
				readNumber = readNumber + '' + leitura;
			}
			else if (leitura === '(') {
				if (readNumber != "") {
					pilhaFinal.push(readNumber);
					readNumber = "";
				}
				pilhaOperadores.push('(');
			}
			else if (leitura === ')') {
				if (readNumber != "") {
					pilhaFinal.push(readNumber);
					readNumber = "";
				}
				do {
					leituraOpPilha = pilhaOperadores.pop();
					if (leituraOpPilha !== '(')
						pilhaFinal.push(leituraOpPilha);
				} while (leituraOpPilha !== '(');
			}
			else if (isNaN(leitura)) {
				if (readNumber != "") {
					pilhaFinal.push(readNumber);
					readNumber = "";
				}
				while (1) {
					leituraOpPilha = pilhaOperadores.pop();

					if (leituraOpPilha == undefined) {
						pilhaOperadores.push(leitura);
						break;
					}

					if (mUtil.Priority(leitura, leituraOpPilha)) {
						pilhaOperadores.push(leituraOpPilha);
						pilhaOperadores.push(leitura);
						break;
					}
					else {
						if (["(", ")"].indexOf(leituraOpPilha) < 0) {
							pilhaFinal.push(leituraOpPilha);
						}
					}
				}
			}

			if (arrayInitial.length <= 0) {
				if (readNumber != "") {
					pilhaFinal.push(readNumber);
				}

				do {
					leituraOpPilha = pilhaOperadores.pop();
					if (leituraOpPilha !== '(')
						pilhaFinal.push(leituraOpPilha);
				} while (pilhaOperadores.length > 0);
			}

			mUtil.log(leitura, pilhaFinal, pilhaOperadores);

		} while (arrayInitial.length > 0);

		return pilhaFinal;
	};

	return mCalc;
};

(function (root, factory) {
	if (typeof exports === "object") { module.exports = factory(); } // CommonJS
	else if (typeof define === "function" && define.amd) { define(factory); } // AMD 
	else { root.myCalculator = factory(); } // Browser 
})(this, myCalculator);
