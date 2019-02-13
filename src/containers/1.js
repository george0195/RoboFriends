render() {
	const filteredRobots = this.state.robots.filter(robots =>{
	  return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})

	if(this.state.robots.length === 0) {
		return <h1>Loading</h1>
	} else {
		return (
		<div className= 'tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
   }
}

export default App;