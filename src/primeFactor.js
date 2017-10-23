const rainDrop = (input)=> {
	if(typeof(input) !== 'number'){
		return "undefined"
	}
	else if(input===" "){
		return 'undefined'
	}
	else if(input<=0){
		return "undefined"
	}
	else if((input%3==0) && (input%5==0) && (input%7==0)){
			return "plingplangplong";
		}
		else if(input%3==0 & input%5==0){
			return "plingplang"
		}
		else if((input%3 == 0) && (input%7==0)){
			return "plingplong"
		}
		else if((input%5==0)&&(input%7==0)){
			return "plangplong"
		}
		else if(input%3==0){
			return "pling"
		}
		else if(input%5 == 0){
			return "plang"
		}
		else if (input%7 == 0) {
			return "plong";
		}
		else if((input%3!==0)||(input%5!==0)||(input%7!==0)){
			return input
		}
	}
export default rainDrop;

