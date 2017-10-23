module.exports={
 factor : (input)=> {
	if(typeof(input) !== 'number'){
		return "invalid input, must be a number"
	}
	else if(typeof(input) == ''){
		return "undefined"
	}
	else if(input<=0){
		return "undefined"
	}
	else{
		return 0
	}
}

}