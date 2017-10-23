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
	else{
		if((3%input==0) && (5%input==0) && (7%input==0)){
			return "plingplangplong";
		}
		else if((3%input==0)&&(5%input==0)){
			return "plingplang"
		}
		else if((3%input==0)&&(7%input==0)){
			return "plingplong"
		}
		else if((5%input==0)&&(7%input==0)){
			return "plangplong"
		}
		else if(3%input==0){
			return "pling"
		}
		else if(5%input == 0){
			return "plang"
		}
		else if (7%input == 0) {
			return "plong";
		}
		else if((3%input!==0)||(5%input!==0)||(7%input!==0)){
			return input
		}
	}
}
export default rainDrop;

