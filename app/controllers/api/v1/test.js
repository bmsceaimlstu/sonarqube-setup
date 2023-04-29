// const express = require('express'),
//   router = express.Router();

// router.get('/', (req, res) => {
//   const result = {};
//   result.empId = 'EMP-123';
//   result.empName = 'John';
//   res.status(200).json({ success: true, data: result });
// });

// module.exports = router;


<script>
	let area = function (length, breadth) {
		let a = length * breadth;
		console.log('Area of the rectangle is ' + a + ' square unit');
	}
	
	let perimeter = function (length, breadth) {
		let p = 2 * (length + breadth);
		console.log('Perimeter of the rectangle is ' + p + ' unit');
	}
	
	module.exports = {
		area,
		perimeter
	}
</script>
