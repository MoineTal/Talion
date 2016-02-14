var getOpe = function (op) {
	if(op == 'ADD') { return "+"; }
	else if(op == 'REM') { return "-"; }
	else if(op == 'DIV') { return "/"; }
	else if(op == 'MUL') { return "x"; }
	else if(op == 'SUP') { return ">"; }
	else if(op == 'INF') { return "<"; }
	else if(op == 'EGA') { return "="; }
	else if(op == 'MAX') { return "max"; }
	else if(op == 'MIN') { return "min"; }
	else if(op == 'INV') { return "Invoque"; }
	else { return "§"; }
}

var getVal = function (val, parentContext) {
	return {val: val, showCible: parentContext.showCible };
}

Template.operationsValEgalite.helpers({
	getOpe: function (ope) {
		return getOpe(ope);
    },
	getOp1: function (parentContext) {
		return {val: this.op1, showCible: parentContext.showCible };
    },
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.operationsValSimples.helpers({
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.whatWhoVal.helpers({
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.opeVal.helpers({
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.operationVal.helpers({
	getOpe: function (ope) {
		console.log('deb getOpe');
		console.log(ope);
		console.log('fin getOpe');
		return getOpe(ope);
    },
	getOp1: function (parentContext) {
		console.log('deb getOp1');
		console.log(this);
		console.log(parentContext);
		console.log('fin getOp1');
		
		return {val: this.val.op1, showCible: this.showCible };
    },
	getOp2: function (parentContext) {
		console.log('deb getOp2');
		console.log(this);
		console.log(parentContext);
		console.log('fin getOp2');
		return {val: this.val.op2, showCible: this.showCible };
    },
    getVal: function (parentContext) { 	
		console.log('deb getVal');
		console.log(this);
		console.log(parentContext);
		console.log('fin getVal');
		return getVal(this, parentContext);
    }
});
