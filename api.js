import { Router } from 'express';

const router = new Router();

const data={
		users : [
			{
				avator: 'http://xxx.com',
				name: "Joe",
				age: 18
	 	    },
	 	    {
				avator: 'http://xxx.com',
				name: "John",
				age: 22
	   	 	}
		]
    }
// Write your restful api here:

router.get('/users', function(req, res) {
    res.json(data.users.length);	
});
router.get('/users/:id', function(req, res) {
	let id =parseInt(req.params.id);
	if(id <= data.users.length){
	    res.json(data.users[id-1]);
	}
	
	else 
		res.send('404');
 	
});


export default router;
