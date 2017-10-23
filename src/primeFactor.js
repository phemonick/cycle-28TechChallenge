module.exports={
 factor : (input)=> {
	if(typeof(input) !== 'number'){
		return "invalid input, must be a number"
	}
	else if(input === ''){
		return "undefined"
	}
	else if(input<=0){
		return "undefined"
	}
	else{
		if(3%input==0){
			return "pling"
		}
		else if(5%input == 0){
			return "plang"
		}
		else if (7%input == 0) {
			return "plong";
		}
	}
}

}