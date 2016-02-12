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

Template.operationsEgalite.helpers({
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

Template.operationsSimples.helpers({
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.whatWho.helpers({
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.ope.helpers({
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});

Template.operation.helpers({
	getOpe: function (ope) {
		return getOpe(ope);
    },
	getOp1: function (parentContext) {	
		return {val: this.val.op1, showCible: this.showCible };
    },
	getOp2: function (parentContext) {
		return {val: this.val.op2, showCible: this.showCible };
    },
    getVal: function (parentContext) { 	
		return getVal(this, parentContext);
    }
});
