let users = [
	{
		id: 1,
		first_name: 'Lorilee',
		last_name: 'Adame',
		email: 'ladame0@guardian.co.uk',
		password: '12345678',
	},
	{
		id: 2,
		first_name: 'Gannon',
		last_name: 'Manwell',
		email: 'gmanwell1@naver.com',
		password: '12345678',
	},
	{
		id: 3,
		first_name: 'Christiana',
		last_name: 'Dowtry',
		email: 'cdowtry2@mapy.cz',
		password: '12345678',
	},
	{
		id: 4,
		first_name: 'Warden',
		last_name: 'Ansteys',
		email: 'wansteys3@yahoo.com',
		password: '12345678',
	},
	{
		id: 5,
		first_name: 'Claybourne',
		last_name: 'Barbosa',
		email: 'cbarbosa4@si.edu',
		password: '12345678',
	},
	{
		id: 6,
		first_name: 'Zita',
		last_name: 'Triner',
		email: 'ztriner5@youku.com',
		password: '12345678',
	},
	{
		id: 7,
		first_name: 'Orsa',
		last_name: 'Pilcher',
		email: 'opilcher6@surveymonkey.com',
		password: '12345678',
	},
	{
		id: 8,
		first_name: 'Lyn',
		last_name: 'Fockes',
		email: 'lfockes7@answers.com',
		password: '12345678',
	},
	{
		id: 9,
		first_name: 'Harv',
		last_name: 'Olifaunt',
		email: 'holifaunt8@jalbum.net',
		password: '12345678',
	},
	{
		id: 10,
		first_name: 'Nikita',
		last_name: 'Duncanson',
		email: 'nduncanson9@harvard.edu',
		password: '12345678',
	},
];

function getUserById(){
	return new Promise(function(resolve, reject){
		resolve(users)
	})
}