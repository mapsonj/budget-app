// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) 
											|| expense.category.toLowerCase().includes(text.toLowerCase());

		// figure out if expenses.description has the text variable string inside of it
		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1
		} else if(sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1
		} else if(sortBy === 'category') {
			return a.category < b.category ? 1 : -1
		}
	});
};