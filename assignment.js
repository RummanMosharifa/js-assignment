
// ana to vori conversion

function anaToVori(ana){
	return ana*0.0625;
}
console.log(anaToVori(15));

var friends = ('akashi','banana', 'zohirul', 'omar');
function offFriend(friends){
	for(const name of friends){
		if(name.length % 2 != 0){
			return name;
		}
	}
}

console.log(offFriend(friends));