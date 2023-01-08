<form className="Configure-baseForm">
	<label className="Configure-baseFilterLabel">
		FILTER
		<input
			ref={props.refs.baseFilter}
			name="Base"
			placeholder=""
			id={"Configure-baseFilter"}
			className={"Configure-baseFilter"}
			value={baseFilterVal}
			onKeyUp={(e) =>
				FilterHandling.handleBaseFilterDownArrowToSelect(
					props.refs.baseSelect,
					e
				)
			}
			onChange={(e) => props.setBaseFilterVal(e.target.value)}
		/>
	</label>
	<select
		ref={props.refs.baseSelect}
		name="Base"
		size="4"
		className={"Configure-baseSelectBox"}
		value=baseSelectValue}
		onKeyUp={SelectHandling.baseSelectKeys}
		onKeyUp={(e)=>SelectHandling.baseSelectKeys(
		{
			selectState: {
				currencySelections: props.currencySelections,
				setCurrencySelections: props.setCurrencySelections,
				setBaseSelectValue: setBaseSelectValue,
				prevBaseIndex: prevBaseIndex,
				setPrevBaseIndex: setPrevBaseIndex,
			},
			refs: {
				baseSelect: Refs.baseSelect,
				baseFilter: Refs.baseFilter,
			},
			e
		}
		)}
		onChange={(e) => setBaseSelectValue(e.target.value)}
	>
		{
			/* using map, option with text of currency abbreviation will be created for all named currencies, filtered as appropriate by input/filter value */
			/* value which is set on select element will change via select onChange and be set to selected option, via state */
			Object.keys(props.currencyInfo.fullNames)
				.filter((curr) =>
					curr
						.toLowerCase()
						.startsWith(baseFilterVal.toLowerCase())
				)
				.map((curr, index) => (
					<option
						value={curr}
						key={index}
						className={"Configure-baseOption"}
						onClick={(e) => {
							SelectHandling.handleOptionClick_base(
							{
								baseState: { 
									currencySelections: props.currencySelections,
									setCurrencySelections: props.setCurrencySelections,
								},
								optionVal: curr,
								e: e,
							}
							)
						}}
					>
						{curr}: {props.currencyInfo.fullNames[curr]}
					</option>
				))
		}
	</select>
</form>