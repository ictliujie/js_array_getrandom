/**
 * 
 * @authors dive (liujiejunior@gmail.com)
 * @date    2013-11-18 09:30:06
 * @version $Id$
 */

var __getRandom = function(arr, getLen){	
	if(!arr || arr.length == 0) return [];
	var len = arr.length
		, index = 0
		, i = 0
		, tmpItem = null;
	if(len <= getLen) return arr;
	for(; i < getLen; i++){
		index = Math.floor(Math.random() * len--);
		tmpItem = arr[index];
		arr[index] = arr[len];
		arr[len] = tmpItem;			
	}
	return arr.slice(len);
};

!("getRandom" in Array.prototype) && (Array.prototype.getRandom = function(getLen){	
	return __getRandom.call(null, this, getLen);
})