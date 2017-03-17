function trim(str){
	if(str){
		return str.replace(/(^\s*)|(\s*$)/g,'');
	}
}
function isFunc(name){
	try {  
        if (typeof (eval(name)) == "function") {  
            return true;  
        }  
    } catch (e) { }  
    return false;  
}
function r(index){
	try{
		if(row){
			return trim(row[index]);
		}
	}catch(e){}
}
function rs(index){
	try{
		if(row){
			var value = trim(row[index]);
			if(!value||'null'==value||'\\N'==value||''==value){
				return 'null';
			}
			return "\'"+value+"\'";
		}
	}catch(e){}
}
function rn(index){
	try{
		if(row){
			var value = trim(row[index]);
			if(!value||'null'==value||'\\N'==value||''==value){
				return 'null';
			}
			return value;
		}
	}catch(e){}
}
function dbIndex(){
	return dbIndexStr;
}
function tbIndex(){
	return tbIndexStr;
}


